<template>
    <Card class="appbase-table-con">
        <p slot="title">
            成本中心
        </p>
        <Row class="appbase-panel">
            <Col span="4">
                <Button class="add-appbase-btn" @click="showModel = true;newBaseName = ''" icon="plus-round">新建成本中心</Button>
            </Col>
            <Col span="8">
            <Input placeholder="请输入成本中心名称" v-model="baseName"><Button slot="append" icon="ios-search"  @click="listAppBase()"></Button></Input>
            </Col>
            <Col span="10" offset="2">
                <span class="select">使用状态：</span>
                <Select v-model="available" @on-change="changePaging(1)" class="select" style="width:50%;">
                    <Option v-for="item in statusOps" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
        </Row>

        <Table stripe :columns="tabColumns" :data="tabData"></Table>
        <Page :total="total" :current="pageIndex" :page-size="pageSize" @on-change="changePaging" show-elevator show-total></Page>
        <Modal
          v-model="showModel"
          title="新建成本中心"
        >
          <div style="margin-top:10px;">
            <span style="color: red">*</span>中心名称：
            <Input placeholder="请输入名称" v-model="newBaseName" style="width: 300px" @on-focus='showInputTip = true' @on-blur='showInputTip = false'></Input>
            <span class="new-base-name-tip" style=" display: block;color: red; text-align: left;padding-left:148px;" >限5-30个字，仅能以汉字、英文字母、数字命名。</span>
          </div>
            <div slot="footer">
                <Button @click="ok">确认创建</Button>
                <!-- :style="addAppbaseBtn" -->
            </div>
        </Modal>
    </Card>
</template>
<script>
export default {
  data() {
    return {
        showInputTip:false,
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        baseName: "",
        newBaseName: "",
        available: "-1",
        operationBtnType: "default",
        operationBtnText: "禁用",
        statusColumnText: "使用中",
        statusColumnColor: "green",
      showModel: false,
      statusOps: [
          {
              value: "-1",
              label: "全部"
          },
        {
            value: "1",
            label: "使用中"
        },
        {
            value: "0",
            label: "已停用"
        }
      ],
      tabColumns: [
        {
            title: "成本中心名称",
            key: "name"
        },
        {
            title: "创建日期",
            key: "createTime",
            width: 200
        },
        {
            title: "使用状态",
            key: "available",
            width: 140,
            render: (h, params) => {
               let literalAvailable = params.row.available ? "使用中" : "已停用"
                return h(
                    "Font",
                    {
                        style: {
                            color: params.row.available ? "green" : "red",
                            width: "100px"
                        }
                    },
                   literalAvailable
                );
            }
        },
        {
            title: "操作",
            key: "operation",
          width: 120,
          render: (h, params) => {
              return h(
                  "Button",
                  {
                      props: {
                          type: params.row.available ? "default" : "error"
                      },
                      on: {
                          click: () => {
                              params.row.available = !params.row.available

                              this.changeAvailable(params.row.id,  params.row.available)
                          }
                      }
                  },
                  params.row.available ? "禁用" : "启用"
              );
          }
        }
      ],
      tabData: []
    };
  },
    mounted() {
        this.listAppBase();
    },
    watch:{
        newBaseName: function(newVal){
            let _L = newVal.length

            if(_L > 30){
                this.$nextTick(()=>{
                    this.newBaseName = newVal.substring(0,30)
                })
            }
        }
    },
    methods: {
        changeAvailable(id, available){
            if(available){
                available = 1
            }else{
                available = 0
            }
            this.$put(this.$API_ENUM.CITIC_COSTCENTEROFFICE+`?id=${id}&available=${available}`).then(res=>{
                console.log(res)
            })
        },
        ok: function () {
            let _L = this.newBaseName.length
            if (_L == 0) {
                this.$Modal.warning({
                    title: "",
                    content: "成本中心名称不能为空"
                });
                return;
            }
            if(_L < 5){
                 this.$Modal.warning({
                    title: "",
                    content: "成本中心名称不能少于5个字符"
                });
                return;
            }
            if (_L > 30) {
                this.$Modal.warning({
                    title: "",
                    content: "成本中心名称不能超过30个字符"
                });
                return;
            }
            if(!/^[A-Za-z0-9\u4e00-\u9fa5]+$/.test(this.newBaseName)){
                 this.$Modal.warning({
                    title: "",
                    content: "仅能以汉字、英文字母、数字命名"
                });
                return;
            }

            this.$post(this.$API_ENUM.CITIC_COSTCENTEROFFICE+`?costCenterName=${this.newBaseName}`).then(
                result => {
                    if (result.code == 200) {
                        // this.createAppBase();
                         this.$Modal.success({
                            title: "",
                            content: "成本中心创建成功",
                            onOk: () => {
                                this.showModel = false;
                                this.changePaging(1);
                            }
                        });
                    } else  {
                        this.$Modal.error({
                            title: "",
                            content: "验证成本中心名称失败， " + result.msg
                        });
                    }
                }
            );
        },
        createAppBase: function () {
            this.$post("app-bases", { name: this.newBaseName }).then(data => {
                if (data.msg === "success") {
                    this.$Modal.success({
                        title: "",
                        content: "成本中心创建成功",
                        onOk: () => {
                            this.showModel = false;
                            this.changePaging(1);
                        }
                    });
                } else {
                    this.$Modal.error({
                        title: "",
                        content: "创建成本中心失败， " + data.msg
                    });
                }
            });
        },
        listAppBase: function () {
            let prams = {
                name: this.baseName,
                available: this.available,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            };


            let newData = JSON.parse(JSON.stringify(prams));

            if (newData.available == -1) {
                newData.available = ""
            }

            this.$get(this.$API_ENUM.CITIC_COSTCENTEROFFICE, newData).then(data => {
                if (data.code === "200") {
                    this.total = data.data.totalElements;
                    this.tabData = data.data.content;
                } else {
                    this.$Modal.error({
                        title: "",
                        content: "查询成本中心创建失败， " + data.msg
                    });
                }
            });
        },
        changePaging(index) {
            this.pageIndex = index;
            this.listAppBase();
        }
    }
};
</script>
<style lang="scss">
    $appbaseColor: #ff304a;
    .appbase-table-con {
        margin-bottom: 20px;

        .add-appbase-btn {
            background-color: $appbaseColor;
            color: #fff;
        }
        .appbase-panel {
            margin-bottom: 20px;
        }
        .ivu-select-item-selected,
        .ivu-select-item-selected:hover {
            background-color: $appbaseColor;
        }
        .ivu-page {
            margin: 20px 0;
            .ivu-page-item-active {
                background-color: $appbaseColor;
                border: $appbaseColor;
            }
        }
        .select {
            display: inline-block;
        }
        .new-base-name-tip{

        }
    }
</style>
