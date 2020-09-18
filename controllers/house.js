import { success } from './index.js'
import House from '../db/house.js'

export const getList = async (ctx, next) => {
    const { pageSize, pageNum } = ctx.query

    const { count, rows } = await House.findAndCountAll({
        limit: pageSize * 1,
        offset: pageNum * pageSize
    })

    ctx.body = success({
        list: rows,
        pages: Math.ceil(count / pageSize)
     })
}

export const getDetail = async (ctx, next) => {
    const { id } = ctx.params

    const house = await House.findByPk(id)
    ctx.body = success(house)
}

export const create = async (ctx, next) => {
    const { body } = ctx.request
    const house = await House.create(body)
    ctx.body = success(house)
}

export const update = async (ctx, next) => {
    const { id } = ctx.params
    const { body } = ctx.request
    const house = await House.update(body, {
        where:  {
            id
        }
    })

    ctx.body = success(house)
}



