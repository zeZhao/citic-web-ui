<style scoped lang="scss">
    .status-info {
        margin-bottom: 20px;

        .step-panel {
            text-align: center;

            .status-group {

                &.ongoing {
                    color: #5cadff;
                }

                &.success {
                    color: #19be6b;
                }

                &.error {
                    color: #ed3f14;
                }

                .status-text {
                    font-size: 24px;
                    padding: 20px 0;
                    display: inline-block;
                }
            }

            .tips {
                color: #ed3f14;
                padding: 10px 0;
                display: block;
            }
        }

        .action-panel {
            text-align: center;

            .upload-panel {
                padding: 20px 0 0 0;
                .upload-tip {
                    color: #ed3f14;
                }
            }

            .launch-panel {
                padding: 20px 0 0 0;
            }
        }
    }

    .download-dialog, .fail-reason-dialog {
        /deep/ .body {
            padding: 10px !important;
            background: #fff;
        }
    }

    .fail-reason-dialog {

        /deep/ .ivu-modal-footer {
            display: none !important;
        }
    }
</style>

<template>
    <div class="status-info">
        <div class="step-panel">

            <div class="status-group" :class="statusClass">
                <Icon size="24" type="information-circled" v-if="statusClass === 'ongoing'"></Icon>
                <Icon size="24" type="checkmark-circled" v-if="statusClass === 'success'"></Icon>
                <Icon size="24" type="close-circled" v-if="statusClass === 'error'"></Icon>

                <span class="status-text">{{statusText}}</span>
            </div>


            <!--<Button type="primary" v-show="showConsoleBtn" @click="toConsole">进入数据洞察控制台</Button>-->

            <span class="tips">{{tips}}</span>

        </div>

        <Table :columns="logColumns" :data="logList"></Table>


        <div class="action-panel">
            <!--上传应用-->
            <div class="upload-panel" v-show="showUploadBtn">
                <Upload :action="uploadURL"
                        :format="['apk']"
                        :max-size="150 * 1000"
                        :on-format-error="fileFormatError"
                        :on-exceeded-size="fileExceededSizeError"
                        :on-success="uploadSuccess"
                        :on-error="uploadError"
                        :headers="headers"
                        ref="uploadBtn"
                >
                    <Button type="ghost" icon="ios-cloud-upload-outline" :disabled="prohibitUpload">上传应用</Button>
                </Upload>

                <p class="upload-tip">提示：先下载专属百分点SDK文档，成功植入到待上传的应用包中，再将植入了专属百分点SDK的应用包进行上传，替换当前应用包。</p>
            </div>

            <!--发起检测-->
            <div class="launch-panel" v-show="showLaunchBtn">
                <Button type="ghost" @click="launchMonitor">发起安全检测</Button>
            </div>
        </div>

        <!--加固包下载弹框-->
        <ci-dialog class="download-dialog" :value.sync="showReinforceDownload">
            <template slot="header">
                选择下载包
            </template>

            <template slot="body">
                <Table :columns="reinforceListColumns" :data="reinforceDownloadList"></Table>
            </template>

            <template slot="footer">
                <Button type="error" shape="circle" style="width: 100px" @click="showReinforceDownload = false">关闭
                </Button>
            </template>
        </ci-dialog>

        <!--审核不通过原因弹框-->
        <ci-dialog class="fail-reason-dialog" :value.sync="showFailReason">
            <template slot="header">
                审核未通过原因
            </template>

            <template slot="body">
                <p style="word-break: break-all">{{failReason}}</p>
            </template>
        </ci-dialog>
    </div>

</template>

