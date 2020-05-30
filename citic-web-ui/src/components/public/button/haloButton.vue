<style scoped lang="scss">
    .btn-box {
        width: 100%;
        position: relative;
        display: block;
        overflow: hidden;
        height: 45px;

        &:hover{
            button{
                background: rgba(213, 9, 29, 0.9);
            }
        }

        &:active{
            button{
                background: #d5091d;
            }
        }

        button {
            height: 100%;
            width: 100%;
            border: none;
            background: #d5091d;
            border-radius: 5px;
            position: relative;

            .text {
                position: absolute;
                z-index: 2;
                user-select: none;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                line-height: 45px;
                cursor: pointer;
                color: #fff;
            }
        }

        .halo-box {
            position: absolute;
            left: 0;
            top: 0;
            width: 1%;
            padding-bottom: 1%;

            .halo {
                display: inline-block;
                width: 0;
                height: 0;
                transition: height 1s, width 1s;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);

                &.active {
                    animation: halo 3s;

                    @keyframes halo {
                        from {
                            width: 0;
                            height: 0;
                        }

                        to {
                            width: 40000%;
                            height: 40000%;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="btn-box" @mousedown="mouseDown" @mouseup="mouseUp" @mouseout="mouseUp">
        <button>
            <span class="text">
                <slot></slot>
             </span>
        </button>
        <div class="halo-box">
            <span class="halo" :class="{active: active}"
                  :style="{top: `${top}px`, left: `${left}px`, 'transform-origin': `${top}px ${left}px`}"
                  ></span>
        </div>

    </div>
</template>

<script>
    export default {
        props: {},

        data() {
            return {
                top: 0,
                left: 0,
                active: false,
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            mouseDown(e) {
                this.top = e.offsetY;
                this.left = e.offsetX;
                this.active = true;
            },

            mouseUp() {
                this.active = false
            },
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
