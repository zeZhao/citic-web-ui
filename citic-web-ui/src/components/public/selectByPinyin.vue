<style scoped lang="scss">
    .pinyin-select {
        display: block;
        position: relative;

        /*&:hover{
            .option-list{
                transform: rotateX(0);
            }
        }*/

        &::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 8px;
            content: "";
            display: inline-block;
            background: url("../../../static/images/public/icon-select-active.png") center no-repeat;
            background-size: cover;
            height: 12px;
            width: 8px;
        }

        &.focus::after {
            background: url("../../../static/images/public/icon-select-unactive.png") center no-repeat;
        }

        &.clear:hover {
            .ivu-icon {
                display: inline-block !important;
            }
        }

        .ivu-icon {
            color: #80848f;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 8px;
            z-index: 9;
            font-size: 16px;
            cursor: pointer;
        }

        .input {
            width: 100%;
            height: 36px;
            font-size: 12px;
            display: inline-block;
            line-height: 32px;
            padding: 0 24px 0 8px;
            outline: 0;
            border: none;
            box-sizing: border-box;
            color: #495060;
            background-color: #fff;
            position: relative;
            cursor: pointer;
        }

        //下拉框窗体
        .option-list {
            padding: 10px 0;
            box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
            position: absolute;
            z-index: 9;
            top: 41px;
            left: 0;
            width: 265px;
            border-radius: 4px;
            max-height: 350px;
            background: #fff;
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            transition: .2s;
            transform: rotateX(90deg);
            transform-origin: top;

            &.active {
                transform: rotateX(0);
            }

            &.empty {
                height: 30px;
            }

            /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
            ::-webkit-scrollbar {
                width: 5px;
                height: 5px;
                background-color: rgba(245, 245, 245, 0);
                border-radius: 5px;
            }

            /*定义滚动条的轨道，内阴影及圆角*/
            ::-webkit-scrollbar-track {
                /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
                border-radius: 5px;
                background-color: rgba(245, 245, 245, 0);
            }

            /*定义滑块，内阴影及圆角*/
            ::-webkit-scrollbar-thumb {
                width: 5px;
                height: 5px;
                border-radius: 5px;
                /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
                background-color: hsla(225, 4%, 58%, 0.33);
            }

            .left-side {
                width: 30px;
                max-height: 350px;
                border-right: 1px dotted rgba(101, 181, 255, 0.71);
                display: inline-block;
                color: #65b5ff;
                font-size: 14px;
                overflow-y: auto;

                .tag {
                    display: block;
                    text-align: center;
                    margin-bottom: 5px;
                    cursor: pointer;

                    &:hover {
                        color: #35455e;
                    }
                }
            }

            .right-side {
                width: 236px;
                max-height: 350px;
                display: inline-block;
                padding: 0 20px 0 10px;
                overflow-y: auto;

                .group {
                    margin-bottom: 5px;

                    .title {
                        color: #35455e;
                        position: relative;
                        font-size: 16px;
                        border-bottom: 1px dotted rgba(101, 181, 255, 0.71);
                        padding-bottom: 5px;

                        &::after {
                            content: '';
                            width: 10px;
                            height: 3px;
                            background: #65b5ff;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            display: inline-block;
                        }
                    }

                    .item {
                        font-size: 12px;
                        line-height: 18px;
                        padding-top: 5px;
                        cursor: pointer;

                        &:hover, &.active {
                            color: #65b5ff;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="pinyin-select" :class="{focus: focus, clear: selectedValue}">
        <Icon type="ios-close" v-show="selectedValue && focus" @click.native="clear"></Icon>
        <input
            ref="pinyinSelect"
            class="input"
            type="text"
            :placeholder="placeholder"
            v-model="selectedValue"
            @focus="onFocus"
            @blur="onBlur"
            :readonly="true"
        >

        <div class="option-list" :class="{active: showOptionList, empty: !groupArray.length}">
            <div class="left-side">
                <span class="tag" v-for="(group, key) in groupArray" :key="key" @click="toTarget(group.tag)">
                  {{group.tag}}
                </span>
            </div>
            <div class="right-side">
                <div class="group" v-for="(group, key) in groupArray" :key="key">
                    <p class="title" :id="group.tag">{{group.tag}}</p>
                    <p class="item" :class="{active: selectedKey === item.key}" v-for="(item, index) in group.member"
                       :key="index" @click="select(item.key, item.value)">
                        {{item.value}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: "",
                required: false,
            },

            options: {
                type: Array,
                default: [],
                required: false,
            },

            value: {
                type: String,
                default: '',
                required: false,
            }
        },

        data() {
            return {
                focus: false,
                selectedValue: '',
                selectedKey: '',
                showOptionList: false,
                timer: null,
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            onFocus() {
                this.focus = true;
                this.showOptionList = true;
            },

            onBlur() {
                this.focus = false;
                //延迟处理隐藏事件，
                this.timer = setTimeout(() => this.showOptionList = false, 100)
            },

            clear() {
                this.select("", "");
            },

            /**
             * 跳转到锚点
             */
            toTarget(tag) {
                location.href = `#${tag}`;
                clearTimeout(this.timer);
                this.$refs.pinyinSelect.focus();
                this.focus = true;
            },

            /**
             * 选中
             */
            select(key, value) {
                if (key === this.selectedKey) {
                    return;
                }
                this.selectedKey = key;
                this.selectedValue = value;
                this.$nextTick(() => {
                    this.$emit('on-change', key);
                    this.showOptionList = false;
                });
            }
        },

        computed: {
            /**
             * 将数组数据根据拼音分组
             * @returns {Array}
             */
            groupArray() {
                //分组列表
                const groupMap = {};
                //遍历数据，根据首字母分组
                this.options.forEach(item => {
                    let firstWord = this.$pinyinConvert.simplify2Pinyin(item.value).substr(0, 1);
                    firstWord = firstWord.toLocaleUpperCase();
                    let group = groupMap[firstWord];
                    if (!group) {
                        group = {
                            tag: firstWord,
                            member: [],
                        };
                        groupMap[firstWord] = group;
                    }
                    group.member.push(item);
                });

                //将分组Map转换成数组
                const groupArray = [];
                for (const key in groupMap) {
                    groupArray.push(groupMap[key]);
                }
                //根据tag的ASCII排序
                groupArray.sort((x, y) => x.tag.charCodeAt(0) > y.tag.charCodeAt(0) ? 1 : -1);
                return groupArray;
            },
        },

        watch: {
            selectedKey: function (val) {
                this.$emit('update:value', val)
            },

            value: function (val) {
                this.selectedKey = val;
            },
        },

        components: {},
    }
</script>
