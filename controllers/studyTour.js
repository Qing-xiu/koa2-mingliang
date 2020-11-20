import Sequelize from 'sequelize'
import { success } from './index.js'
import StudyTour from '../db/studyTour.js'

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

    const { count, rows } = await StudyTour.findAndCountAll(query)

    ctx.body = success({
        list: rows,
        pages: Math.ceil(count / pageSize)
     })
}

export const detail = async (ctx, next) => {
    const { id } = ctx.params

    const res = await StudyTour.findByPk(id)
    ctx.body = success(res)
}

export const create = async (ctx, next) => {
    const { body } = ctx.request
    const res = await StudyTour.create(body)
    ctx.body = success(res)
}

export const update = async (ctx, next) => {
    const { id } = ctx.params
    const { body } = ctx.request
    const res = await StudyTour.update(body, {
        where:  {
            id
        }
    })

    ctx.body = success(res)
}



