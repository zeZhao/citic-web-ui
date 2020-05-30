<template>
    <Card class="appbase-table-con">
        <p slot="title">
            应用基线
        </p>
        <Row class="appbase-panel">
            <Col span="4">
                <Button class="add-appbase-btn" @click="showModel = true;newBaseName = ''" icon="plus-round">新建应用基线</Button>
            </Col>
            <Col span="8">
            <Input placeholder="请输入基线名称" v-model="baseName"><Button slot="append" icon="ios-search"  @click="listAppBase()"></Button></Input>
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
          title="新建应用基线"
        >
          <div>
            <span style="color: red">*</span>基线名称：<Input placeholder="请输入名称" v-model="newBaseName" style="width: 300px"></Input>
            <span>（最多30个字符）</span>
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
            value: "true",
            label: "使用中"
        },
        {
            value: "false",
            label: "已停用"
        }
      ],
      tabColumns: [
        {
            title: "基线名称",
            key: "name"
        },
        {
            title: "创建日期",
            key: "literalCreateTime",
            width: 200
        },
        {
            title: "使用状态",
            key: "literalAvailable",
            width: 140,
          render: (h, params) => {
              return h(
                  "Font",
                  {
                      style: {
                          color: params.row.available ? "green" : "red",
                          width: "100px"
                      }
                  },
                  params.row.literalAvailable
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
                              let targetAvailable = !params.row.available;
                              this.$put("app-bases", {
                                  available: targetAvailable,
                                  citicId: params.row.citicId
                              }).then(data => {
                                  if (data.msg === "success") {
                                      params.row.available = data.result.available;
                                      params.row.literalAvailable =
                                          data.result.literalAvailable;
                                        this.listAppBase();
                                  } else {
                                      this.$Modal.error({
                                          title: "",
                                          content: "修改基线失败， " + data.msg
                                      });
                                  }
                              });
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
    methods: {
        ok: function () {
            if (this.newBaseName.length == 0) {
                this.$Modal.warning({
                    title: "",
                    content: "应用基线名称不能为空"
                });
                return;
            }
            if (this.newBaseName.length > 30) {
                this.$Modal.warning({
                    title: "",
                    content: "应用基线名称不能超过30个字符"
                });
                return;
            }
            this.$get("app-bases/validation/duplicate-name/" + this.newBaseName).then(
                result => {
                    if (result.msg === "success" && result.data === false) {
                        this.createAppBase();
                    } else if (result.msg !== "success") {
                        this.$Modal.error({
                            title: "",
                            content: "验证基线名称失败， " + result.msg
                        });
                    } else if (result.data === true) {
                        this.$Modal.error({
                            title: "",
                            content: "该基线名称已存在"
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
                        content: "应用基线创建成功",
                        onOk: () => {
                            this.showModel = false;
                            this.changePaging(1);
                        }
                    });
                } else {
                    this.$Modal.error({
                        title: "",
                        content: "创建基线失败， " + data.msg
                    });
                }
            });
        },
        listAppBase: function () {
            let prams = {
                baseName: this.baseName,
                available: this.available,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            };


            let newData = JSON.parse(JSON.stringify(prams));

            if (newData.available == -1) {
                newData.available = ""
            }

            this.$get("app-bases", newData).then(data => {
                if (data.msg === "success") {
                    this.total = data.appBases[0].totalElements;
                    this.tabData = data.appBases[0].content;
                } else {
                    this.$Modal.error({
                        title: "",
                        content: "查询基线创建失败， " + data.msg
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
    }
</style>
