export default {
    state: {
        //根据路由地址记录对应列表页面的请求参数
        paramMap: {

        }
    },
    mutations: {
        /**
         * 根据当前路由路径记录查询条件
         * @param state
         * @param payload
         */
        recordSearch(state, payload) {
            let { path, pageIndex, pageSize, searchParam = {}, information = {} } = payload;

            if(!searchParam && state.paramMap[path]){
                searchParam = state.paramMap[path].searchParam;
            }

            if(!information && state.paramMap[path]){
                information = state.paramMap[path].information;
            }

            state.paramMap[path] = {
                pageIndex,
                pageSize,
                searchParam,
                information
            }
        },

        /**
         * 根据路由路径清空对应的查询条件
         * @param state
         * @param payload
         */
        resetSingleSearch(state, payload) {
            const { path } = payload;
            delete state.paramMap[path];
        },

        /**
         * 点击菜单项时清空全部查询条件
         * @param state
         * @param payload
         */
        resetAllSearch(state, payload) {
            for(const key in state.paramMap){
                delete state.paramMap[key];
            }
        },
    }
}
