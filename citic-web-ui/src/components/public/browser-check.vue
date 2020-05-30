
<style scoped lang="scss">
.browser-check {
  margin: 10px 0;

  .tips {
  position: relative;
    width: 500px;
    margin: auto;
    line-height: 14px;
    text-align: center;
    overflow: hidden;

    img {
      margin: 0 2px -2px 6px;
    }

    .ico-close {
      position: absolute;
      top: -2px;
      right: 0;
      font-size: 22px;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="browser-check" v-if="showBrowserTips">
    <p class="tips">
      <img src="../../assets/images/tips.png"/>建议使用以下浏览器，以获得最佳体验：
      <img src="../../assets/images/chrome.png"/>Chrome谷歌浏览器
      <Icon type="ios-close-empty" class="ico-close" @click.native="closeBrowserTips"></Icon>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showBrowserTips: false
      }
    },
    created() {
      /**
       * 10s后提示自动关闭
       */
      if (!this.checkBroswer()) {
        this.showBrowserTips = true;

        setTimeout(() => {
          this.closeBrowserTips();
        }, 10000);
      }
    },
    methods: {
      getBroswer() {
        /**
         * 获取浏览器类型以及版本号
         * 支持国产浏览器:猎豹浏览器、搜狗浏览器、傲游浏览器、360极速浏览器、360安全浏览器、
         * QQ浏览器、百度浏览器等.
         * 支持国外浏览器:IE,Firefox,Chrome,safari,Opera等.
         * 使用方法:
         * 获取浏览器版本:Browser.client.version
        **/
        var Browser=Browser || (function(window){
          var document = window.document,
            navigator = window.navigator,
            agent = navigator.userAgent.toLowerCase(),
            //IE8+支持.返回浏览器渲染当前文档所用的模式
            //IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
            //IE10:10(兼容模式7||8||9)
            IEMode = document.documentMode,		
            //chorme
            chrome = window.chrome || false,
            System = {
              //user-agent
              agent : agent,
              //是否为IE
              isIE : /msie/.test(agent),
              //是否为Edge
              isEdge: agent.indexOf("windows nt 6.1") > -1 && agent.indexOf("trident/7.0;") > -1, //判断是否IE的Edge浏览器 
              //Gecko内核
              isGecko: agent.indexOf("gecko")>0 && agent.indexOf("like gecko")<0,
              //webkit内核
              isWebkit: agent.indexOf("webkit")>0,
              //是否为标准模式
              isStrict: document.compatMode === "CSS1Compat",
              //是否支持subtitle
              supportSubTitle:function(){
                return "track" in document.createElement("track");
              },
              //是否支持scoped
              supportScope:function(){
                return "scoped" in document.createElement("style");
              },
              //检测mime
              _mime:function(option, value) {
                var mimeTypes = navigator.mimeTypes;
                for (var mt in mimeTypes) {
                  if (mimeTypes[mt][option] == value) {
                    return true;
                  }
                }
                return false;
              },
              /**
               * 检测是否是360
               * 360使用的chrome内核
                 */
              is360:function() {
                var _is360 = System._mime("type", "application/vnd.chromium.remoting-viewer"); //360特有mime
                if (_is360) { 
                  return true;
                }
              }
            };
            
          try {
            //浏览器类型(IE、Opera、Chrome、Safari、Firefox)
            System.type = System.isIE?"IE":
              System.isEdge? "Edge":
              window.opera || (agent.indexOf("opr") > 0)?"Opera": 
              (agent.indexOf("chrome")>0)?"Chrome":
              //safari也提供了专门的判定方式
              window.openDatabase?"Safari":
              (agent.indexOf("firefox")>0)?"Firefox":		
              'unknow';              
            
            //浏览器外壳
            System.shell=function(){
              //遨游浏览器
              if(agent.indexOf("maxthon") > 0) {
                System.version = agent.match(/maxthon\/([\d.]+)/)[1] || System.version ;
                return "Maxthon";
              }
              //QQ浏览器
              if(agent.indexOf("qqbrowser") > 0) {
                System.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || System.version ;
                return "QQ";
              }
              //搜狗浏览器
              if( agent.indexOf("se 2.x")>0) {
                return 'Sogou';
              }
              
              //Chrome:也可以使用window.chrome && window.chrome.webstore判断
              if(chrome && System.type !== "Opera") {
                var external = window.external,
                  clientInfo = window.clientInformation,
                  //客户端语言:zh-cn,zh.360下面会返回undefined
                  clientLanguage = clientInfo.languages;
                
                //猎豹浏览器:或者agent.indexOf("lbbrowser")>0
                if( external && 'LiebaoGetVersion' in external) {
                  return 'Liebao';
                }
                //百度浏览器
                if (agent.indexOf("bidubrowser")>0) {
                  System.version = agent.match(/bidubrowser\/([\d.]+)/)[1] || 
                    agent.match(/chrome\/([\d.]+)/)[1];
                  return "Baidu";
                }
                if(System.is360()) {
                  return '360';
                }
                return "Chrome";
              } 
              return System.type;   	  
            };
        
            //浏览器名称(如果是壳浏览器,则返回壳名称)
            System.name = System.shell();
            
          } catch(e) {
            console.log("error");
          }
          return {
            client:System
          };
          
        })(window);
        return Browser;
      },
      //检测是否是谷歌
      _isChrome(){
        const userAgent = navigator.userAgent;
        return userAgent.indexOf('Chrome') > -1 || userAgent.indexOf('CriOS') > -1;;
      },
      //检测mime
      _mime(option, value) {
          var mimeTypes = navigator.mimeTypes;
          for (var mt in mimeTypes) {
              if (mimeTypes[mt][option] == value) {
                  return true;
              }
          }
          return false;
      },
      /**
       * 检测是否是360
       * 360使用的chrome内核
       */
      is360() {
        const _is360 = this._mime("type", "application/vnd.chromium.remoting-viewer"); //360特有mime
        if (this._isChrome() && _is360) { 
          return true;
        }
      },
      /**
       * 检测是否是chrome浏览器
       */
      checkBroswer() {
        const _broswerName = this.getBroswer().client.name;
        if(_broswerName == 'Chrome') {
          return true;
        }
        return false;
      },
      closeBrowserTips() {
        this.showBrowserTips = false;
      }
    }
  }
</script>