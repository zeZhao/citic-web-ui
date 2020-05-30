export default{
    state:{
        PAGE_LIST:["PAGE1","PAGE2"],//路由级权限列表
        PAGE1:{
            "page0": [{"btn_aaa":2}],
        }//页面功能权限列表      当前页面 + 特定控件 = 后台功能模块+ 可执行的行为

    },
    mutations: {
        /**
         * @method:权限设置
         * @state 当前state
         * @payload 参数
         */
        setJurisdiction1(state,payload) {
          state.PAGE1 = payload.jurisdiction1
        },
        setJurisdiction2(state,payload) {
          state.jurisdiction2 = payload.jurisdiction2
        },
        setJurisdiction3(state,payload) {
          state.jurisdiction3 = payload.jurisdiction3
        }

    },
    actions:{
        setJurisdiction(context,payload){
            console.log(payload)
            context.commit("setJurisdiction1",{jurisdiction1 : payload.jurisdiction1});
            context.commit("setJurisdiction2",{jurisdiction2 : payload.jurisdiction2});
            context.commit("setJurisdiction3",{jurisdiction3 : payload.jurisdiction3});
        }

    }
}
