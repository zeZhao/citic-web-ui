<style scoped lang="scss">
    .text-pop {
        position: relative;
        display: inline-block;
        font-weight: bold;

        .pop-box {
            display: none;
            position: absolute;
            padding: 20px 15px;
            background: #fff;
            box-shadow: 0 3px 8px rgba(136, 136, 136, 0.51);
            width: 300px;
            text-align: center;

            &.top{
                top: -30px;
                left: 50%;
                transform: translateY(-100%) translateX(-50%);

                &::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                    width: 16px;
                    height: 16px;
                    background: #fff;
                    box-shadow: 2px 3px 8px rgba(136, 136, 136, 0.51);
                }
            }

            &.bottom{
                bottom: -30px;
                left: 50%;
                transform: translateY(100%) translateX(-50%);

                &::after{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: -8px;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                    width: 16px;
                    height: 16px;
                    background: #fff;
                    border: 1px solid rgba(136, 136, 136, 0.2);
                    border-right: none;
                    border-bottom: none;
                }
            }

            &.visible{
                display: inline-block;
            }
        }
    }
</style>

<template>
    <span class="text-pop">
        <slot></slot>

        <span class="pop-box" :class="{visible: visible, top: top, bottom: bottom}"
              :style="{width: `${width}px`, height: `${height}px`, fontSize: `${fontSize}px`}">{{text}}</span>
    </span>
</template>

<script>
    export default {
        props: {
            //弹窗展示文字
            text: {
                type: String,
                required: true,
            },

            //弹窗出现位置
            //top  bottom
            position: {
                type: String,
                default: 'bottom'
            },

            //弹窗宽度
            width: {
                type: Number,
                default: 300
            },

            height: {
                type: Number,
                default: 90
            },
            fontSize: {
                type: Number,
                default:''
            },

            //自动消失延迟时间(ms)，默认为0表示不自动消失
            delay: {
                type: Number,
                default: 0
            },

            //弹窗是否可见
            visible: {
                type: Boolean,
                default: true
            }
        },

        data() {
            return {
                top: this.position === 'top',
                bottom: this.position === 'bottom',
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        computed: {},

        watch: {
            visible(value){
                if(value && this.delay){
                    setTimeout(()=>{
                        this.$emit('close')
                    }, this.delay)
                }
            }
        },

        components: {},
    }
</script>
