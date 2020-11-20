import Koa from 'koa'
import KoaJwt from 'koa-jwt'
import KoaBody from 'koa-body'
import cors from 'koa2-cors'
import router from './router/index.js'
// import checkToke from './mw/checkToken.js'
import { test } from './db/index.js'

test()

const app = new Koa()

app.use(cors())
app.use(KoaBody())

app.use((ctx, next) => {
    return next().catch(err => {
        console.log(err)
        throw err
    })
})

app.use(KoaJwt({
    secret: 'huadong'
}).unless({
    path: [/^\/login/]
}))

// app.use(checkToke)

app.use(router.routes(), router.allowedMethods())



app.listen(3000)
