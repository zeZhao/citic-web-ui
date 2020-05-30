<style scoped lang="scss">
    .instance-search-panel {
        position: relative;

        .toggle-btn {
            position: absolute;
            right: 5px;
            top: 5px;
            height: 25px;
            width: 25px;
            display: inline-block;
            background: #fff url("../../../../static/images/console/instance/icon-draw.png") center no-repeat;
            background-size: contain;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 1px 3px 0 rgba(107, 107, 107, 0.2);
            transition: .2s linear;

            &.active {
                transform: rotate(-180deg);
                box-shadow: 0 -1px 3px 0 rgba(107, 107, 107, 0.2);
            }
        }

        .search-form {

            .row {

                .item {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>

<style lang="scss">
    .instance-search-panel {
        .ivu-select, .ivu-date-picker, .ivu-input-wrapper {
             .ivu-select-selection, .ivu-input {
                border: none;
                box-shadow: 0 0 5px 0 rgba(146, 146, 146, 0.2);
            }

            .ivu-select-selection:hover, .ivu-input:hover, .ivu-select-visible .ivu-select-selection, .ivu-input:focus {
                box-shadow: 0 1px 10px 0 rgba(101, 181, 255, 0.51);
            }
        }

         .pinyin-select {
            input {
                border: none;
                box-shadow: 0 0 5px 0 rgba(146, 146, 146, 0.2);

                &:hover, &:focus {
                    box-shadow: 0 1px 10px 0 rgba(101, 181, 255, 0.51);
                }
            }
        }
    }
</style>

<template>
    <div class="instance-search-panel">
        <!--<span class="toggle-btn" :class="{active: extendPanel}" @click="togglePanel"></span>-->

        <Form class="search-form" ref="form" :model="form" :label-width="150">

            <Row class="row" :gutter="10">

                <Col class="item" span="8" v-for="(item, index) in searchFormConfig" :key="index"
                     v-show="extendPanel || item.base">

                    <FormItem :label="item.label ? `${item.label}：` : ``">

                        <!--输入框-->
                        <template v-if="item.type === TYPE_ENUM.INPUT">
                            <Input v-model="form[item.key]"
                                   :placeholder="item.placeholder"
                                   :clearable="item.clearable!==false"
                                   size="large"
                                   @on-change="_mxHandleSubmit()"></Input>
                        </template>

                        <!--下拉列表-->
                        <template v-if="item.type === TYPE_ENUM.SELECT">
                            <Select v-model="form[item.key]"
                                    filterable
                                    :clearable="item.clearable!==false"
                                    :placeholder="item.placeholder"
                                    size="large"
                                    @on-change="value=>handleSelectChange(item, value)"
                                    :ref="item.key"
                            >
                                <Option v-for="option in enumMap[item.key]"
                                        :value="option.key"
                                        :key="option.key">{{option.value }}</Option>
                            </Select>
                        </template>

                        <!--时间范围选择-->
                        <template v-if="item.type === TYPE_ENUM.DATE_RANGE">
                            <DatePicker type="daterange"
                                        :placeholder="item.placeholder"
                                        style="width: 100%"
                                        size="large"
                                        v-model="form[item.key[0]]"
                                        @on-change="value => dateChange(value, item.key[1], item.key[2])"
                            ></DatePicker>
                        </template>

                        <!--下拉框带汉语拼音排序功能-->
                        <template v-if="item.type === TYPE_ENUM.SELECT_PINYIN">
                            <ci-select-by-pinyin :placeholder="item.placeholder"
                                                 :options="enumMap[item.key]"
                                                 @on-change="value=>handleSelectChange(item, value)"
                                                 :value.sync="form[item.key]"
                                                 :clearable="item.clearable"
                            />
                        </template>

                    </FormItem>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
    import selectByPinyin from '../../public/selectByPinyin';
    import {formMixin} from '../../../mixin';

    const TYPE_ENUM = {
        INPUT: 'input',
        SELECT: 'select',
        DATE_RANGE: 'daterange',
        SELECT_PINYIN: 'select-pinyin',
    };

    function isEmpty(value) {
        return value === null || value === undefined || value.length === 0
    }

    export default {
        mixins: [formMixin],

        props: {
            /*
                基础配置
                type: 'select',
                key: '',
                placeholder: '',
                //是否可清除
                clearable: false,
                //是否默认展示
                base: true,

                select配置
                //取值依赖的key
                dependent: 'supplierAlias',
                //依赖key为空时是否允许查询
                ignoreDependentEmpty: false
                //影响其他select的key
                influence: 'citicServiceAlias',
                //下拉框是否可为空，不可为空默认选中第一个
                required: true,
                api: ``,
                formatOption: function (res) {},
                //默认选项值列表
                constValue: [],

                //date配置
                key: [],
             */
            searchFormConfig: {
                type: Array,
                default() {
                    return [];
                },
            },
        },

        data() {
            return {
                TYPE_ENUM,
                //展开或隐藏多余查询条件
                extendPanel: true,

                path: this.$route.path,
                form: {},
                enumMap: {},
                //当清空依赖项目时做为标志，父菜单清空子菜单数据时子菜单不要拉取列表数据
                preventRipples: false,
            };
        },

        created() {

        },

        mounted() {
            this.initComponent();
        },

        methods: {
            /**
             * 隐藏/显示多余查询条件
             */
            togglePanel() {
                this.extendPanel = !this.extendPanel;
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
                    this.form[key] = '';
                }
                setTimeout(() => {
                    this.preventRipples = false
                }, 0);

                this.$emit('search', this.form);
            },

            //根据searchFormConfig初始化查询表单
            initComponent(update = false) {
                //初始化页面时防止连续调用拉取列表接口
                this.preventRipples = true;

                this.$nextTick(() => {
                    //获取枚举数据的任务队列
                    const enumMapTask = [];
                    const form = this.form;

                    for (let item of this.searchFormConfig) {

                        if (update && !item.dynamic) {
                            continue;
                        }

                        const {key} = item;
                        //date类型表单key为数组
                        if (item.type === TYPE_ENUM.DATE_RANGE) {
                            key.forEach((item, index) => {
                                // form[key[index]] = this.recordParam(key[index]) || item.defaultValue;

                                this.$set(this.form, key[index], this.recordParam(key[index]) || item.defaultValue)

                            });
                        } else {
                            const recordValue = this.recordParam(key);

                            if (isEmpty(recordValue)) {
                                // form[key] = isEmpty(item.defaultValue) ? "" : item.defaultValue;

                                this.$set(this.form, key, isEmpty(item.defaultValue) ? "" : item.defaultValue);
                            } else {
                                // form[key] = recordValue;

                                this.$set(this.form, key, recordValue);
                            }
                        }

                        //如果是select类型需要请求接口拉取
                        if (item.type === TYPE_ENUM.SELECT || item.type === TYPE_ENUM.SELECT_PINYIN) {

                            this.$set(this.enumMap, item.key, []);

                            //选项是固定值直接添加
                            if (item.constValue) {
                                this.enumMap[item.key] = item.constValue;
                            } else if (!item.dependent) {
                                //不存在依赖直接加入任务
                                item.promise = this.$get(item.api);
                                enumMapTask.push(item)
                            } else if (item.dependent) {

                                const dependentValue = form[item.dependent];

                                // 允许依赖项为空
                                if(item.ignoreDependentEmpty === true){
                                    //存在依赖并且依赖项有值也要加入任务
                                    item.promise = this.$get(`${item.api}`.Format(dependentValue));
                                    enumMapTask.push(item)
                                }else if(dependentValue){
                                    //存在依赖并且依赖项有值也要加入任务
                                    item.promise = this.$get(`${item.api}`.Format(dependentValue));
                                    enumMapTask.push(item)
                                }
                            }
                        }
                    }

                    // this.form = form;

                    if (enumMapTask.length) {
                        Promise.all(enumMapTask.map(item => item.promise)).then(resArray => {
                            resArray.forEach((res, index) => {
                                if (res) {
                                    const taskItem = enumMapTask[index];
                                    this.enumMap[taskItem.key] = taskItem.formatOption(res);
                                }
                            });
                            //解除下拉列表触发列表拉取防护
                            this.preventRipples = false;
                        })
                    } else {
                        //解除下拉列表触发列表拉取防护
                        this.preventRipples = false;
                    }
                });
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
                    //找到该选项影响到的下拉菜单配置
                    const {api, key, formatOption, required} = this.searchFormConfig.find(item => item.key === influence);

                    this.preventRipples = true;
                    //清空影响到的菜单
                    this.clearInfluence(influence, currentValue);
                    //放入消息队列延缓阻止涟漪的时间，防止多次调用拉取列表接口
                    setTimeout(() => {
                        this.preventRipples = false;

                        //当前下拉菜单有值，并且关联的子下拉菜单不可为空
                        if (currentValue && required) {
                            //子菜单设置默认值时会自动拉取列表，当前菜单值改变可以不触发拉取列表操作
                            //若出现n级菜单级联 刷新列表操作会延迟到最后一个 不为空的子级菜单的值生效时
                        } else {
                            this._mxHandleSubmit();
                        }

                    }, 0);

                    // 有选中值，则拉取关联的下拉列表查询数据
                    if (currentValue) {
                        this.$get(`${api}`.Format(currentValue)).then(res => {
                            let augment = Object.assign({}, this.enumMap);
                            augment[key] = formatOption(res);
                            this.enumMap = augment;

                            //判断下拉列表是否允许为空
                            if (required) {
                                // 下拉列表为必填时，默认填充第一项
                                const optionList = augment[key];
                                if (optionList.length) {
                                    this.form[key] = optionList[0].key;
                                }
                            }
                        })
                    }
                } else {
                    //没有关联其他下拉菜单直接拉取列表数据
                    this._mxHandleSubmit();
                }
            },


            /*
            根据key递归清除所有影响到的下拉项

            此处清空子级联项目时，一级父节点有可能有值，所以二级节点需要判断，
            一级节点有值，二级节点会自动拉取一次数据
            一级节点无值，二级节点需要判断是否，可以不依赖父节点查询一次数据，因为一级节点无值不会触发二级节点拉取数据
            */
            clearInfluence(influenceKeyKey, currentValue) {
                if(!influenceKeyKey){
                    return;
                }

                // 清空关联下拉框数据
                this.$refs[influenceKeyKey][0].clearSingleSelect();
                this.form[influenceKeyKey] = '';

                const influenceItem = this.searchFormConfig.find(item => item.key === influenceKeyKey);

                if (influenceItem) {

                    //被关联到的下拉菜单组件，如果允许使用空条件查询，则查询一次接口获取下拉列表数据
                    if(!currentValue && influenceItem.ignoreDependentEmpty === true){
                        this.$get(`${influenceItem.api}`.Format('')).then((res)=>{
                            this.enumMap[influenceKeyKey] = influenceItem.formatOption(res);
                        });
                    }else {
                        //需要关联条件才可以查询，则清空现有下拉数据
                        this.enumMap[influenceKeyKey] = [];
                    }

                    // 一级节点改变，二级节点一定value为空
                    this.clearInfluence(influenceItem.influence, '');
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
        },

        computed: {},

        watch: {
            searchFormConfig(newQuestion, oldQuestion) {
                //更新时去除form、enum中旧的动态key
                oldQuestion.forEach(({key, dynamic}) => {
                    if (dynamic) {
                        delete this.form[key];
                        delete this.enumMap[key];
                    }
                });
                this.initComponent(true);
            },
        },

        components: {
            'ci-select-by-pinyin': selectByPinyin
        },
    }
</script>
