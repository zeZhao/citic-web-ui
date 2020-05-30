<style scoped lang="scss">
    .content-header{
        margin: 0 !important;
    }

    .content-footer{
        height: 60px;

        .content{
            background: #fff;
            padding: 20px 40px;

            &.fixed-mark{
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                box-shadow: 0 0 15px 4px rgba(153, 153, 153, 0.71);
            }

            .check-box{
                min-width: 70px;
            }

            .count-tip{
                margin-right: 10px;
            }

            .select-tip{

                .select-num{
                    color: #ed3f14;
                }
            }

            .submit-btn{
                position: absolute;
                right: 0;
                top: 0;
                width: 150px;
                height: 100%;
                border: none;
                border-radius: 0;

                &[disabled]{
                    background: #e0e0e0;
                    color: #9d9696;
                }
            }
        }
    }
</style>

<template>
    <ci-content-frame>
        <ci-content-header class="content-header" :title="`全部商品  ${listData.length}`" :hasBack="false"></ci-content-header>

        <ci-custom-table :paging-device="false" :loading="loading">
            <Row slot="header">
                <Col class="column left" span="3">
                    <Checkbox class="check-box red" v-model="selectAll" @on-change="_mxSelectAllItem">{{selectAll ? '取消全选' : '全选'}}</Checkbox>
                </Col>
                <Col class="column " span="5">服务名称</Col>
                <Col class="column left" span="4">配置</Col>
                <Col class="column right" span="5">费用</Col>
                <Col class="column right" span="2">实例个数</Col>
                <Col class="column left" span="5">操作</Col>
            </Row>

            <ci-cart-item v-for="order in listData" :key="order.id"
                          :order="order"
                          @selectOne="_mxSelectOne"
                          @delete="deleteItem"
                          @toDetail="_mxToDetail"
                          @toEdit="_mxToEdit"
            ></ci-cart-item>
        </ci-custom-table>

        <div class="content-footer" id="cartFooter">
            <div class="content" v-float-bottom:cartFooter>
                <Checkbox class="check-box red" v-model="selectAll" @on-change="_mxSelectAllItem">
                    {{selectAll ? '取消全选' : '全选'}}
                </Checkbox>
                <span class="count-tip">共{{listData.length}}件商品</span>
                <span class="select-tip">已选择 <span class="select-num">{{selectedNum}}</span> 件商品</span>
                <Button class="submit-btn" type="error" :disabled="!selectedNum" @click="submitOrder">提交订单</Button>
            </div>
        </div>
    </ci-content-frame>
</template>

<script>
    import cartItem from '../../../components/main/cart/cartItem';

    import listMixin from '../../../mixin/listMixin'

    export default {
        mixins: [listMixin],

        data() {
            return {
                listData: [],
                searchAPI: `${this.$API_ENUM.SHOPPING_CART_PRODUCTS}/`,
                delAPI: `${this.$API_ENUM.SHOPPING_CART_PRODUCTS}`,
                detailPath: '/cart/detail',
                editPath: '/product/buy',
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            deleteItem(id){
                this._mxDeleteItem(id, '确认删除吗？', (url, id) => `${url}/?ids=${id}`);
            },

            _mxToDetail(id){
                this.$setSession(this.$LOCAL_STORAGE_KEYS.CART_INSTANCE_INFO + id, this.listData.find(item => item.id === id));
                this.$router.push(`${this.detailPath}?id=${id}`);
            },

            _mxToEdit(id){
                this.$setSession(this.$LOCAL_STORAGE_KEYS.EDIT_INSTANCE_CONFIG + id, this.listData.find(item => item.id === id));
                this.$router.push(`${this.editPath}?id=${id}&todo=cartEdit&actionType=${this.$API_ENUM.SERVICE_BY_ENUM_CREATE}`);
            },

            submitOrder(){
                const productList = [...this.information.selectIds].map(id => {
                    return { quantity: 1, shoppingCartProductId: id }
                });

                this.$post(`${this.$API_ENUM.ORDERS_CREATION_BY_SHOPPING_CART}`, {productList}).then(res => {
                    const { success, msg , message} = res;
                    if (success) {
                        this.$Message.success('操作成功！');
                        this._mxRemoveSelectIds(this.information.selectIds);
                        this._mxGetList();
                    } else {
                        this.$Message.error(msg || message || '操作失败！');
                    }
                });
            }
        },

        computed: {},

        watch: {
            //购物车列表改变时更新头部购物车数字
            listData(){
                this.$store.commit('setShoppingCartNumber', {
                    shoppingCartNumber: this.listData.length
                });
            }
        },

        components: {
            'ci-cart-item': cartItem,
        },
    }
</script>
