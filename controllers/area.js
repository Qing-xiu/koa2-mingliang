import { success } from './index.js'
import Area from '../db/area.js'

export const getList = async (ctx, next) => {
    const { rows } = await Area.findAndCountAll()

    ctx.body = success(rows)
}