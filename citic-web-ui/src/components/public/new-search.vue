<!--  -->
<style  scoped lang="scss">
</style>
<template>
  <i-form :model="searchFormData" class="_search_form">
    <Row>
      <i-col
        :span="span"
        v-for="(item, index) in searchFormConfig"
        :key="index"
        :pull="item.leftOffSet"
      >
        <form-Item :label="item.displayName" v-if="item.type === 'input'">
          <i-input
            v-model="searchFormData[item.keyName]"
            :placeholder="item.placeholder"
            style="width:70%;"
          ></i-input>
        </form-Item>

        <form-Item :label="item.displayName" v-if="item.type === 'select'">
          <i-select
            v-model="searchFormData[item.keyName]"
            :placeholder="item.placeholder"
            style="width:70%;"
          >
            <i-option v-for="s in item.selectLsitData" :value="s.value" :key="s.value">{{ s.label }}</i-option>
          </i-select>
        </form-Item>

        <form-Item :label="item.displayName" v-if="item.type === 'month-section'">
          <Date-Picker
            type="month"
            :editable="false"
            v-model="searchFormData[item.keyName]"
            :clearable="item.clearable"
          ></Date-Picker>
        </form-Item>

        <form-Item :label="item.displayName" v-if="item.type === 'tenant-ids-select'">
          <ci-tenant-ids-select
            ref="ideSelect"
            :check-box-list="item.checkBoxList"
            :defaultValue="item.defaultValue"
            @on-change="_tenantIdsSelect"
            :keyName="item.keyName"
            :tenantNamestUrl="item.tenantNamestUrl"
          ></ci-tenant-ids-select>
        </form-Item>
        <form-Item :label="item.displayName" v-if="item.type === 'online-select'">
          <Select v-model="searchFormData[item.keyName]" filterable clearable style="width:70%;">
            <Option
              v-for="s in asyncListData[item.keyName]"
              :value="s.value"
              :key="s.value"
            >{{ s.label }}</Option>
          </Select>
        </form-Item>
      </i-col>
    </Row>
    <div class="search-form-btn-group">
      <slot name="query">
        <i-button type="success" class="btn" @click="saveSearchCriteria">查询</i-button>
      </slot>
      <slot name="clear">
        <i-button type="warning" class="btn" @click="doClear">清空</i-button>
      </slot>
      <slot name="reset">
        <i-button type="info" class="btn" @click="reset">重置</i-button>
      </slot>
    </div>
  </i-form>
</template>

<script>
export default {
  props: {
    searchFormConfig: {
      require: true
    },
    page: {
      require: false,
      default: function() {
        return null;
      }
    },
    storedValue: {
      require: false,
      default: function() {
        return {};
      }
    },
    span: {
      require: false,
      default: function() {
        return 8;
      }
    },
    saveDateFormatStr: {
      //处理保存date类型得格式化
      type: String,
      require: false,
      default: function() {
        return "yyyy-MM-dd hh:mm:ss";
      }
    }
  },
  data() {
    return {
      searchFormData: {},
      // _isSearchPage: true,
      asyncListData: {},
      unWatchArr: []
    };
  },
  beforeMount() {
    //获取默认数据  混入
    if (this.storedValue && this.storedValue.searchFormData) {
      this._storageMixingDefault(this.storedValue.searchFormData);
    }
    this._defaultValueMixinForm();
  },
  mounted() {
    this._getOnlineSelectData();
    if (!this.storedValue || !this.storedValue.searchFormData) {
      this.saveSearchCriteria();
    }
  },
  computed: {},
  methods: {
    doClear() {
      if (this.$refs.ideSelect && this.$refs.ideSelect.length == 1) {
        this.$refs.ideSelect[0].clear();
      }
      this.searchFormData = {};
    },
    async _getOnlineSelectData() {
      for (let index = 0; index < this.searchFormConfig.length; index++) {
        const element = this.searchFormConfig[index];
        if (element.type === "online-select") {
          console.log(element);
          axios.get(element.selectUrl).then(res => {
            let listData = element.selectListValueFormat(res.data);
            if (!listData) {
              console.warn("online-select接口异常");
              return;
            }
            this.$set(this.asyncListData, element.keyName, listData);
          });
        }
      }
    },
    reset() {
      let idsref = this.$refs.ideSelect;
      if (idsref) {
        idsref[0].clear();
      }
      this._defaultValueMixinForm();
    },
    _tenantIdsSelect(data) {
      //专门接收ci-tenant-ids-select的change事件
      console.log(this.searchFormData);
      console.log(data);
      this.searchFormData[data.keyName] = data.data;
    },
    _searchFormDataFormat(arg) {
      //TODO 预留format方法  之后对不同类型数据进行处理
      if (arg === undefined) {
        arg = null;
      }
      return arg;
    },
    _storageMixingDefault(storedSearchFormData) {
      //存储的值混入 searchFormConfig.defaultValue
      this.searchFormConfig.forEach(element => {
        let defaultValue = this._searchFormDataFormat(
          storedSearchFormData[element.keyName]
        );
        if (defaultValue) {
          element.defaultValue = defaultValue;
        }
      });
    },
    _defaultValueMixinForm() {
      //searchFormConfig.defaultValue 混入  searchFormData
      let formObj = {};
      this.searchFormConfig.forEach(element => {
        if (typeof element.defaultValue === "function") {
          formObj[element.keyName] = element.defaultValue();
        } else {
          formObj[element.keyName] = element.defaultValue;
        }
      });
      this.searchFormData = formObj;
      this.saveSearchCriteria();
    },
    saveSearchCriteria() {
      //保存搜索条件到sessionStorage

      //处理数据类型转Json字符串时的问题

      let newObj = Object.assign({}, this.searchFormData);
      Object.keys(newObj).forEach(key => {
        //DATE类型转换问题
        if (newObj[key] instanceof Date) {
          newObj[key] = newObj[key].Format(this.saveDateFormatStr);
        }
      });
      let requestObj = {
        searchFormData: Object.assign({}, this.searchFormData),
        page: Object.assign({}, this.page)
      };
      let storedObj = {
        searchFormData: newObj,
        page: this.page
      };

      this.$emit("dosearch", requestObj);

      sessionStorage.setItem(location.href, JSON.stringify(storedObj));
      if (this.unWatchArr.length == 0) {
        this.$nextTick(() => {
          this.registerWatcher();
        });
      }
    },
    registerWatcher() {
      let watch1 = this.$watch(
        "searchFormData",
        (newVal, oldVal) => {
          this.page.pageIndex = 1;
          this.saveSearchCriteria();
        },
        { deep: true }
      );
      let watch2 = this.$watch("page.pageIndex", (newVal, oldVal) => {
        this.saveSearchCriteria();
      });
      let watch3 = this.$watch("page.pageSize", (newVal, oldVal) => {
        this.saveSearchCriteria();
      });
      this.unWatchArr.push(watch1, watch2, watch3);
    }
  }
};
</script>
