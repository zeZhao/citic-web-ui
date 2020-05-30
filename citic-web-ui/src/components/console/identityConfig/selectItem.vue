<style scoped lang="scss">
    .select-item {
        font-size: 14px;
        color: #333;

        .check-box {
            cursor: pointer;
            transition: .3s;
            vertical-align: middle;
            display: inline-block;
            width: 15px;
            height: 15px;
            background: no-repeat center;
            background-size: contain;
            background-image: url("../../../../static/svg/check-box-empty.svg");

            &.active {
                background-image: url("../../../../static/svg/check-box-active.svg");
            }

            &.disabled {
                cursor: not-allowed;
                background-image: url("../../../../static/svg/check-box-empty.svg");

                &.active {
                    background-image: url("../../../../static/svg/check-box-disabled.svg");
                }
            }
        }

        .radio-btn {
            background-size: contain;
            background-image: url("../../../../static/svg/radio-btn-empty.svg");

            &.active {
                background-image: url("../../../../static/svg/radio-btn-active.svg");
            }

            &.disabled {
                background-image: url("../../../../static/svg/radio-btn-empty.svg");

                &.active {
                    background-image: url("../../../../static/svg/radio-btn-disabled.svg");
                }

            }
        }

        .label {
            margin-left: 10px;
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;

            &.disabled {
                cursor: not-allowed;
            }
        }
    }
</style>

<template>
    <div class="select-item" @click="toggleClick">
        <span class="check-box" :class="{'radio-btn': radio, 'disabled': disabled, 'active': select}"></span>
        <label class="label" :class="{'disabled': disabled}">{{label}}</label>
    </div>
</template>

<script>
    export default {

        props: {

            label: {
                required: true,
                type: String,
            },

            value: {
                required: true,
                type: Boolean,
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },

            radio: {
                required: false,
                type: Boolean,
                default: false,
            }

        },

        data() {
            return {
                select: this.value
            }
        },

        created() {

        },

        methods: {

            /**
             * 点击按钮切换选中状态
             */
            toggleClick() {

                if (this.disabled) {
                    return;
                }

                this.select = !this.select;
            },

        },

        watch: {
            value(val) {
                this.select = val;
            },

            select(val) {
                this.$emit("input", val);
                this.$emit("change", this.select);
            },
        },

        computed: {},
    }
</script>
