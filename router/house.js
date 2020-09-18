import Router from 'koa-router'
import { getDetail, getList, create, update, } from '../controllers/house.js'

const router = new Router({
    prefix: '/house'
})

router.get('/', getList)
router.post('/', create)
router.get('/:id', getDetail)
router.put('/:id', update)

export default router