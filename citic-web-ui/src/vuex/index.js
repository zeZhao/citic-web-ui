import Vue from 'vue'
import vuex from 'vuex'
import userJurisdiction from './modules/user-jurisdiction'
import userInfo from './modules/user-info'
import uiData from './modules/ui-data'
import searchParam from './modules/searchParam'
import certType from './modules/cert-type'
import instanceForm from './modules/instance-form'
Vue.use(vuex);

export default new vuex.Store({
    modules: {
        userJurisdiction: userJurisdiction,
        userInfo: userInfo,
        uiData: uiData,
        searchParam,
        certType,  //在线认证类型
        instanceForm
    }
})
