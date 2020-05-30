<style scoped lang="scss">
    .empty-label-item{
       /deep/ .ivu-form-item-content{
            margin-left: 0 !important;
        }
    }
</style>

<template>
    <div>
        <Form ref="form" :model="form" :label-width="150" v-if="searchFormConfig.length">
            <Row>
                <Col :sm="24" :md="12" :lg="8" v-for="(item, index) in searchFormConfig" :key="index" >
                    <FormItem :label="item.label ? `${item.label}：` : ``" :class="item.label ? `` : `empty-label-item`">

                        <!--输入框-->
                        <template v-if="item.type === 'input'">
                            <Input v-model="form[item.key]" :placeholder="item.placeholder" :clearable="isClearAble(item)"
                                   @on-change="_mxHandleSubmit()" />
                        </template>

                        <!--下拉列表-->
                        <template v-if="item.type === 'select'">
                            <Select v-model="form[item.key]" filterable :clearable="isClearAble(item)" :ref="`${item.type}_${item.key}`"
                                    @on-change="(value)=>{handleSelectChange(item, value)}">
                                <Option v-for="option in enumMap[item.key]" :value="option.key" :key="option.key">{{option.value }}</Option>
                            </Select>
                        </template>

                        <!--时间范围选择-->
                        <template v-if="item.type === 'daterange'">
                            <template v-if="item.separate">
                                <DatePicker type="date" :placeholder="item.placeholder || '选择日期'" style="width: 40%"
                                            :clearable="isClearAble(item)"
                                            v-model="form[item.key[1]]"
                                            :options="item.dateOptions[0] || {}"
                                            @on-change="_mxHandleSubmit()"></DatePicker>
                                -
                                <DatePicker type="date" :placeholder="item.placeholder || '选择日期'" style="width: 40%"
                                            :clearable="isClearAble(item)"
                                            v-model="form[item.key[2]]"
                                            :options="item.dateOptions[1] || {}"
                                            @on-change="_mxHandleSubmit()"></DatePicker>
                            </template>
                            <template v-else>
                                <DatePicker type="daterange" placeholder="选择日期" style="width: 100%"
                                            :clearable="isClearAble(item)"
                                            v-model="form[item.key[0]]" @on-change="value => {
                                dateChange(value, item.key[1], item.key[2])
                            }"></DatePicker>
                            </template>
                        </template>

                        <!--月份单独选择-->
                        <template v-if="item.type === 'month'">
                            <DatePicker type="month" :placeholder="item.placeholder || '选择月份'" style="width: 100%"
                                        :clearable="isClearAble(item)"
                                        v-model="form[item.key]"
                                        @on-change="_mxHandleSubmit()"></DatePicker>
                        </template>

                        <!--日期单独选择-->
                        <template v-if="item.type === 'date'">
                            <DatePicker :type="item.range || 'date'" :placeholder="item.placeholder || '选择日期'" style="width: 100%"
                                        :clearable="isClearAble(item)"
                                        v-model="form[item.key]"
                                        :options="item.dateOptions || {}"
                                        @on-change="_mxHandleSubmit()"></DatePicker>
                        </template>
                    </FormItem>
                </Col>
            </Row>
        </Form>

        <div class="table-action-bar">
            <div class="action-panel left">
                <Button type="primary" shape="circle" icon="plus" @click="_mxToDetail" v-if="add">新增</Button>
                <slot></slot>
            </div>

            <slot class="action-panel right" name="btn-group">
                <Button type="info" shape="circle" icon="search" @click="_mxHandleSubmit()"
                        v-if="search && searchFormConfig.length">搜索
                </Button>
                <Button type="error" shape="circle" icon="refresh" @click="_mxHandleReset()"
                        v-if="reset && searchFormConfig.length">重置
                </Button>
                <slot name="right"></slot>
            </slot>
        </div>
    </div>
</template>

