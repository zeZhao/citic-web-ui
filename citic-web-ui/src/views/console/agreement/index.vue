<template>
    <div class="agreement">
        <Card class="main" :bordered="false" dis-hover>
            <p slot="title">
                服务合作协议
            </p>
            <div class="explain" v-show="isAgreement">
                <Card>
                    <p style="font-size: 18px;font-weight: bold;line-height: 50px">签署协议情况说明：</p>
                    <p>《服务合作协议》内容包含：</p>
                    <p>协议主体-《服务合作协议》</p>
                    <p>协议附件一-《保密协议》</p>
                    <p>协议附件二-《企业级服务协议SLA》</p>
                    <p style="color: red">请填写补充协议中涉及的甲方信息部分并确认协议内容</p>
                </Card>
                <div style="text-align: center">
                    <Button type="primary" :disabled="sign" size="large" style="margin-top: 20px" @click="goCooperation">立即签署</Button>
                </div>
            </div>
            <ci-cooperation ref="cooperation" :firstParty="firstParty" v-show="isCooperation" @goConfidentiality="goConfidentiality"></ci-cooperation>
            <ci-confidentiality ref="confidentiality" :firstParty="firstParty" v-show="isConfidentiality" @goEnterprise="goEnterprise" @goCooperation="goCooperation"></ci-confidentiality>
            <ci-enterprise ref="enterprise" :firstParty="firstParty" v-show="isEnterprise" @goConfidentiality="goConfidentiality" @protocol="protocol"></ci-enterprise>
            <ci-modal :isProtocol="isProtocol" @protocol="protocol" @protocolF="protocolF" :dataForm="dataForm"></ci-modal>
        </Card>
    </div>
</template>

<script>
import cooperation from 'com/console/agreement/cooperation-agreement'
import confidentiality from 'com/console/agreement/confidentiality-agreement'
import enterprise from 'com/console/agreement/enterprise-agreement'
import modal from 'com/console/agreement/agreement-modal'

let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    export default {
        data() {
            return {
                isAgreement:true,
                isCooperation:false,
                isConfidentiality:false,
                isEnterprise:false,
                isProtocol:false,
                dataForm:{},
                ConfidentialityForm:{},
                EnterpriseForm:{},
                firstParty:{},
                sign:true,
            }
        },
        created(){
            this.judgingDuplicateSignature()
        },
        methods:{
            judgingDuplicateSignature(){
                this.$get(this.$API_ENUM.JUDGING_DUPLICATE_SIGNATRUE).then(res=>{
                    if(!res.data){
                        this.sign = false;
                    }
                })
            },
            goCooperation(){
                this.isAgreement = false
                this.isCooperation = true
                this.isConfidentiality = false
                this.isEnterprise = false
                this.loadAgreementEssentialInfo()
            },
            goConfidentiality(data){
                this.isAgreement = false
                this.isCooperation = false
                this.isConfidentiality = true
                this.isEnterprise = false
                this.ConfidentialityForm = data
            },
            goEnterprise(data){
                this.isAgreement = false
                this.isCooperation = false
                this.isConfidentiality = false
                this.isEnterprise = true
                this.EnterpriseForm = data
            },
            protocol(){
                Object.assign(this.dataForm,this.ConfidentialityForm,this.EnterpriseForm)
                this.isProtocol = !this.isProtocol ;
            },
            protocolF(){
                let tenant = {
                    tenantName:this.firstParty.fullName,
                    tenantAddress:this.firstParty.streetAddress,
                    tenantLegalPerson:this.firstParty.legalRepresentName,
                    tenantId:this.$store.state.userInfo.TENANT_INFO.citicId,
                    mainTerm:''
                }
                let protocolData = Object.assign({},this.dataForm,tenant)
                this.submitApplications(protocolData)
            },
            loadAgreementEssentialInfo(){
                this.$get(this.$API_ENUM.LOAD_AGREEMENT_ESSENTIAL_INFO, {
                }).then(res => {
                    this.firstParty = res.data
                })
            },
            /*
            * 确认协议
            * */
            submitApplications (data){
                this.$post(this.$API_ENUM.ADD_AGREEMENT,data).then(res => {
                    if(res.code=='200'){
                        this.isProtocol = false;
                        this.$router.push({path:'./agreement/signing'})
                    }else{
                        this.isProtocol = false;
                        this.$Message.error('提交失败！');
                    }
                })
            }
        },
        components:{
            'ci-cooperation':cooperation,
            'ci-confidentiality':confidentiality,
            'ci-enterprise':enterprise,
            'ci-modal':modal
        }
    }
</script>

<style lang="scss">
    .agreement{
        /*margin-top: 20px;*/
        /deep/ .cooperation,.confidentiality,.enterprise{
            width: 100%;
            .step {
                width: 800px;
                margin: 20px auto;
            }
            .agree-con {
                margin-top: 20px;
                width: 100%;
                .agree-header {
                    width: 100%;
                    margin-top: 20px;
                    margin-bottom: 10px;
                    text-align: center;
                    .agree-hd-tit {
                        font-size: 18px;
                        font-weight: 600;
                        .bluealert {
                            color: #3f51b5;
                        }
                    }
                }
            }
            .agree-container {
                line-height: 25px;

                .underline-sm{
                    display: inline-block;
                    width: 80px;
                    vertical-align: sub;
                    border-bottom: 1px solid #222;
                }
                .sign-half {
                    padding-left: 20px;
                    display: inline-block;
                    float: left;
                    width: 50%;
                }
                .bluealert {
                    color: #3f51b5;
                }
                .bottomline {
                    text-decoration: underline;
                }
                .redalert {
                    color: red;
                }
                .dash-border {
                    border: 2px dashed #D6000E;
                    padding: 10px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    margin-top:20px;
                    .redalert {
                        color: red;
                        font-size: 12px;
                    }
                }
            }
        }
    }

</style>
