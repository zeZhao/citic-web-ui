<style lang="scss" src="../../../assets/scss/cert-detail.scss"></style>
<template>
  <div class="citic-certification-details">
    <div class="banner">
      <div class="banner-inner">
          <div class="banner-txt">
              <h2>在线认证</h2>
              <p class="desc">中信云结合中信集团品牌管理委员会办公室（简称：“中信集团品牌办”）为中信旗下子公司的网站、微信公众号、官方微博、APP提供认证服务，通过在线认证的网站、微信公众号、官方微博、APP会授予中信集团和中信云平台颁发的品牌认证证书和中信云平台服务证书，借助中信品牌影响力提升其价值和影响力。为保证合规性，定期对通过认证的网站、微信公众号、官方微博、APP进行检核。</p>
              <router-link to="/product/cert/buy" class="apply-btn">立即申请品牌认证</router-link>
          </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="tab-header-wrapper" :class="{tabHead:isActive}">
        <ul class="tab-header">
          <li @click="goAnchor('anchor1',1)" :class="{active:anchor==1}">关于认证</li>
          <li @click="goAnchor('anchor2',2)" :class="{active:anchor==2}">认证流程</li>
          <li @click="goAnchor('anchor3',3)" :class="{active:anchor==3}">认证规则</li>
          <li @click="goAnchor('anchor4',4)" :class="{active:anchor==4}">证书介绍</li>
          <li @click="goAnchor('anchor5',5)" :class="{active:anchor==5}">已认证机构</li>
        </ul>
      </div>
        <div :class="{boxN:isActive}"></div>
      <div class="content">
        <h3 class="title" id="anchor1">关于认证</h3>
        <div class="citic-cert">
          <div class="cert-intro">
            <h5>在线认证</h5>
            <p class="desc">中信集团品牌管理委员会办公室通过中信云平台品牌在线认证系统，为授权使用中信品牌的子公司门户网站、官方微博、官方微信公众号、APP等互联网渠道应用开展数字化品牌认证服务。通过认证的子公司互联网渠道将统一在集团官网公示，便于社会公众查证识别。通过中信品牌认证的互联网渠道应用将授予中信集团品牌认证证书，增强中信品牌管理规范性并有效提升集团所属机构各互联网渠道的品牌影响和价值。为确保品牌使用的合规性和规范化，中信集团品牌管理委员会办公室定期对已通过认证的互联网渠道应用进行检核，不符合中信品牌使用要求的将即时停用或收回其数字化认证证书。</p>
          </div>
          <img src="~static/images/cert/img-cert.jpg"/>
        </div>
        <h3 class="title" id="anchor2">认证流程</h3>
        <div class="process">
          <div class="process-title-wrapper">
            <ul class="process-title">
              <li :class="{'cur': website === true}" @click="showProcess('website');">网站认证流程</li>
              <li :class="{'cur': weibo === true}" @click="showProcess('weibo');">微博/微信认证流程</li>
              <li :class="{'cur': app === true}" @click="showProcess('app');">APP认证流程</li>
            </ul>
          </div>
          <ul class="steps" v-if="website == true">
              <li>
                  <div class="step-icon">
                      <img src="~static/images/cert/icon-process-1.png" />
                  </div>
                  <span class="step-name">提交项目</span>
                  <p class="step-desc">提交网站基本信息、企业信息</p>
              </li>
              <li>
                  <div class="step-icon">
                      <img src="~static/images/cert/icon-process-2.png"/>
                  </div>
                  <span class="step-name">品牌审核</span>
                  <p class="step-desc">中信集团信息技术管理部信息安全部审核</p>
              </li>
              <li>
                  <div class="step-icon">
                      <img src="~static/images/cert/icon-process-3.png" />
                  </div>
                  <span class="step-name">安全审核</span>
                  <p class="step-desc">中信集团信息技术管理部信息安全部审核</p>
              </li>
              <li class="step-icon">
                  <div class="step-icon">
                      <img src="~static/images/cert/icon-process-4.png" />
                  </div>
                  <span class="step-name">安装证书</span>
                  <p class="step-desc">用户安装证书</p>
              </li>
              <li class="last">
                  <div class="step-icon">
                      <img src="~static/images/cert/icon-process-5.png" />
                  </div>
                  <span class="step-name">完成认证</span>
                  <p class="step-desc">完成网站品牌/中信云平台服务认证</p>
              </li>
          </ul>
          <ul class="steps weibo" v-else-if="weibo == true">
            <li>
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-1.png" />
              </div>
              <span class="step-name">提交申请资料</span>
              <p class="step-desc">提交微信公众账号/官方微博基本信息、企业信息</p>
            </li>
            <li>
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-2.png"/>
              </div>
              <span class="step-name">品牌审核</span>
              <p class="step-desc">中信集团信息技术管理部信息安全部审核</p>
            </li>
            <li>
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-4.png" />
              </div>
              <span class="step-name">安装证书</span>
              <p class="step-desc">租户安装证书</p>
            </li>
            <li class="last">
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-5.png" />
              </div>
              <span class="step-name">完成认证</span>
              <p class="step-desc">完成微博/微信认证</p>
            </li>
          </ul>
          <ul class="steps" v-else-if="app == true">
            <li>
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-1.png" />
              </div>
              <span class="step-name">提交项目</span>
              <p class="step-desc">提交App基本信息、企业信息</p>
            </li>
            <li>
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-2.png"/>
              </div>
              <span class="step-name">品牌审核</span>
              <p class="step-desc">中信集团信息技术管理部信息安全部审核</p>
            </li>
            <li>
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-3.png" />
              </div>
              <span class="step-name">安全审核</span>
              <p class="step-desc">中信集团信息技术管理部信息安全部审核</p>
            </li>
            <li class="step-icon">
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-4.png" />
              </div>
              <span class="step-name">安装证书</span>
                <p class="step-desc">用户安装证书</p>
            </li>
              <li class="last">
              <div class="step-icon">
                <img src="~static/images/cert/icon-process-5.png" />
              </div>
              <span class="step-name">完成认证</span>
                  <p class="step-desc">完成网站品牌/中信云平台服务认证</p>
            </li>
          </ul>
          <div class="process-line"/>
        </div>

        <h3 class="title" id="anchor3">认证规则</h3>
        <div class="cert-rule">
          <ul class="rules">
            <li class="rule1">
              <div class="rule-img rule-img-B">
                <img src="~static/images/cert/icon-rule-4.png"/>
              </div>
                <p class="rule-name rule-img-B">网站认证证书</p>
                <div class="rule-hover">
                    <div class="rule-img">
                        <img src="~static/images/cert/icon-ruleW-4.png" />
                    </div>
                    <p class="rule-name">网站认证证书</p>
                    <p class="rule-desc">中信集团品牌管理委员会办公室通过中信云平台品牌在线认证系统，对旗下所有子公司门户网站提供的品牌认证，申请公司通过第三方机构安全检测以及中信品牌办资料审核之后，被授予中信集团品牌认证证书，统一在集团官网公示，便于社会公众查证识别。</p>
                    <a href="javascript: void(0);" @click="toBuy('website')" class="rule-btn">去认证</a>
                </div>

              <!--<p class="rule-desc">中信集团品牌管理委员会办公室通过中信云平台品牌在线认证系统，对旗下所有子公司门户网站提供的品牌认证，申请公司通过第三方机构安全检测以及中信品牌办资料审核之后，被授予中信集团品牌认证证书，统一在集团官网公示，便于社会公众查证识别。</p>-->
              <!--<a href="javascript: void(0);" @click="toBuy('website')" class="rule-btn">去认证</a>-->
            </li>
            <li class="rule2">
              <div class="rule-img rule-img-B">
                <img src="~static/images/cert/icon-rule-5.png"/>
              </div>
                <p class="rule-name rule-img-B">微博/微信认证证书</p>
                <div class="rule-hover">
                    <div class="rule-img">
                        <img src="~static/images/cert/icon-ruleW-5.png"/>
                    </div>
                    <p class="rule-name">微博/微信认证证书</p>
                    <p class="rule-desc">中信集团品牌管理委员会办公室针对中信旗下所有子公司微信公众号/官方微博提供在线品牌认证服务，申请公司通过资料审核之后，被授予中信集团品牌认证证书，帮助企业树立品牌形象，提升品牌影响力。</p>
                    <a href="javascript: void(0);" @click="toBuy('weibo')" class="rule-btn">去认证</a>
                </div>

            </li>
            <li class="rule3">
              <div class="rule-img rule-img-B">
                <img src="~static/images/cert/icon-rule-6.png" class="rule-img-B" />
                <img src="~static/images/cert/icon-ruleW-6.png" class="rule-img-N"/>
              </div>
                <p class="rule-name rule-img-B">APP认证</p>
                <div class="rule-hover">
                    <div class="rule-img">
                        <img src="~static/images/cert/icon-ruleW-6.png"/>
                    </div>
                    <p class="rule-name">APP认证</p>
                    <p class="rule-desc">中信集团品牌管理委员会办公室通过中信云平台品牌在线认证系统，对旗下所有子公司APP提供品牌认证，申请公司通过安全以及资料审核之后，被授予中信集团品牌认证证书，助力品牌推广。</p>
                    <a href="javascript: void(0);" @click="toBuy('app')" class="rule-btn">去认证</a>
                </div>

            </li>
          </ul>
        </div>


        <h3 class="title" id="anchor4">证书介绍</h3>
        <div class="certificate-intro">
          <ul class="certs">
            <li>
              <img src="~static/images/cert/img-cert-3.jpg" class="cert-img"/>
              <div class="cert-desc">
                <h5>品牌认证证书</h5>
                <p class="desc">品牌认证证书由中信集团品牌管理委员会办公室，通过中信云平台认证系统认证并发放，适用于中信旗下所有子公司互联网渠道，为授权使用中信品牌的子公司互联网渠道，开展数字化品牌认证服务。通过品牌认证的企业网站、微信公众号、官方微博、手机应用，将被授予包含品牌和安全双重认证的认证证书，统一在集团官网公示，便于社会公众查证识别。</p>
              </div>
            </li>
          </ul>
        </div>
          <div class="certificated-org">
          <h3 class="title" id="anchor5">已认证机构</h3>
          <ul class="list clearfix">
            <li><a href="http://www.citictel.com.sg" target="_blank">中信国际电讯</a></li>
            <li><a href="http://www.citicsf.com" target="_blank">中信期货有限公司</a></li>
            <li><a href="http://www.machine.citic.com" target="_blank">中信机电制造公司</a></li>
            <li><a href="http://www.jzty.com.cn" target="_blank">锦州钛业有限公司</a></li>
            <li><a href="http://www.netmgt.citic.com/" target="_blank">中信网络有限公司</a></li>
            <li><a href="http://www.metal.citic.com" target="_blank">中信金属股份有限公司</a></li>
            <li><a href="http://www.csci.hk/" target="_blank">中信建投国际有限公司</a></li>
            <li><a href="https://www.cfc108.com/" target="_blank">中信建投期货有限公司</a></li>
            <li><a href="http://www.sjaw.com.cn" target="_blank">世纪爱晚投资有限公司</a></li>
            <li><a href="http://trust.ecitic.com/" target="_blank">中信信托有限责任公司</a></li>
            <li><a href="http://resources.citic" target="_blank">中信資源控股有限公司</a></li>
            <li><a href="http://www.99tong.com" target="_blank">中信国安通信有限公司</a></li>
            <li><a href="http://www.iig-port.citic.com" target="_blank">中信港口投资有限公司</a></li>
            <li><a href="http://www.ecitic.com" target="_blank">中信控股有限责任公司</a></li>
            <li><a href="http://www.chinaamc.com" target="_blank">华夏基金管理有限公司</a></li>
            <li><a href="http://www.citicenvirotech.com" target="_blank">中信环境技术有限公司</a></li>
            <li><a href="http://www.travel.citic/" target="_blank">中信旅游集团有限公司</a></li>
            <li><a href="http://www.citicdameng.com" target="_blank">中信大锰矿业有限责任公司</a></li>
            <li><a href="https://www.csc108.com" target="_blank">中信建投证券股份有限公司</a></li>
            <li><a href="http://www.cici.citic.com" target="_blank">中信建设有限责任公司</a></li>
            <li><a href="http://www.engineering.citic" target="_blank">中信工程设计建设有限公司</a></li>
            <li><a href="http://www.cfund108.com" target="_blank">中信建投基金管理有限公司</a></li>
            <li><a href="http://www.ciecworld.com" target="_blank">中国国际经济咨询公司</a></li>
            <li><a href="http://www.iig.citic.com" target="_blank">中信兴业投资集团有限公司</a></li>
            <li><a href="http://ccmc.csc108.com" target="_blank">中信建投资本管理有限公司</a></li>
            <li><a href="http://www.dameng.citic.com" target="_blank">中信大锰控股有限公司</a></li>
            <li><a href="http://www.citicguoaninfo.com" target="_blank">中信国安信息产业股份有限公司</a></li>
            <li><a href="http://www.jzthj.com" target="_blank">中信锦州金属股份有限公司</a></li>
            <li><a href="http://www.znszy.citic.com" target="_blank">中国市政工程中南设计研究总院有限公司</a></li>
            <li><a href="http://www.china-entercom.com" target="_blank">中企网络通信技术有限公司</a></li>
            <li><a href="http://www.cs.ecitic.com" target="_blank">中信证券股份有限公司</a></li>
            <li><a href="http://www.c.citic" target="_blank">中信科技发展有限公司</a></li>
          </ul>
        </div>

      </div>
    </div>
 </div>
