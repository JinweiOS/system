const koa = require('koa')
const app = new koa()
const router = require('koa-router')
const rIns = new router()
const cors = require('@koa/cors')

rIns.post('/test', (ctx) => {
  let str = ''
  ctx.req.on('data', (chunk) => {
    str += chunk.toString()
  })
  ctx.req.on('end', () => {
    const buf = Buffer.from(JSON.parse(str).file.split(',')[1], 'base64')
    console.log(buf)
  })
  ctx.body = {
    success: 'true'
  }
})

app.use(cors()).use(rIns.routes()).use(rIns.allowedMethods())

app.listen(8080, () => {
  console.log('d')
})