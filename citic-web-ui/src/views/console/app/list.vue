<style lang="scss">
  .app-list {
    /*margin-top: 20px;*/

    .ivu-radio-group {
      .ivu-radio-wrapper {
        margin-right: 10px;
      }
    }

    .ivu-btn {
      margin: 0 5px;
    }
    .search-wrapper {
      margin-bottom: 30px;
      .search-btn {
        text-align: center;
      }
    }

    .list-operate-wrapper {
      margin-bottom: 10px;

      .upload-btn {
        display: inline-block;
      }
    }

    .ivu-table-cell {
      height: 28px;
      line-height: 28px;
      white-space: nowrap;
    }
  }
</style>
<template>
<div class="app-list">
  <Card class="main" :bordered="false" dis-hover>
    <p slot="title">
      创新应用列表
    </p>
    <div class="search-wrapper">
      <Form ref="form" :model="form" :label-width="110" class="search-form">
        <Row>
          <FormItem label="项目阶段：">
            <RadioGroup type="button" v-model="form.projectStage" @on-change="doSearch">
              <Radio v-for="(item, index) in stages" :value="item.value" :label="item.value" :key="index">{{item.label}}</Radio>
            </RadioGroup>
          </FormItem>
        </Row>
        <Row>
          <FormItem label="应用形式：">
            <RadioGroup type="button" v-model="form.applicationMode" @on-change="doSearch">
              <Radio v-for="(item, index) in forms" :value="item.value" :label="item.value" :key="index">{{item.label}}</Radio>
            </RadioGroup>
          </FormItem>
        </Row>
        <Row>
          <FormItem label="应用类型：">
            <RadioGroup type="button" v-model="form.applicationType" @on-change="doSearch">
              <Radio v-for="(item, index) in types" :value="item.value" :label="item.value" :key="index">{{item.label}}</Radio>
            </RadioGroup>
          </FormItem>
        </Row>
        <Row>
          <i-col span="10">
            <FormItem label="创新应用名称：">
              <i-input v-model="form.applicationName"></i-input>
            </FormItem>
          </i-col>
            <!--<i-col span="6">
              <FormItem label="用户规模：">
                <i-input v-model="form.userScale">
                  <label slot="append">人</label>
                </i-input>
              </FormItem>
            </i-col>-->
        </Row>
      </Form>
      <Row>
        <i-col span="16">
          <div class="search-btn">
              <Button type="default" icon="ios-trash-outline" @click="reset">清空</Button>
              <Button type="primary" icon="search" @click="doSearch">搜索</Button>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="list-operate-wrapper">
        <Button type="primary" icon="plus" @click="_mxToDetail">新增应用</Button>
        <Button type="default" icon="arrow-down-c" @click="downTemplate">下载模板</Button>
        <Upload :action="importAppAction" name="file" :show-upload-list="false"
            :headers="headers" class="upload-btn"
            :on-success="handleImportSuccess"
            :format="['xlsx','xls']">
          <Button type="primary" icon="ios-cloud-upload-outline">批量导入</Button>
        </Upload>
    </div>
    <Row class="table-wrapper">
      <Table :columns="columns" :data="listData" :loading="loading"></Table>
      <Page class-name="footer-page" :total="total" :pageSize="pageSize"
            :current="pageIndex" show-total show-sizer show-elevator @on-change="_mxChangePage" @on-page-size-change="_mxChangePageSize"></Page>
    </Row>
  </Card>
</div>
</template>

<script>
import { listMixin } from 'mixin'
import APPCONST from 'static/json/console/app'

export default {
  mixins: [listMixin],

  data() {
    return {
      forms: APPCONST.forms, //应用形式
      stages: APPCONST.stages, //项目阶段
      types: APPCONST.types, //应用类型
      form: {},
      editPath: '/console/app/form',
      headers: { 'citic-token': sessionStorage.getItem("citic-token") },
      importAppAction: `${this.$CONFIG.BASE_API_URL}${this.$API_ENUM.INNOVATE_INNOVATE_IMPORT}`,  //批量导入路径

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
          title: '创新应用名称',
          key: 'applicationName'
        },
        {
          title: '项目阶段',
          key: 'projectStage',
          width: 100,
          render: (h, params) => {
            if(params.row.projectStage) {
              const _stage = this.stages.find(item => item.value === params.row.projectStage);
              return h('p', _stage.label);
            }
          }
        },
        {
          title: '应用形式',
          key: 'applicationModeDesc'
        },
        {
          title: '应用类型',
          key: 'applicationType',
          width: 110,
          render: (h, params) => {
            if(params.row.applicationType) {
              const _stage = this.types.find(item => item.value === params.row.applicationType);
              return h('p', _stage.label);
            }
          }
        },
        {
          title: '用户规模',
          key: 'userScale'
        },
        {
          title: '业务目标',
          key: 'businessGoal'
        },
        {
          title: '应用场景',
          key: 'useCase'
        },
        {
          title: '目标用户',
          key: 'targetCustomer'
        },
        {
          title: '最后修改时间',
          key: 'updateTime',
          width: 160,
          render: (h, params) => {
                const Pretime= params.row.updateTime.replace(/T/,' ')
                const _time = new Date(Pretime)
                const timezoneOffset = _time.getTimezoneOffset();
                const _timeOffset = _time.getTime() + timezoneOffset * 60 * 1000 ;
                const _turetime = new Date(_timeOffset).Format("yyyy-MM-dd hh:mm:ss")
//              console.log('time',_turetime,'params.row.updateTime',params.row.updateTime)
            return h('p', _turetime)
          }
        },
        {
          title: '操作',
          align: 'center',
          width: 90,
          render: (h, params) => {
            return [
              h('Button', {
                props: {
                  size: 'small',
                  icon: 'edit'
                },
                on: {
                  click: () => {
                    this._mxToDetail(params.row.id);
                  }
                }
              }, '修改')
            ]
          }
        }
      ],
      searchAPI: this.$API_ENUM.INNOVATE_INNOVATELIST
    }
  },
  methods: {
    doSearch() {
      this._mxDoSearch(this.form);
    },
    reset() {
      this.form = {};
      this.doSearch();
    },
    /**
     * 下载模板
     */
    downTemplate() {
      const _url = 'https://public-supply-service.oss-cn-beijing.aliyuncs.com/public_dev_supplier/d9f17e96-427c-428d-85f6-a1898fa86d01.xlsx';
      window.open(_url);
    },
    /**
     * 批量导入后的处理函数
     */
    handleImportSuccess(res) {
      if(res.code === 0) {
        this.$Message.info('导入成功！');
        this.doSearch();
      }
    }
  }
}
</script>
