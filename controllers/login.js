
import md5 from 'md5'
import User from '../db/user.js'
import { sign } from '../service/auth.js'
import { success, fail } from './index.js'

export const login = async (ctx, next) => {
    const { mobile, password } = ctx.request.body

    const user = await User.findOne({
        where: {
            mobile
        }
    })

    console.log(user)
    if (!user) {
        ctx.body = fail(-100, '查无此用户')
        return
    }

    if (md5(password) !== user.password) {
        ctx.body = fail(-101, '密码有误')
        return
    }

    const token = sign({
        id: user.id
    })

    ctx.body = success({
        token
    })

}