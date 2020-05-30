/**
 * cookie_login_key: 'cookie_dev_value'  开发和测试环境的登录信息
 * cookie_login_key: 'cookie_product_value'  生产环境的登录信息
 */

import config from '../config'
import store from "../vuex/index.js"
/**
 * 设置cookie
 * @param {*} c_name string 设置cookie的name
 * @param {*} value any 设置cookie的值
 * @param {*} expire number 设置过期时间
 */
export function setCookie(c_name, value, expire, domain=".c.citic") {
    var date = new Date()
    date.setSeconds(date.getSeconds() + expire)
    document.cookie = `${c_name}=${escape(value)};expires=${date.toGMTString()};domain=${domain};path=/`
}


/**
 * 读取cookie
 * @param {*} c_name string 读取cookie的name
 */
export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

export function delCookie(c_name) {
    setCookie(c_name, "", -1)
}

export function citicLogin() {
    // debugger;
    let { cookie_login_key, cookie_login_out_key } = config
    console.log(config)
    if (getCookie(cookie_login_out_key) == "true") {
        // debugger;
        sessionStorage.clear();
        sessionStorage.clear();
        
        delCookie(cookie_login_key);
        setCookie(cookie_login_out_key, "false", 3600000);
    }
}

export function citicLoginOut() {
    let { cookie_login_key, cookie_login_out_key } = config
    sessionStorage.clear();
    store.commit("setUserInfo", { userInfo: {} })
    store.commit("setTenantInfo", { userInfo: {}  })
    document.cookie = `web_temp=;path=/`
    location.href = "/ssologout";
}

