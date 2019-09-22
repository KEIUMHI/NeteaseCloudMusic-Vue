import axios from 'axios'
// import { getCookies } from './auth'

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
})

// service.interceptors.request.use(config => {
//   // 在请求发送之前做点什么
//   const token = getCookies('usertrack')
//   if (token) {
//     config.headers['authorization'] = token
//   }
//   return config
// }), err => {
//   console.log(err)
// }

export default service