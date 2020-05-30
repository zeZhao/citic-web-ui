// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './vuex/index.js'

import citicPlug from './utils/citicPlugin';
import vueBroadcastPlugin from './utils/vueBroadcastPlugin';
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import './assets/css/init-style.css'
import './assets/scss/public.scss'
import axios from 'axios'
import { citicLogin } from './utils/cookie';


//项目初始化的方法开始
//设置axios的公共请求头，token等

Vue.config.productionTip = false
Vue.prototype.$http = axios


Vue.use(citicPlug);
Vue.use(citicLogin);
Vue.use(vueBroadcastPlugin);
Vue.use(iView);
//项目初始化结束

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
