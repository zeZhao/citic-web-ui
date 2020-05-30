<style scoped lang="scss">
    .halo {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.31);

        .switch-group {
            display: flex;
            flex-direction: row;
            justify-content: center;
            overflow: hidden;
            height: 90px;
            background: #ffffff;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            .item {
                color: #333;
                font-size: 16px;
                line-height: 90px;
                text-align: center;
                flex-grow: 1;
                transition: .3s;
                cursor: pointer;

                border-bottom: 0 solid rgba(217, 32, 40, 0);
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);

                &.active {
                    color: #d92028;
                    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.19);
                    border-bottom: 2px solid #d92028;
                }

                &.disabled {
                    cursor: not-allowed;
                }
            }
        }
    }
</style>

<template>
    <div class="halo">
        <div class="switch-group">
            <span class="item" :class="{active: switchActive === index, disabled: item.disabled}"
                  v-for="(item, index) in switchOptions" :key="index"
                  @click="switchChange(index, item)">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            switchOptions: {
                type: Array,
                required: true,
                default: () => {
                    return [];
                },
            },
        },

        data() {
            return {
                switchActive: 0,
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            switchChange(index, item) {

                if (item.disabled) {
                    return;
                }

                this.switchActive = index;

                this.$emit("switchChange", index, item);
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
