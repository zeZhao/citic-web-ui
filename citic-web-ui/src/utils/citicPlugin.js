import foot from '../components/public/foot';
import tableActionBar from '../components/public/tableActionBar';
import dialog from '../components/public/dialog';
import contentHeader from '../components/public/contentHeader';
import contentFrame from '../components/public/contentFrame';
import textPop from '../components/public/textPop';
import emptyListHint from '../components/public/emptyListHint';
import customTable from '../components/public/customTable';
import haloButton from '../components/public/button/haloButton';
import sortBar from '../components/public/sortBar';
import creditManagement from '../components/public/credit-management';
import searchPanel from '../components/public/searchPanel';
import imagePreview from '../components/public/image-preview';

import priceDisplay from '../components/public/price/priceDisplay';
import http from './http';
import apiEnum from './apiEnum';
import config from '../config';
import localStorageKeys from '../config/localStorageKeys';
import errorCode from './errorCode'
import pinyinConvert from './pinyinConvert';

import identityCheck from './identityCheck';

import { jumpToProductDetail } from './product';
import exportExcel from './exportExcel';


const Base64 = require('js-base64').Base64;
const moment = require('moment');

import md5 from './md5';
import Fingerprint from './identityCheck/fingerprintGenerate';

class citicPlugin {

    constructor() {

    }

    install(Vue, options) {
        this.installExtendsFunction();

        citicPlugin.installComponent(Vue);

        this.installPrototype(Vue);

        this.installFilter(Vue);

        this.installDirective(Vue);

        this.installMixin(Vue);
    }

