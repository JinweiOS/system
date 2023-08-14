const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request received')
  // console.log(a)
  res.statusCode = 500
  // res.setHeader('Location', 'https://www.google.com')
  res.end('hello')
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})