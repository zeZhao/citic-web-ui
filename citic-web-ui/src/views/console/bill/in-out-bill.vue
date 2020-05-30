<style lang="scss">
  .in-out-bill {
    .ivu-table {
      .pr10 {
        .ivu-table-cell {
          padding-right: 20px;
        }
      }
    }
  }
</style>

<template>
  <div class="page-wrapper in-out-bill">
    <Card class="main" :bordered="false" dis-hover>
      <p slot="title">
        收支明细
      </p>
      <div class="search-wrapper">
        <Form ref="searchParam" :model="searchParam" :label-width="130" class="search-form">
          <Row>
            <i-col span="8">
              <FormItem label="交易类型：">
                <Select v-model="searchParam.optType">
                  <Option value="none">请选择</Option>
                  <Option value='1'>存入(现金)</Option>
                  <Option value='2'>扣款(现金)</Option>
                  <Option value='11'>存入(代金券)</Option>
                  <Option value='12'>扣款(代金券)</Option>
                </Select>
              </FormItem>
            </i-col>
            <i-col span="16" class="inline-item">
              <FormItem label="起止日期：" prop="startTime" class="item">
                <DatePicker placeholder="请选择起始时间" v-model="searchParam.startTime" :editable="false"></DatePicker>
              </FormItem>
              <span class="item not-first-item connector">-</span>
              <FormItem prop="endTime" class="item">
                <DatePicker placeholder="请选择终止时间" v-model="searchParam.endTime" :editable="false"></DatePicker>
              </FormItem>
            </i-col>
          </Row>
          <Row>
            <i-col span="20" class="ac">
              <Button type="primary" icon="search" @click="doSearch">查询</Button>
            </i-col>
          </Row>
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
    return {
        pageSizeOpts: [20,50,100,200,300],
        pageSize: 20,

      searchParam: {
        optType: 'none'
      },
      searchAPI: this.$API_ENUM.TENANT_IN_OUT_FUND,
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
          title: '租户ID',
          key: 'extCustId'
        },
        {
          title: '租户名称',
          key: 'tenantName'
        },
        {
          title: '银行流水号',
          key: 'bandSerialCode'
        },
        {
          title: '交易类型',
          key: 'optType',
          width: 110,
          align: 'center'
        },
        {
          title: '交易日期',
          width: 100,
          align: 'center',
          render: (h, params) => {
            const _val = params.row.payTime.toString().FormatTimestampToDate();
            return [
              h('span', _val)
            ]
          }
        },
        {
          title: '交易金额（元）',
          align: 'right',
          className: 'pr10',
          render: (h, params) => {
            const _fee = params.row.totalAmount + '';
            return [
              h('span', _fee.liToYuan())
            ]
          }
        },
        {
          title: '备注说明',
          key: 'remark'
        }
      ]
    }
  },
  methods: {
    doSearch() {
      this.searchParam.startTime = this.searchParam.startTime.Format('yyyy-MM-dd');
      this.searchParam.endTime = this.searchParam.endTime.Format('yyyy-MM-dd');
      this._mxDoSearch(this.searchParam);
    }
  }
}
</script>
