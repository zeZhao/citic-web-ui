//网站基础功能
import Vue from 'vue'
import Http from './http'
import Api from './apiEnum'
import Config from '../config/index'
import ErrorCode from './errorCode'
import store from "../vuex/index.js"
import router from '../router/index.js'
import urlUtil from './url.js'
import { delCookie, setCookie } from './cookie'

let base = new Object();
//网站初始化方法
base.doInit = async () => {
    let code = urlUtil.getParame("code");
    if (code) {
        
        //session同步到老的webui
        Http.doGet(location.origin + "/views/console/console.do?code=" + code).then(res => {
            console.log("session同步");
        });
        //code换token
        let tonkenResponse = await Http.doGet(Api.GET_TOKEN_URL, { code: code })
        // debugger;
        if (tonkenResponse.code == 0) {
            sessionStorage.setItem("citic-code", code);
            sessionStorage.setItem("citic-token", tonkenResponse.token.accessToken)
            document.cookie = `web_temp=${tonkenResponse.token.accessToken};path=/`
            await store.commit("setToken", { citicToken: tonkenResponse.token.accessToken })
        }

       


    }
    // let userInfoResp = await base.getAllInfo(false);
   
}

/**
 * 获得登录链接
 */
base.getLoginUrl = (redirect_url = location.href) => {
    redirect_url = urlUtil.formatParame(redirect_url)
    return Config.LOGIN_URL.replace("REDIRECT_URL", window.escape(redirect_url));
}

/**
 * 登陆方法
 * @param {回调的URL,默认当前页 } redirect_url
 */

base.doLogin = (redirect_url = location.href) => {
    console.log('111', Config)
    console.log('redirect_url', redirect_url)
    redirect_url = urlUtil.formatParame(redirect_url)
    let callbackurl = Config.LOGIN_URL.replace("REDIRECT_URL", window.escape(redirect_url));
    location.href = callbackurl;
}
/**
 * 获取用户信息
 * @type 如果token失效是否需要取登陆  默认是需要
 */
base.getUserInfo = async (type = true) => {
    let res = await Http.doGet(Api.USER_DETAIL, {}, type)
    if (res.user) {
        await store.commit("setUserInfo", { userInfo: res.user })
        //TODO 运维需求硬编码  整体迁移后要做处理
        let roleNmuber = Number(res.user.role) & 8
        if (roleNmuber == 8) {
            location.href = location.origin + "/operationportal"
        }
        return res;
    } else {
        return "error"
    }
}
//获得租户信息
base.getTenantsDetai = async (type = true) => {
    let res =await  Http.doGet(Api.TENANTS_DETAIL, {}, type)
    if(res.tenant){
        await store.commit("setTenantInfo", { tenantInfo: res.tenant })
        sessionStorage.setItem("tenantInfo", JSON.stringify(res.tenant))
        return res;
    }else{
        return "error"
    }
}
//获得全部信息
//
base.getAllInfo = async (type = true) => {
    await base.getUserInfo(type)
    await base.getTenantsDetai(type)
    return
}


//验证TOKEN失效的方法  false 失效
base.checkToken = (code) => {
    // if (!code) return true;
    // if (ErrorCode.TOKEN_LNVALID.join(",").indexOf(code) > -1) {
    //     return false;
    // }

    for (const errorCode of ErrorCode.TOKEN_LNVALID) {
        if (errorCode == code) {
            return false;
        }
    }

    return true;
}

//新老链接跳转兼容方法
//注意此方法
base.goCompatible = (url) => {

    if (!url) return false;

    //获得当前根路径
    let baseUrl = location.origin + "/";
    if (url[0] == "/") {
        //相对路径以反斜线开头为新项目路径  执行 router push
        router.push(Config.UI_COMMON_PREFIX + url);
    } else if (url.indexOf("://") == -1) {
        //地址为相对路径  开头不能是反斜线  拼接根路径跳转
        location.href = baseUrl + url;
    } else {
        //全路径直接跳转
        location.href = url;
    }
}
/**
 * 判断老项目是否登陆
 */
