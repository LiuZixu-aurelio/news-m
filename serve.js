const express = require('express')
const Mock = require('mockjs')
const app = express()

// 解决跨域问题
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, post')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-type')
  next()
})

const data = '123'
const data2 = 'ok'
const ob = {
  data: {
    token: 'a1s5d45a1sd32a4sd65a',
    refresh: 'adasdas45a64sd1'
  }
}
const data3 = JSON.stringify(ob)

const list1 = Mock.mock({
  data: {
    channels: [
      { id: 0, name: '首页' },
      { id: 1, name: '科技' },
      { id: 2, name: '军事' },
      { id: 4, name: '娱乐' },
      { id: 5, name: '财经' },
      { id: 6, name: '国际' }
    ]
  }
})

const list2 = Mock.mock({
  data: {
    page: 1,
    per_page: 10,
    results: [
      { 'art_id|1-10': 1, 'title|5-20': /[a-z]/, 'aut_name|5-20': /[a-z]/ },
      { 'art_id|1-10': 1, 'title|5-20': /[a-z]/, 'aut_name|5-20': /[a-z]/ },
      { 'art_id|1-10': 1, 'title|5-20': /[a-z]/, 'aut_name|5-20': /[a-z]/ },
      { 'art_id|1-10': 1, 'title|5-20': /[a-z]/, 'aut_name|5-20': /[a-z]/ },
      { 'art_id|1-10': 1, 'title|5-20': /[a-z]/, 'aut_name|5-20': /[a-z]/ },
      { 'art_id|1-10': 1, 'title|5-20': /[a-z]/, 'aut_name|5-20': /[a-z]/ }
    ]
  }
})
const data4 = JSON.stringify(list1)

const data5 = JSON.stringify(list2)

app.get('/', (req, res) => {
  res.end(data)
})

app.get('/app/v1_0/sms/codes/13999999999', (req, res) => {
  res.end(data2)
  console.log('验证码请求')
})

app.post('/app/v1_0/authorizations', (req, res) => {
  res.end(data3)
  console.log('登录请求post' + req)
})

app.get('/app/v1_0/authorizations', (req, res) => {
  res.end(data3)
  console.log('登录请求get')
})

app.get('/app/v1_0/sms/channels', (req, res) => {
  res.end(data4)
  console.log('列表请求')
})

app.get('/app/v1_1/articles', (req, res) => {
  res.end(data5)
  console.log('列表内容请求')
})
app.listen(3000)
