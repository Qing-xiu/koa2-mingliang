import Router from 'koa-router'
import { detail, list, create, update, } from '../controllers/user.js'

const router = new Router({
    prefix: '/user'
})

router.get('/', list)
router.post('/', create)
router.get('/:id', detail)
router.put('/:id', update)

export default router