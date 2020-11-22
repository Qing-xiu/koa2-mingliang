import Sequelize from 'sequelize'
import md5 from 'md5'
import { success } from './index.js'
import User from '../db/user.js'

const { Op } = Sequelize

export const list = async (ctx, next) => {
    const { pageSize, pageNum, keyword } = ctx.query

    let query = {
        limit: pageSize * 1,
        offset: (pageNum - 1) * pageSize,
        where: {
            state: {
                [Op.ne]: 3
            }
        }
    }

    if (keyword) {
        query.where.name = {
            [Op.like]: `%${keyword}%`
        }
    }

    const { count, rows } = await User.findAndCountAll(query)

    ctx.body = success({
        list: rows,
        pages: Math.ceil(count / pageSize)
     })
}

export const detail = async (ctx, next) => {
    const { id } = ctx.params

    const user = await User.findByPk(id)
    ctx.body = success(user)
}

export const create = async (ctx, next) => {
    const { body } = ctx.request
    const { password, ...opts } = body
    const pwd = md5(body.password)

    const user = await User.create({
        password: pwd,
        ...opts
    })
    ctx.body = success(user)
}

export const update = async (ctx, next) => {
    const { id } = ctx.params
    const { body } = ctx.request
    const res = await User.update(body, {
        where:  {
            id
        }
    })


    ctx.body = success(res)
}
