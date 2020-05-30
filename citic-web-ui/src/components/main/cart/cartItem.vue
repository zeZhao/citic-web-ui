<style scoped lang="scss">
    .order-item {
        margin-top: 10px;
        border: 1px solid #ececec;

        .content {
            .row {
                display: flex;

                .cell {
                    display: inline-block;
                    border-right: 1px solid #ececec;
                    border-top: 1px solid #ececec;
                    line-height: 50px;
                    text-align: center;
                    color: #333;

                    &.text-right {
                        text-align: right;
                        padding: 0 20px;
                    }

                    &.text-left {
                        text-align: left;
                        padding: 0 20px;
                    }

                    &.bold {
                        font-weight: bold;
                        color: #333;
                    }

                    &.light {
                        color: #666
                    }

                    &.empty-cell {
                        border-top: none;
                    }

                    .action-btn {
                        transition: .3s;
                        padding: 0 20px;

                        &:hover {
                            color: #ed3f14;
                        }

                        cursor: pointer;
                    }

                    .sub-cell {
                        display: flex;
                        flex-direction: column;
                        justify-items: flex-start;
                        border-right: none;

                        &:first-child {
                            border-top: none;
                        }

                        .cell {
                            flex-grow: 1;
                        }
                    }
                }

                &:first-child > .cell {
                    border-top: none;
                }

                & > .cell:last-child {
                    border-right: none;
                }
            }
        }
    }
</style>

<template>
    <div class="order-item" :class="{selected: order.selected}">
        <div class="content">
            <Row class="row">
                <!--服务名称-->
                <Col class="cell text-left bold" span="8">
                    <Checkbox class="check-box red" v-model="order.selected" @on-change="checkBoxChange">{{''}}</Checkbox>
                    <span>{{order.serviceName}}</span>
                </Col>
                <!--配置-->
                <Col class="cell" span="4">
                        <span class="cell text-left light sub-cell"
                              v-for="(config, configIndex) in order.priceList"
                              :key="configIndex">
                            {{config.templateName}}
                        </span>
                </Col>
                <!--费用-->
                <Col class="cell bold" span="5">
                        <span class="cell sub-cell" v-for="(priceItem, priceIndex) in order.priceList"
                              :key="priceIndex">
                            <span class="cell sub-cell text-right" v-for="(feeItem, feeIndex) in priceItem.fees"
                                  :key="feeIndex">
                               <template v-if="feeItem.priceDisplay">
                                {{feeItem.priceDisplay}}
                            </template>
                            <template v-else>
                                 {{feeItem.scopeDisplay}}{{feeItem.price}}
                            </template>
                                {{feeItem.unitDisplay.nameWithFactor || feeItem.unitDisplay.name}}
                            </span>
                        </span>
                </Col>
                <!--实例个数-->
                <Col class="cell" span="2">
                    <InputNumber :max="99" :min="1" v-model="order.quantity" @on-change="checkInputNumber"></InputNumber>
                </Col>
                <!--操作-->
                <Col class="cell text-left bold" span="5">
                    <span class="action-btn" @click="toEdit(order.id)">修改</span>
                    <span class="action-btn" @click="deleteItem(order.id)">删除</span>
                    <span class="action-btn" @click="toDetail(order.id)">查看详情</span>
                </Col>
            </Row>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            order: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {

            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            checkBoxChange(value) {
                this.$emit('selectOne', { id: this.order.id, value });
            },

            toDetail(id) {
                this.$emit('toDetail', id);
            },

            toEdit(id) {
                this.$emit('toEdit', id);
            },

            deleteItem(id) {
                this.$emit('delete', id, '确定删除吗？');
            },

            checkInputNumber(){
                let value = this.order.quantity;
                if(!value || value.toString().trim() === ''){
                    this.order.quantity = -1;
                    value = 1;
                }else if(!/^[1-9][0-9]*$/.test(value)){
                    if(value < 0){
                        value = 1;
                    }else if(value.toString().includes(".")){
                        value = Number(value.toString().split('.')[0]);
                    }else {
                        value = 1;
                    }
                    this.order.quantity = -1;
                }
                this.$nextTick(() => {
                    this.order.quantity = value;
                    this.updateQuantity();
                });
            },

            updateQuantity(){
                this.$put(`${this.$API_ENUM.SHOPPING_CART_PRODUCTS}/${this.order.id}`, this.order).then(res => {
                    const { success, msg , message} = res;
                    if (success) {
                        //王佩剑，此处要调用接口更新状态中的购物车商品数量
                        this.$store.dispatch('resetShoppingCartNumber', { context: this });
                    } else {
                        this.$Message.error(msg || message || '操作失败！');
                    }
                });
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
