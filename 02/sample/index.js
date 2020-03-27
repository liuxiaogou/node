const Koa = require('koa')
const app = new Koa()
app.use(async (ctx,next)=>{
    const start = new Date().getTime()
    await next()
    const end = new Date().getTime()
    console.log(`${ctx.url}所用的时间为11${end-start}ms`)

   
}
)
app.use(async (ctx,next)=>{
        ctx.body =[
            {name:'tim'}
        ]
        await next()
    }
)
app.listen(3000)
