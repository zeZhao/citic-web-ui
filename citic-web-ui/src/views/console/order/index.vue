<style scoped lang="scss">
.custom-table {
    /deep/ .table-head {
        background: #ffffff;
        border: none;
    }
}

.action-bar {
    padding-left: 10px;
    line-height: 26px;
    /*padding-top: 7px;*/

    .check-box {
        font-weight: bold;
        min-width: 70px;
    }

    .select-count {
        padding: 0 10px;
    }

    .download-btn {
        opacity: 0.3;
        transition: 0.3s;
        cursor: not-allowed;
        font-size: 12px;
        color: #1a1a1a;
        margin-left: 5px;

        &::before {
            transition: 0.3s;
            content: "";
            background: url("../../../../static/svg/download-icon.svg") center;
            background-size: cover;
            height: 12px;
            width: 12px;
            display: inline-block;
            position: relative;
            top: 2px;
        }

        &.active {
            cursor: pointer;
            opacity: 1;

            &:hover {
                color: #ed3f14;

                &::before {
                    background: url("../../../../static/svg/download-red-icon.svg")
                        center;
                    background-size: cover;
                }
            }
        }
    }

    .approve-btn {
        padding: 3px 15px;
        vertical-align: initial;

        &:hover {
            color: #ed3f14;
            border-color: #ed3f14;
        }

        &[disabled]:hover {
            color: #bbbec4;
            background-color: #f7f7f7;
            border-color: #dddee1;
        }
    }
}
#markdown-content {
    text-align: left;
    padding: 10px 20px;
    /deep/ table {
        width: 100%;
        border: 1px solid #ddd;
        width: 100%;
        max-width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        tr {
            th,
            td {
                border: 1px solid #ddd;
                line-height: 40px;
                padding: 0 5px;
                min-width: 100px;
            }
        }
    }
}
</style>

<style lang="scss">
.dialog {
    .body {
        padding: 20px !important;

        .approval-opinion {
            border: none;

            .ivu-input {
                resize: none;
            }
        }
    }
}

.order-confirm-dialog {
    .ivu-modal {
        width: 80% !important;
        top: 130px !important;
        transform: none !important;

        .ivu-modal-header {
            display: none;
        }

        .ivu-modal-footer {
            display: none;
        }

        .ivu-modal-body {
            .body {
                background: #ffffff !important;
                padding: 0 !important;
            }
        }
    }
}
</style>

