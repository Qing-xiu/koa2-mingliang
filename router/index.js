import KoaRouter from 'koa-router'
import { login } from '../controllers/login.js'
import house from './house.js'
import user from './user.js'

const router = new KoaRouter()

router.post('/login',login)
router.use(house.routes(), house.allowedMethods())
router.use(user.routes(), user.allowedMethods())

export default router
