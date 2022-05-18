import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

// 加载vant核心组件库
import Vant from 'vant'

// 加载vant全局样式
import 'vant/lib/index.css'

// 加载动态设置rem基准值
import 'amfe-flexible'

// 注册使用vant组件库
createApp(App).use(store).use(router).use(Vant).mount('#app')
