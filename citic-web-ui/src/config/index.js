//本地环境
const LOCAL = ['127.0.0.1', 'localhost'];
//正式环境
const PROD = ['www.c.citic'];
//TEST环境
const TEST = ['taurus.citiccloud-test.pcloud.citic.com', 'test123.c.citic']
//DEV
const DEV = ['taurus.citiccloud-dev.pcloud.citic.com', 'dev123.c.citic'];
//云效
const YX_GEBX = ['citic-web-ui.gebingxiu.devops.c.citic', 'gebingxiu.c.citic'];
const USER_NAME = process.env.username;
const host = window.location.hostname;
/**
 * 项目默认的公共配置（不分环境）
 */
const defaultConfig = {
    init: function () {

    },
    UI_COMMON_PREFIX: "/citic-web-ui",
    cookie_login_key: 'cookie_dev_value',
    cookie_login_out_key:"cookie_dev_login_out_key"

};
/**
 * TEST环境
 */
const testConfig = {
    BASE_API_URL: 'https://test123.c.citic/leo/',
    LOGIN_URL: 'https://uuidptest.c.citic/idp/sso.do?client_id=20170830061623854-E5A8-B2FABDC35&response_type=code&redirect_uri=REDIRECT_URL&state=1231&auth_type=null',
    OLD_WEB_UI: 'https://test123.c.citic/',
    SERVER_MGT_URL: 'https://test123.c.citic/service/newservermgt/',
    FILE_SERVER_URL: "https://test123.c.citic/fileupload/file-server-mgt/fileServer/"
};
/**
 * DEV环境
 */
const devConfig = {
    BASE_API_URL: 'https://dev123.c.citic/leo/',
    LOGIN_URL: 'https://uuidptest.c.citic/idp/sso.do?client_id=20170830061623854-E5A8-B2FABDC35&response_type=code&redirect_uri=REDIRECT_URL&state=1231&auth_type=null',
    OLD_WEB_UI: 'https://dev123.c.citic/',
    SERVER_MGT_URL: 'https://dev123.c.citic/service/newservermgt/',
    FILE_SERVER_URL: "https://dev123.c.citic/fileupload/file-server-mgt/fileServer/"
};
/**
 * 云效环境
 */
const yunxiaoConfig = {
    BASE_API_URL: 'https://' + host + '/leo/',
    LOGIN_URL: 'https://uuidptest.c.citic/idp/sso.do?client_id=20170830061623854-E5A8-B2FABDC35&response_type=code&redirect_uri=REDIRECT_URL&state=1231&auth_type=null',
    OLD_WEB_UI: 'https://' + host + '/',
    SERVER_MGT_URL: 'https://' + host + '/service/newservermgt/',
    FILE_SERVER_URL: "https://test123.c.citic/fileupload/file-server-mgt/fileServer/"
};
/**
 * 云效 葛炳秀环境
 * @type {{BASE_API_URL: string, LOGIN_URL: string, OLD_WEB_UI: string, SERVER_MGT_URL: string, FILE_SERVER_URL: string}}
 */
const yxGbxConfig = {
    BASE_API_URL: 'https://gebingxiu.c.citic/leo/',
    LOGIN_URL: 'https://uuidptest.c.citic/idp/sso.do?client_id=20170830061623854-E5A8-B2FABDC35&response_type=code&redirect_uri=REDIRECT_URL&state=1231&auth_type=null',
    OLD_WEB_UI: 'https://gebingxiu.c.citic/',
    SERVER_MGT_URL: 'https://gebingxiu.c.citic/service/newservermgt/',
    FILE_SERVER_URL: "https://test123.c.citic/fileupload/file-server-mgt/fileServer/"
}
/**
 * 本地环境
 */
const localConfig = {
    // BASE_API_URL:'https://test123.c.citic/leo/',
    // BASE_API_URL:'https://devops123.c.citic/leo/',
    // BASE_API_URL:'https://luxiao.c.citic/leo/',
    // BASE_API_URL:'http://10.76.54.24:8091/',
    // BASE_API_URL:'https://citiccloudtest.c.citic/leo/',
    // BASE_API_URL:' https://www.c.citic/leo/',
    //  BASE_API_URL:'https://test.c.citic/leo/',
    // BASE_API_URL:'https://reg.c.citic/leo/',
    // BASE_API_URL:'https://dev.c.citic/leo/',
    // BASE_API_URL:'https://dev.c.citic/leo/',
    BASE_API_URL:'https://test.c.citic/leo/',


    LOGIN_URL: 'https://uuidptest.c.citic/idp/sso.do?client_id=20170830061623854-E5A8-B2FABDC35&response_type=code&redirect_uri=REDIRECT_URL&state=1231&auth_type=null',
    OLD_WEB_UI: 'https://dev123.c.citic/',
    SERVER_MGT_URL: 'https://dev123.c.citic/service/newservermgt/',
    FILE_SERVER_URL: "https://test123.c.citic/fileupload/file-server-mgt/fileServer/",
    FEEDBACK_URL: 'https://dev123.c.citic/feedback/'
};

/**
 * 生产环境(千万别动)
 */
const prodConfig = {
    init: function () {
        window.console.log = function () {
            return;
        }
    },
    cookie_login_key: 'cookie_product_value',
    cookie_login_out_key:"cookie_product_login_out_key",
    BASE_API_URL: 'https://www.c.citic/leo/',
    LOGIN_URL: 'https://uuidp.c.citic/idp/sso.do?client_id=20171206123642565-5F74-4D1CDBEE5&response_type=code&redirect_uri=REDIRECT_URL&state=1231&auth_type=null',
    OLD_WEB_UI: 'https://www.c.citic/',
    SERVER_MGT_URL: 'https://www.c.citic/service/newservermgt/',
    FILE_SERVER_URL: "https://www.c.citic/fileupload/file-server-mgt/fileServer/"
};

export default (function () {

    let config = {};

    if (LOCAL.includes(host)) {
        console.warn("-----执行本地配置环境-----")
        config = localConfig;
    } else if (PROD.includes(host)) {
        console.warn("-----执行生产环境-----")
        config = prodConfig;
    } else if (TEST.includes(host)) {
        console.warn("-----执行TEST环境-----")
        config = testConfig;
    } else if (DEV.includes(host)) {
        console.warn("-----执行DEV环境-----")
        config = devConfig;
    } else if (YX_GEBX.includes(host)) {
        console.warn("-----执行云效葛炳秀环境-----")
        config = yxGbxConfig;
    } else {
        console.warn("-----执行云效环境-----")
        config = yunxiaoConfig;
        const hostArr = host.split(".");
        const api = hostArr.splice(1);
        config.BASE_API_URL = `https://${hostArr[0]}.c.citic/leo/`;
        // http://citic-portal.luxiao.devops.c.citic/swagger-ui.html
        // http://leo.luxiao.devops.c.citic/leo/swagger-ui.html
    }

    // console.warn("-----执行云效环境-----")
    // config = yunxiaoConfig;
    // const hostArr = host.split(".");
    // const api = hostArr.splice(1);
    // config.BASE_API_URL = `http://citic-portal.luxiao.devops.c.citic/`;

    // return Object.assign(defaultConfig, prodConfig)
    return Object.assign(defaultConfig, config)

})()


