import Sequelize from 'sequelize'
import { success } from './index.js'
import Message from '../db/message.js'

const { Op } = Sequelize

export const list = async (ctx, next) => {
    const { pageSize, pageNum, keyword, type, startTime, endTime } = ctx.query

    let query = {
        limit: pageSize * 1,
        offset: (pageNum - 1) * pageSize,
        where: {
            type,
            state: {
                [Op.ne]: 3
            }
        }
    }

    if (startTime && endTime) {
        query.where.putawayTime = {
            [Op.between]: [startTime, endTime]
        }
    }

    if (keyword) {
        query.where.title = {
            [Op.like]: `%${keyword}%`
        }
    }

    const { count, rows } = await Message.findAndCountAll(query)

    ctx.body = success({
        list: rows,
        pages: Math.ceil(count / pageSize)
     })
}

export const detail = async (ctx, next) => {
    const { id } = ctx.params

    const res = await Message.findByPk(id)
    ctx.body = success(res)
}

export const create = async (ctx, next) => {
    const { body } = ctx.request
    const res = await Message.create(body)
    ctx.body = success(res)
}

export const update = async (ctx, next) => {
    const { id } = ctx.params
    const { body } = ctx.request
    const res = await Message.update(body, {
        where:  {
            id
        }
    })

    ctx.body = success(res)
}



