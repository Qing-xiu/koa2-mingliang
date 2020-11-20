import KoaRouter from 'koa-router'
import { login } from '../controllers/login.js'
import house from './house.js'
import message from './message.js'
import user from './user.js'
import area from './area.js'
import studyTour from './studyTour.js'
import module from './module.js'


const router = new KoaRouter()

router.post('/login',login)
router.use(house.routes(), house.allowedMethods())
router.use(message.routes(), message.allowedMethods())
router.use(user.routes(), user.allowedMethods())
router.use(area.routes(), area.allowedMethods())
router.use(studyTour.routes(), studyTour.allowedMethods())
router.use(module.routes(), module.allowedMethods())

export default router