<template>
    <ci-content-frame>
        <ci-content-header title="我的订单" :hasBack="false"></ci-content-header>
        <ci-search-bar @doSearch="_mxDoSearch"></ci-search-bar>

        <ci-custom-table
            :total="total"
            :current.sync="pageIndex"
            :pageSize="pageSize"
            :loading="loading"
            @changePage="_mxChangePage"
            @changePageSize="_mxChangePageSize"
        >
            <!-- <div class="action-bar" slot="action">
                <Checkbox class="check-box red"
                          v-model="selectAll"
                          @on-change="_mxSelectAllItem"
                          :disabled="!listData.length"
                          v-show="isAdminApprovedStatus || !adminAuth">
                    {{selectAll ? '取消全选' : '全选'}}
                </Checkbox>

                <span class="select-count" v-show="selectedNum">选中{{selectedNum}}个</span>

                <template v-if="adminAuth">
                    &lt;!&ndash;管理员权限展示审批操作&ndash;&gt;
                    &lt;!&ndash;管理员只有选中待审批列表才展示按钮&ndash;&gt;
                    <Button class="approve-btn"
                            type="ghost"
                            v-show="isAdminApprovedStatus"
                            :disabled="!selectedNum"
                            @click="approveBatch"
                            size="small"
                    >批量审批
                    </Button>
                </template>
                <template v-else>
                    {active: selectedNum}
                    <span class="download-btn" :class="{active: true}" @click="downloadFile">
                         批量订单导出
                     </span>
                </template>
            </div>-->

            <!-- @delete="(id)=>{_mxDeleteItem(id, '确定取消订单吗', (url, id) => `${delAPI}/${id}/cancel`)}"-->
            <!-- @toDetail="_mxToDetail"-->
            <ci-order-item
                v-for="order in listData"
                :key="order.id + new Date().getTime()"
                :order="order"
                @selectOne="_mxSelectOne"
                @approveOne="approveOne"
                @refreshAll="_mxGetList"
                @submit="showOrderConfirmDialog"
                :adminAuth="adminAuth"
                :showCheckBox="isAdminApprovedStatus || !adminAuth"
                :creditInfo="creditInfo"
                @openOpening="openOpeningModal"
            />
        </ci-custom-table>

        <!--审批意见弹窗-->
        <ci-dialog :value.sync="dialogVisible">
            <template slot="header">审批意见</template>

            <template slot="body">
                <Input
                    class="approval-opinion"
                    v-model="approvalOpinion"
                    type="textarea"
                    :maxlength="50"
                    :rows="4"
                    placeholder="审批意见字数最多可输入50个！"
                ></Input>
            </template>

            <template slot="footer">
                <div class="dialog-button-group">
                    <Button
                        type="ghost"
                        shape="circle"
                        @click="approveOrder(false)"
                        :loading="preventApproveAction && !approvePass"
                        :disabled="preventApproveAction"
                    >驳回申请</Button>

                    <Button
                        type="error"
                        shape="circle"
                        @click="approveOrder(true)"
                        :loading="preventApproveAction && approvePass"
                        :disabled="preventApproveAction"
                    >申请通过</Button>
                </div>
            </template>
        </ci-dialog>

        <!--订单确认弹窗-->
        <ci-dialog :value.sync="confirmDialogVisible" class="order-confirm-dialog">
            <template slot="header">
                <div></div>
            </template>

            <template slot="body">
                <ci-order-confirm :orderId="orderForConfirm.id" :orderData="orderData" @submitSuccess="submitOrder"></ci-order-confirm>
            </template>

            <template slot="footer">
                <div></div>
            </template>
        </ci-dialog>
        <Modal v-model="openOpeningModalData.show" :title="openOpeningModalData.title" width="800">
            <div id="markdown-content" v-html="openOpeningModalData.markdownData"></div>
            <div slot="footer">
                <Button type="error" @click="openOpeningModalData.show = false">关闭</Button>
            </div>
        </Modal>
    </ci-content-frame>
</template>

<script>
import searchBar from "../../../components/console/order/searchBar";
import orderItem from "../../../components/console/order/orderItem";
import orderConfirm from "../../../components/console/order/orderConfirm";

import listMixin from "../../../mixin/listMixin";
import markdownit from "markdown-it";
import { IdentityActionCheck } from "../../../annotation/identityCheckAnnotation";

