import axios from 'axios'

const gaodeHttp = axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  timeout: 1000,
})

export {
  gaodeHttp
}