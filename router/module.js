import Router from 'koa-router'
import { detail, list, create, update, } from '../controllers/module.js'

const router = new Router({
    prefix: '/module'
})

router.get('/', list)
router.post('/', create)
router.get('/:id', detail)
router.put('/:id', update)

export default router