import axios from 'axios'
import config from '../config';
import baseUtil from "./base.js"
import Fingerprint from './identityCheck/fingerprintGenerate';
import identityCheck from './identityCheck';
import { citicLoginOut } from './cookie'

const fingerprint = new Fingerprint();

/**
 * 包装请求头，添加公共头部信息
 * @param url
 * @param params
 * @param haveBody
 * @param header
 */
async function warpHeader(url, params, haveBody, header = {}) {

    header['citic-token'] = sessionStorage.getItem("citic-token");

    const fingerKey = fingerprint.generateHeaderKey(url, params, haveBody);
    header[fingerKey] = await fingerprint.get();

    return header;
}

/**
 * 进行统一的身份验证 错误code: "IDENT_1100001"
 * @param res
 */
function callIdentityCheck(res) {

    if (res.code === 'IDENT_1100001') {
        identityCheck({
            // 手动指定是验证登录信息错误类型的校验
            actionType: 'login',
            success: () => {
                // 校验成功,存在跳转地址则跳转到记录的页面
                let toPath = sessionStorage.getItem("toPath");

                if(toPath){
                    setTimeout(() => window.location.href = toPath, 2000);
                    return;
                }

                // 校验成功，没有记录的跳转页面，则刷新页面
                setTimeout(() => window.location.reload(), 2000);
            },
            cancel: () => {
                // 关闭弹窗不进行校验，则退出登录
                citicLoginOut()
            },
        });
    }

}

function judgeURL(url){
    if (url.indexOf('/webui') > -1) {
        return url;
    }
    if(/:\/\//.test(url)){
        return url;
    }else {
        return config.BASE_API_URL + url;
    }
}

const Http = {};
/**
 *
 * @param {url} url //地址  不用全链接时使用config中的配置地址  使用全连接则使用传入的全链接地址
 * @param {params} params //参数
 * @param {istoken} istoken  //是否需要验证token 默认是需要
 */
Http.doGet = async function (url, params, istoken = true) {
    if (!url) {
        console.error("请求地址为空")
        return false;
    }

    const headers = await warpHeader(url, params, false);
    const requestURL = judgeURL(url);

    return axios.get(requestURL, {
        headers: headers,
        params: params
    }).then(function (res) {
        // if(res.data.code == '6005'){
        //     location.href =  location.origin+"/citic-web-ui/console/index";
        //     //接口报500 返回error
        //     return res.data;
        // }
        // if(window.httpCodeMock == 1){
        //     res.data.code = '6005'
        // }
        if (!baseUtil.checkToken(res.data.code) && istoken) {
            baseUtil.doLogin();
        }

        callIdentityCheck(res.data);

        return res.data;
    }).catch(e => {
        console.log(url, e)
    })
};


Http.doPost = async function (url, params = {}) {

    const headers = await warpHeader(url, params, true, {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
    });
    const requestURL = judgeURL(url);

    return axios.post(requestURL, params,{
        headers: headers
    }).then( (res) => {
        if (res.data.code === 500) {

            //接口报500 返回error
            return res.data;
        }

        if (!baseUtil.checkToken(res.data.code)) {
            baseUtil.doLogin();
        }

        callIdentityCheck(res.data);

        return res.data;
    }).catch((error) => {
        console.error(error);
    });
};

Http.doPut = async function (url, params = {}) {

    const headers = await warpHeader(url, params, true, {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
    });
    const requestURL = judgeURL(url);

    return axios.put(requestURL, params,{
        headers: headers
    }).then( (res) => {

        if (!baseUtil.checkToken(res.data.code)) {
            baseUtil.doLogin();
        }

        callIdentityCheck(res.data);

        return res.data;
    }).catch((error) => {
        console.error(error);
    });
};

Http.doDelete = async function (url, params = {}) {

    const headers = await warpHeader(url, params, false);
    const requestURL = judgeURL(url);

    return axios.delete(requestURL, {
        headers: headers,
        params: params
    }).then( (res) => {

        if (!baseUtil.checkToken(res.data.code)) {
            baseUtil.doLogin();
        }

        callIdentityCheck(res.data);

        return res.data;
    }).catch((error) => {
        console.error(error);
    });
};

export default Http;