base.oldIsLogin = () => {

}

/**
 * 百分点埋点
 */
base.bfd = () => {
    /*console.log("用户缓存信息11111",store);
    console.log("用户缓存信息22222",store.state.userInfo ,store.state.userInfo.TENANT_INFO.mainId)*/
    let count = 0;
    let user_id = "";
    let timer = setInterval(() => {
        if (count >= 4) {
            clearInterval(timer);

            count = 0
            addbfd(user_id)
        } else {
            if (store.state.userInfo.TENANT_INFO != undefined && store.state.userInfo.TENANT_INFO.mainId != undefined) {
                user_id = store.state.userInfo.TENANT_INFO.mainId;
                clearInterval(timer);
                count = 0;
                addbfd(user_id)
            }
            count++;
        }

    }, 1000)


    function addbfd(user_id) {
        // console.log('user_id',user_id)
        window["_BFD"] = window["_BFD"] || {};
        _BFD.client_id = ""; //客户id，由百分点的部署⼈员提供
        _BFD.BFD_USER = {
            "user_id": user_id//⽤户id，如果未登录就为0或空字符串
        };
        _BFD.script = document.createElement("script");
        _BFD.script.type = "text/javascript";
        _BFD.script.async = true;
        _BFD.script.charset = "utf-8";
        _BFD.script.src = ("https://bfd-probe.c.citic/service/zxy_H5.js"); //js代码路径，由百分点的部署⼈员提供
        document.getElementsByTagName("head")[0].appendChild(_BFD.script);
    }
}

base.goIndex = function () {
    router.push("/citic-web-ui/")
}
base.goConsole = function () {
    router.push("/citic-web-ui/console/index")
}
//数字转成金额 例 888888.88 => 888,888.88
base.formatCurrency = function (num) {
    if (num) {
        num = num.toString().replace(/\$|\,/g, '');
        if ('' == num || isNaN(num)) { return 'Not a Number ! '; }
        var sign = num.indexOf("-") > 0 ? '-' : '';
        var cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : '';
        cents = cents.length > 1 ? cents : '';

        num = num.indexOf(".") > 0 ? num.substring(0, (num.indexOf("."))) : num;

        if ('' == cents) { if (num.length > 1 && '0' == num.substr(0, 1)) { return 'Not a Number ! '; } }
        else { if (num.length > 1 && '0' == num.substr(0, 1)) { return 'Not a Number ! '; } }
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
        return (sign + num + cents);
    }
}

base.getLastMonth = function () {
    var now = new Date();
    var year = now.getFullYear();//getYear()+1900=getFullYear()
    var month = now.getMonth() + 1;//0-11表示1-12月
    var day = now.getDate();
    var dateObj = {};
    if (parseInt(month) < 10) {
        month = "0" + month;
    }
    if (parseInt(day) < 10) {
        day = "0" + day;
    }

    dateObj.now = year + '-' + month + '-' + day;

    if (parseInt(month) == 1) {//如果是1月份，则取上一年的12月份
        dateObj.last = (parseInt(year) - 1) + '-12-' + day;
        return dateObj;
    }

    var preSize = new Date(year, parseInt(month) - 1, 0).getDate();//上月总天数
    if (preSize < parseInt(day)) {//上月总天数<本月日期，比如3月的30日，在2月中没有30
        dateObj.last = year + '-' + month + '-01';
        return dateObj;
    }

    if (parseInt(month) <= 10) {
        dateObj.last = year + '-0' + (parseInt(month) - 1) + '-' + day;
        return dateObj;
    } else {
        dateObj.last = year + '-' + (parseInt(month) - 1) + '-' + day;
        return dateObj;
    }
}
/**
 * 等待毫秒
 */
base.waiting = function (time) {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            reject()
        }, time)
    })
}



export let getLastMonth = base.getLastMonth
export default base
