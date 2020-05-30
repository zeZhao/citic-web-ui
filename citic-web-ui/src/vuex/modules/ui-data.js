
import headMiddleData from "static/json/menuData/head-middle.js"
export default {
    state: {
        //头部中间菜单数据
        HEAD_MIDDLE_TYPE: 0,
        IS_SHOW_FIX_BAR: true

    },
    mutations: {
        setHeadMiddleData(state, payload){
            state.HEAD_MIDDLE_TYPE = payload.data
        }
    },
    getters: {
        /**
         * 根据type类型返回头部中间菜单数据
         */
        headMenuData: state => {
            switch (state.HEAD_MIDDLE_TYPE) {
                case 0:
                    return headMiddleData.main;
                    break;
                case 1:
                    return headMiddleData.center;
                    break;
                default:
                    return headMiddleData.main;
                    break;
            }
        }
    }

}
