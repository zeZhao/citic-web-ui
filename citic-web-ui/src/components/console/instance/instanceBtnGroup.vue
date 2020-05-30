<style scoped lang="scss">
    .button-group {
        text-align: right;
        padding: 10px;

        .action-btn {
            margin: 5px 8px;
        }
    }
</style>

<template>
    <div class="button-group">

        <template v-for="(item, index) in buttonConfigList">
            <Button class="action-btn" type="info" @click="actionClick(index, item)" :key="index">{{item.name}}</Button>
        </template>
            <!-- <Button class="action-btn" type="info" @click="MOCK_btnClick('5d8c708849fee60001533333')">ESC新变配专用</Button> -->
              <!-- displayName:"变配",
                            actionId:"5d9fdf57b91a7b000180a419" -->
            <!-- <Button class="action-btn" type="info" @click="MOCK_btnClick('5d9fdf57b91a7b000180a419')" v-for="newUpdataButton">mongo变配</Button> -->


    </div>
</template>

<script>
    import {IdentityActionCheck} from "../../../annotation/identityCheckAnnotation";

    // 强制添加删除按钮的服务
    const ADD_DELETE_FILTER = [
        // 域名解析
        '206c3efc853b92c3779d730b9e7c2def',
    ];

    //硬编码的操作类型
    const ACTION_NAME = [
        "sdk_download_ios",
        "sdk_download_android",
        "show_baifendian",
        "open_auto_renewal",
        "close_auto_renewal",
        "open_new_modify"
    ];

    // 硬编码的服务id
    const ORACLE_SERVICE = ['5b75122958bae5000147cc3b', '5b75130e58bae5000147cc3c'];
    const MICROSOFT_SERVICE = ['5aa88d059a78b61784ae757d', '5acb06bd822d160d38e8e227', '5acb06d2822d160d38e8e228'];

    export default {
        props: {
            config: {
                default: {},
                type: Object,
                required: true,
            },

            serviceId: {
                default: '',
                type: String,
                required: true,
            },

            instanceId: {
                default: '',
                type: String,
                required: true,
            },

            consoleUrl: {
                default: '',
                type: String,
                required: false,
            }
        },

        data() {
            return {
                buttonConfigList: [],
                newUpdataButton:[],

                configUrl: ""
            };
        },

        created() {
            this.initButton()
            console.log(this.buttonConfigList)
            console.log(this.serviceId)//59b1fb661a74d146c4fa7eb4
        },

        mounted() {

        },

        methods: {
            newUpdataAndRenew(actionId){
                let instance_id  = this.config.instanceMap.id
                 console.warn(instance_id)
                 window.open(`/citic-web-ui/product/renewAndUpdata?instance_id=${instance_id}&actionId=${actionId}`)
            },
            //判断按钮属于那种操作类型
            _getActionName(item) {
                const {name, config_url} = item;

                if (ACTION_NAME.includes(name)) {
                    return name;
                }

                if (config_url) {
                    this.configUrl = config_url;
                    return 'open_config';
                }

                return 'open_modify';
            },

            initButton() {
                const {instanceMap, operationList, configurationList} = this.config;
                const service_id = this.serviceId;
                const buttonConfigList = [];

                if (instanceMap && operationList && configurationList) {
                    operationList.filter(item => {
                        // 过滤掉数据缺失的操作
                        const {
                            display_name,
                            name
                        } = item;

                        return display_name && name;

                    }).forEach(item => {
                        const action = this._getActionName(item);
                        //跳转新变配页
                        let {jumpType, operationId, display_name} = item;

                        if (jumpType === "newBuy") {
                            buttonConfigList.push({
                                name: display_name,
                                action: "open_new_modify",
                                actionId: operationId
                            })
                        } else {
                            buttonConfigList.push({
                                name: display_name,
                                action: action
                            })
                        }
                    });
                }

                // Oracle 添加控制台
                if (ORACLE_SERVICE.includes(service_id)) {

                    this.configUrl = this.consoleUrl;

                    buttonConfigList.push({
                        name: '控制台',
                        action: 'open_config'
                    });
                }

                /**
                 * 包费服务，强制添加删除按钮
                 * 域名解析
                 * 微软云
                 */
                if([...ADD_DELETE_FILTER, ...MICROSOFT_SERVICE].includes(service_id)){
                    buttonConfigList.push({
                        name: '删除',
                        action: 'delete'
                    })
                }

                /**
                 * 实例删除规则
                 * 包费：不能删除，其他都可以删除
                 */
                let billingType;
                if (instanceMap) {
                    const {price, inactive_time} = instanceMap;

                    try {
                        billingType = price[0].cost[0].billingType;
                    } catch (e) {
                        console.warn('获取实例付费类型错误,默认添加删除按钮：', e);
                    }
                }

                /**
                 *  不为包费都能删除
                 */
                if (billingType !== 'package') {
                    // 判断是否已经包含了删除按钮，没有则添加删除
                    const delBtn = buttonConfigList.find(item => item.action === 'delete');
                    if (!delBtn) {
                        buttonConfigList.push({
                            name: '删除',
                            action: 'delete'
                        })
                    }
                }

                this.buttonConfigList = buttonConfigList;
            },

            actionClick(index, item) {

                switch (item.action) {
                    //下载sdk
                    case 'sdk_download_ios':
                        this.downloadSDK('ios');
                        break;
                    case 'sdk_download_android':
                        this.downloadSDK('android');
                        break;

                    //打开百分点数据展示页面
                    case 'show_baifendian':
                        this.openBFD();
                        break;

                    //自动续费操作
                    case 'open_auto_renewal':
                        this.autoRenew(1);
                        break;
                    case 'close_auto_renewal':
                        this.autoRenew(0);
                        break;

                    //打开控制台
                    case 'open_config':
                        this.openConsole();
                        break;

                    //打开变配页面
                    case 'open_modify':
                        this.openModify(index);
                        break;

                    case 'open_new_modify':
                        this.newUpdataAndRenew(item.actionId)
                        break;

                    //释放实例
                    case 'delete':
                        this.delete(this.instanceId);
                        break;
                }
            },

            /**
             * 下载SDK
             * @param platform
             */
            downloadSDK(platform) {
                const {instanceMap} = this.config;
                const {org_id, id} = instanceMap;

                const url = `${this.$CONFIG.BASE_API_URL}${this.$API_ENUM.CITIC_PORTAL_INSTANCE_DOWNLOADSDK}?org_id=${org_id}&id=${id}&type=${platform}`;
                this.downloadFileByUrl(url);
            },

            /**
             * 打开百分点数据展示页面
             */
            async openBFD() {
                const {instanceMap} = this.config;
                const {org_id} = instanceMap;

                const res = await this.$get(this.$API_ENUM.CITIC_PORTAL_INSTANCE_SHOWBFDDATA, {org_id});
                window.open(res.data);
            },

            /**
             * 开通、关闭自动续费
             * @param renewalFlag
             */
            async autoRenew(renewalFlag) {

                this.$confirmDialog(async () => {
                    const {instanceMap} = this.config;
                    const {id} = instanceMap;

                    const res = await this.$get(this.$API_ENUM.CITIC_PORTAL_INSTANCE_RENEWALINSTANCE, {
                        instanceId: id,
                        renewalFlag
                    });

                    if (resOk(res)) {
                        this.$Message.success('操作成功!');
                        this.$emit('refreshSelf')
                    } else {
                        this.$Message.error('操作失败!');
                    }
                }, renewalFlag ? '确定开通自动续费吗' : '确定关闭自动续费吗')

            },

            /**
             * 打开控制台
             */
            openConsole() {
                window.open(this.configUrl)
            },

            /**
             * 打开变配页面
             */
            openModify(operationIndex) {

                const {instanceMap, operationList, configurationList} = this.config;
                const operationItem = operationList[operationIndex];
                const {name, operation_type, config_url} = operationItem;

                const {id, list_id, service_id, parameter, price, inactive_time} = instanceMap;

                const sessionObject = {
                    config: JSON.stringify(operationItem.config_options),
                    service: JSON.stringify(configurationList),
                    parameters: JSON.stringify(parameter).replace(/¥/g, "&yen;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    prices: parameter.prices,
                    instance_id: id,
                    list_id: list_id,
                    service_id: service_id,
                    operation: name,
                    operation_type: operation_type,
                    configurl: config_url,
                    detail_costs: JSON.stringify(price),
                    inactive_time: inactive_time,

                    instanceMap,
                };

                const instanceInfoArray = [];
                for (let key in sessionObject) {
                    instanceInfoArray.push({
                        name: key,
                        value: sessionObject[key]
                    })
                }

                // this.$setStorage(id, instanceInfoArray);
                this.$setSession(id, instanceInfoArray);
                window.open(location.origin + "/views/instance/instanceUpdate.jsp?instance_id=" + id)
            },

            /**
             * 释放实例
             * @param instanceId 不能删除，注解中使用到了此值
             */
            @IdentityActionCheck({menuEnum: "VERIFY_INSTANCE_DELETE", actionUniformityArg: 0})
            async delete() {
                this.$confirmDialog(async () => {
                    const res = await this.$get(this.$API_ENUM.CITIC_PORTAL_INSTANCE_DELETEINSTANCE, {instanceId: this.instanceId});

                    if (resOk(res)) {
                        // this.$Message.success(res.message || '操作成功!');
                        // this.$emit('refreshAll')

                        setTimeout(() => {
                            this.deleteResult(res.message || '操作成功!', () => {
                                this.$emit('refreshAll')
                            });
                        }, 1000)

                    } else {
                        // this.$Message.error(res.message || '操作失败!');

                        setTimeout(() => {
                            this.deleteResult(`很抱歉，删除实例失败。原因是：${res.message || '操作失败!'}`)
                        }, 1000)
                    }
                }, '确定要删除该实例')
            },

            deleteResult(msg, cb = () => {}) {
                this.$Modal.success({
                    content: `<div class="body">
                    <p class="dialog-tips" style="font-size: 16px;">${msg}</p>
                </div>`,
                    okText: '好的，我知道了',
                    closable: true,
                    width: 550,
                    onOk: () => {
                        cb();
                    },
                });
            },
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