</template>

<script>

export default {
  data() {
    return {
      website: true, //网站流程的可见性
      weibo: false, //微博/微信流程的可见性
      app: false, //微博/微信流程的可见性
        isActive:false,
        anchor:1,
        scroll:''
    }
  },
    mounted(){
        window.addEventListener('scroll', this.scrollTo)
    },
  methods: {
      scrollTo() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          /*
          * 判断滚动条高度导航固定在浏览器顶部
          * */
          if(scrollTop >= 515){
              this.isActive = true
          }else{
              this.isActive = false
          }
          /*
          * 判断滚动条高度导航实时显示
          * */
          if(scrollTop >= 935 && scrollTop<1455){
              this.anchor = 2
          }else if(scrollTop >=1455 && scrollTop<2080){
              this.anchor = 3
          }else if(scrollTop >= 2080 && scrollTop<2580){
              this.anchor = 4
          }else if(scrollTop >= 2580){
              this.anchor = 5
          }else{
              this.anchor = 1
          }
      },
    /**
     * 显示认证流程
     */
    showProcess(type) {
      if(type == 'website') {
        this.website = true;
        this.weibo = false;
        this.app = false;
      }else if(type == 'weibo') {
        this.website = false;
        this.weibo = true;
        this.app = false;
      }else if(type == 'app'){
          this.website = false;
          this.weibo = false;
          this.app = true;
      }
    },
    goAnchor(id,index) {
      this.$el.querySelector('#' + id).scrollIntoView()
      this.anchor = index
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      window.scrollTo(0,scrollTop-80)

    },
    toBuy(type) {
      this.$store.commit('setCertType', { certType: type });
      this.$router.push('/product/cert/buy')
    }
  }
}
</script>
