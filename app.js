const Koa = require('koa')
const app = new Koa()

let leak = []

class LeakClass {
    constructor() {
        this.name = Math.random()
        this.title = 'hello world'
    }
}

app.use(async ctx => {
    ctx.body = 'Hello World'
    for (let i = 0; i < 1000; i++) {
        leak.push(new LeakClass())
    }
})

app.listen(3000)
