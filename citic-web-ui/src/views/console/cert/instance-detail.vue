<style lang="scss" scoped type="text/scss">
    .cert-instance-detail{
        margin-top: 20px;
        background: #fff;
        padding: 0 30px;
        h2{
            font-size: 100%;
        }
        .instance-title{
            font-size: 18px;
            line-height: 65px;
            border-bottom: 1px solid #ccc;
        }
        .page-title{
            text-align: center;
            margin-top: 30px;
            font-size: 16px;
        }
        .detailsMessage{
            height: 50px;
            line-height: 50px;
            background-color: #F5FAFD;
            margin-top: 50px;
            .columnBar{
                width: 5px;
                height: 50px;
                background-color: #00BBF1;
                display: inline-block;
                float: left;
            }
            /deep/h2{
                height: 50px;
                display: inline-block;
                padding-left: 20px;
                font-size: 14px;
            }
        }
    }
</style>
<style lang="scss" type="text/scss">
    .cert-instance-detail{
        .ivu-table th{
            background-color: #F5FAFD;
        }
         .ivu-form-item{
            border-bottom: 1px dashed #ccc;
        }
    }
</style>


<template>
    <div class="cert-instance-detail">
        <Row class="instance-title">
            <Col span="12"><h2>当前状态：<span>{{authStatus | status}}</span></h2></Col>
            <Col span="12"><div style="text-align: right"><Button @click="back">返回上一页</Button></div></Col>
        </Row>

        <ci-web-auth-step :statusFlow="statusFlow"></ci-web-auth-step>

        <ci-instance-table :tenantList="tenantList"
                           :authStatus="authStatus"
                           :order1 = "order1"
                           @_mxGetFormInfo="_mxGetFormInfo"
                           @submitUpdate="submitUpdate"
                           @setEditState="setEditState">
        </ci-instance-table>

        <!--详情信息-->
        <div class="detailsMessage">
            <span class="columnBar"></span>
            <h2>{{authType | type}}</h2>
            <div class="clear"></div>
        </div>
        <ci-instance-common :order="order" v-show="!editStates"></ci-instance-common>
        <ci-instance-edit :order1="order1" v-show="editStates" :authType="authType"></ci-instance-edit>
    </div>
</template>

<script>
    import {formMixin} from 'mixin'
    import WebAuthStep from '../../../components/console/cert/web-auth-step'
    import instanceCommon from '../../../components/console/cert/instance-detail-common'
    import instanceEdit from '../../../components/console/cert/brandAuthRefuse/instance-detail-edit'
    import instanceTable from '../../../components/console/cert/instance-detail-table'
    // import data from  '../../../../static/json/console/data'

    export default {
        mixins: [formMixin],
        components: {
            'ci-web-auth-step': WebAuthStep,
            'ci-instance-common': instanceCommon,
            'ci-instance-edit': instanceEdit,
            'ci-instance-table': instanceTable,
        },
        data() {
            return {
                order: [],
                order1: [],
                tenantList:[],
                id:this.$route.query.id,
                authStatusDesc:this.$route.query.authStatusDesc,
                current:0,
                submitAPI: this.$API_ENUM.CITIC_AUTH_GET_AUTH_INSTANCE_DETAIL,
                // submitAPI: data,
                statusFlow:[],
                authStatus:'',
                authType:'',
                editStates: false
            }
        },
        created(){
            // console.log(JSON.parse(data))
        },

        methods: {
            _mxGetFormInfo() {
                if (this.submitAPI && this.id) {
                    this.$get(this.submitAPI,{authInstanceId:this.id}).then(res => {

                        const {detailParamVOList,auditLogs,auditFlows,authStatus,authType} = res.data
                        this.$nextTick(()=>{
                            detailParamVOList.forEach((item,index)=>{
                                if(item.key === '应用基线'){
                                    detailParamVOList.splice(index,1)
                                }
                            })
                            this.order = detailParamVOList
                            this.order1 = JSON.parse(JSON.stringify(this.order))
                            this.tenantList = auditLogs
                            this.statusFlow = auditFlows
                            this.authStatus = authStatus
                            this.authType = authType
                        })

                    })
                }
            },
            /*
            * 返回上一页
            * */
            back(){
                this.$router.back()
            },
            setEditState(state){
                this.editStates = state
                this.order1 = JSON.parse(JSON.stringify(this.order))
            },
            submitUpdate(json){
                this.$put(`${this.$API_ENUM.CITIC_AUTH_UPDATE_AUTHED}/${this.id}`, {parameters:json}).then(res => {
                    const {msg, message, code} = res;
                    if (code == 200) {
                        this._mxGetFormInfo()
                        this.editStates = false
                    } else {
                        this.$Message.error(msg || message || '操作失败！');
                    }
                });
            }
        },
        filters:{
            type: (authType) =>{
                let text = ''
                switch (authType) {
                    case 'app':
                        text = 'APP认证-信息';
                        break;
                    case 'website':
                        text = '网站认证-信息';
                        break;
                    case 'microblog':
                        text = '微博认证-信息';
                        break;
                    case 'wechat':
                        text = '微信认证-信息';
                        break;
                    default:
                        text = '详情信息';
                }
                return text
            },
            status:(status)=>{
                let authStatus = ''
                switch (status){
                    case 'wait_brand_auth':
                        authStatus = '品牌认证审核中'
                        break;
                    case 'brand_auth_pass':
                        authStatus = '品牌认证审核通过'
                        break;
                    case 'brand_auth_refuse':
                        authStatus = '认证未通过'
                        break;
                    case 'wait_security_auth':
                        authStatus = '安全审核中'
                        break;
                    case 'security_auth_refuse':
                        authStatus = '品牌通过、安全驳回'
                        break;
                    case 'auth_pass':
                        authStatus = '通过审核'
                        break;
                    case 'auth_cancel':
                        authStatus = '取消认证'
                        break;
                    default:
                        authStatus = '';
                }
                return authStatus
            }
        }
    }
</script>
