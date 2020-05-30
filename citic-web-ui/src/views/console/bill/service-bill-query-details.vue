<!-- 服务账单详情  -->
<style  scoped lang="scss">
.service-bill-query-details {
  .mt-20 {
    margin-top: 20px;
  }
  .btn-group{
    padding-right: 20px;
    text-align:right;
  }
}
</style>
<template>
  <Card class="service-bill-query-details">
    <p slot="title">服务账单查询</p>
    <Row class="overview">
      <Col span="8">
        <label>服务名称：</label>
        <span>{{serviceName}}</span>
      </Col>
      <Col span="8">
        <label>账期月：</label>
        <span>{{billMonth}}</span>
      </Col>
      <Col span="8">
        <label>总计金额：</label>
        <span>{{(Number(actualAmount)/1000).toFixed(2)}}（元）</span>
      </Col>
    </Row>

    <ci-new-search
      :search-form-config="searchFormConfig"
      :page="page"
      :stored-value="storedValue"
      @dosearch="_searchChange"
      :span="6"
      :saveDateFormatStr="'yyyyMM'"
      class="mt-20"
    >
      <span slot="reset"></span>
      <span slot="clear"></span>
      <span slot="query"></span>
    </ci-new-search>
    <div class="btn-group">
       <Button type="primary" @click="$router.back()">返回上一页</Button>
    </div>
    <i-table :columns="columns" :data="listData" :loading="loading" class="mt-20"></i-table>
  </Card>
</template>

<script>
import newSearch from "com/public/new-search.vue";
import mixinList from "mixin/new-list-mixin.js";
export default {
  mixins: [mixinList],
  data() {
    let { serviceId, billMonth, serviceName, actualAmount } = this.$route.query;
    let listUrl = this.$API_ENUM.CITIC_BILL_SELECT_INSTANCE_BILL;
    return {
      listUrl,
      serviceId,
      billMonth,
      serviceName,
      actualAmount,
      isSave: false,
      columns: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "实例ID",
          key: "instanceId"
        },
        {
          title: "计费类型",
          render: (h, params) => {
            let text = "";
            switch (params.row.billingType) {
              case "package":
                text = "包年包月";
                break;
              case "usage":
                text = "按量计费";
                break;
              default:
                break;
            }

            return h("span", {}, text)
          }
        },
        {
           title: "消费金额",
           render: (h, params)=>{
             let numFormat = (Number(params.row.actualAmount)/1000).toFixed(2)
             return h("span", {},numFormat)
           }
        }
      ],
      searchFormConfig: [
        {
          type: "input",
          keyName: "instanceId",
          displayName: "按实例：",
          placeholder: "输入实例ID"
        },
        {
          type: "select",
          keyName: "billingType",
          displayName: "按计费类型：",
          selectLsitData: [
            { label: "全部", value: "all" },
            { label: "按量付费", value: "usage" },
            { label: "包年包月", value: "package" }
          ],
          defaultValue: "all"
        }
      ]
    };
  },

  mounted() {},

  components: {
    "ci-new-search": newSearch
  },

  computed: {},

  methods: {
    requestParameterAssembly(searchFormData) {
      let { billingType, instanceId } = searchFormData.searchFormData;
      return {
        billingType: billingType == "all" ? "" : billingType,
        serviceId: this.serviceId,
        billMonth: this.billMonth,
        instanceId: instanceId ? instanceId : ""
      };
    },
    mixinAssignment(resp) {
      console.log(resp);
      this.listData = resp;
    }
  }
};
</script>
