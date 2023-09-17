import axios from 'axios'

const gaodeHttp = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  timeout: 1000,
})

const MockHttp = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 1000,
})

MockHttp.interceptors.request.use(
  (config) => {
    console.log(config)
    if (config.url !== '/login') {
      config.headers['token'] = localStorage.getItem('token')
    }
    return config
  }
)

const selfServer = axios.create({
  baseURL: 'http://127.0.0.1:3000',
})

export {
  gaodeHttp,
  MockHttp as http,
  selfServer
}