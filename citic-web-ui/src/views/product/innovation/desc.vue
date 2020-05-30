<template>
    <div class="innovation-details">
        <div class="innovation-details-bg">
            <div class="steper-wrapper" id="steper">
                <div class="steper-center">
                    <a class="back" @click="routerback()"><Icon type="chevron-left"></Icon> 返回</a>
                    <div class="steper-item right">
                        <div class="step-con">
                            <img src="~static/images/innovation/innovation-steper1.png">
                            <span class="steper-title">需求分析</span>
                        </div>
                    </div>
                    <div class="steper-item">
                        <span class="step-line"></span>
                        <div class="step-con">
                            <img src="~static/images/innovation/innovation-steper2.png">
                            <span class="steper-title">项目立项</span>
                        </div>
                    </div>
                    <div class="steper-item">
                        <span class="step-line"></span>
                        <div class="step-con">
                            <img src="~static/images/innovation/innovation-steper3.png">
                            <span class="steper-title">应用设计</span>
                        </div>
                    </div>
                    <div class="steper-item">
                        <span class="step-line"></span>
                        <div class="step-con">
                            <img src="~static/images/innovation/innovation-steper4.png">
                            <span class="steper-title">开发测试</span>
                        </div>
                    </div>
                    <div class="steper-item">
                        <span class="step-line"></span>
                        <div class="step-con">
                            <img src="~static/images/innovation/innovation-steper5.png">
                            <span class="steper-title">上线运营</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="innovation-steper-center">

                <div class="innovation-subsidiary" v-for="(tenantItem, index) in defaultDesc" :key="tenantItem.tenantId" :value="tenantItem.tenantId" :label="tenantItem.tenantId">
                    <h2 class="subsidiary-name">{{tenantItem.tenantName}}</h2>
                    <div class="subsidiary-innovation-bg"  v-for="(infoList, ind) in tenantItem.infoList" :key="infoList.id" :value="infoList.id" :label="infoList.id" @click="todetail(infoList.id)">
                        <div :title="infoList.applicationName" class="innovation-subsidiary-name">{{infoList.applicationName}}</div>
                        <div class="group" v-for="i in num" :class="setClass(i,infoList.projectStage)">
                            <div class="point"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
    import UrlUtil from 'utils/url';
    import Api from "utils/apiEnum.js"


export default {
  data () {
    return {
      num : 5,
      defaultDesc: [],
      pageIndex: 1,
      isLoading: true, //是否继续加载开关
    }
  },
    mounted(){
        this.getProjectStageInfo()
        window.scrollTo(0,0)
    },
    updated(){
        this.winscroll()
    },
  methods:{
      todetail(id) {
          this.$router.push({
              path: 'details',
              query: {
                  id
              }
          });
      },
      winscroll() {
              window.onscroll = () => {
                  // 到底部时加载一次
                  let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                  let bottomOfWindow = document.body.scrollHeight  - scrollTop - window.innerHeight <= 0
//                  console.log(document.body.scrollHeight , scrollTop, window.innerHeight,bottomOfWindow )

                  let oDiv = document.getElementById('steper');
                  let divT = oDiv.offsetTop;
//                 console.log(scrollTop,bottomOfWindow,this.isLoading)
                  if (bottomOfWindow && this.isLoading) {
                      this.pageIndex++;
                      this.getProjectStageInfo()
    //                  console.log('this.defaultDesc:', this.defaultDesc)
                  }
                  if (scrollTop >= 80) {
                      if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
                          // 兼容IE6代码
                          oDiv.style.position = 'absolute';
                          oDiv.style.top = scrollT + 'px';
                          oDiv.style.left = 0 + 'px';
                      } else {
                          // 正常浏览器代码
                          oDiv.style.position = 'fixed';
                          oDiv.style.top = 0;
                          oDiv.style.left = 0;
                          oDiv.style.background= '#05152b';
                      }
                  } else {
                      oDiv.style.position = 'relative';
                  }
              }
      },
      getProjectStageInfo(){
        const _param = {
            pageIndex: this.pageIndex
        }
        this.$get(Api.INNOVATE_INNOVATEPROJECTSTAGEINFO, _param,false).then(res => {
            if(res.data.length > 0) {
                this.defaultDesc = this.defaultDesc.concat(res.data);
                this.isLoading= true;
            }else {
                this.isLoading= false
                this.$Message.info("已经没有数据")
            }
        }).catch(e=>{
            console.warn("错误");
        })
    },
    setClass(i,select){
//        console.log(i,select,i <= select)
      let classText = "";

      if(i != 1){
        classText = "line";
      }

     if(i <= select){
        classText+=" activity"
     }

      return classText;
    },

      routerback() {
          this.$router.back(-1)
      },
  }
}
</script>

<style scoped lang="scss">
.innovation-details{
    background: #05152b;
    .innovation-details-bg {
        width: 100%;
        background: url(~static/images/innovation/innovation-step-bg.png) top center no-repeat;
        .steper-wrapper {
            margin: 0 auto 40px;
            display: block;
            overflow: hidden;
            float: left;
            z-index: 10;
            box-shadow: 10px 10px 5px #05152b;
            width: 100%;
            .steper-center {
                width: 1200px;
                margin: 0 auto;
                display: block;
                overflow: hidden;
                .back{
                    margin-top: 20px;
                    font-size: 14px;
                    color: #757980;
                    display: block;
                }
            }
            .steper-item {
                display: inline-block;
                width: 220px;
                .step-con{
                    overflow: hidden;
                    display: inline-block;
                    float: left;
                    width:70px;
                    .steper-title{
                        display: inline-block;
                        text-align: right;
                        color: #2aa3b4;
                        font-size: 16px;
                        font-weight: bold;
                        margin-top: 20px;
                    }
                }
                .step-line {
                    display: inline-block;
                    float: left;
                    width: 142px;
                    margin-right: 8px;
                    height: 30px;
                    border-bottom: 1px solid #E6E6E6;
                    text-align: center;
                    border-color: #293d57;
                }
            }
            .right{
                .step-con{
                    float: right;
                }
            }
        }
        .innovation-steper-center{
            width: 1200px;
            margin: 0 auto;
            display: block;
            overflow: hidden;
        }
    }
}
.innovation-subsidiary{
    padding:15px 0;
    .subsidiary-name{
        display: block;
        color: #2aa3b4;
        font-size: 22px;
        font-weight: bold;
        margin: 0px auto 20px;
    }
    .subsidiary-innovation-bg{
        display: block;
        background: #0d1c32;
        width: 100%;
        padding: 20px 40px;
        cursor: pointer;
        margin:10px auto;
        &:hover{
             background: #26364d;
         }
        .innovation-subsidiary-name{
            color: #ffffff;
            font-size: 14px;
            width: 140px;
            display: inline-block;
            float: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .group{
            display: inline-block;
        }
        .activity {
            &:before{
                 background-color: #27d6fb;
                 width: 218px;
             }
        }
        .line {
            &:before{
                 width: 218px;
             }
        }
    }
}




.point{
  vertical-align: middle;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  position: relative;
  display: inline-block;
  background-color: #31435c;
}

.line{
  display: inline-block;
  margin-left: -5px;

}
.line:before{
  content:' ';
  vertical-align: middle;
  display: inline-block;
  width: 100px;
  height: 4px;
  background-color:  #31435c;
}
.activity .point{
    background-color: #37def3;
}

.activity:before{
  background-color:  #27d6fb;
}
</style>
