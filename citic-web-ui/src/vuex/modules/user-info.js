export default {
    state: {
        //用户信息
        USER_INFO: {

        },
        //租户信息
        TENANT_INFO: {

        },
        //TOKEN
        CITIC_TOKEN: "",
        //未确认消息通知数量
        UNCONFIRMED_MESSAGE_NUMBER: 0,
        //购物车数量
        SHOPPING_CART_NUMBER: 0
    },
    mutations: {
        //设置用户信息
        setUserInfo(state, payload) {
            state.USER_INFO = payload.userInfo;
        },
        //设置token
        setToken(state,payload){
            state.CITIC_TOKEN = payload.citicToken;
        },
        //设置租户信息
        setTenantInfo(state,payload){
            state.TENANT_INFO = payload.tenantInfo
        },
        //设置未确认消息数量
        setUnconfirmedMessageNmuber(state,payload){
            state.UNCONFIRMED_MESSAGE_NUMBER = payload.unconfirmedMessageNumber
        },
        //设置购物车数量
        setShoppingCartNumber(state,payload){
            state.SHOPPING_CART_NUMBER = payload.shoppingCartNumber
        }
    },

    actions: {
        resetShoppingCartNumber ({ commit }, {context}) {
            context.$get(`${context.$API_ENUM.SHOPPING_CART_PRODUCTS_COUNT}`).then(res => {
                if(res.success){
                    commit('setShoppingCartNumber', { shoppingCartNumber: res.data })
                }
            })
        }
    }
}
