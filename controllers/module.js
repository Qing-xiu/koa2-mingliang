import Sequelize from 'sequelize'
import { success } from './index.js'
import Module from '../db/module.js'

const { Op } = Sequelize

export const list = async (ctx, next) => {
    const { pageSize, pageNum, type } = ctx.query

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

    const { count, rows } = await Module.findAndCountAll(query)

    ctx.body = success({
        list: rows,
        pages: Math.ceil(count / pageSize)
     })
}

export const detail = async (ctx, next) => {
    const { id } = ctx.params

    const res = await Module.findByPk(id)
    ctx.body = success(res)
}

export const create = async (ctx, next) => {
    const { body } = ctx.request
    const res = await Module.create(body)
    ctx.body = success(res)
}

export const update = async (ctx, next) => {
    const { id } = ctx.params
    const { body } = ctx.request
    const res = await Module.update(body, {
        where:  {
            id
        }
    })

    ctx.body = success(res)
}



