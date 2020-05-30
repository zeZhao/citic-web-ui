<style scoped lang="scss">
@import "../../assets/scss/solution.scss";

.solution-base {
  .header .slogan p {
    line-height: 1.5;
    color: #fff;
  }
  .demand {
    .introduce {
      padding: 15px 0 0 55px !important;
      ul {
        margin-top: 10px;
        color: #666;
        padding-top: 20px;
        padding-bottom: 10px;
        overflow: hidden;
        li {
          padding-bottom: 20px;
          position: relative;
          padding-left: 25px;
          line-height: 2;
          &::before {
            position: absolute;
            content: "·";
            font-size: 35px;
            color: rgb(234, 81, 61);
            display: inline;
            left: 10px;
            top: -24px;
          }
        }
      }
    }
  }

  .feature {
    height: auto;
    h3 {
      padding: 60px 0 50px 0;
    }
    .feature-menu {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      padding-bottom: 80px;
      ul {
        width: 236px;
        margin-left: 0;
        float: left;
        background-color: #fff;
        li {
          float: none;
          width: 100%;
          height: 70px;
          line-height: 70px;
          padding: 0;
          margin: 0;
          background: #fff;
          border: 1px solid #fff;
          border-right: 1px solid #d5d5d5;
          box-sizing: border-box;
          font-size: 16px;
          color: rgb(0, 0, 0);
          cursor: pointer;
        }
        li.active {
          background-color: rgba(251, 251, 251, 0.4);
          color: rgb(229, 63, 47);
          border-left: 3px solid rgb(229, 63, 47);
          border-right: none;
          border-top: 1px solid #d5d5d5;
          border-bottom: 1px solid #d5d5d5;
        }
      }
      .featureContainer {
        background-color: #fff;
        width: 960px;
        min-height: 350px;
        float: left;
        .featureContent {
          width: 100%;
          height: 100%;
          min-height: 350px;
          background-color: rgba(251, 251, 251, 0.4);
          color: rgb(0, 0, 0);
          padding: 0 70px 30px 70px;
          box-sizing: border-box;
          overflow: hidden;
          h5 {
            font-size: 18px;
            margin-top: 30px;
            color: rgb(0, 0, 0);
          }
          p {
            font-size: 14px;
            margin-top: 10px;
          }
          img {
            margin-top: 40px;
          }
          .tabTitle {
            float: none;
            overflow: hidden;
            width: auto;
            margin: 30px 0;
            li {
              width: auto;
              height: auto;
              line-height: 1;
              padding: 14px 30px;
              background-color: rgb(194, 193, 193);
              color: #fff;
              float: left;
              margin-right: 8px;
              cursor: pointer;
              box-sizing: border-box;
              font-size: 14px;
            }
            li.tabActive {
              background-color: rgb(229, 63, 47);
            }
          }
          .tabContent {
            padding-left: 20px;
            box-sizing: border-box;
            h6 {
              font-size: 14px;
              color: rgb(0, 0, 0);
              line-height: 1.571;
              position: relative;
              &::before {
                position: absolute;
                content: "·";
                font-size: 35px;
                color: rgb(244, 3, 87);
                display: inline;
                left: -20px;
                top: -19px;
              }
            }
          }
        }
      }
    }
  }

  .scheme {
    height: 485px;
    .scheme-content {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .container {
        width: calc((100% - 60px) / 4);
        height: 278px;
        position: relative;
        float: left;
        margin-right: 20px;
        .contentBox {
          width: 100%;
          height: 228px;
          background: #fff;
          margin-top: 48px;
          position: absolute;
          &:hover h1 {
            color: rgb(234, 81, 61);
            border-bottom: 2px solid rgb(234, 81, 61);
          }
        }
        h1 {
          font-size: 18px;
          color: rgb(0, 0, 0);
          margin-top: 78px;
          border-bottom: 2px solid #999;
          width: 36px;
          padding: 10px 0;
          margin: 68px auto 20px auto;
          transition: 0.5s;
        }
        p {
          width: 170px;
          margin: 0 auto;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
        }
        img {
          width: 96px;
          height: 96px;
          position: absolute;
          margin-left: -48px;
          left: 50%;
          position: absolute;
          z-index: 10;
        }
      }
      .container:last-child {
        margin-right: 0;
      }
    }
  }

  .case {
    .case-panel {
      border: none;
      width: 1200px;
      padding: 0;
      ul {
        overflow: hidden;
        li {
          float: left;
        }
      }
      img {
        width: 295px;
        height: 110px;
        float: none;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
}
</style>

<template>
  <div class="solution-base">
    <!--头部-->
    <div class="header" :style="{'background-image': `url(${banner})`}">
      <div class="slogan">
        <h2>中信云税务系统</h2>
        <p>
          税务系统基于最新的互联网、云计算、大数据等技术，
          <br />基于社会化商业这一新的商业模式；为企业提供以销项管理、
          <br />进项管理、纳税申报为核心的增值税服务，
          <br />为企业提供经营过程中所有涉税环节的解决方案。
        </p>
      </div>
    </div>

    <!--产品需求-->
    <div class="demand">
      <h3 class="title">产品需求</h3>

      <div class="wheel-box">
        <Carousel class="wheel" v-model="carouselIndex" dots="none" arrow="never">
          <CarouselItem>
            <div class="carousel-item">
              <img :src="demand1" alt />
              <div class="introduce">
                <ul>
                  <li>企业需要销项管理、进项管理、纳税申报等增值税服务，怎么办？</li>
                  <li>每次发票管理有很多问题，发票报销以及管控真的让人头疼？</li>
                  <li>现在的发票管理系统太复杂了，想要轻量级应用工具。</li>
                </ul>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>

    <!--产品功能特色-->
    <div class="feature" :style="{'background-image': `url(${featureBackground})`}">
      <h3 class="title">产品功能特色</h3>
      <div class="feature-menu" :class="menuClass">
        <ul>
          <li
            @click="changeIndex('featureIndex', 1)"
            :class="featureIndex == 1 ? 'active' : ''"
          >涉税数据自动报送</li>
          <li
            @click="changeIndex('featureIndex', 2)"
            :class="featureIndex == 2 ? 'active' : ''"
          >发票管理</li>
          <li
            @click="changeIndex('featureIndex', 3)"
            :class="featureIndex == 3 ? 'active' : ''"
          >各税种计税管理</li>
          <li
            @click="changeIndex('featureIndex', 4)"
            :class="featureIndex == 4 ? 'active' : ''"
          >税务风险管理</li>
          <li
            @click="changeIndex('featureIndex', 5)"
            :class="featureIndex == 5 ? 'active' : ''"
          >税务数据管理</li>
        </ul>

        <!--涉税数据自动报送-->
        <div class="featureContainer" v-show="featureIndex === 1">
          <div class="featureContent">
            <h5 style="margin-top: 70px;">数据网关系统集成</h5>
            <p>子公司税务管理系统与集团数据网关系统集成，自动报送涉税数据，报送数据范围包括：千户集团数据、纳税统计数据、境外税收抵免数据、汇算清缴数据等。</p>
            <img src="../../../static/images/solution/taxSystem/feature-img-01.png" />
          </div>
        </div>

        <!--发票管理-->
        <div class="featureContainer" v-show="featureIndex === 2">
          <div class="featureContent">
            <h5>发票管理</h5>
            <ul class="tabTitle">
              <li
                @click="changeIndex('invoiceIndex', 1)"
                :class="invoiceIndex == 1 ? 'tabActive' : ''"
              >进项发票管理</li>
              <li
                @click="changeIndex('invoiceIndex', 2)"
                :class="invoiceIndex == 2 ? 'tabActive' : ''"
              >销项发票管理</li>
            </ul>
            <div class="tabContent" v-show="invoiceIndex === 1">
              <h6>进项发票管理</h6>
              <p>通过对接共享服务或报账平台，实现了从供应商开票获取、发票采集识别，到共享中心票单校验匹配到审批、记账的自动化，税务服务平台在线集中认证加速采购流程，提高工作效率，控制涉税风险。</p>
              <img src="../../../static/images/solution/taxSystem/feature-img-02.png" />
            </div>
            <div class="tabContent" v-show="invoiceIndex === 2">
              <h6>销项发票管理</h6>
              <p>针对销售平台与税控系统、财务系统无法对接的问题，借助税务服务平台，连接销售平台、税控系统和财务系统，实现在销售系统直连开票、一键开票，实现订单数据、开票数据和入账数据的一致性和同步，解决开票效率、虚开或错开、发票数据无法回写的问题，实现多组织共享服务的集中开票，本地化打印和抄报税的职责分离。</p>
              <img src="../../../static/images/solution/taxSystem/feature-img-03.png" />
            </div>
          </div>
        </div>

        <!--各税种计税管理-->
        <div class="featureContainer" v-show="featureIndex === 3">
          <div class="featureContent">
            <h5>各税种计税管理</h5>
            <ul class="tabTitle">
              <li
                @click="changeIndex('taxTypeIndex', 1)"
                :class="taxTypeIndex == 1 ? 'tabActive' : ''"
              >增值税管理</li>
              <li
                @click="changeIndex('taxTypeIndex', 2)"
                :class="taxTypeIndex == 2 ? 'tabActive' : ''"
              >企业所得税管理</li>
              <li
                @click="changeIndex('taxTypeIndex', 3)"
                :class="taxTypeIndex == 3 ? 'tabActive' : ''"
              >其他税种管理</li>
            </ul>
            <div class="tabContent" v-show="taxTypeIndex === 1">
              <h6>增值税管理</h6>
              <p>
                发票信息自动归集：自动归集销项发票开具的结果以及进项抵扣的结果。
                <br />税会差异核对：根据核算系统中相关科目数据及开票明细数据，自动核对未开票已入账、已开票未入账等状态并在系统中处理。
                <br />增值税申报工作底稿：根据公司实际业务要求设计各类工作底稿，用于数据核对及纳税申报。
                <br />增值税申报表自动生成：根据预置规则自动生成增值税及附加申报表并在系统中完成审批流程。
              </p>
              <img src="../../../static/images/solution/taxSystem/feature-img-04.png" />
            </div>
            <div class="tabContent" v-show="taxTypeIndex === 2">
              <h6>企业所得税管理</h6>
              <p>
                纳税调整管理：系统通过财务核算数据自动识别纳税调整事项，无法自动识别的通过业务台账管理。业务台账包括但不限于：视同销售业务台账、捐赠支出业务台账、资产业务台账、资产损失业务台账、投资收益业务台账、境外税收抵免台账等。
                <br />工作底稿管理：根据纳税调整台账及核算系统数据，通过内置规则自动生成各类工作底稿，用于纳税申报。
                <br />企业所得税预缴：根据内置规则自动从核算系统数据和工作底稿生成企业所得税预缴申报表，并在系统中完成审批流程。
                <br />企业所得税汇算清缴：根据内置规则自动从核算系统数据和工作底稿生成企业所得税年度汇算清缴申报表，并在系统中完成审批流程。
                <br />备案备查档案管理：根据汇算清缴各类清单申报和专项申报的备案要求，自动生成备案表单。
              </p>
              <img src="../../../static/images/solution/taxSystem/feature-img-05.png" />
            </div>
            <div class="tabContent" v-show="taxTypeIndex === 3">
              <h6>其他税种管理</h6>
              <p>
                台账与底稿管理：系统通过业务台账与底稿对其他税种各类调整事项进行线上管理。
                <br />自动计税：根据内置规则自动从核算系统数据和工作底稿生成其他税种申报表，并在系统中完成审批流程。
                <br />其他税种包括：消费税、资源税、土地增值税、房产税、土地使用税、环保税、个人所得税、印花税等。
              </p>
              <img src="../../../static/images/solution/taxSystem/feature-img-06.png" />
            </div>
          </div>
        </div>

        <!--税务风险管理-->
        <div class="featureContainer" v-show="featureIndex === 4">
          <div class="featureContent">
            <h5>税务风险管理</h5>
            <ul class="tabTitle">
              <li
                @click="changeIndex('riskIndex', 1)"
                :class="riskIndex == 1 ? 'tabActive' : ''"
              >纳税申报机器人（RPA）</li>
              <li
                @click="changeIndex('riskIndex', 2)"
                :class="riskIndex == 2 ? 'tabActive' : ''"
              >税务风险管理</li>
              <li
                @click="changeIndex('riskIndex', 3)"
                :class="riskIndex == 3 ? 'tabActive' : ''"
              >研发加计扣除及高新技术企业认定管</li>
              <li
                @click="changeIndex('riskIndex', 4)"
                :class="riskIndex == 4 ? 'tabActive' : ''"
                style="margin-right: 0;"
              >付汇备案管理</li>
            </ul>
            <div class="tabContent" v-show="riskIndex === 1">
              <h6>纳税申报机器人（RPA）</h6>
              <p>通过机器人流程自动化技术，自动登录税局申报系统，将系统中经审批无误的纳税申报表自动录入税务局纳税申报系统，完成审批流程后点击发送申报。</p>
              <img src="../../../static/images/solution/taxSystem/feature-img-07.png" />
            </div>
            <div class="tabContent" v-show="riskIndex === 2">
              <h6>税务风险管理</h6>
              <p>税务风险监控及预警：风险指标设置、税务风险识别、税务风险展示与预警、税务风险处理跟踪。</p>
              <img src="../../../static/images/solution/taxSystem/feature-img-08.png" />
            </div>
            <div class="tabContent" v-show="riskIndex === 3">
              <h6>研发加计扣除及高新技术企业认定管</h6>
              <p>
                研发加计扣除：辅助帐管理、备查资料管理、申报前自查；
                <br />高新技术企业认定：辅助帐管理、备查资料管理；
                <br />研发加计&高新认定风险监控。
              </p>
            </div>
            <div class="tabContent" v-show="riskIndex === 4">
              <h6>付汇备案管理</h6>
              <p>扣缴义务人、费居民企业信息管理、合同信息管理、税金扣缴管理、付汇备案表单管理。</p>
            </div>
          </div>
        </div>

        <!--税务数据管理-->
        <div class="featureContainer" v-show="featureIndex === 5">
          <div class="featureContent">
            <h5>税务数据管理</h5>
            <div class="tabContent" style="margin-top: 30px;">
              <h6>税务管理驾驶</h6>
              <p>置固定模板，根据涉税数据分析结果生成税务管理驾驶舱，以可视化方式展示涉税关键数据。</p>
            </div>
            <div class="tabContent" style="margin-top: 30px;">
              <h6>税务数据与报表管理</h6>
              <p>税务数据与报表管理：纳税分析报告管理、重点税源报表、千户集团报表。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--方案优势-->
    <div class="scheme">
      <h3 class="title">方案优势</h3>

      <div class="scheme-content">
        <div class="container">
          <img src="../../../static/images/solution/taxSystem/scheme_icon1.png" />
          <div class="hover-box-shadow contentBox">
            <h1>连接</h1>
            <p>实现数据连通和共享,标准 API接口，方便对接。</p>
          </div>
        </div>
        <div class="container">
          <img src="../../../static/images/solution/taxSystem/scheme_icon2.png" />
          <div class="hover-box-shadow contentBox">
            <h1>高效</h1>
            <p>一键开票、自助开票、自动防重、 一键取数，提高企业涉税 业务的操作效率。</p>
          </div>
        </div>
        <div class="container">
          <img src="../../../static/images/solution/taxSystem/scheme_icon3.png" />
          <div class="hover-box-shadow contentBox">
            <h1>智能</h1>
            <p>自动识别、自动查验防重、 报销入账控制、进销项 发票数据智能归类。</p>
          </div>
        </div>
        <div class="container">
          <img src="../../../static/images/solution/taxSystem/scheme_icon4.png" />
          <div class="hover-box-shadow contentBox">
            <h1>全面</h1>
            <p>涵盖销项、进项、申报， 为企业提供全面、统一的进、 销项发票池。</p>
          </div>
        </div>
      </div>
    </div>

    <!--案例介绍-->
    <div class="case">
      <h3 class="title">案例介绍</h3>
      <div class="case-panel">
        <ul>
          <li style="margin-left: 0;">
            <img src="../../../static/images/solution/taxSystem/case1.png" />
          </li>
          <li>
            <img src="../../../static/images/solution/taxSystem/case2.png" />
          </li>
          <li>
            <img src="../../../static/images/solution/taxSystem/case3.png" />
          </li>
          <li style="margin-right: 0;">
            <img src="../../../static/images/solution/taxSystem/case4.png" />
          </li>
          <li style="margin-left: 0;">
            <img src="../../../static/images/solution/taxSystem/case5.png" />
          </li>
          <li>
            <img src="../../../static/images/solution/taxSystem/case6.png" />
          </li>
          <li>
            <img src="../../../static/images/solution/taxSystem/case7.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../../../static/images/solution/banner-taxSystem.png";
import demand1 from "../../../static/images/solution/taxSystem/demand-1.png";
import featureBackground from "../../../static/images/solution/public/feature-background.png";
import casePic from "../../../static/images/solution/enterprise/case.png";

export default {
  data() {
    return {
      banner,
      demand1,
      featureBackground,
      casePic,
      carouselIndex: 0,
      featureIndex: 1,
      invoiceIndex: 1, // 产品功能特色-发票管理tab
      taxTypeIndex: 1, // 产品功能特色-各税种计税管理tab
      riskIndex: 1, // 产品功能特色-税务风险管理tab
      menuClass: {
        "active-1": true
      }
    };
  },

  methods: {
    changeIndex(ele, index) {
      this[ele] = index;
    }
  }
};
</script>