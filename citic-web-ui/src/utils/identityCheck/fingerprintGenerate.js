import Fingerprint2 from 'fingerprintjs2';
import md5 from '../md5';

const options = {
    excludes: {
        touchSupport: true,
        userAgent: true,
        adBlock: true,
        webdriver: true,
        colorDepth: true,
        deviceMemory: true,
        hardwareConcurrency: true,
        fontsFlash: true,
        enumerateDevices: true,
        webgl: true,
        plugins: true,
        doNotTrack: true,
        cpuClass: true,
        openDatabase: true,
        addBehavior: true,
        indexedDb: true,
        availableScreenResolution: true,
        fonts: true,
    }
};

export default class Fingerprint {
    __fingerprint = '';
    __md5 = new md5();

    /**
     * 使用插件生成指纹信息
     * @returns {Promise<T | never>}
     */
    generater() {
        return Fingerprint2.getPromise(options).then((components) => {
            const values = components.map(function (component) {
                return component.value
            });
            return Fingerprint2.x64hash128(values.join(''), 31)
        })
    }

    /**
     * 创建指纹
     * @returns {Promise<T|never | never>}
     */
    create() {
        if (window.requestIdleCallback) {

            return new Promise(resolve => {
                requestIdleCallback(() => resolve());
            }).then(() => {
                return this.generater();
            })
        } else {
            return new Promise(resolve => {
                setTimeout(() => resolve(), 500);
            }).then(() => {
                return this.generater();
            })
        }
    }

    /**
     * 清空缓存
     */
    clear() {
        this.__fingerprint = null;
    }

    /**
     * 获取指纹信息
     * @returns {Promise<*>}
     */
    async get() {

        if (this.__fingerprint) {
            return this.__fingerprint;
        }

        this.__fingerprint = await this.create();
        return this.__fingerprint;
    }

    /**
     * 请求头生成
     * @param url
     * @param params
     * @param haveBody: 请求是否包含请求体，包含请求体则展平对象，不包含请求体，为空时需要清除
     * @returns {*}
     */
    generateHeaderKey(url, params, haveBody) {
        // 因为后端去掉 请求体 参与请求签名，所以请求提默认为空
         let paramsStr = haveBody ? "" : JSON.stringify(params) || "";


        // 展平 get/delete 请求参数
        if (!haveBody && paramsStr) {
            const reqSplit = url.includes('?') ? '&' : '?';

            paramsStr = Object.entries(params).filter(entry => {
                // 排除浏览器会默认去除的 key->value 组合
                return entry[1] !== null && entry[1] !== undefined
            }).map(entry => {
                return entry.join("=");
            }).join("&");

            if (paramsStr) {
                paramsStr = reqSplit + paramsStr;
            }
        }

        // 补全请求地址前反斜杠
        if (url.indexOf("/") !== 0 && url.indexOf("http") === -1) {
            url = "/" + url;
        }

        let str = url + paramsStr;

        // console.log("原始字符串：", url + paramsStr, "参数字符串：", str, ", 加密字符串：", this.__md5.hex_md5(str));

        return this.__md5.hex_md5(str);
    }
}
