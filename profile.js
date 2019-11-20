const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const app = new Koa()

/**
 * @description 优化前
 */
// app.use(async ctx => {
//     ctx.body = fs.readFileSync(path.resolve(__dirname, './taobao.html'), 'utf8')
// })

/**
 * @description 优化后
 */
// 对于文件读取等静态的变量，应该放在请求 callback 之外
const stream = fs.createReadStream(path.resolve(__dirname, './taobao.html'))
app.use(async ctx => {
    ctx.status = 200
    ctx.set('Content-Type', 'text/html')
    ctx.body = stream
})

app.listen(3000)