export default {
    mixins: [listMixin],

    data() {
        const USER_INFO = this.$store.state.userInfo.USER_INFO;

        return {
            openOpeningModalData: {
                show: false,
                title: "",
                markdownData: ""
            },
            adminAuth: USER_INFO.tenantManager,

            listData: [],

            searchAPI: `${this.$API_ENUM.ORDERS}/`,
            delAPI: `${this.$API_ENUM.ORDERS}`,
            detailPath: "/console/order/detail",

            //审批意见输入内容
            approvalOpinion: "",
            dialogVisible: false,
            //待审批订单列表
            approvalList: [],

            //防止审批重复提交(默认不阻止)
            preventApproveAction: false,
            // 标记当前审批操作是通过还是拒绝，在具体的操作按钮上显示loading状态
            approvePass: true,
            //申请的order数据对象
            applyOrder: {},

            // 信用管控数据
            creditInfo: {},

            //订单确认窗口
            confirmDialogVisible: false,
            //待确认的订单
            orderForConfirm: {},
            orderId: "",
            couponId: "",
            orderData: {}
        };
    },

    created() {},

    mounted() {
        //根据链接参数初始化订单查询类型
        this.initQueryParam();
    },

    methods: {
        openOpeningModal(purchase) {
            console.log(purchase);
            let { serviceName, serviceId } = purchase;

            this.openOpeningModalData.title = serviceName + "服务价格说明";

            this.$get(
                this.$API_ENUM.CITIC_SUPPLIER_SERVICES_OPENING_PRICE.replace(
                    "SERVICEID",
                    serviceId
                )
            ).then(res => {
                console.log(res);
                let str = res.data.priceMarkDown;
                this.openOpeningModalData.markdownData = markdownit().render(
                    str
                );
                this.openOpeningModalData.show = true;
            });
        },
        /**
         * 根据链接参数初始化订单查询类型
         */
        initQueryParam() {
            const { orderStatus = "", searchMode = "" } = this.$route.query;

            const searchParam = {
                orderStatus: orderStatus,
                searchMode: searchMode,
                startTime: null,
                endTime: null
            };

            if (orderStatus || searchMode) {
                this.searchParam = searchParam;
                //store记录当前页码及查询条件
                this.$store.commit("recordSearch", {
                    path: this.$route.path,
                    //调用查询时默认跳转到第一页
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    //查询条件参数
                    searchParam,
                    information: this.information
                });
            }
        },

        _formatRequestData(searchParam) {
            let { endTime, startTime } = searchParam;

            if (startTime) {
                startTime =
                    new Date(startTime).Format("yyyy-MM-dd") + " 00:00:00";
            }

            if (endTime) {
                endTime = new Date(endTime).Format("yyyy-MM-dd") + " 23:59:59";
            }

            return Object.assign(searchParam, {
                startTime,
                endTime
            });
        },

        /*--------------------普通租户操作--------------------*/
        _mxToDetail(id, index) {
            let order = Object.assign(
                {},
                this.listData.find(item => item.id === id)
            );
            //只保留选中的实例信息
            order.productList = order.productList.slice(index, index + 1);
            this.$setSession(
                this.$LOCAL_STORAGE_KEYS.ORDER_INSTANCE_INFO + id,
                order
            );
            this.$router.push(`${this.detailPath}?id=${id}`);
        },

        /**
         *  取消订单
         */
        _mxDoDelete(id, url) {
            this.$put.call(this, url).then(res => {
                if (resOk(res)) {
                    this.$Message.success("操作成功！");
                    this._mxRemoveSelectIds(id);
                    this._mxGetList();
                } else {
                    this.$Message.error(res.message);
                }
            });
        },

        /**
         * 导出文件
         */
        // downloadFile() {
        //     const exportURL = `${this.$CONFIG.BASE_API_URL}${this.$API_ENUM.ORDER_EXPORT}`;
        //
        //     let orderIds = [...this.information.selectIds].join(",");
        //     let {endTime = "", startTime = "", orderStatus = "", searchMode = ""} = this.searchParam;
        //
        //     if(!endTime){
        //         endTime = "";
        //     }else{
        //         endTime = new Date(endTime).getTime();
        //     }
        //
        //     if(!startTime){
        //         startTime = "";
        //     }else{
        //         startTime = new Date(startTime).getTime();
        //     }
        //
        //     window.open(`${exportURL}?endTime=${endTime}&startTime=${startTime}`
        //         + `&orderStatus=${orderStatus}&searchMode=${searchMode}&orderIds=${orderIds}`
        //         + `&citic-token=${sessionStorage.getItem("citic-token")}`);
        // },

        /**
         * 弹出订单确认框
         */
        showOrderConfirmDialog(order) {
            this.orderId = order.id;
            this.getCouponList();
            this.orderForConfirm = order;
        },

        /**
         * 订单确认，提交订单
         */
        submitOrder() {
            this.confirmDialogVisible = false;
            this._mxGetList();
        },

        /**
         * 获取优惠券
         */
        async getCouponList() {
            const res = await this.$get(
                `${this.$API_ENUM.ORDERS_ORDERID_COUPONS}`.Format(this.orderId)
            );
            if (resOk(res)) {
                const {
                    data: { couponList }
                } = res;
                if (couponList.length === 0) {
					this.submit()
                } else {
                    this.orderData = res.data;
                    this.confirmDialogVisible = true;
                }
            }
        },

        /**
         * 订单提交
         */
        async submit() {
			this.loading = true;
            const res = await this.$put(
                `${this.$API_ENUM.ORDERS_ORDERID_SUBMIT}?couponId=#{1}`.Format(
                    this.orderId,
                    this.couponId
                )
            );

            this._handleSubmitResult(res);
        },

        /**
         * 处理订单请求结果
         * @private
         */
        _handleSubmitResult(res) {
            if (resOk(res)) {
				this.loading = false;
				this.$Message.success("您的订单已提交成功！");
				this.submitOrder()
            } else {
                //3008: 下单时优惠券被抢
                //3006: 算价时优惠券不能使用了
                if (["3006", "3008"].includes(res.code)) {
                    this.$Message.error(
                        "抱歉，当前优惠券不可用，请重新提交订单。"
                    );
                } else if (["4001"].includes(res.code)) {
                    this.$Message.error({
                        content: res.message,
                        duration: 10
                    });
                } else {
                    this.$Message.error(res.message || "操作失败！");
                }
                this.loading = false;
            }
        },

        /*------------------管理员操作-------------------*/
        /**
         * 批量审批订单
         */
        approveBatch() {
            this.approvalList = [...this.information.selectIds];
            // this.approvalOpinion = '';
            // this.dialogVisible = true;
            this.showApproveDialog(this.approvalList.join(","));
        },

        /**
         * 审批单独订单
         */
        approveOne(order) {
            let { id } = order;
            this.applyOrder = order;
            this.approvalList = [id];
            // this.approvalOpinion = '';
            // this.dialogVisible = true;
            this.showApproveDialog(this.approvalList.join(","));
        },

        /**
         * 弹出订单审批弹框
         * @param orderIds 不能删除，注解中使用到了此值
         */
        @IdentityActionCheck({
            menuEnum: "VERIFY_ORDER_CHECK",
            actionUniformityArg: 0
        })
        showApproveDialog(orderIds) {
            this.approvalOpinion = "";
            this.dialogVisible = true;
        },

        /**
         * 提交审批
         */
        approveOrder(resolve) {
            //已经提交了请求,防止重复提交
            if (this.preventApproveAction) {
                return;
            }

            //驳回时,没有驳回意见,则禁止提交
            if (!this.approvalOpinion) {
                this.$Message.error("请输入审批意见！");
                return;
            }

            //阻止连续提交审批
            this.preventApproveAction = true;

            this.approvePass = resolve;

            //TODO 目前先支支持单个id
            this.$put(this.$API_ENUM.ORDERS_ORDERS_AUDITS, {
                auditNote: this.approvalOpinion,
                id: this.approvalList[0],
                pass: resolve,
                type: this.applyOrder.type
            })
                .then(res => {
                    if (resOk(res)) {
                        this.$Message.success("操作成功！");
                    } else {
                        this.$Message.error(res.message || "操作失败！");
                    }

                    this._mxRemoveSelectIds(this.approvalList);
                    this._mxGetList();
                    this.dialogVisible = false;
                })
                .finally(() => {
                    setTimeout(() => {
                        //取消防止重复提交的
                        this.preventApproveAction = false;
                    }, 1000);
                });
        },

        /**
         * 获取用户信用数据
         */
        async getCreditInfo() {
            const res = await this.$get(
                this.$API_ENUM.CITIC_ACCOUNT_CREDIT_TID
            );
            if (resOk(res)) {
                this.creditInfo = res.data;
            }
        },

        _mxBeforeGetList() {
            this.getCreditInfo();
        }
    },

    computed: {
        //是否是管理员的待审批列表
        isAdminApprovedStatus() {
            return this.searchParam.orderStatus === "waitApproval";
        }
    },

    watch: {
        confirmDialogVisible(value) {
            if (!value) {
                this.orderForConfirm = {};
            }
        }
    },

    components: {
        "ci-search-bar": searchBar,
        "ci-order-item": orderItem,
        "ci-order-confirm": orderConfirm
    }
};
</script>
