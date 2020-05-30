/**
 * 在线认证类型
 */
export default {
    state: {
        CERT_TYPE: ''
    },
    mutations: {
        setCertType(state, payload) {
            state.CERT_TYPE = payload.certType;
        }
    }
}
