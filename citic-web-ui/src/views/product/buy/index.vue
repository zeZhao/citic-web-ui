<style scoped lang="scss">
    .product-buy {

        .content {
            width: 1200px;
            margin: 0 auto 100px auto;
            padding: 20px 150px 20px 250px;

            .router-group {
                text-align: left;
                padding-top: 20px;

                .router {

                    &.link {
                        cursor: pointer;

                        &::after {
                            content: '>';
                            padding: 0 5px;
                        }
                    }
                }
            }

            .title {
                padding: 40px 0 30px 0;
            }

            .base-form {
                margin-top: 30px;

                .select-spin {
                    display: inline-block;
                    padding: 0 10px;

                    .select-spin-icon-load {
                        animation: ani-select-spin 1s linear infinite;
                    }

                    @keyframes ani-select-spin {
                        from {
                            transform: rotate(0deg);
                        }
                        50% {
                            transform: rotate(180deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    .select-spin-col {
                        height: 100px;
                        position: relative;
                        border: 1px solid #eee;
                    }
                }

                .unit {
                    padding: 0 10px;
                    vertical-align: middle;
                }

                .error-tip {
                    font-size: 12px;
                    color: #ed3f14;
                    line-height: 24px;
                }
            }

            .clause-block{
                padding: 40px 0;

                /deep/ .ivu-checkbox-wrapper{
                    margin: 0;
                }

                .clause-link{
                    color: #2d8cf0;
                    text-decoration: underline;
                    text-decoration-color: #2d8cf0;
                    cursor: pointer;
                }
            }
        }


    }
</style>

<style lang="scss">
    .product-buy {
        .base-form {

            .ivu-input-wrapper, .ivu-input, .ivu-select {
                width: 500px !important;
            }
        }

        .require-item {

            .ivu-form-item-label::before {
                content: '*';
                display: inline-block;
                color: #ed3f14;
                font-family: SimSun, serif;
                vertical-align: middle;
                margin-right: 4px;
                line-height: 1;
                font-size: 12px;
                position: relative;
                top: -1px;
            }
        }
        .base-form{
            .input-tip{
                font-size: 18px;
                padding: 0 10px;

                vertical-align: middle;
            }
            .line-tip{
                 font-size: 12px;
                 line-height: 14px;
                 margin-top: 2px;
                 color: #ccc;
                 display: table-cell;
                 vertical-align: middle;
                 /deep/ .ivu-tooltip-rel{
                     i{
                         transform: translateY(-1px)
                     }
                 }
                 .icon{
                     font-size: 15px;
                 }
            }
            .item-mb{
                margin-bottom: 12px;
            }
        }
    }

    @import "../../../assets/scss/order.scss";
</style>

<template>
    <div class="product-buy">
        <div class="content">

            <div class="router-group">
                <router-link to="/"><span class="router link">首页</span></router-link>
                <router-link to="/product/center"><span class="router link">产品中心</span></router-link>
                <span class="router">{{supplierService.name}}</span>
            </div>

            <h1 class="title">{{supplierService.name}}</h1>

            <ci-credit-management @credit-info-change="getCreditInfo"></ci-credit-management>

            <Form :label-width="90" class="base-form" :model="form">

                <!--防止浏览器自动填充-->
                <input id="userName" type="text" v-show="false"/>
                <input class="0" type="password" v-show="false"/>

                <FormItem v-for="(item, index) in formItems" v-if="item.valid" :label="item.keyName" :key="index"
                          :class="{'ivu-form-item-error': item.error, 'require-item': item.required ,'item-mb': judgingTip(item, 'UNDER') ||  judgingTip(item, 'UNDER_QUESTION')}">

                    <template v-if="item.keyType === 'input' || item.keyType === 'password'">
                        <Tooltip placement="top" class="input-tip" style="padding:0;"  v-if="judgingTip(item, 'INNER')">
                             <Input :type="item.keyType === 'input' ? 'text' : 'password'" :placeholder="item.remind"
                               v-model="form[item.citicKey]"
                               autocomplete="off"
                               @on-focus="inputFoucs(item.citicKey, index)"
                               @on-blur="inputBlur(item.citicKey, index)"></Input>
                            <div slot="content" v-html="item.remindList[0].remindContent" style="white-space: normal;">

                            </div>
                        </Tooltip>


                        <Input :type="item.keyType === 'input' ? 'text' : 'password'" :placeholder="item.remind"
                               v-model="form[item.citicKey]"
                               autocomplete="off"
                               @on-focus="inputFoucs(item.citicKey, index)"
                               @on-blur="inputBlur(item.citicKey, index)" v-else></Input>

                    </template>

                    <template v-if="item.keyType === 'select'">
                        <Select clearable @on-change="selectChange(item.citicKey, index)" v-model="form[item.citicKey]">
                            <Option v-for="option in item.option"
                                    :key="option.key"
                                    :value="option.key"
                            >
                                {{option.value}}
                            </Option>
                        </Select>

                        <Spin class="select-spin" v-show="loadingMap[item.citicKey]">
                            <Icon type="load-c" class="select-spin-icon-load"></Icon>
                        </Spin>

                    </template>


                    <template v-if="item.keyType === 'searchSelect'">
                        <Select clearable @on-change="selectChange(item.citicKey, index)" v-model="form[item.citicKey]" filterable :placeholder="'请输入要搜索的内容'">
                            <Option v-for="option in item.option"
                                    :key="option.key"
                                    :value="option.key"
                            >
                                {{option.value}}
                            </Option>
                        </Select>

                        <Spin class="select-spin" v-show="loadingMap[item.citicKey]">
                            <Icon type="load-c" class="select-spin-icon-load"></Icon>
                        </Spin>
                    </template>



                    <template v-if="item.keyType === 'button'">
                        <RadioGroup v-model="form[item.citicKey]" type="button"
                                    @on-change="radioChange(item.citicKey, index)">
                            <Radio v-for="option in item.option"
                                   :key="option.key"
                                   :label="option.key"
                            >
                                <span @click="radioClick(item.citicKey, index, option.key)">{{option.value}}</span>
                            </Radio>
                        </RadioGroup>
                         <Spin class="select-spin" v-show="loadingMap[item.citicKey]">
                            <Icon type="load-c" class="select-spin-icon-load"></Icon>
                        </Spin>
                    </template>
                    <span class="unit" v-if="item.unit">{{item.unit}}</span>


                     <Tooltip placement="top" class="input-tip" v-if="judgingTip(item, 'RIGHT_QUESTION')">
                        <Icon type="ios-help-outline" class=""></Icon>
                        <div slot="content" v-html="item.remindList[0].remindContent" style="white-space: normal;">
                        </div>
                    </Tooltip>


                     <!-- {{item}} -->
                    <div class="line-tip" v-if="judgingTip(item, 'UNDER')">
                        {{item.remindList[0].remindContent}}
                    </div>

                     <div class="line-tip " v-if="judgingTip(item, 'UNDER_QUESTION')">
                        {{item.remindList[0].remindContent}}
                        <Tooltip placement="top" class="input-tip" >
                            <Icon type="ios-help-outline" class="icon"></Icon>
                            <div slot="content" v-html="item.remindList[0].desc" style="white-space: normal;">
                            </div>
                        </Tooltip>
                    </div>


                    <p class="error-tip" v-if="item.errorTip">{{item.errorTip}}</p>

                </FormItem>

                <ci-cost-center ref="costCenter"></ci-cost-center>

                <FormItem label="购买备注">
                    <Input v-model="form.remarks" @on-change="mkChange" type="textarea" :maxlength="300" :rows="4" placeholder="选填，可输入300字（不支持特殊字符）..."></Input>
                    <p v-show="mkHint" style="color: red">不支持特殊字符</p>
                </FormItem>
            </Form>




            <div class="clause-block">
                <p>
                    <Checkbox class="statement-checkbox" v-model="acceptStatement">我已同意</Checkbox>
                    <span class="clause-link" @click="openStatement">法律地位声明</span>
                </p>
                <br>
                <p v-if="haveClause">
                    <Checkbox v-model="acceptClause">我同意</Checkbox>
                    <span class="clause-link" @click="openClause">服务条款</span>
                </p>
            </div>

        </div>

        <ci-cost-float :cost="priceArray" :loading="loading" @submit="submit" ref="costBar" :todo="todo"
                       :disabled="!canSubmit"/>

        <ci-dialog :value.sync="visibleOrder">
            <template slot="body">
                <span class="icon-success"></span>
                <p class="dialog-title">您的订单已提交成功！</p>
                <p class="dialog-subtitle">www.c.citic</p>
            </template>

            <template slot="footer">
                <div class="dialog-button-group">
                    <Button type="ghost" shape="circle" @click="visibleOrder = false">确定</Button>
                    <Button type="error" shape="circle" @click="toOrderList">去订单列表</Button>
                </div>
            </template>
        </ci-dialog>

        <!--法律地位声明弹窗-->
        <ci-dialog class="statement-dialog" :value.sync="showStatement"  :maskClosable="false">
            <template slot="header">
                法律地位声明
            </template>

            <template slot="body">
                <p class="statement" v-if="supplierService.name">
                     &nbsp;&nbsp;&nbsp;&nbsp;您通过中信云（www.c.citic）向
                    <span class="height-light">【{{supplierService.supplier.name}}】</span>采购
                    <span class="height-light">【{{supplierService.name}}】</span>，
                    中信科技发展有限公司作为中信云平台的运营方，在您采购的产品或服务出现质量责任问题时，
                    将根据您的合法要求，协助、配合您就所造成的损失向服务方进行相应的索赔及主张
                    <span class="height-light">【{{supplierService.supplier.name}}】</span>承担相应的责任。
                </p>

            </template>

            <template slot="footer">
                <div class="dialog-button-group">
                    <Button shape="circle" class="submit-btn" @click="showStatement = false">确认同意</Button>
                </div>
            </template>
        </ci-dialog>
    </div>
</template>

<script>
    import costFloat from '../../../components/product/buy/costFloat'
    import costCenter from '../../../components/product/buy/costCenter'

    export default {
        data() {
            let form = {};
            let quantity = 1;
            let remarks = "";
            let autoRenew = true;

            //默认从连接上获取参数信息
            let { supplierAlias, serviceAlias, actionType, todo = '' , id} = this.$route.query;

            //本地session中如果记录了数据，使用本地数据做默认值
            const config = this.$getSession(this.$LOCAL_STORAGE_KEYS.EDIT_INSTANCE_CONFIG + id);
            if (config) {
                const { configList, supplierAlias: _supplierAlias, serviceAlias: _serviceAlias } = config;
                configList.forEach(item => {
                    form[item.key] = item.value;
                });

                //实例个数
                quantity = config.quantity;
                //留言
                remarks = config.remarks;
                //是否使用自动续费
                autoRenew = config.autoRenew;

                supplierAlias = _supplierAlias;
                serviceAlias = _serviceAlias;
            }

            return {
                //订单编辑完整数据
                config: config,
                //从那个页面跳转到此页面进行操作 cartEdit：购物车编辑
                todo,

                //正常购买进入页面需要别名字段
                supplierAlias,
                serviceAlias,
                actionType,

                //请求接口使用的参数
                supplierId: '',
                citicActionId: '',
                citicServiceId: '',

                //供应商信息
                supplierService: {},
                //表单展示项目
                formItems: [],
                //表单数据
                form,
                //算费结果
                priceArray: [],
                //是否全部计费项都有值
                priceSatisfy: false,
                //表单项目校验规则
                verify: {},
                //当前用户信息
                userInfo: this.$store.state.userInfo.USER_INFO,
                tenantInfo: this.$store.state.userInfo.TENANT_INFO,
                //记录上一次的input数据，input失去焦点判断前后数据一致，一致则不重复调用刷新表单项规则
                formRecord: '',
                //记录接口是否处于加载中状态
                loading: false,
                //订单成功后对话框
                visibleOrder: false,

                //实例个数
                quantity,
                //留言
                remarks,
                //是否使用自动续费
                autoRenew,

                //记录下拉框是否是加载状态
                loadingMap: {},

                //记录当前操作的时间戳，防止请求结果反跳
                actionTime: 0,

                //信用管控，禁止购买, true: 禁止购买， false: 允许购买
                creditProhibit: false,

                //是否有服务条款
                haveClause: false,
                //是否接受服务条款creditProhibit
                acceptClause: false,
                // 服务条款id
                clauseId: '',

                //展示法律声明
                showStatement: false,
                //是否接受声明
                acceptStatement:  false,
                //备注提示
                mkHint:false,
            };
        },

        created() {

        },

        mounted() {
            this.initPage()
        },

        methods: {
            /**
             * 初始化页面数据
             */
            async initPage() {

                this.getCreditInfo();



                //根据别名换取id
                await this.$get(`${this.$API_ENUM.CITIC_CONDITION_IDS}/${this.supplierAlias}?serviceAlias=${this.serviceAlias}&actionType=${this.actionType}`).then(res => {
                    const {actionId, serviceId, supplierId} = res;
                    this.supplierId = supplierId;
                    this.citicServiceId = serviceId;
                    this.citicActionId = actionId;
                });

                //获取表单所有的项目
                await this.$get(`${this.$API_ENUM.CITIC_CONDITION_INITKEY}/${this.supplierId}/${this.citicActionId}`).then(res => {
                    console.log(res)
                    const form = {};
                    const formItems = [];
                    res.data.map(item => {
                        form[item.key] = this.form[item.key] || '';
                        this.loadingMap[item.key] = false;

                        //初始化表单项需要的数据
                        //默认表单项为正确的
                        item.value.error = false;
                        item.value.errorTip = '';

                        if (item.value.unit === 'NONE') {
                            item.value.unit = '';
                        }
                        formItems.push(item.value);
                    });
                    this.form = form;
                    //表单项排序
                    this.formItems = formItems.sort((x, y) => {
                        return x.num > y.num ? 1 : -1;
                    });
                });

                //获取所有表单项对应的可选值
                this.getFormItemValue();

                //获取供应商信息
                await this.$get(`${this.$API_ENUM.SUPPLIER_SERVICES_SUPPLIERSERVICE}/${this.supplierId}/${this.citicServiceId}`).then(res => {
                    const supplierService = res.data;
                    this.$setPageTitle(supplierService.name);
                    this.supplierService = supplierService;

                    // 查询条款信息
                    this.getClause();
                });

                //获取静态和动态校验规则
                this.$get(`${this.$API_ENUM.SUPPLIER_CHECK}`, {
                    'supplierKey.supplierService.id': this.supplierService.id,
                    'supplierServiceId':this.supplierService.id,
                    pageSize: 99,
                    pageIndex: 1,
                }).then(res => {
                    const regular = res.data.content;
                    const verify = {};
                    //将校验规则整理成map
                    regular.forEach(item => {
                        const { supplierKey: { key } } = item;
                        let verifyItem = verify[key] || {};

                        if (this.form[key] !== undefined) {
                            let { checkType, expression, alterText } = item;
                            if (checkType === 'STATIC') {
                                verifyItem.STATIC = (verifyItem.STATIC || []).concat({
                                    alterText,
                                    reg: new RegExp(this.$Base64.decode(expression)),
                                })

                            } else if (checkType === 'DYNAMIC') {
                                verifyItem.DYNAMIC = true;
                            }
                            verify[key] = verifyItem;
                        }
                    });
                    this.verify = verify;
                });
            },

            /**
             * 获取所有表单项目的可选值
             */
            getFormItemValue(citicKey = '') {
                const time = new Date().getTime();
                if (time > this.actionTime) {
                    this.actionTime = time;
                }
                this.loadingMap[citicKey] = true;
                this.loading = true;
                const { citicId } = this.tenantInfo;
                this.$post(`${this.$API_ENUM.CITIC_CONDITION_RESULT}/${this.supplierId}/${this.citicActionId}/${citicId}`, this.form).then(res => {

                    if (time !== this.actionTime) {
                        this.loadingMap[citicKey] = false;
                        return;
                    }

                    //过滤项目中的value为null的数组项目
                    const rules = res.data.map(item => {
                        item.value = item.value.filter(entry => {
                            return !!entry.key;
                        });
                        return item;
                    });

                    //将规则数组转换为map格式
                    const rulesMap = new Map();
                    rules.forEach(item => {
                        const { key, value } = item;
                        rulesMap.set(key, value);
                    });

                    //标记此次表单更新后，是否需要再次调用此接口刷新表单项目
                    let needUpdateFormItems = false;

                    //设置表单条目是否可以展示出来
                    //将规则中的选项数据放入表单条目项
                    let formItems = this.formItems;
                    formItems = formItems.map(item => {
                        const citicKey = item.citicKey;
                        //默认项目都为隐藏
                        item.valid = false;
                        // console.log(item)
                        //判断formItems中的key是否存在于rules,存在则继续
                        if (rulesMap.has(citicKey)) {
                            switch (item.keyType) {
                                case 'input':
                                case 'password':
                                    item.valid = true;
                                    break;
                                case 'select':
                                case 'searchSelect':
                                case 'button':
                                    const option = rulesMap.get(citicKey);

                                    //将选项值放入表单项中
                                    item.option = option;
                                    //判断选项值是否为空数组，空数组则不展示
                                    item.valid = option.length > 0;

                                    //如果项目为必填项，且选项值只有一个，则默认选中此项
                                    if (item.valid && item.required && option.length === 1) {
                                        //判断 若上次的结果已经是选中状态，则不需要再更新表单项目，
                                        //若此次是第一次更新为选中状态则重新调用更新表单项目的接口
                                        if (this.form[citicKey] !== option[0].key) {
                                            this.form[citicKey] = option[0].key;
                                            needUpdateFormItems = true;
                                        }
                                    }
                                    // let citicKeyArray = ['VpcId']

                                    // if (item.valid && item.required && option.length > 1 && citicKeyArray.includes(citicKey) && this.supplierAlias=="aliyun" && this.supplierAlias=="vpn" ) {
                                    //     //判断 若上次的结果已经是选中状态，则不需要再更新表单项目，
                                    //     //若此次是第一次更新为选中状态则重新调用更新表单项目的接口
                                    //     if (this.form[citicKey] !== option[0].key) {
                                    //         this.form[citicKey] = '';
                                    //         needUpdateFormItems = true;
                                    //     }
                                    // }



                                    break;
                            }
                        } else {
                            //不展示的项目需要清除form中的数据
                            this.form[citicKey] = '';
                        }

                        return item;
                    });
                    this.formItems = formItems;
                    if (citicKey) {
                        this.loadingMap[citicKey] = false;
                    }
                    return needUpdateFormItems;
                }).then(needUpdateFormItems => {

                    this.loading = false;
                    if (needUpdateFormItems) {
                        this.getFormItemValue();
                        this.assessment();
                    }else if(this.todo){
                        this.assessment();
                    }
                });
            },

            /*--------------------页面表单操作逻辑----------------------*/
            /**
             * input获取焦点记录数据原始值(优化性能)
             */
            inputFoucs(citicKey, index) {
                this.formRecord = this.form[citicKey];
            },

            /**
             * 输入框失去焦点
             */
            async inputBlur(citicKey, index) {
                const item = this.formItems[index];
                if (!item.valid) {
                    return;
                }

                //校验单个输入框是否正确
                const value = this.form[citicKey];

                if (item.required && !value) {
                    item.error = true;
                    item.errorTip = item.remind;
                    return;
                }

                //判断数据是否发生改变，没有改变则不重新调用接口
                if (value === this.formRecord) {
                    return;
                }

                //判断是否进行静态校验 和 动态校验
                const verifyRule = this.verify[citicKey];
                if (verifyRule && value) {
                    const { DYNAMIC, STATIC } = verifyRule;

                    if (STATIC && STATIC.length) {
                        for (const rule of STATIC) {
                            const { alterText, reg } = rule;
                            if (!reg.test(value)) {
                                item.error = true;
                                item.errorTip = alterText;
                                return;
                            }
                        }
                    }

                    if (DYNAMIC) {
                        const { supplierKeyId, checkType } = item;
                        const { citicId } = this.tenantInfo;
                        const res = await this.dynamicCheck([{
                            supplierKeyId: supplierKeyId,
                            orgId: citicId,
                            input: value,
                            dependenceKeys: this.form,
                            supplierId: this.supplierId,
                            citicServiceId: this.citicServiceId,
                            checkType: checkType,
                        }]);

                        const { code, data } = res;
                        if (code !== 0) {
                            const { allIsOk, failedList } = data;
                            if (!allIsOk) {
                                item.error = true;
                                item.errorTip = failedList[0].alterText;
                                return;
                            }
                        }
                    }
                }

                item.error = false;
                item.errorTip = '';

                //表单验证通过才重新获取新的表单规则 重新算费
                this.getFormItemValue();
                this.assessment();
            },

            /**
             * 下拉框选项改变
             */
            selectChange(citicKey, index) {
                const item = this.formItems[index];
                item.error = false;
                item.errorTip = '';
                this.getFormItemValue(citicKey);
                this.assessment();


            },

            /**
             * 单选按钮选项改变
             */
            radioChange(citicKey, index) {
                const item = this.formItems[index];
                item.error = false;
                item.errorTip = '';
                this.getFormItemValue(citicKey);
                this.assessment();
                 setTimeout( ()=>{
                     this.$forceUpdate()
                },3000 )
            },

            /**
             * radio点击事件，不是必填项重复点击可以反选
             */
            radioClick(citicKey, index, radioValue) {
                //必填表单项不可反选
                if (this.formItems[index].required) {
                    return;
                }

                //重复点击取消已经选择的项目
                if (radioValue === this.form[citicKey]) {
                    this.form[citicKey] = "";
                    this.getFormItemValue();
                    this.assessment();
                }
            },

            /**
             * 动态获取商品价格
             */
            assessment() {
                this.$post(`${this.$API_ENUM.CITIC_PRICE}/${this.supplierId}/${this.citicServiceId}`, this.form).then(res => {

                    let priceSatisfy = true;

                    if (res.code === 0) {
                        //过滤无用数据
                        this.priceArray = res.data.filter(item => {
                            if (item) {
                                return true;
                            } else {
                                //计费项有null说明不满足提交条件
                                priceSatisfy = false;
                                return false;
                            }
                        });
                    } else {
                        this.priceArray = [];
                        priceSatisfy = false;
                    }

                    this.priceSatisfy = priceSatisfy;

                })
            },

            /**
             * 动态校验value
             */
            dynamicCheck(checkKeyList = []) {
                return this.$post(`${this.$API_ENUM.SUPPLIER_CHECK_KEYS}`, checkKeyList);
            },

            /**
             * 校验输入数据只能是正整数
             */
            checkInputNumber(){
                let value = this.quantity;
                if(!value || value.toString().trim() === ''){
                    this.quantity = -1;
                    value = 1;
                }else if(!/^[1-9][0-9]*$/.test(value)){
                    if(value < 0){
                        value = 1;
                    }else if(value.toString().includes(".")){
                        value = Number(value.toString().split('.')[0]);
                    }else {
                        value = 1;
                    }
                    this.quantity = -1;
                }
                this.$nextTick(() => this.quantity = value);
            },
            /*--------------------页面表单操作逻辑结束----------------------*/

            /**
             * 校验整体表单
             * @returns {Promise<boolean>}
             */
            async checkSubmitParam() {
                /**
                 * 校验全部展示出来的并且必填的项目
                 * 校验所有存在 verify 中的key
                 */
                const formItems = this.formItems;
                const form = this.form;

                //标记是否验证通过
                let verify = true;
                let checkKeyList = [];

                for (const item of formItems) {
                    //先判断是否是必填项目为空值
                    const key = item.citicKey;
                    if (item.required && item.valid && !form[key]) {
                        item.error = true;
                        item.errorTip = item.remind;
                        verify = false;
                    } else {
                        //通过必填校验后，重置为校验成功
                        item.error = false;
                        item.errorTip = '';

                        //动态校验 + 静态校验
                        const verifyRule = this.verify[key];
                        const value = this.form[key];
                        let hasError = false;

                        if (verifyRule && value) {
                            const { DYNAMIC, STATIC } = verifyRule;

                            if (STATIC && STATIC.length) {
                                //判断静态校验是否出现错误

                                for (const rule of STATIC) {
                                    const { alterText, reg } = rule;
                                    if (!reg.test(value)) {
                                        item.error = true;
                                        item.errorTip = alterText;
                                        //静态校验规则出错，不再循环检测
                                        hasError = true;
                                        verify = false;
                                        break;
                                    }
                                }
                            }

                            if (!hasError && DYNAMIC) {
                                const { supplierKeyId, checkType } = item;
                                const { citicId } = this.tenantInfo;
                                checkKeyList.push({
                                    supplierKeyId: supplierKeyId,
                                    orgId: citicId,
                                    input: value,
                                    dependenceKeys: this.form,
                                    supplierId: this.supplierId,
                                    citicServiceId: this.citicServiceId,
                                    checkType: checkType,
                                });
                            }
                        }
                    }
                }

                //动态校验一次表单项目
                if (checkKeyList.length) {
                    const res = await this.$post(this.$API_ENUM.SUPPLIER_CHECK_KEYS, checkKeyList);
                    const { code, data } = res;
                    if (code !== 0) {
                        const { allIsOk, failedList } = data;
                        if (!allIsOk) {
                            verify = false;

                            //展示动态校验信息
                            failedList.forEach(item => {
                                const { supplierKeyId, alterText } = item;
                                const formItem = this.formItems.find(item => item.citicKey === supplierKeyId);
                                formItem.error = true;
                                formItem.errorTip = alterText;
                            })
                        }
                    }
                }

                //校验成本中心部分的数据
                if (!await this.$refs.costCenter.validate()) {
                    verify = false;
                }

                return verify;
            },

            /**
             * 获取加入购物车的表单数据
             */
            /* getOrderParam(centerData) {
                 const { costCenter, baseLine } = centerData;

                 return {
                     appBaseId: baseLine,
                     configList: this.formItems.map(item => {
                         const {citicKey : key, keyName : keyDisplay, option} = item;
                         const value = this.form[key];
                         //查找value对应的下拉框、button选项
                         let valueDisplay = value;
                         if(value && option){
                             const selectedOption = option.find(optionItem => optionItem.key === value);
                             valueDisplay = selectedOption.value;
                         }
                         return {
                             key,
                             keyDisplay,
                             value,
                             valueDisplay,
                         }
                     }),
                     costCenterId: costCenter,
                     quantity: this.quantity,
                     remarks: this.remarks,
                     autoRenew: this.autoRenew,
                     // serviceId: this.supplierService.id,
                     // supplierId: this.supplierId,
                     supplierAlias: this.supplierAlias,
                     serviceAlias: this.serviceAlias,
                 }
             },*/

            getFormParam(centerData) {
                const { citicId, email, mobile } = this.userInfo;
                const { name, citicId: tenantCiticId } = this.tenantInfo;
                const { baseLine, baseLineName, costCenter, costCenterName } = centerData;
                let cost = [];
                const prices = this.priceArray.map(item => {
                    const { name, price, unit, priceType } = item;

                    if (cost.length === 0) {
                        if (priceType === 'package') {
                            cost.push({
                                cost_name: '配置费用',
                                cost_unit_name: '元',
                                billingType: 'package',
                                cost_unit: '',
                                cost_value: price
                            });
                        } else {
                            cost.push({
                                cost_name: '配置费用',
                                cost_unit_name: '元',
                                billingType: 'usage',
                                cost_unit: 'h',
                                cost_value: price
                            });
                        }
                    } else {
                        let costFirst = cost[0];
                        costFirst.cost_value = (costFirst.cost_value * 1000000 + price * 1000000) / 1000000;
                    }

                    return `${name}:${price + unit.name}`;

                }).join('<br>'); //TODO 这块为什么要用br分隔？

                let type = "";
                switch (this.actionType) {
                    case "create":
                        type = "add";
                        break;
                }
                if(!this.form.hasOwnProperty('remarks')){
                    this.form.remarks = ''
                }
                let param = {
                    type,
                    id: '',
                    state_id: '1',
                    tenant_id: tenantCiticId,
                    user_id: citicId,
                    email: email,
                    mobile: mobile,
                    tenant_name: name,
                    list_id: '',
                    service_id: this.citicServiceId,
                    cost_ids: costCenter,
                    parameters: {
                        cost_center: `${costCenter}=${costCenterName}=100`,
                        is_auto_renewal: '0',
                        prices,
                        property: "4=生产",
                        app_base_line: `${baseLine}=${baseLineName}`,
                        instance_num: `1`,
                        supplierId: this.supplierId,
                        supplierServiceId: this.supplierService.id,
                        //加入页面表单数据
                        ...this.form,
                    },
                    detail_costs: [
                        {
                            list_id: '',
                            cost
                        }
                    ]
                };

                //2018-10-10 AXL 处理ecs购买参数校验
                if (this.supplierAlias == "aliyun" && this.serviceAlias == "vm" && !this.ecsValidation(param)) {
                    return false;
                }
                return param
            },
            //阿里云服务临时验证方法
            //return true 校验通过  false 校验失败跳转到第三方控制台
            ecsValidation(param) {
                let parameters = param.parameters
                let VpcId = parameters.VpcId;//专有网络
                let VSwitchId = parameters.VSwitchId;//交换机
                let SecurityGroupId = parameters.SecurityGroupId;//所属安全组ID

                if (!VpcId) {
                    this.$Message.error("已选区域无可用专有网络，请在当前区域创建新的专有网络")
                    setTimeout(() => {
                        this.$router.push({
                            path: '/citic-web-ui/console/frame',
                            query: {
                                baseUrl: "console/ali/vpc",
                            }
                        });
                    }, 500)
                    return false
                }
                if (!VSwitchId) {
                    this.$Message.error("已选专有网络在当前可用区没有交换机，请创建新的交换机")

                    setTimeout(() => {
                        this.$router.push({
                            path: '/citic-web-ui/console/frame',
                            query: {
                                baseUrl: "console/ali/vpc",
                            }
                        });
                    }, 500)
                    return false
                }
                if (!SecurityGroupId) {
                    this.$Message.error("没有与已选专有网络匹配的安全组，请为当前专有网络创建安全组")
                    setTimeout(() => {
                        this.$router.push({
                            path: '/citic-web-ui/console/frame',
                            query: {
                                baseUrl: "console/ali/ecs",
                            }
                        });
                    }, 500)
                    return false
                }
                return true
            },

            /**
             * 提交表单
             * action : [buy: 新购, order: 加入购物车, edit: 修改]
             */
            async submit(action) {
                this.loading = true;
                const checkResult = await this.checkSubmitParam();
                const centerData = await this.$refs.costCenter.getCenterData();

                if (!checkResult || !centerData) {
                    this.loading = false;
                    return;
                }

                let param = this.getFormParam(centerData);
                //TODO 临时代码
                if (!param) {
                    return
                }
                switch(action){
                    case 'buy':
                        let resBuy = await this.submitBuy(param);
                        if (resBuy) {
                            this.toOrderList();
                        }
                        break;
                    case 'order':
                        let resOrder = await this.submitBuy(param);
                        if (resOrder) {
                            this.visibleOrder = true;
                        }
                        break;
                    /*case 'edit':
                        await this.submitEdit(param);
                        break;*/
                    default:
                        break;
                }

                this.loading = false;
            },

            /**
             * 提交购买
             */
            submitBuy(param){
                return this.$post(this.$API_ENUM.SRVMGT_ORDERS_UPDATE, param).then(res => {
                    const { msg, message, code } = res;
                    if (code == "200") {
                        return true;
                    } else {
                        this.$Message.error(msg || message || '操作失败！');
                    }
                });
            },

            toOrderList() {
                // location.href = location.origin + "/views/console/console.jsp";
                this.$router.push("/citic-web-ui/console/order")
            },

            /**
             * 获取用户信用数据
             */
            getCreditInfo(creditProhibit){
                this.creditProhibit = creditProhibit;
            },

            /*  /!**
               * 购物车增加
               *!/
              submitOrder(param){
                  return this.$post(`${this.$API_ENUM.SHOPPING_CART_PRODUCTS}/`, param).then(res => {
                      const { success, msg , message} = res;
                      if (success) {
                          this.$refs.costBar.tipOpen();
                          //王佩剑，此处要调用接口更新状态中的购物车商品数量
                          this.$store.dispatch('resetShoppingCartNumber', { context: this });
                      } else {
                          this.$Message.error(msg || message || '操作失败！');
                      }
                  });
              },

              /!**
               * 购物车编辑
               *!/
              submitEdit(param){
                  return this.$put(`${this.$API_ENUM.SHOPPING_CART_PRODUCTS}/${this.config.id}`, param).then(res => {
                      const { success, msg, message, code } = res;
                      if (code === 0) {
                          this.$router.back();
                          //王佩剑，此处要调用接口更新状态中的购物车商品数量
                          this.$store.dispatch('resetShoppingCartNumber', { context: this });
                      } else {
                          this.$Message.error(msg || message || '操作失败！');
                      }
                  });
              },*/

            /**
             * 获取服务条款信息
             */
            async getClause(){
                const res = await this.$get(this.$API_ENUM.TERMS_OF_CONDITIONS_SERVICEID_SUPPLIERID.Format(this.supplierService.id, this.supplierId));
                if(resOk(res)){
                    if(res.data && res.data.id){
                        this.haveClause = true;
                        this.clauseId = res.data.id
                    }else {
                        this.haveClause = false;
                        // 没有服务条款默认为接受状态
                        this.acceptClause = true;
                    }
                }else {
                    this.$Message.error(res.message);
                }
            },

            /**
             * 打开服务条款页
             */
            openClause(){
                window.open(`/citic-web-ui/product/clause?id=${this.clauseId}&serviceName=${this.supplierService.name}`)
            },

            judgingTip(item, needValue){
                console.log()
                if(item.remindList && item.remindList.length > 0 && item.remindList[0].remindType == needValue){
                    return true
                }
                return false
            },


            /**
             * 打开法律地位声明
             */
            openStatement(){
                this.showStatement = true;
            },
            /*
            * 购买备注校验
            * */
            mkChange(){
                if(!(/^([\u4e00-\u9fa5a-zA-Z0-9\-!@#$*(){}\[\]?=]|)+$/.test(this.form.remarks))){
                    this.mkHint = true;
                }else{
                    this.mkHint = false;
                }
            },
        },

        computed: {
            canSubmit() {
                return (
                    //接受法律地位声明
                    this.acceptStatement
                    //接受服务条款
                    && this.acceptClause
                    //信用管控控制
                    && !this.creditProhibit
                    //算费正常
                    && this.priceArray && this.priceArray.length !== 0 && this.priceSatisfy
                    //购买备注可以为空但不支持特殊字符
                    && (/^([\u4e00-\u9fa5a-zA-Z0-9\-!@#$*(){}\[\]?=]|)+$/.test(this.form.remarks))
                );
            }
        },

        watch: {},

        components: {
            'ci-cost-float': costFloat,
            'ci-cost-center': costCenter,
        },
    }
</script>
