<template>
    <div class="agreemeny-modal">
        <Modal v-model="isInformation"
               class-name="infor"
               scrollable title=""
               closable
               :loading="loadings"
               cancel-text="返回修改"
               @on-ok="onOk"
               @on-cancel="onCancel"
               :styles="{top: '120px'}"
               style="text-align: left !important;">
            <div class="ivu-modal-body">
                <p class="title">银行账户信息：</p>
                <p><span style="width: 150px">名称：</span><span>{{dataForm.mainAccountname}}</span></p>
                <p><span style="width: 150px">开户行：</span><span>{{dataForm.maindepositbank}}</span></p>
                <p><span style="width: 150px">账号：</span><span>{{dataForm.mainAccountnumber}}</span></p>
            </div>
            <div class="ivu-modal-body">
                <p class="title">通讯信息：</p>
                <p><span style="width: 150px">地址：</span><span>{{dataForm.mainAddress}}</span></p>
                <p><span style="width: 150px">电话：</span><span>{{dataForm.mainTelephone}}</span></p>
                <p><span style="width: 150px">传真：</span><span>{{dataForm.mainFax}}</span></p>
                <p><span style="width: 150px">收件人：</span><span>{{dataForm.mainRecipients}}</span></p>
            </div>
            <div class="ivu-modal-body">
                <p class="title">接收方收件地址信息：</p>
                <p><span style="width: 150px">地址：</span><span>{{dataForm.accessory1Address}}</span></p>
                <p><span style="width: 150px">邮政编码：</span><span>{{dataForm.accessory1Postcode}}</span></p>
                <p><span style="width: 150px">电话号码：</span><span>{{dataForm.accessory1Telephone}}</span></p>
                <p><span style="width: 150px">传真：</span><span>{{dataForm.accessory1Fax}}</span></p>
                <p><span style="width: 150px">收件人：</span><span>{{dataForm.accessory1Recipients}}</span></p>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        props:{
            isProtocol:{
                type:Boolean,
                default: false,
                required: true,
            },
            dataForm:{
                type:Object
            }
        },
        data() {
            return {
                isInformation:false,
                loadings:true
            }
        },
        watch: {
            isProtocol(val){
                this.isInformation = val
            }
        },
        methods:{
            onOk(){
                this.$emit('protocolF')
            },
            onCancel(){
                this.isInformation = false
                this.$emit('protocol')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ivu-modal-body {
        padding: 5px 16px !important;
        font-size: 12px;
        line-height: 1.5 !important;
        text-align: left;
        .title{
            font-size: 14px;
            font-weight: bold;
            margin-left: -30px;
        }
        p{
            padding-left: 30px;
        }
    }

</style>
