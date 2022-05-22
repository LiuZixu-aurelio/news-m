/* 用户请求模块 */
import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: data
  })
}

/* 发送验证码 */
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}

/* 获取频道列表 */
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/sms/channels'
  })
}

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: params
  })
}
