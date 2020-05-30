<!-- 查看详情 -->
<style lang="scss">
.payment_management_detile{
    margin-top: 20px;
    .table-last-row{
        height: 180px;

    }
    .btn-group{
        margin-top: 20px;
    }
}
</style>
<template>
    <Card class="payment_management_detile">
        <p slot="title">付款管理详情</p>
         <i-table :row-class-name="rowClassName" :columns="columns" :data="listData" :loading='loading' ></i-table>
        <div class="btn-group">
            <Button @click="$router.back()">返回</Button>
            <Button type="primary" @click="downLoadNotice">下载收款通知书</Button>
        </div>
    </Card>
</template>

<script>
import config from '@/config/index.js'
export default {
    data () {
        let { accountPeriod } = this.$route.query
        return {
            loading:false,
            accountPeriod,
            columns:[
                {
                    title:'序号',
                    key:'index'
                },
                {
                    title:'服务名称',
                    key:'serviceName'
                },
                {
                    title:'账期月',
                    key:'accountPeriod'
                },
                {
                    title:'金额总计',
                     render: (h, params)=>{
                         if(!params.row.type){
                              return h('span',{},(Number(params.row.totalPrice)/1000).toFixed(2))
                         }
                        function textCreatde(title,value, fontWeight = 'normal',otherFix=''){
                            return h("p",{
                                style:{
                                    fontWeight: fontWeight,
                                    fontSize:'14px',
                                    marginTop: '4px'
                                }
                            }, `${title}：${otherFix}${(Number(value) / 1000).toFixed(2)}`)
                        }
                        let { billAmount, discountAmount, actualAmount } = params.row.totalObj
                        let discountAmountText = ''
                        if(discountAmount > 0){
                            discountAmountText = '+'
                        }


                        return h('span',{},[
                            textCreatde('账单金额',billAmount, 'bold'),
                            textCreatde(discountAmount>0?'调整金额':'优惠金额', discountAmount,'normal',discountAmountText  ),
                            textCreatde('当期应缴金额',actualAmount, 'bold')
                        ])

                    }
                }
            ],
            listData:[
            ]
        };
    },

    mounted(){
        this.getInitData()
    },

    components: {},

    computed: {},

    methods: {
        async getInitData(){
            // console.log(this.accountPeriod)
            let res = await this.$get(this.$API_ENUM.PAYMENT_SERVER_BILL_LIST,{accountPeriod: this.accountPeriod})

             if(res.code == 200){
                this.listData = res.data
            }else{
                this.$Message.error(res.message)
            }

            if(this.listData.length == 0){
                return
            }
            let res2 = await this.$get(this.$API_ENUM.PAYMENT_ACCOUNT_PERIOD.replace('{accountPeriod}',this.accountPeriod))
            console.log(res2.data)
            let newObj = {
                type:'total',
                totalObj: res2.data
            }

            this.listData.push(newObj)
            // PAYMENT_ACCOUNT_PERIOD

        },
        rowClassName(row,index){
            if(index == this.listData.length - 1){
                return 'table-last-row'
            }
        },
        downLoadNotice(){
            let token = sessionStorage.getItem('citic-token')
            let {citicId, name} = JSON.parse(sessionStorage.getItem('tenantInfo'))
            let url = `${config.BASE_API_URL}${this.$API_ENUM.PAYMENT_BILLING_DETAIL_DOWNLOAD}?tenantId=${citicId}&tenantName=${name}&accountPeriod=${this.accountPeriod}`
            console.log(url)
            window.open(url)
        }

    }
}

</script>
