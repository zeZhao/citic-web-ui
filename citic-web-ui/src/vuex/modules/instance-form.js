/**
 * 在线认证类型
 */
export default {
    state: {
        industryFatherList: [],
        industrySonList: [],
        provinces: [],
        citys: [],
        authenticationType:''
    },
    mutations: {
        setIndustrFatherList(state, payload) {
            state.industryFatherList = payload;
        },
        setIndustrSonList(state, payload) {
            state.industrySonList = payload;
        },
        setProvinces(state, payload) {
            state.provinces = payload;
        },
        setCitys(state, payload) {
            state.citys = payload;
        },
        setAuthenticationType(state, payload) {
            state.authenticationType = payload;
        },
    }
}
