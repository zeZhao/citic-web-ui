<!-- 付款管理 -->
<style  scoped lang="scss">
.payment-management{
    margin-top: 20px;
    .mt-20{
        margin-top: 20px;
    }
}
</style>
<template>
    <Card class="payment-management">
        <p slot="title">
            付款管理
        </p>
        <search-form :search-form-config="searchFormConfig" :page="page" :stored-value="storedValue" @dosearch = "_searchChange" >
            <span slot="reset"></span>

        </search-form>
        <i-table :columns="columns" :data="listData" :loading='loading' class="mt-20"></i-table>
        <Page style="margin-top:20px;" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" :current="page.pageIndex" @on-change="_pageIndexChange" @on-page-size-change="_pageSizeChange" show-sizer show-elevator show-total></Page>



    </Card>
</template>

<script>
import newSearch from 'com/public/new-search.vue'
import mixinList from 'mixin/new-list-mixin.js'

export default {
    mixins:[mixinList],
    data () {
        return {
            loading:false,
            listUrl:this.$API_ENUM.CITIC_PORTA_PAYMENT_PAGE_LIST,
            searchFormConfig:[
                 {
                    type: 'month-section',
                    keyName: 'startDate',
                    displayName: '按年/月查询：',
                    placeholder:'',
                    defaultValue: function (){

                        return ''
                    }
                },
                {
                    type: 'month-section',
                    keyName: 'endDate',
                    displayName: '至：',
                    placeholder:'',
                    leftOffSet: 2,
                    defaultValue: function (){
                        return ''
                    }
                },
                {
                    type: 'select',
                    keyName: 'paymentStatus',
                    displayName: '按支付状态：',
                    leftOffSet: 3,
                    defaultValue: function (){
                        return 'all'
                    },
                    selectLsitData: [
                        { value: "all", label: "全部" },
                        { value: "true", label: "已支付" },
                        { value: "false", label: "未支付" },
                    ]
                },
            ],
            columns:[
                {
                    title:'账期月',
                    key:'accountPeriod'
                },
                {
                    title:'账单金额',
                    render: (h, params)=>{
                        return h('span',{},(Number(params.row.billAmount)/1000).toFixed(2))
                    }
                },
                {
                    title:'优惠金额',
                    render: (h, params)=>{
                        //正数优惠
                        let pluesText = ''
                        if(params.row.discountAmount > 0 ){
                            pluesText = '+'
                        }


                        return h('span',{},pluesText + (Number( params.row.discountAmount   )/1000).toFixed(2))
                    }
                },

                {
                    title:'当期应缴金额',
                    render: (h, params)=>{
                        return h('span',{},(Number(params.row.actualAmount)/1000).toFixed(2))
                    }
                },

                {
                    title:'支付状态',
                    render: (h, params)=>{
                        return h('span',{},(params.row.paymentStatus ? '已支付': '未支付'))
                    }
                },

                {
                    title:'操作',
                    render: (h, params)=>{
                        return h("Button",{
                            on:{
                                click: ()=>{
                                    let { accountPeriod } = params.row
                                    this.$router.push(
                                        {
                                            path:'payment-management-detile',
                                            query:{ accountPeriod : accountPeriod }
                                        }
                                    )
                                }
                            }
                        },"查看详情")
                    }
                },
            ],
            listData:[]
        };
    },

    mounted(){
    },

    components: {
        'search-form':newSearch
    },

    computed: {},

    methods: {
        requestParameterAssembly(searchFormData){
                console.log("11",searchFormData)
                // debugger;
                let { page, searchFormData : search } = searchFormData
                search.sendStatus == 'all'? search.sendStatus = '' : ''

                if(typeof(search.startDate) == 'object'){
                    search.startDate = search.startDate.Format("yyyyMM")
                }

                if(typeof(search.endDate) == 'object'){
                    search.endDate = search.endDate.Format("yyyyMM")
                }

                if(search.startDate && search.endDate){
                    if(Number(search.startDate) > Number(search.endDate)){
                        this.$Message.error("结束时间不能大于开始时间")
                        return
                    }
                }

                if(search.paymentStatus === 'all') {
                    search.paymentStatus = null;
                }

                return {
                    pageNum: page.pageIndex,
                    pageSize: page.pageSize,
                    ...search
                }
            },

            mixinAssignment(res){
                //返回数据赋值
                console.log(22,res)
                this.page.total = res.totalNum
                this.listData = res.list
            }
    }
}

</script>
