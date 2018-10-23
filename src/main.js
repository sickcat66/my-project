// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 自定义部分开始 */
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import './assets/theme/element-#0DA01E/index.css'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(ElementUI)

//开发模式开启mock.js
if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

/* 自定义部分结束 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
