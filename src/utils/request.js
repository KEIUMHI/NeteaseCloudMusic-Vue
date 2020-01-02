import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
})

service.interceptors.request.use(config => {
  // 在请求发送之前做点什么
  config.withCredentials = true
  return config
})

export default service