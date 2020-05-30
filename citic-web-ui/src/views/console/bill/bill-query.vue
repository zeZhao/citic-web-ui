<style lang="scss">
.bill-query {
  .search-wrapper {
    margin-bottom: 6px;
  }
  
  .width190 {
    width: 190px;
  }

  .tips {
    margin-left: 12px;
    color: #c60000;
    font-size: 12px;

    a {
      color: #c60000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<template>
  <div class="page-wrapper bill-query">
    <Card class="main" :bordered="false" dis-hover>
      <p slot="title">
        账单查询
      </p>
      <div class="search-wrapper">
        <Form ref="searchParam" :model="searchParam" :rules="ruleValidate" :label-width="130" class="search-form">
          <Row>
            <i-col span="24">
              <FormItem label="账期：">
                <DatePicker type="month" placeholder="请选择" v-model="searchParam.billMonth" :editable="false"
                            :options="dateOptions"
                ></DatePicker>
              </FormItem>
            </i-col>
          </Row>
          <Row class="inline-item">

            <FormItem label="账单金额（元）：" prop="feeMin" class="item">
              <i-input v-model="searchParam.feeMin" class="width190"></i-input>
            </FormItem>
            <span class="item connector">-</span>
            <FormItem prop="feeMax" class="item">
              <i-input v-model="searchParam.feeMax" class="width190"></i-input>
            </FormItem>

              <Button style="margin-left: 40px" type="primary" icon="search" @click="doSearch">查询</Button>

              <Button type="success" icon="ios-cloud-download" @click="download" title="仅能下载当前账期月全部数据！">
                  下载账单
              </Button>
          </Row>
          <!-- <Row>
              <span class="tips">温馨提示：<a :href="invoiceUrl" class="text-btn">请点击此处及时完善贵公司的发票信息</a></span>
          </Row> -->
        </Form>
      </div>
      <Row class="table-wrapper">
        <Table :columns="columns" :data="listData" :loading="loading"></Table>
        <Page class-name="footer-page" :total="total" :pageSize="pageSize"
              :page-size-opts="pageSizeOpts"
              :current="pageIndex" show-total show-sizer show-elevator @on-change="_mxChangePage" @on-page-size-change="_mxChangePageSize"></Page>
      </Row>
    </Card>
  </div>
</template>

<script>
import { listMixin } from 'mixin'

export default {
  mixins: [listMixin],

  data() {
    const validateBillFeeMin = (rule, value, callback) => {
      //对最大值单独验证
      const _billFeeMax = this.searchParam.feeMax;
      if (_billFeeMax !== '' && _billFeeMax !== null) {
        this.$refs['searchParam'].validateField('feeMax');
      }
      callback();
    };
    const validateBillFeeMax = (rule, value, callback) => {
      const _billFeeMin = this.searchParam.feeMin;
      const _billFeeMax = this.searchParam.feeMax;

      if((_billFeeMin && _billFeeMax) && Number(_billFeeMin) > Number(_billFeeMax)) {
        callback(new Error('账单金额最大值不得小于最小值'));
      } else {
        callback();
      }
    };

    return {
        pageSizeOpts: [20,50,100,200,300],
        pageSize: 20,

      invoiceUrl: location.origin + '/invoice/toInvoiceInfoUpdate',
      searchParam: {
        billMonth: new Date().Format('yyyyMM'),
        billFeeMin: null,
        billFeeMax: null
      },
      searchAPI: this.$API_ENUM.BILL_QUERY,
      columns: [
        {
          title: '序号',
          key: 'index',
          width: 60,
          align: 'center',
          render: (h, params) => {
              return h('span', params.index + (this.pageIndex- 1) * this.pageSize + 1);
          }
        },
        {
          title: '账期月',
          key: 'billMonth',
          width: 108,
          align: 'center'
        },
        {
          title: '本期分摊金额(元)',
          align: 'center',
          render: (h, params) => {
            const _fee = params.row.apportionment + '';
            return [
              h('span', {}, _fee.liToYuan())
            ]
          }
        },
        {
          title: '应缴金额(元)',
          align: 'center',
          render: (h, params) => {
            const _fee = params.row.adjustFee + '';
            return [
              h('span', {}, _fee.liToYuan())
            ]
          }
        },
        {
          title: '实收金额(元)',
          align: 'center',
          render: (h, params) => {
            const _fee = params.row.proceeds + '';
            return [
              h('span', {}, _fee.liToYuan())
            ]
          }
        },
        {
          title: '备注',
          align: 'center', 
          key: 'subjectName'
        },
        {
          title: '实例ID',
          align: 'center',
          key: 'instanceId'
        },
        {
          title: '供应商实例ID',
          align: 'center',
          key: 'supplierInstanceId'
        }
      ],
      ruleValidate: {
        feeMin: [
          { message: '金额只能输入数字', trigger: 'blur', pattern: /^-?\d+\.?\d{0,}$/ },
          { validator: validateBillFeeMin, trigger: 'blur' }
        ],
        feeMax: [
          { message: '金额只能输入数字', trigger: 'blur', pattern: /^-?\d+\.?\d{0,}$/ },
          { validator: validateBillFeeMax, trigger: 'blur' }
        ]
      },

        dateOptions:{
            disabledDate: (date) => {
                return date > new Date();
            }
        }
    }
  },
  methods: {
    doSearch() {
      this.$refs['searchParam'].validate((valid) => {
        if (valid) {
          this._mxDoSearch(this.searchParam);
        }
      })
    },

      getDownloadParam(){
          let param = this.searchParam;
          let query = [];

          for (const key in param) {
              if(param[key]){
                  query.push(`${key}=${param[key]}`);
              }
          }

          return `?${query.join("&")}`;
      },

      download(){
          this.$refs['searchParam'].validate((valid) => {
              if (valid) {
                  let url = `${this.$CONFIG.BASE_API_URL}${this.$API_ENUM.BILL_TENANT_BILL_DOWNLOAD}${this.getDownloadParam()}`;
                  let token = sessionStorage.getItem("citic-token");
                  url += `&citicToken=${token}`;

                  let fileName = "账单-" + this.searchParam.billMonth;
                  this.downloadFileByUrl(url, fileName)
              }
          })
      }
  },
  watch: {
    /**
     * 账单金额在后台搜索时单位为“厘”，需转换为“元”
     */
    'searchParam.feeMin': function() {
      const billFeeMin = this.searchParam.feeMin;
      this.searchParam.billFeeMin = billFeeMin!== null ? billFeeMin * 1000 : billFeeMin;
    },
    'searchParam.feeMax': function() {
      const billFeeMax = this.searchParam.feeMax;
      this.searchParam.billFeeMax = billFeeMax!== null ? billFeeMax * 1000 : billFeeMax;
    },

    'searchParam.billMonth': function() {
      this.searchParam.billMonth = this.searchParam.billMonth.Format('yyyyMM');
    }
  }
}
</script>