<script>
    function isEmpty(value) {
        return value === null || value === undefined || value.length === 0
    }

    import {formMixin} from '../../mixin';

    export default {
        mixins: [formMixin],

        props: {
            searchFormConfig: {
                type: Array,
                default() {
                    return [];
                },
            },

            add: {
                type: Boolean,
                default: true,
            },

            search: {
                type: Boolean,
                default: true,
            },

            reset: {
                type: Boolean,
                default: true,
            },
        },

        data() {
            return {
                path: this.$route.path,
                form: {},
                enumMap: {},
                //当清空依赖项目时做为标志，父菜单清空子菜单数据时子菜单不要拉取列表数据
                preventRipples: false,
            };
        },

        created() {
            this.initComponent();
        },

        mounted() {

        },

        methods: {
            //跳转到新增页面
            _mxToDetail() {
                this.$emit('add')
            },

            //提交表单，通知列表做一次查询操作
            _mxHandleSubmit() {
                this.$emit('search', this.form);
            },

            //重写清除表单查询条件，需要同时清除store
            _mxHandleReset() {
                this.preventRipples = true;

                //额外清除store中的数据
                this.$store.commit('resetSingleSearch', {path: this.path});
                for (const key in this.form) {
                    this.form[key] = null;
                    //清除select组件的筛选值
                    if (this.$refs[`select_${key}`] && this.$refs[`select_${key}`].length > 0) {
                        this.$refs[`select_${key}`][0].setQuery(null);
                        this.$refs[`select_${key}`][0].clearSingleSelect();
                    }
                }
                setTimeout(() => {
                    this.preventRipples = false
                }, 0);

                this.$emit('search', this.form);
            },

            //根据searchFormConfig初始化查询表单
            initComponent() {
                //获取枚举数据的任务队列
                const enumMapTask = [];
                const form = {};
                this.searchFormConfig.forEach(item => {
                    const {key} = item;
                    //date类型表单key为数组
                    if (item.type === 'daterange') {
                        key.forEach((item, index) => {
                            form[key[index]] = this.recordParam(key[index]) || item.defaultValue;
                        });
                    } else {
                        const recordValue = this.recordParam(key);

                        if (isEmpty(recordValue)) {
                            form[key] = isEmpty(item.defaultValue) ? "" : item.defaultValue;
                        } else {
                            form[key] = this.recordParam(key);
                        }
                    }

                    //如果是select类型需要请求接口拉取
                    if (item.type === 'select') {
                        this.$set(this.enumMap, item.key, []);

                        //选项是固定值直接添加
                        if (item.constValue) {
                            this.enumMap[item.key] = item.constValue;
                        } else if (!item.dependent) {
                            //不存在依赖直接加入任务
                            item.promise = this.$get(item.api);
                            enumMapTask.push(item)
                        } else if (form[item.dependent]) {
                            //存在依赖并且依赖项有值也要加入任务
                            item.promise = this.$get(`${item.api}`.Format(form[item.dependent]));
                            enumMapTask.push(item)
                        }
                    }
                });
                this.form = form;

                if (enumMapTask.length) {
                    Promise.all(enumMapTask.map(item => item.promise)).then(resArray => {
                        resArray.forEach((res, index) => {
                            const taskItem = enumMapTask[index];
                            this.enumMap[taskItem.key] = taskItem.formatOption(res);
                        });
                    })
                }
            },

            //根据store状态恢复查询条件
            recordParam(key) {
                const recordParam = this.$store.state.searchParam.paramMap[this.path];
                if (key && recordParam) {
                    const {searchParam} = recordParam;
                    return searchParam[key];
                }
                return '';
            },

            /**
             * 下拉菜单切换选项后需要判断是否有关联下拉，如果有触发关联下拉菜单加载
             */
            handleSelectChange(item, currentValue) {

                if (this.preventRipples) {
                    return;
                }

                const {influence} = item;
                if (influence) {
                    this.preventRipples = true;
                    //清空影响到的菜单
                    this.clearInfluence(influence);
                    //放入消息队列延缓阻止涟漪的时间，防止多次调用拉取列表接口
                    setTimeout(() => {
                        this.preventRipples = false
                    }, 0);

                    //找到该选项影响到的下拉菜单配置
                    const {api, key, formatOption} = this.searchFormConfig.find(item => item.key === influence);
                    if (currentValue) {
                        this.$get(`${api}`.Format(currentValue)).then(res => {
                            let augment = Object.assign({}, this.enumMap);
                            augment[key] = formatOption(res);
                            this.enumMap = augment;
                        })
                    }
                }
                this._mxHandleSubmit();
            },

            //根据key递归清除所有影响到的下拉项
            clearInfluence(influenceKeyKey) {
                this.form[influenceKeyKey] = '';
                this.enumMap[influenceKeyKey] = [];
                const influenceItem = this.searchFormConfig.find(item => item.key === influenceKeyKey);
                if (influenceItem) {
                    this.clearInfluence(influenceItem.influence);
                }
            },

            dateChange(value, key1, key2) {
                if (!value[0] || !value[1]) {
                    this.form[key1] = "";
                    this.form[key2] = "";
                } else {
                    this.form[key1] = new Date(value[0]);
                    this.form[key2] = new Date(value[1]);
                }
                this._mxHandleSubmit();
            },

            /**
             * 是否可以清除
             */
            isClearAble(item) {
                return item.clearable !== false;
            }
        },

        computed: {},

        watch: {
            searchFormConfig() {
                this.initComponent();
            }
        },

        components: {},
    }
</script>