    /*------------------安装扩展方法------------------*/
    installExtendsFunction() {
        /**
         * 扩展时间对象，增加Format方法
         */
        {
            /*对Date的扩展，将 Date 转化为指定格式的String
             月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
             年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
             例子：
             (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
             (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
             支持时间格式化*/
            Date.prototype.Format = function (fmt) { //author: meizz
                let o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        }
        {
            /**
             * 金额单位转换：厘转换到元
             * @return {string}
             */
            String.prototype.liToYuan = function (digits = 2) {
                let value = this.toString();
                let number = Number(value)
                if (this === null || this === 'null') {
                    value = 0;
                } else if (isNaN(Number(this))) {
                    return value;
                }
                if (number < 0) {
                    value = Math.abs(value)
                    return '-' + (value / 1000).toString().FormatPriceStr();
                } else {
                    return (value / 1000).toString().FormatPriceStr();
                }
            }
        }

        {
            /**
             * 格式化金钱
             * @return {string}
             */
            String.prototype.FormatPriceStr = function (digits = 2) {
                if (isNaN(Number(this))) {
                    return this.toString();
                }

                try {
                    let value = this.toString();
                    value = Number(value).toFixed(digits);
                    let array = value.split(".");
                    let font = array[0].split("");
                    font.reverse();
                    let newArray = [];
                    for (let i in font) {
                        if (i % 3 === 0 && i !== 0 && font.length < i + 1) {
                            newArray.push(",")
                        }
                        newArray.push(font[i])
                    }
                    newArray.reverse();
                    return newArray.join("") + "." + array[1];
                } catch (e) {
                    return this.toString();
                }
            }
        }

        /**
         * 字符串增加format方法，替换字符串中的#{\d}元素，从0开始
         */
        {
            /**
             * @return {string}
             */
            String.prototype.Format = function (...arr) {
                let value = this.toString();
                arr.forEach((item, index) => {
                    value = value.replace(`#{${index}}`, item)
                });
                return value;
            }
        }

        {
            /**
             * 将时间戳转化为指定格式的日期
             * @return {string}
             */
            String.prototype.FormatTimestampToDate = function (format = 'yyyy-MM-dd') {
                if (this !== null) {
                    return new Date(parseFloat(this)).Format(format);
                } else {
                    return null;
                }
            }
        }

        /**
         * 判断接口返回是否是正确
         */
        {
            window.resOk = function (res = {}) {
                if (res.code === '200' || res.code === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        /**
         * 开启客服小窗口
         */
        {
            window.openCustomerService = function () {
                window.open("//citic.kf5.com/kchat?supportbox=1&active_in_iframe=0&", "中信云客服", 'width=360, height=540');
            }
        }

        /**
         * 字符串做解析html转义
         */
        {
            String.prototype.HTMLDecode = function () {
                let temp = document.createElement("div");
                temp.innerHTML = this.toString();
                const output = temp.innerText || temp.textContent || "";
                temp.remove();
                temp = null;
                return output;
            }
        }
    }

    /*------------------添加vue组件------------------*/
    static installComponent(Vue) {
        Vue.component("ci-foot", foot);
        Vue.component("ci-table-action-bar", tableActionBar);
        Vue.component("ci-dialog", dialog);
        Vue.component("ci-content-header", contentHeader);
        Vue.component("ci-content-frame", contentFrame);
        Vue.component("ci-text-pop", textPop);
        Vue.component("ci-empty-list-hint", emptyListHint);
        Vue.component("ci-custom-table", customTable);
        Vue.component("ci-halo-button", haloButton);
        Vue.component("ci-sort-bar", sortBar);
        Vue.component("ci-credit-management", creditManagement);
        Vue.component("ci-price-display", priceDisplay);
        Vue.component("ci-search-panel", searchPanel);
        Vue.component("ci-image-preview", imagePreview);
    }

    /*------------------添加vue过滤器------------------*/
    installFilter(Vue) {

    }

    /*------------------添加vue实例方法------------------*/
    installPrototype(Vue) {
        Vue.prototype.$get = http.doGet;
        Vue.prototype.$post = http.doPost;
        Vue.prototype.$put = http.doPut;
        Vue.prototype.$delete = http.doDelete;
        Vue.prototype.$put = http.doPut;
        Vue.prototype.$Base64 = Base64;
        Vue.prototype.$moment = moment;

        Vue.prototype.$identityCheck = identityCheck;
        Vue.prototype.$md5 = new md5();
        Vue.prototype.$fingerprint = new Fingerprint();

        Vue.prototype.$location = window.location;
        Vue.prototype.$API_ENUM = apiEnum;
        Vue.prototype.$CONFIG = config;
        Vue.prototype.$ERROR_CODE = errorCode;
        Vue.prototype.$LOCAL_STORAGE_KEYS = localStorageKeys;
        Vue.prototype.$pinyinConvert = pinyinConvert;

        //导出excel
        Vue.prototype.$exportExcel = exportExcel;

        //定义全局事件
        Vue.prototype.$EVENTS = {};

        /**
         * 动态设置页面title
         */
        Vue.prototype.$setPageTitle = function (title) {
            if (title) {
                document.title = title;
            }
        };

        /**
         * 下载文件
         * @param ossKey
         */
        Vue.prototype.downloadFile = function (ossKey) {
            const URL = config.BASE_API_URL + apiEnum.COMMON_DOWNLOAD_BUSINESS.Format(ossKey);

            const userAgent = navigator.userAgent.toLowerCase();
            //If in Chrome or Safari - download via virtual link click
            if (userAgent.indexOf('chrome') > -1 || userAgent.indexOf('safari') > -1) {

                //Creating new link node.
                let link = document.createElement('a');
                link.href = URL;
                link.target = '_self';

                if (link.download !== undefined) {
                    //Set HTML5 download attribute. This will prevent file from opening if supported.
                    link.download = ossKey.substring(ossKey.lastIndexOf('/') + 1, ossKey.length);
                }

                //Dispatching click event.
                if (document.createEvent) {
                    let e = document.createEvent('MouseEvents');
                    e.initEvent('click', true, true);
                    link.dispatchEvent(e);
                    return;
                }
                return;
            }

            window.open(URL + '&download', '_blank');
        };

        /**
         * 下载文件
         * @param url
         * @param fileName
         */
        Vue.prototype.downloadFileByUrl = function (url, fileName = "") {
            const userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.indexOf('chrome') > -1 || userAgent.indexOf('safari') > -1) {

                let link = document.createElement('a');
                link.href = url;
                link.target = '_blank';

                if (link.download !== undefined) {
                    link.download = fileName;
                }

                if (document.createEvent) {
                    let e = document.createEvent('MouseEvents');
                    e.initEvent('click', true, true);
                    link.dispatchEvent(e);
                    return;
                }
                return;
            }
            window.open(url, '_blank');
        };

        /**
         * 跳转到服务详情页面
         */
        Vue.prototype.jumpToProductDetail = jumpToProductDetail;

        /**
         * 获取session中的对象
         * @param key
         */
        Vue.prototype.$getSession = key => {
            let value = window.sessionStorage.getItem(key);

            try {
                value = JSON.parse(value);
            } catch (e) {
                console.error(e, key, value);
                return null;
            }

            return value;
        };

        /**
         * 设置、清空session中的对象
         * @param key
         * @param value
         */
        Vue.prototype.$setSession = (key, value) => {
            if (value === undefined) {
                window.sessionStorage.removeItem(key);
            } else {
                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }
                window.sessionStorage.setItem(key, value);
            }
        };

        /**
         * 获取storage中的对象
         * @param key
         */
        Vue.prototype.$getStorage = key => {
            let value = window.localStorage.getItem(key);
            try {
                value = JSON.parse(value);
            } catch (e) {
                console.error(e, key, value);
                return null;
            }
            return value;
        };

        /**
         * 设置、清空Storage中的对象
         * @param key
         * @param value
         */
        Vue.prototype.$setStorage = (key, value) => {
            if (value === undefined) {
                window.localStorage.removeItem(key);
            } else {
                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }
                window.localStorage.setItem(key, value);
            }
        };

        Vue.prototype.$confirmDialog = function (ok, text = "",
            opinion = {
                tips: '', cancel: () => {
                }
            }
        ) {
            this.$Modal.confirm({
                content: `<div class="body">
                    <p class="dialog-title">${text}</p>
                    <p class="dialog-tips">${opinion.tips}</p>
                </div>`,
                okText: '确认',
                cancelText: '取消',
                closable: true,
                width: 550,
                onOk: ok,
                onCancel: () => {
                    if (opinion.cancel) {
                        opinion.cancel();
                    }
                }
            })
        };

        /**
         * 弹出框：提示信息中不带网址
         */
        Vue.prototype.$confirmDialogWithoutWebsite = function (ok, text = "",
            opinion = {
                tips: '', cancel: () => {
                }
            }
        ) {
            this.$Modal.confirm({
                content: `<div class="body">
                    <p class="dialog-title">${text}</p>
                    <p class="dialog-tips">${opinion.tips}</p>
                </div>`,
                okText: '确认',
                cancelText: '取消',
                closable: true,
                width: 550,
                onOk: ok,
                onCancel: () => {
                    if (opinion.cancel) {
                        opinion.cancel();
                    }
                }
            })
        };
        /**
         * 如果value的值为空,则返回默认值
         * value不为空,返回用cb函数处理过的值
         * @param value
         * @param defaultValue
         * @param cb
         * @returns {*}
         */
        Vue.prototype.$defaultIfNull = (value, defaultValue, cb = val => val, ) => {
            if (value === undefined || value === null || value.length === 0) {
                return defaultValue
            }

            return cb(value)
        };
    }

    /*------------------安装指令方法------------------*/
    installDirective(Vue) {
        /**
         * 处理底部跟随浮动逻辑
         * @param e
         * @private
         */
        function _handleBottomFloat(e) {
            const { el, standardEl, offset } = window.__directiveFloatBottom__;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const bottomPosition = standardEl.offsetTop + standardEl.offsetHeight;

            if (scrollTop + clientHeight >= bottomPosition - offset) {
                el.style.position = "relative";
                el.className = el.className.replace(/ fixed-mark/g, '')
            } else {
                el.style.position = "fixed";
                if (!el.className.includes('fixed-mark')) {
                    el.className += ' fixed-mark';
                }
            }
        }

        /**
         * 定义元素跟随浮动效果
         * value 为浮层改变的偏移量，为正数则提前变为正常位置
         */
        Vue.directive('float-bottom', {
            inserted(el, binding, vnode) {
                //获取基准元素
                const standardEl = document.getElementById(binding.arg);
                let offset = 0;
                if (binding.value) {
                    offset = binding.value;
                }
                window.__directiveFloatBottom__ = { el, standardEl, offset };
                window.addEventListener("scroll", _handleBottomFloat);
                setTimeout(_handleBottomFloat, 0);
                document.addEventListener('DOMSubtreeModified', _handleBottomFloat, false);
            },

            unbind(el, binding, vnode) {
                delete window.__directiveFloatBottom__;
                window.removeEventListener("scroll", _handleBottomFloat);
                document.removeEventListener('DOMSubtreeModified', _handleBottomFloat);
            }
        })
        /**
         * 此指令 用来跳转老的控制台页面
         */
        // Vue.directive('old-click', function (el, binding) {
        //     el.addEventListener("click", function () {
        //        // console.log(config)
        //         location.href = config.OLD_URL
        //     })
        // })




    }

    /*------------------安装mixin方法------------------*/
    installMixin(Vue) {

    }
}

export default new citicPlugin();
