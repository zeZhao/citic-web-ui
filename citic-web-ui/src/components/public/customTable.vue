<style scoped lang="scss">
    .custom-table {
        background: #fff;
        padding: 0 20px 20px;
        margin-bottom: 10px;
        position: relative;

        &.loading{
            min-height: 300px;
        }

        .table-head {
            background: #f5f5f5;
            /*border: 1px solid #e8e8e8;*/
            line-height: 45px;

            .column {
                text-align: center;

                &.left {
                    text-align: left;
                    padding: 0 20px;
                }

                &.right {
                    text-align: right;
                    padding: 0 20px;
                }
            }
        }

        .table-body {
            .top, .bottom {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;

                .left-block {
                    padding: 10px 0;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;

                    &:empty {
                        padding: 0;
                    }
                }

                .right-block {
                    padding: 10px 0;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                }
            }

            .ivu-spin-main{
                .table-spin-icon-load{
                    animation: ani-table-spin 1s linear infinite;
                }
                @keyframes ani-table-spin {
                    from { transform: rotate(0deg);}
                    50%  { transform: rotate(180deg);}
                    to   { transform: rotate(360deg);}
                }
            }
        }
    }
</style>

<style lang="scss">
    .custom-table {

        .table-head {

            .column {
                text-align: center;

                &.left {
                    text-align: left;
                    padding: 0 20px;
                }

                &.right {
                    text-align: right;
                    padding: 0 20px;
                }
            }
        }

        .ivu-spin-main {
            top: 150px;
        }
    }
</style>

<template>
    <div class="custom-table" :class="{loading: loading}">
        <div class="table-head">
            <slot name="header"></slot>
        </div>

        <div class="table-body">
            <div class="top" v-show="actionBar">
                <div class="left-block">
                    <slot name="action"></slot>
                </div>

                <div class="right-block" v-if="pagingDevice">
                    <Page :current="current" :total="total" :page-size="pageSize"
                          @on-change="changePage"
                          @on-page-size-change="changePageSize"
                          show-elevator
                          show-sizer
                          show-total
                          size="small"></Page>
                </div>
            </div>

            <div class="content">
                <slot>
                    <ci-empty-list-hint/>
                </slot>
                <Spin fix v-if="loading">
                    <Icon type="load-c" size=28 class="table-spin-icon-load"></Icon>
                    <div>加载中...</div>
                </Spin>
            </div>


            <div class="bottom">
               <!-- <div class="left-block"></div>-->
                <div class="right-block" v-if="pagingDevice">
                    <Page :current="current" :total="total" :page-size="pageSize"
                          @on-change="changePage"
                          @on-page-size-change="changePageSize"
                          show-elevator
                          show-sizer
                          show-total
                          size="small"></Page>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            //是否展示操作栏
            actionBar: {
                type: Boolean,
                default: true
            },

            //是否开启分页功能
            pagingDevice: {
                type: Boolean,
                default: true
            },

            loading: {
                type: Boolean,
                default: false
            },

            total: {
                type: Number,
                default: 0
            },

            current: {
                type: Number,
                default: 1
            },

            pageSize: {
                type: Number,
                default: 10
            }
        },

        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {
            changePage(page) {
                if (page !== this.current) {
                    this.$emit('changePage', page);
                }
            },

            changePageSize(pageSize) {
                if (pageSize !== this.pageSize) {
                    this.$emit('changePageSize', pageSize);
                }
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
