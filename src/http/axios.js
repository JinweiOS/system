import axios from 'axios'

const gaodeHttp = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  timeout: 1000,
})

const MockHttp = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/3149923-0-default',
  timeout: 1000,
})

const selfServer = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'pjw': 'asf'
  }
})

export {
  gaodeHttp,
  MockHttp as http,
  selfServer
}