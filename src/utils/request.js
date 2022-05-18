// 请求模块
import axios from 'axios'

const request = axios.create({
  /* baseURL: 'http://ttapi.research.itcast.cn/'// 基础路径 */
  baseURL: 'http://localhost:3000/'
})

export default request
