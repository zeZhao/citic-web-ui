<style scoped lang="scss">
    .search-bar {
        background: #fff;
        padding: 10px 20px;

        .search-form {
            padding-top: 20px;

            .form-item {
                height: 40px;
                margin-bottom: 10px;
                clear: both;

                &:last-child {
                    /*margin-bottom: 0;*/
                }

                .form-label {
                    width: 65px;
                    line-height: 34px;
                    display: inline-block;
                    float: left;
                    font-weight: bold;
                    font-size: 12px;
                    color: #1a1a1a;
                }

                .input-box {
                    display: inline-block;
                    float: left;
                    width: 380px;
                    position: relative;

                    .search-btn {
                        position: absolute;
                        background: url("../../../../static/images/public/magnifier.png") center no-repeat;
                        background-size: 18px;
                        display: block;
                        height: 22px;
                        width: 22px;
                        right: 10px;
                        top: 8px;
                        cursor: pointer;

                        &::before {
                            content: '';
                            display: inline-block;
                            height: 12px;
                            width: 1px;
                            background: #e5e5e5;
                            position: absolute;
                            top: 6px;
                            left: -10px;
                        }
                    }

                    .date-picker {
                        width: 175px;
                        display: inline-block;
                        float: left;
                    }

                    .split-line {
                        display: inline-block;
                        height: 1px;
                        width: 10px;
                        float: left;
                        margin: 20px 10px;
                        background: #e6e6e6;
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    .input-box {
        .text-input, .date-picker {
            height: 40px;

            .ivu-input {
                height: 40px;
                padding-right: 40px;
            }

            .ivu-input-icon {
                top: 4px;

                &.ivu-icon-ios-calendar-outline:before {
                    content: "";
                    background: url("../../../../static/svg/calendar-icon.svg") center no-repeat;
                    background-size: cover;
                    height: 16px;
                    width: 16px;
                    display: inline-block;
                    top: 8px;
                    right: 8px;
                    position: absolute;
                }

                &.ivu-input-icon-clear {
                    right: 50px;
                }
            }
        }
    }
</style>

<template>
    <div class="search-bar">
        <ci-tabs :tabs="tabsOptions" :default-active="form.orderStatus" @change="tabChange"></ci-tabs>

        <div class="search-form">
            <div class="form-item">
                <label class="form-label">订单搜索：</label>
                <span class="input-box">
                    <Input class="text-input" v-model="form.searchMode" placeholder="请输入服务名称/订单号/供应商名称进行搜索"
                           @keyup.native.enter="doSearch" clearable=""/>
                    <span slot="append" class="search-btn" @click="doSearch"></span>
                </span>

            </div>

            <div class="form-item">
                <label class="form-label">创建时间：</label>
                <span class="input-box">
                    <DatePicker class="date-picker" :value="form.startTime" type="date" placeholder="请选择时间范围起始"
                                :options="startOptions"
                                @on-change="changeStart"></DatePicker>
                    <span class="split-line"></span>
                    <DatePicker class="date-picker" :value="form.endTime" type="date" placeholder="请选择时间范围结束"
                                :options="endOptions"
                                @on-change="changeEnd"></DatePicker>
                </span>
            </div>
        </div>

    </div>
</template>

<script>
    import tabs from './searchComponents/tabs'

    const tabsOptions = [
        {
            name: '全部',
            value: '',
        }, {
            name: '未提交',
            value: 'unsubmitted',
        }, {
            name: '待审核',
            value: 'waitApproval',
        }, {
            name: '交付中',
            value: 'pending',
        }, {
            name: '交付完成',
            value: 'finished',
        }, {
            name: '交付失败',
            value: 'deliveryFailure',
        }, {
            name: '已拒绝',
            value: 'refused',
        }
        , {
            name: '已取消',
            value: 'canceled',
        }
    ];

    export default {
        data() {
            return {
                tabsOptions,

                form: {
                    orderStatus: '',
                    searchMode: '',
                    startTime: null,
                    endTime: null,
                },

                startOptions: {
                    disabledDate: (date) => {
                        if (this.form.endTime) {
                            return date > this.form.endTime;
                        }
                        return date > new Date();
                    }
                },

                endOptions: {
                    disabledDate: (date) => {
                        if (this.form.startTime) {
                            return date < this.form.startTime || date > new Date();
                        }
                        return date > new Date();
                    }
                },
            };
        },

        created() {

        },

        mounted() {
            setTimeout(this.recordParam, 0);
        },

        methods: {
            //根据store状态恢复查询条件
            recordParam() {
                const recordParam = this.$store.state.searchParam.paramMap[this.$route.path];
                if (recordParam) {
                    const { searchParam } = recordParam;
                    for (let key in this.form) {
                        this.form[key] = searchParam[key];
                    }
                }
            },

            tabChange(key, index) {
                this.form.orderStatus = key;
                this.doSearch()
            },

            changeStart(date) {
                if (this.form.startTime === new Date(date)) {
                    return;
                }

                if (!date) {
                    this.form.startTime = "";
                } else {
                    this.form.startTime = new Date(date);
                }

                this.doSearch()
            },

            changeEnd(date) {
                if (this.form.endTime === new Date(date)) {
                    return;
                }

                if (!date) {
                    this.form.endTime = "";
                } else {
                    this.form.endTime = new Date(date);
                }

                this.doSearch()
            },

            doSearch() {
                const form = Object.assign({}, this.form);
                this.$emit('doSearch', form);
            },
        },

        computed: {},

        watch: {},

        components: {
            'ci-tabs': tabs,
        },
    }
</script>
