import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer((req, res) => {
  let fileBase64 = ''
  console.log(req.method.toLowerCase())
  if (req.method.toLowerCase() === 'post') {
    req.on('data', (chunk) => {
      fileBase64 += chunk.toString()
    })
    req.on('end', () => {
      const buf = Buffer.from(JSON.parse(fileBase64).file, 'base64')
      fs.writeFileSync('test.png', buf)
    })
  }
  res.writeHead(200, {
    token: '12346u',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'pjw,content-type',
    'Access-Control-Allow-Methods': 'PUT'
  })
  res.end('hello')
})

server.listen(8080, () => {
  console.log('server is listening on http://localhost:8080')
})