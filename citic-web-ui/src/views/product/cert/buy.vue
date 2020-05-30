<style lang="scss" >
  .cert-buy {
    background-color: #f7f7f7;

    .wrapper {
      width: 1200px;
      margin: 0 auto;

      .crumbs {
        padding: 0 40px;
        line-height: 76px;
        font-size: 14px;

        a {
          color: #999;

          span {
            &::after {
              content: '>';
              padding: 0 5px;
            }
          }
        }

        .cur {
          color: #333;
        }
      }

      .content {
        background-color: #fff;

        .page-title {
          padding: 0 40px;
          line-height: 84px;
          font-size: 26px;
          color: #000;
        }

        .cert-tabs {
          &.ivu-tabs {
            .ivu-tabs-bar {
              padding-top: 8px;
              border: none;
              background-color: #f7f7f7;
            }

            .ivu-tabs-nav-container {
              height: 57px;

              .ivu-tabs-tab {
                width: 190px;
                height: 57px;
                padding: 9px 16px 8px;
                line-height: 40px;
                text-align: center;
                font-size: 14px;
                border: none;
                border-top: 2px solid #e6ebf3;
                border-radius: 0;
                color: #61b3ff;
                background-color: #e6ebf3;

                &.ivu-tabs-tab-active,
                &.ivu-tabs-tab-focused {
                  border-top: 2px solid #61b3ff;
                  background-color: #fff;
                }
              }
            }
          }
        }

        .ivu-tabs-tabpane {
          padding: 0 38px;

        }
      }
    }
  }

  .modal-box {
    .item {
      padding: 10px 24px;
      color: #f00;
    }

    .ivu-btn-text {
        border: 1px solid #e9eaec;
    }
  }
</style>
<style lang="scss" src="../../../assets/scss/cert-buy-form.scss"></style>

<template>
  <div class="cert-buy">
    <div class="wrapper">
      <div class="crumbs">
        <router-link to="/"><span>首页</span></router-link>
        <router-link to="/product/center"><span>产品中心</span></router-link>
        <span class="cur">在线认证</span>
      </div>

        <ci-credit-management @credit-info-change="getCreditInfo"></ci-credit-management>

      <div class="content">
        <h2 class="page-title">在线认证</h2>
        <Tabs type="card" class="cert-tabs" :value="type">
          <TabPane label="网站认证" name="website"><ci-website :creditProhibit="creditProhibit"></ci-website></TabPane>
          <TabPane label="微博认证" name="weibo"><ci-weibo :creditProhibit="creditProhibit"></ci-weibo></TabPane>
          <TabPane label="微信认证" name="weixin"><ci-weixin :creditProhibit="creditProhibit"></ci-weixin></TabPane>
          <TabPane label="APP认证" name="app"><ci-app :creditProhibit="creditProhibit"></ci-app></TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Website from 'com/product/cert/website'
import Weibo from 'com/product/cert/weibo'
import Weixin from 'com/product/cert/weixin'
import APP from 'com/product/cert/app'

export default {
  data() {
    return {
      type: 'website',
        creditProhibit: true
    }
  },
  components: {
    'ci-website': Website,
    'ci-weibo': Weibo,
    'ci-weixin': Weixin,
    'ci-app': APP,
  },
  created() {
    //跳转至相应的tab页签上
    const _type = this.$store.state.certType.CERT_TYPE;
    if(_type) {
      this.type = _type;
    }
  },

    methods: {
        getCreditInfo(creditProhibit){
            this.creditProhibit = creditProhibit;
        }
    }
}
</script>