<script>
    const PASS = 'pass';
    const INIT = 'init';
    const NOT_PASS = 'notpass';
    const UP_FILE_NOT_PASS = 'upFileNotPass';

    const STATUS_CLASS_ONGOING = 'ongoing';
    const STATUS_CLASS_SUCCESS = 'success';
    const STATUS_CLASS_ERROR = 'error';

    export default {
        props: {
            detail: {
                required: true,
                default: {},
            }
        },

        data() {
            const {id} = this.$route.query;

            return {
                instanceId: id,

                statusClass: '',
                statusText: '',
                tips: '',
                // showConsoleBtn: false,

                showUploadBtn: false,
                uploadURL: `${this.$CONFIG.BASE_API_URL}${this.$API_ENUM.APP_DISTRIBUTION_APP_OSS_UPLOAD}/${id}`,
                headers: {'citic-token': sessionStorage.getItem("citic-token")},

                showLaunchBtn: false,

                // 状态记录列表
                logColumns: [
                    {
                        title: '状态',
                        key: 'statusName'
                    },
                    {
                        title: '操作时间',
                        key: 'actionTime'
                    },
                    {
                        title: '操作',
                        render: (h, params) => {
                            return [
                                h('a', {
                                    props: {
                                        href: 'javascript:void(0)',
                                    },
                                    on: {
                                        click: () => {
                                            params.row.click();
                                        }
                                    }
                                }, params.row.actionName)
                            ]
                        }
                    },
                ],
                logList: [],

                // 加固包下载列表
                reinforceListColumns: [

                    {
                        title: '渠道',
                        key: 'channelName',
                        align: 'center'
                    },
                    {
                        title: '大小',
                        key: 'size',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        render: (h, params) => {
                            return [
                                h('Button', {
                                    props: {
                                        type: 'success'
                                    },
                                    on: {
                                        click: () => {
                                            this.downloadFileByUrl(params.row.channelAppUrl);
                                        }
                                    }
                                }, '下载')
                            ]
                        }
                    },
                ],
                reinforceDownloadList: [],
                showReinforceDownload: false,

                // 失败原因
                showFailReason: false,
                failReason: '',

                prohibitUpload: false,
            }
        },

        created() {
            this.initStatus();
        },

        methods: {

            initStatus() {
                const {appDistributionExtendedVoMap: appStatusMap} = this.detail;
                const {tenant, brand, upapp, monitor, reinforce} = appStatusMap;
                const tenantCheckStatus = tenant.checkStatus;
                const brandCheckStatus = brand.checkStatus;
                const upAppCheckStatus = upapp.checkStatus;
                const monitorCheckStatus = monitor.checkStatus;
                const reinforceCheckStatus = reinforce.checkStatus;

                let statusText = '';
                // let showConsoleBtn = false;
                let tips = '';
                let statusClass = STATUS_CLASS_ONGOING;
                let showUploadBtn = false;
                let showLaunchBtn = false;
                let logList = [];

                // 租户管理员审核
                if (tenantCheckStatus === PASS) {
                    statusText = '租户管理员审核成功';

                    logList.push(this.createStatusLog(true, "租户管理员审核成功", tenant.updateTimeString, "-"));


                    // 品牌审核通过
                    if (brandCheckStatus === PASS) {
                        statusText = '品牌办审核成功';

                        logList.push(this.createStatusLog(true, "品牌办审核成功", brand.updateTimeString, "下载专属SDK", this.downloadSDK));

                        //未上传、上传失败
                        if ([INIT, NOT_PASS].includes(upAppCheckStatus)) {
                            statusText = '审核通过，等待上传应用包...';
                            showUploadBtn = true;

                        } else if (upAppCheckStatus === PASS) {

                            logList.push(this.createStatusLog(true, "应用上传成功", upapp.updateTimeString, "下载应用APK", this.downloadAPK));

                            // 上传成功，检测未通过
                            if ([NOT_PASS, UP_FILE_NOT_PASS].includes(monitorCheckStatus)) {
                                statusText = '完成安全检测，未通过';
                                statusClass = STATUS_CLASS_ERROR;
                                showUploadBtn = true;
                                showLaunchBtn = true;

                                logList.push(this.createStatusLog(false, "完成检测-未通过", monitor.updateTimeString, "下载检测报告", this.downloadMonitorReport));

                            } else if (monitorCheckStatus === PASS) {

                                logList.push(this.createStatusLog(true, "完成检测-通过", monitor.updateTimeString, "下载检测报告", this.downloadMonitorReport));

                                // 检测通过，加固完成
                                if (reinforceCheckStatus === PASS) {
                                    statusText = '审核通过，通过安全检测，完成加固！';
                                    // tips = '提示：进入数据洞察控制台查看应用分发进度';
                                    // showConsoleBtn = true;
                                    statusClass = STATUS_CLASS_SUCCESS;

                                    logList.push(this.createStatusLog(true, "完成加固", reinforce.updateTimeString, "下载加固应用包", this.showReinforceDownloadModal));

                                } else {
                                    //检测成功，加固未完成
                                    statusText = '审核通过，通过安全检测，正在加固中...';
                                    tips = '完成加固大约需要15~30分钟，请耐心等待...';
                                }

                            } else {
                                // 上传成功,未开始安全检测
                                statusText = '审核通过，安全检测中...';
                                tips = '完成安全检测大约需要15~30分钟，请耐心等待...';
                            }
                        }

                    } else {
                        // 品牌审核失败
                        statusText = '通过租户管理员审核，品牌办审核未通过!';
                        statusClass = STATUS_CLASS_ERROR;

                        logList.push(this.createStatusLog(false, "未通过品牌办审核", brand.updateTimeString, "查看未通过原因", this.showFailReasonModal));
                    }
                }

                this.statusText = statusText;
                // this.showConsoleBtn = showConsoleBtn;
                this.tips = tips;
                this.statusClass = statusClass;
                this.showUploadBtn = showUploadBtn;
                this.showLaunchBtn = showLaunchBtn;
                this.logList = logList;
            },

            createStatusLog(success, statusName, actionTime, actionName, click = () => {
            }) {
                return {success, statusName, actionTime, actionName, click}
            },

            fileFormatError() {
                this.$Message.warning('文件上传格式错误');
            },

            fileExceededSizeError() {
                this.$Message.warning('文件不能超过150MB');
            },

            uploadSuccess(res) {

                if (resOk(res)) {
                    this.$Message.success('文件上传成功');
                    this.prohibitUpload = true;
                    this.$emit('reload')
                } else {
                    this.$Message.error('文件上传失败');
                    this.$refs.uploadBtn.clearFiles();
                }
            },

            uploadError() {
                this.$Message.error('文件上传失败');
            },

            /**
             * 发起安全检测
             */
            async launchMonitor() {
                const res = await this.$post(`${this.$API_ENUM.APP_DISTRIBUTION_APP_DETECT_REDETECT}/${this.instanceId}`);

                if (res.code === '1100') {
                    this.$Message.success(res.message);
                    this.$emit('reload')
                } else {
                    this.$Message.error(res.message);
                }
            },

            /**
             * 跳转到控制台
             */
            async toConsole() {
                const res = await this.$get(this.$API_ENUM.APP_DISTRIBUTION_BAIFENDIAN_CONSOLE_URL, {
                    instanceId: this.instanceId
                });

                if (resOk(res)) {
                    window.open(res.data)
                }
            },


            /**
             * 下载专属SDK
             */
            async downloadSDK() {
                const res = await this.$get(this.$API_ENUM.APP_DISTRIBUTION_BAIFENDIAN_SDK_URLS, {
                    instanceId: this.instanceId
                });
                if (resOk(res)) {
                    this.downloadFileByUrl(res.data);
                }
            },

            /**
             * 下载APK
             */
            downloadAPK() {
                const {apkUrl} = this.detail;
                this.downloadFileByUrl(apkUrl);
            },

            /**
             * 下载检测报告
             */
            downloadMonitorReport() {
                const {monitorUrl} = this.detail;
                this.downloadFileByUrl(monitorUrl);
            },

            /**
             * 展示下载加固包模态框
             */
            showReinforceDownloadModal() {
                this.showReinforceDownload = true;

                if (this.reinforceDownloadList.length === 0) {
                    this.reinforceDownloadList = this.detail.appDistributionChannelList.map(item => {

                        const {channelName, channelAppSize, channelAppUrl} = item;

                        return {
                            channelName,
                            size: `${(channelAppSize / (1024 * 1024)).toFixed(2)}MB`,
                            channelAppUrl,
                        }
                    });
                }
            },

            /**
             * 展示失败原因
             */
            showFailReasonModal() {
                this.showFailReason = true;
                const {appDistributionExtendedVoMap} = this.detail;
                this.failReason = appDistributionExtendedVoMap.brand.checkReason;
            }
        }
    }
</script>
