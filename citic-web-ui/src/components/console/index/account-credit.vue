<style lang="scss">
    .credit-modal{
        .warningHint{
            width: 300px;
            margin-bottom: 10px;
            color: red;
            margin-left: 152px;
            text-align: left;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        .input[type="number"]{
            -moz-appearance: textfield;
        }
    }
</style>
<style lang="scss" scoped>
    .account-credit-panel {
        background: #ffffff;
        margin: auto;
        width: 98%;
        color: rgb(102, 102, 102);
        font-size: 12px;
        height: 295px;
        .title{
            position: relative;
            // padding-left: 26px;
            padding: 20px 20px 0px 46px;
            .line{
                position: absolute;
                display: inline-block;
                background-color: rgb(234, 69, 73);
                height: 14px;
                width: 3px;
                left: 20px;
                top: 26px;
            }
        }
        & > .line{
             background-color: rgba(0, 0, 0, 0.102);
             width: 100%;
             height: 1px;
             margin-top: 25px;
        }
        .content-group{
             margin-top: 24px;
             padding: 0 20px 20px 20px;
            .img-group{

            }
        }


        h3 {
            font-size: 18px;
            color: rgb(51, 51, 51);
            font-weight: bold;
        }

        .content {
            // padding: 40px 0 0 50px;

            .item {
                 font-size: 14px;
                 color: rgba(77, 77, 77, 0.8);
                 margin-bottom: 20px;
                label {
                    vertical-align: middle;
                    padding-right: 5px;
                    /*width: 122px;*/
                    /*text-align: right;*/
                    /*display: inline-block;*/
                }
                span{
                     font-size: 15px;
                }
                .line-of-credit{
                    font-size: 26px;
                    color: rgb(0, 0, 0);
                }

                /deep/ i {
                    vertical-align: middle;
                }

                .status-tip{
                    /deep/ .pop-box {
                        z-index: 3;
                        padding: 12px;
                        text-align: left;
                        top: -110px;
                        white-space: pre-line;
                        word-break: break-all;
                    }
                }

                /deep/ .pop-box{
                    z-index: 3;
                    padding: 12px;
                    text-align: left;
                    top: 0;
                }


            }
        }

    }
</style>


<template>
    <div class="account-credit-panel">
        <h3 class="title" >
            <span class="line"></span>
            账户总览
        </h3>
        <p class="line"></p>
        <Row class="content-group">
            <Col span="6" class="img-group">
                <img src="~static/images/console/index/account-overview-icon.png" >
            </Col>
            <Col span="18">
                <div class="content">
                     <p class="item">
                        <label style="margin-left: -42px">信用额度（元）:</label>

                        <span class="line-of-credit" >{{creditLines}}</span>
                    </p>
                     <p class="item">
                        <label style="margin-left: -28px">可用信用额度:</label>
                        <ci-text-pop text="可用信用额度=信用额度-已消耗信用额度"
                                    :visible="viewAvailable"
                                    position="bottom" :height="40" :width="260" :fontSize='12'>
                            <span @mouseenter="viewAvailable = true"
                                @mouseleave="viewAvailable = false">
                                <Icon type="ios-help-outline" :size="20" :color="availableColor"></Icon>
                            </span>
                        </ci-text-pop>

                        <span style="margin-left: 20px;">{{usableCreditLines}}</span>
                    </p>
                    <p class="item">
                        <label>账户状态:</label>

                        <!--此处text内容按照当前字符串的换行格式展示，删掉空行则缺少间隔-->
                        <ci-text-pop class="status-tip" text="信用超额——冻结：当您的可用额度为0时，信用账户会被冻结。账户冻结后，将不能在平台购买服务。结清费用后，账户状态将恢复正常。

                        支付逾期——冻结：当您有账单未支付并逾期时，信用账户将会被冻结。账户冻结后，将不能在平台购买服务。结清费用后，账户状态将恢复正常。"
                                    :visible="viewStatus"
                                    position="bottom" :height="150" :width="300" :fontSize='12'>
                            <span @mouseenter="viewStatus = true"
                                @mouseleave="viewStatus = false">
                                <Icon type="ios-help-outline" :size="22" :color="statusColor"></Icon>
                            </span>
                        </ci-text-pop>


                        <span style="margin-left: 20px;">{{statusStr}}</span>
                    </p>
                    <p class="item">
                        <label style="margin-left: -56px">可用额度预警设置:</label>

                        <ci-text-pop text="当您账户可用信用额度低于预警值时，邮件每天提醒一次。"
                                     :visible="viewWarning"
                                     position="bottom" :height="40" :width="340" :fontSize='12'>
                            <span @mouseenter="viewWarning = true"
                                  @mouseleave="viewWarning = false">
                                <Icon type="ios-help-outline" :size="22" :color="warningColor"></Icon>
                            </span>
                        </ci-text-pop>


                        <span style="margin-left: 20px;"><Button type="info" size="small" @click="editWarning">编辑预警额度</Button>  当前预警额度{{userWarningCreditLines}}</span>
                    </p>

                </div>


            </Col>
        </Row>
        <Modal
            class-name="credit-modal"
            v-model="warningModal"
            title="预警额度修改">
            <p style="margin: 20px 0 10px;">设置预警额度：
                <input type="number" v-model="warningTxt" @keydown="checkInput($event)" style="width:300px">
<!--                <InputNumber v-model="warningTxt" :type="number" @on-change="warningChange" style="width:300px"></InputNumber >-->
            </p>
            <p class="warningHint">仅支持输入数字，预警额度设置限{{ warningNum }}元-{{ warningCreditLines }}元。</p>
            <div slot="footer">
                <Button type="primary" @click="modifyWarning" :disabled="warningBisabled">确认修改</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                viewStatus: false,
                viewAvailable: false,
                viewWarning: false,

                creditLines: 0,
                usableCreditLines: 0,
                status: '',
                id: '',

                warningNum: 0,
                warningModal:false,
                warningTxt:0,
                userWarningCreditLines:'',
                warningCreditLines:'',
                warningBisabled:true
            }
        },

        created() {
            this.getData(true);
        },

        methods: {
            /*
            * @upData 不更新此数据
            * */
            async getData(upData){

                const res = await this.$get(this.$API_ENUM.CITIC_ACCOUNT_CREDIT_TID);

                if(resOk(res)){
                    this.$nextTick(()=>{

                        const {creditLines, usableCreditLines, status, id, warningCreditLines, userWarningCreditLines} = res.data;

                        if(upData){
                            this.creditLines = `${creditLines}`.FormatPriceStr();
                            this.usableCreditLines = `${usableCreditLines}`.FormatPriceStr();
                            this.status = status;
                        }

                        this.id = id;
                        this.userWarningCreditLines = userWarningCreditLines;
                        this.warningNum = warningCreditLines;
                        this.warningCreditLines = `${creditLines}`.FormatPriceStr();

                    })

                }
            },
            /*
            * 编辑预警额度
            * */
            async editWarning(){
                await this.getData(false)
                this.warningModal = true
                this.warningTxt = this.FormatPriceNum(this.userWarningCreditLines).toFixed(2)

                this.warningRule()
            },
            /*确认修改*/
            modifyWarning(){
                let obj = {
                    userWarningCreditLines:this.FormatPriceNum(this.warningTxt)
                }
                this.$put(`${this.$API_ENUM.CITIC_ACCOUNT_CREDIT_WARNING}/${this.id}`,obj).then(res=>{
                    if(resOk(res)){
                        const {warningCreditLines, userWarningCreditLines} = res.data;

                        this.userWarningCreditLines = userWarningCreditLines;
                        this.warningNum = warningCreditLines;
                    }else{
                        this.getData(true)
                        this.$Message.error(res.msg || res.message || '操作失败！');
                    }
                })
                this.warningModal = false
            },

            /**
             * 金额类型转换 ：String 转 Number
             * */

            FormatPriceNum(val){
                let value = val.toString();
                return Number(value.replace(/\,/g,''))
            },
            //  input框校验
            checkInput(e){
                let prohibitInput= ["-", "e", "+", "E"];
                if(prohibitInput.includes(e.key)){
                    e.preventDefault();
                }
                if(e.key === "."){
                    if(this.warningTxt.indexOf(".") !== -1 || this.warningTxt === ""){
                        e.preventDefault();
                    }
                }
            },
            /*
            * 设置预警额度规则
            * */
            warningRule(){
                let warningTxt = this.FormatPriceNum(this.warningTxt)
                let warningNum = this.FormatPriceNum(this.warningNum)
                let warningCreditLines = this.FormatPriceNum(this.warningCreditLines)

                if(warningTxt >= warningNum && warningTxt <= warningCreditLines){
                    this.warningBisabled = false;
                }else{
                    this.warningBisabled = true;
                }
            }
        },

        computed: {
            statusColor() {
                return this.viewStatus ? "#ee5550" : "";
            },
            warningColor() {
                return this.viewWarning ? "#ee5550" : "";
            },

            availableColor() {
                return this.viewAvailable ? "#ee5550" : "";
            },

            statusStr(){
                if(this.status === 'normal'){
                    return "正常";
                }

                if(this.status === 'freeze'){
                    return "冻结";
                }

                return "";
            }
        },
        watch:{
            warningTxt(newVal,oldVal){
                //  监听额度是否可以修改
                if(/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(this.warningTxt) && this.warningTxt !== ""){
                    this.warningRule()
                }else{
                    this.warningBisabled = true;
                }

                if(!/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(newVal) && newVal !== ""){
                    this.$nextTick(()=>{
                        this.warningTxt = oldVal
                    })
                }
            }
        }
    }
</script>


