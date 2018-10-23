// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* 自定义部分开始 */
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import './assets/theme/element-#0b0a3e/index.css'
Vue.use(ElementUI)
/* 自定义部分结束 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
