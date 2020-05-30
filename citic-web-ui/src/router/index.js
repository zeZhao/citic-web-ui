import Vue from 'vue'
import Router from 'vue-router'
import BaseRouter from './base.js'
import UrlUtil from 'utils/url.js'
import Http from 'utils/http.js'
import Console from './console.js'
import Main from './main.js'
import product from './product'
import common from './common'
import BaseUtil from 'utils/base.js'
import Api from 'utils/apiEnum.js'
import Temporary from '../Temporary'
import store from "../vuex/index.js"
import outer from "./outer.js"
import App from './app.js'
import News from './news.js'
import Solutions from './solution.js'
import blockChain from './blockChain.js'
import specialTopic from './specialTopic.js'
import security from './security.js'
import config from '../config'
import { setCookie, getCookie, delCookie } from '../utils/cookie.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',//'hash'
  routes: [


    {
      path: '/citic-web-ui',
      component: resolve => require(['../Temporary'], resolve),//懒加载,
      meta: {
        title: '中信云',//参数定义当前页面的标题
        isLogin: false,//定义是否需要登陆，ture需要登陆
        isNotIframe: true//为真时不可以被iFrame引用
      },
      children: [
        {
          path: 'demo',
          component: resolve => require(['views/demo/demo'], resolve),//懒加载,
          meta: {
            title: 'DEMO',//参数定义当前页面的标题
            isLogin: false,//定义是否需要登陆，ture需要登陆
          }
        },
        {
          path: 'customerService',
          component: resolve => require(['views/customerService'], resolve),//懒加载,
          meta: {
            title: '客服系统',//参数定义当前页面的标题
            isLogin: false,//定义是否需要登陆，ture需要登陆
          }
        },
        {
          path: 'certification',
          component: resolve => require(['views/certification'], resolve),//懒加载,
          meta: {
            title: '中信云-在线认证',//参数定义当前页面的标题
            isLogin: false,//定义是否需要登陆，ture需要登陆
          },
        },
        ...Console,
        ...Main,
        ...product,
        ...outer,
        ...App,
        ...common,
        ...News,
        ...Solutions,
        ...blockChain,
        ...specialTopic,
        ...security
      ]

    },

    ...BaseRouter,
  ],
})

/**
 * 全局路由钩子
 * @to 目标路由
 * @from 来的路由
 * @next 放行方法
 */
router.beforeEach(async (to, from, next) => {

  // 记录下一次跳转的地址
  sessionStorage.setItem("toPath", to.fullPath);

  //临时方法
  if (to.path.indexOf("citic-web-ui") == -1) {
    router.push({ path: "/citic-web-ui" + to.path, query: to.query })
    return
  }
  // if (to.path.indexOf("certification") !== -1) {
  //   next();
  //   return
  // }

  //isNotIframe 为真时不可以被iFrame引用
  // debugger;
  if (!to.meta.isNotIframe) {
    if (self != top) {
      top.location.href = BaseUtil.getLoginUrl()
    }
  }

  //全局设置页面标题的方法
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "中信云"
  }
  await BaseUtil.doInit()
  let web_temp = getCookie("web_temp")
  
  if(to.meta.isLogin){
    if(web_temp){
      sessionStorage.setItem("citic-token", web_temp)
      let tokenVerifyToken = await Http.doGet(Api.USERS_VERIFYTOKEN,{},false)
      if(tokenVerifyToken.data){
        await BaseUtil.getAllInfo(false)
        next();
      }else{
        BaseUtil.doLogin(location.origin + to.fullPath)
      }
    }else{
      BaseUtil.doLogin(location.origin + to.fullPath)
    }
  }
  if(web_temp){
    sessionStorage.setItem("citic-token", web_temp)
    await BaseUtil.getAllInfo(false)
  }else{
    sessionStorage.removeItem("citic-code")
    sessionStorage.removeItem("tenantInfo")
    sessionStorage.removeItem("citic-token")
  }
  next();

});

router.afterEach(() => {
  //初始化加载时页面滚动至顶部
  window.scrollTo(0, 0)
});


function hashAnalysis() {
  let origin = location.origin;
  location.href = origin + "/#" + location.pathname
}


export default router





