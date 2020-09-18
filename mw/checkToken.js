import { verify } from '../service/auth.js'

export default async (ctx, next) => {

    const { authorization } = ctx.headers
    console.log(authorization)
    const [, token] = authorization.split(' ')
    const payload = verify(token)
    console.log(payload)
    if (payload){
        await next()
    } else {
        ctx.body = {
            code: 400,
            msg: "Token 检查未通过"
        }
    }
}