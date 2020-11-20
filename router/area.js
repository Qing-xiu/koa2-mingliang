import Router from 'koa-router'
import { getList } from '../controllers/area.js'

const router = new Router({
    prefix: '/area'
})

router.get('/', getList)

export default router