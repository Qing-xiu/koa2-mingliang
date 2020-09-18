import Router from 'koa-router'
import { getDetail, getList, create, update, } from '../controllers/user.js'

const router = new Router({
    prefix: '/user'
})

router.get('/', getList)
router.post('/', create)
router.get('/:id', getDetail)
router.put('/:id', update)

export default router