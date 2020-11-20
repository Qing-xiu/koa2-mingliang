import Router from 'koa-router'
import { detail, list, create, update, } from '../controllers/studyTour.js'

const router = new Router({
    prefix: '/studyTour'
})

router.get('/', list)
router.post('/', create)
router.get('/:id', detail)
router.put('/:id', update)

export default router