<!-- 服务账单查询 -->
<style  scoped lang="scss">
.service-bill-query{
    .overview{
        line-height:32px;
        .icon{
            font-size: 20px;
            transform: translate(0, 2px);
            color: #2d8cf0;
        }
    }
    .tooltip_content{
        word-wrap:normal;
        // width: 400px;
    }
    .btn-group{
        text-align: right;
       padding-right: 10px;
    }
    .mt-20{
        margin-top: 20px;
    }
    .label{
        margin-left: 20px;
    }
}
</style>
<template>
  <Card class="service-bill-query">
    <p slot="title">
      服务账单查询
    </p>

    <Row>
        <Col span="11">
          <ci-new-search
          :search-form-config="searchFormConfig"
          :page="page"
          :stored-value="storedValue"
          @dosearch="_searchChange"
          :span='12'
          :saveDateFormatStr="'yyyyMM'"
        >
          <span slot="reset"></span>
          <span slot="clear"></span>
          <span slot="query"></span>
        </ci-new-search>
        </Col>
        <Col span="12" offset="1">
            <Row class="overview">
                <Col span="24">
                    <label>当期账单金额：</label>
                    <span>{{sumActualTotalAmount}}（元)</span>

                    <label class="label">当期优惠总金额：</label>
                    <span>{{sumDiscountFee}}（元）</span>
                     <Tooltip  :content="tipText" placement="bottom" :transfer='true'>
                        <Icon type="ios-help" class="icon"></Icon>
                        <div slot="content" style="white-space: normal;">
                            <p>当期账单金额：服务消费金额-优惠券金额</p>
                            <p>当期账单金额=当期实际消费金额总额</p><br>
                            <p>当期优惠券金额：在购买过程中，使用优惠券抵扣的金额。</p>
                        </div>
                    </Tooltip>
                </Col>
            </Row>


        </Col>
    </Row>
    <div class="btn-group">
        <Button type="primary" @click='downBill' :disabled="isDownLoadExcel">下载账单</Button>
    </div>


    <i-table
      :columns="columns"
      :data="listData"
      :loading="loading"
      class="mt-20"
    ></i-table>
  </Card>
</template>

<script>
import newSearch from "com/public/new-search.vue";
import mixinList from "mixin/new-list-mixin.js";
import { getLastMonth } from 'utils/base.js'

export default {
  mixins: [mixinList],
  data() {
      let listUrl = this.$API_ENUM.CITIC_BILL_SELECT_SERVICE_BILL
    return {
        tipText:'123',
        listUrl,
        sumActualTotalAmount:0,
        sumDiscountFee:0,
        columns:[
            {
                title:'服务名称',
                key:'serviceName'
            },
            {
                title:'账期月',
                key:'billMonth'
            },
            {
                title:'服务消费金额',
                key:'totalAmount',
                render: (h, params)=>{
                    let numFormat = (Number(params.row.totalAmount)/ 1000).toFixed(2)
                    return h("span",{},numFormat)
                }
            },
            {
                title:'优惠券金额',
                key:'discountFee',
                render: (h, params)=>{
                    let numFormat = (Number(params.row.discountFee)/ 1000).toFixed(2)
                    return h("span",{},numFormat)
                }
            },
            {
                title:'实际消费金额',
                key:'actualAmount',
                render: (h, params)=>{
                    let numFormat = (Number(params.row.actualAmount)/ 1000).toFixed(2)
                    return h("span",{},numFormat)
                }
            },
            {
                title:'操作',
                render:(h,params) => {
                    let details = h("Button",{
                        on:{
                            click: ()=>{
                                console.log(params.row)
                                let {serviceId, billMonth, serviceName, totalAmount,actualAmount} = params.row
                                 this.$router.push({
                                    path: '/citic-web-ui/console/bill/service-bill-query-details',
                                    query: {serviceId, billMonth, serviceName, actualAmount}
                                });

                                
                            }
                        }
                    },'查看实例详情')
                    return details
                }
            }
        ],
        searchFormConfig:[
             {
                type: 'month-section',
                keyName: 'billMonth',
                displayName: '按账期月：',
                placeholder:'',
                defaultValue: function (){
                    return new Date(getLastMonth().last).Format('yyyyMM')
                }
            },
            {
                type: 'input',
                keyName: 'serviceName',
                displayName: '按服务名称：',
                placeholder:'输入服务名称',
            },
        ],
    };
  },

  mounted() {
  },

  components: {
    'ci-new-search': newSearch
  },

  computed: {
      isDownLoadExcel(){
          if(this.listData && this.listData.length > 0){
              return false
          }
          return true
      }
  },

  methods: {
      getFormatListData(rows){
          return rows.map((item, index) => {
              let {totalAmount, discountFee, actualAmount} = item;

              index = index + 1;
              totalAmount = (totalAmount/1000).toString().FormatPriceStr()
              discountFee = (discountFee/1000).toString().FormatPriceStr()
              actualAmount = (actualAmount/1000).toString().FormatPriceStr()
              return {
                  ...item,
                  index,
                  totalAmount,
                  discountFee,
                  actualAmount
              }
          });
      },
      downBill(){
        //   console.log(this.listData)
        let thead = [
             {
                title:'服务名称',
                key:'serviceName'
            },
            {
                title:'账期月',
                key:'billMonth'
            },
            {
                title:'服务消费金额',
                key:'totalAmount',
            },
            {
                title:'优惠券金额',
                key:'discountFee',
            },
            {
                title:'实际消费金额',
                key:'actualAmount',
            },
        ]
           this.$exportExcel({
            filename: `服务账单查询-${this.searchFormData.searchFormData.billMonth}`,
            tHead: thead,
            tBody: this.getFormatListData(this.listData)
          });
      },
      requestParameterAssembly(searchFormData){
           console.log(this.searchFormData)
           let search = searchFormData.searchFormData
           if(typeof(search.billMonth) == 'object'){
                search.billMonth = search.billMonth.Format("yyyyMM")
            }
            if(!search.serviceName){
                search.serviceName = ''
            }
            console.log(search)
            return {
                ...search
            }
      },
      mixinAssignment(resp){
          let {serviceBillList, sumActualTotalAmount, sumDiscountFee} = resp
          this.sumActualTotalAmount = (sumActualTotalAmount/1000).toFixed(2)
          this.sumDiscountFee = (sumDiscountFee/1000).toFixed(2)
          this.listData = serviceBillList
      },

  }
};
</script>
