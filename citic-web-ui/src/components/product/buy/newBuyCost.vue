<style scoped lang="scss">
    .cost-float-panel {
        height: 200px;
        background-color: #f6f7f8;
        min-width: 1200px;

        .free {
            width: 100%;
            height: 200px;
            background-color: #f6f7f8;

            &.fixed-mark{
                position: fixed;
                bottom: 0;
                left: 0;
                z-index: 999;
            }

            .contain {
                max-width: 1200px;
                margin: 0 auto;
                position: relative;
                padding: 20px 40px;
                height: 100%;

                .label {
                    font-size: 15px;
                }

                .cost {
                    font-size: 20px;
                    color: red;
                    display: block;
                    margin-top: 5px;
                    margin-top: 6px;
                }

                .btn-group {
                    position: absolute;
                    right: 40px;
                    top: 80px;

                    .ivu-btn {
                        height: 40px;
                        width: 140px;
                        font-size: 15px;
                        font-weight: bold;
                        margin: 0 10px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="cost-float-panel" id="substanceCostPanel">
        <div class="free" v-float-bottom:substanceCostPanel>
            <div class="contain">

                <!-- <p class="label">配置费用：</p> -->
                <Row style="width:80%;">
                    <i-col span="12" class="cost" v-for="(item, index) in cost" :key="index">
                        {{item.cost_name}}: {{item.cost_value}}{{item.cost_unit_name}}
                    </i-col>
                </Row>
                <p  v-for="(item, index) in cost" :key="index">
                </p>

                <div class="btn-group">
                    <template v-if="!todo">
                        <Button type="error" shape="circle" size="large" @click="submit('buy')" :loading="loading"
                                :disabled="disabled">立即购买
                        </Button>
                        <Button type="ghost" shape="circle" size="large" @click="submit('order')" :loading="loading"
                                :disabled="disabled">加入订单
                        </Button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            cost: {
                type: Array,
                default: ()=>{
                    return [];
                },
            },

            loading: {
                type: Boolean,
                default: false,
            },

            todo: {
                type: String,
                required: true,
            },

            disabled: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                fixed: false,
                tipVisible: false,
            };
        },

        created() {

        },

        mounted() {

        },
        beforeUpdate(){
          console.log("------------")
            console.log(this.cost);
            
        },

        methods: {
            submit(action) {
                this.$emit("submit", action);
            },

            tipClose(){
                this.tipVisible = false;
            },

            tipOpen(){
                this.tipVisible = true;
            }
        },

        computed: {

        },

        watch: {},

        components: {

        },
    }
</script>
