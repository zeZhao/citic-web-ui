<style scoped lang="scss">

    .coupon-list {

        .content {
            background: #fff;
            padding: 30px 20px 40px 20px;

            .search-form {
                padding-bottom: 20px;
                border-bottom: 1px solid #dddee1;

                .label {
                    line-height: 36px;
                    text-align: right;
                    font-weight: bold;
                    padding: 0 15px 0 0;
                }

                .form-item {
                    width: 150px;
                    display: inline-block;
                    margin-right: 30px;

                    &.input-item {
                        width: 300px;
                        float: right;
                        margin: 0;
                        display: inline-block;
                    }
                }
            }

            /deep/ .custom-table {
                padding-top: 25px;
                .table-head {
                    display: none;
                }

                .table-body {

                    .coupon-list {
                        padding: 20px 0;
                    }
                }
            }
        }
    }
</style>

<template>
    <ci-content-frame>
        <div class="coupon-list">

            <ci-content-header title="我的优惠券" :hasBack="false"></ci-content-header>

            <div class="content">

                <div class="search-form">
                    <label class="item label">优惠券类型</label>
                    <span class="item form-item select-item">
                        <Select v-model="searchParam.couponType"
                                placeholder="优惠券类型"
                                size="large"
                                @on-change="doSearch"
                        >
                            <Option v-for="option in selectOptions.couponType"
                                    :value="option.key"
                                    :key="option.key">{{option.value }}
                            </Option>
                        </Select>
                    </span>

                    <label class="item label">优惠券使用状态</label>
                    <span class="item form-item select-item">
                        <Select v-model="searchParam.status"
                                placeholder="优惠券类型"
                                size="large"
                                @on-change="doSearch"
                        >
                            <Option v-for="option in selectOptions.status"
                                    :value="option.key"
                                    :key="option.key">{{option.value }}
                            </Option>
                        </Select>
                    </span>

                    <span class="item form-item input-item search-input">
                        <Input v-model="searchParam.searchText"
                               placeholder="订单号、优惠券面值"
                               clearable
                               size="large"
                               @on-change="doSearch"
                               @keyup.native.enter="doSearch"
                        >
                        </Input>
                        <span class="search-btn" @click="doSearch"></span>
                    </span>
                </div>

                <ci-custom-table :total="total"
                                 :current.sync="pageIndex"
                                 :pageSize="pageSize"
                                 :loading="loading"
                                 :pageSizeOpts="[20,60,80,100]"
                                 @changePage="_mxChangePage"
                                 @changePageSize="_mxChangePageSize">

                    <Row class="coupon-list" v-if="listData.length">
                        <Col :xs="6" :sm="6" :md="6" :lg="6" v-for="(coupon, index) in listData" :key="coupon.uniqueId">
                            <ci-coupon-item :coupon="coupon"/>
                        </Col>
                    </Row>

                </ci-custom-table>

            </div>
        </div>
    </ci-content-frame>
</template>

<script>
    import {listMixin} from '../../../mixin'

    import couponItem from '../../../components/console/coupon/couponItem';

    export default {
        mixins: [listMixin],

        data() {
            return {
                pageSize: 20,

                searchParam: {
                    couponType: 0,
                    status: 0,
                    searchText: '',
                },

                selectOptions: {
                    couponType: [
                        {
                            key: 0,
                            value: '全部'
                        },
                        {
                            key: 1,
                            value: '通用券'
                        }, {
                            key: 2,
                            value: '品牌券'
                        }, {
                            key: 3,
                            value: '单品券'
                        }
                    ],
                    status: [
                        {
                            key: 0,
                            value: '全部'
                        }, {
                            key: 1,
                            value: '未使用'
                        }, {
                            key: 2,
                            value: '已使用'
                        }, {
                            key: 3,
                            value: '已过期'
                        }
                    ]
                },

                listData: [],

                searchAPI: this.$API_ENUM.COUPON_USER_COUPON_COUPON_LIST,
            };
        },

        created() {

        },

        mounted() {
            /*const list = [];

            for (let i = 0; i < 20; i++) {
                list.push({
                    "couponId": i,
                    "couponName": "优惠券名称",
                    "couponType": 0,
                    "effectiveDate": "2018-09-17T06:13:14.364Z",
                    "expiryDate": "2018-09-17T06:13:14.364Z",
                    "isDiscount": 0,
                    "money": 200,
                    "orderId": "string",
                    "uniqueId": i,
                    "useStaus": 0,
                    "useUserId": "string",
                    "useUserName": "string",
                    "userId": "string",
                    "userName": "string"
                })
            }
            this.listData = list;*/
        },

        methods: {
            doSearch() {
                this._mxDoSearch(this.searchParam);
            }
        },

        computed: {},

        watch: {},

        components: {
            'ci-coupon-item': couponItem
        },
    }
</script>
