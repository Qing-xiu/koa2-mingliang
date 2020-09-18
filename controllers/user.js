import md5 from 'md5'
import { success } from './index.js'
import User from '../db/user.js'

export const getList = async (ctx, next) => {
    const { count, rows } = await User.findAndCountAll()

    ctx.body = success({
        list: rows
     })
}

export const getDetail = async (ctx, next) => {
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
    const { password, ...opts } = body
    const pwd = md5(body.password)

    const user = await User.update({
        password: pwd,
        ...opts
    }, {
        where:  {
            id
        }
    })

    ctx.body = success(user)
}
