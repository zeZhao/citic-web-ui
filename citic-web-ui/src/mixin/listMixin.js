import { overwrite } from './annotation'

/**
 * 记录当前页面的查询信息
 */
function storageSearchData(){
    if(!this.useRecord){
        return;
    }

    //store记录当前页码及查询条件
    this.$store.commit('recordSearch', {
        path: this.$route.path,
        //调用查询时默认跳转到第一页
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        //查询条件参数
        searchParam: Object.assign({}, this.searchParam),
        information: this.information
    });
}

/**
 * 跳转到其他页面 编辑或详情页面
 * @param param
 * @param url
 */
function toPath(param, url){
    //判断是不是字符串，字符串直接当做id传递，
    //对象当query传递
    let query = {};
    if(!param){

    }else if(param.constructor === String || param.constructor === Number){
        query = {id : param}
    }else if(param.constructor === Object){
        query = param;
    }
    this.$router.push({
        path: url,
        query
    });
}

/**
 * 默认格式化表格项目，根据vuex中数据勾选中默认数据
 * @param data
 * @returns {*}
 */
function defaultFormList(data){
    let ids = this.information.selectIds;

    if (!data.map) {
        return data;
    }

    return data.map(item => {
        item.selected = ids.has(item.id);
        return item;
    })
}

function isEmpty(value) {
    return value === undefined || value === null || value === '';
}

/**
 * 节流阀
 * 判断接口请求频率是否超出设定的限制
 */
function throttle() {
    const lastRequestTimeStamp = this.lastRequestTimeStamp;
    const requestFrequency = this.requestFrequency;
    const nowTimeStamp = new Date().getTime();
    this.lastRequestTimeStamp = nowTimeStamp;
    const timeDifference = nowTimeStamp - lastRequestTimeStamp;

    //时间差小于限定值
    if(timeDifference < requestFrequency){
        if(this.queryTask != null){
            clearTimeout(this.queryTask)
        }
    }

    this.loading = true;
    this.queryTask = setTimeout(queryData.bind(this), requestFrequency);
}

/**
 * 调用接口查询数据
 */
function queryData() {
    this._mxBeforeGetList();

    this.loading = true;

    //记录一次查询条件
    if(this.useRecord){
        storageSearchData.call(this);
    }

    let searchParam = Object.assign({}, this.searchParam);
    for (const key in searchParam){
        //1.传递查询参数时清除空条件
        //2.将无用字段移除不参与请求(无用字段以“_”开头和结束)
        const reg = /^_[\S]*_$/;

        if (isEmpty(searchParam[key]) || reg.test(key)) {
            delete searchParam[key];
            continue;
        }

        //将时间对象转为时间戳
        if(searchParam[key] instanceof Date){
            searchParam[key] = new Date(searchParam[key]).getTime();
        }
    }

    //手动调整一次提交的数据
    searchParam = this._formatRequestData(searchParam);

    this.$get(this.searchAPI, {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        ...searchParam
    }).then(res => {
        this.loading = false;

        // if (!resOk(res)) {
        //     this.listData = [];
        //     this.$Message.error(res.message || res.msg);
        // }

        let list = [];
        this.assignment(res.data);
        //兼容性处理
        if(res.data.content){
            list = res.data.content;
            this.total = res.data.totalElements;
        }else if(res.data.data){
            list = res.data.data;
            this.total = res.data.totalCount;
        }else {
            list = res.data;
            if (res.totalCount !== undefined) {
                this.total = res.totalCount;
            }
        }

        //默认处理一次列表数据
        list = defaultFormList.call(this, list);
        //使用钩子再次格式化数据
        this.listData = this._mxFormListData(list);

        //初始化选中的个数
        this.selectedNum = this.information.selectIds.size;
        this._mxJudgeSelectAll();
    });
}

export default {
    data: function () {
        return {
            pageIndex: 1,
            pageSize: 10,
            //查询条件参数
            searchParam: {},
            //列表切换需要恢复的数据
            information: {
                selectIds: new Set(),
            },

            listData: [],
            total: 0,
            pageSizeOpts: [10, 40, 60, 100],
            loading: false,

            searchAPI: '',
            delAPI: '',
            editPath: '',
            detailPath: '',

            //是否勾中全选
            selectAll: false,
            //总共选中条目数量
            selectedNum: 0,

            //是否记录列表查询信息
            useRecord: true,

            //增加请求接口节流阀
            //节流阀-最后一次请求的时间戳
            lastRequestTimeStamp: 0,
            //节流阀-接口请求频率限制(ms)
            requestFrequency: 300,
            //节流阀-查询接口任务
            queryTask: null,
        }
    },

    created(){

    },

    mounted(){
        //根据列表页面路径恢复查询条件
        if(this.useRecord){
            const path = this.$route.path;
            const recordParam = this.$store.state.searchParam.paramMap[path];
            if (recordParam) {
                const {pageIndex, pageSize, searchParam, information} = Object.assign({}, recordParam);
                this.pageIndex = pageIndex;
                this.pageSize = pageSize;
                this.searchParam = searchParam;
                this.information = information;
            }
        }

        setTimeout(() => {
            this._mxGetList();
        }, 10);
    },

    updated() {
        //离开页面之前记录一次页面查询与记录的参数
        if(this.useRecord){
            storageSearchData.call(this);
        }
    },

    methods: {
        /***
         * 获取表格数据
         * @private
         */
        _mxGetList() {
            //接口请求节流阀
            throttle.call(this)
        },

        //手动赋值方法
        assignment(data){

        },

        /***
         * 页码改变触发
         * @private
         */
        _mxChangePage(pageIndex) {
            this.pageIndex = pageIndex;
            this._mxGetList();
        },

        /***
         * 每页数据条数改变触发
         * @private
         */
        _mxChangePageSize(pageSize) {
            this.pageSize = pageSize;
            this._mxGetList();
        },

        /**
         * 列表查询操作
         * @param param
         * @private
         */
        _mxDoSearch(param = this.searchParam) {
            //调用查询时默认跳转到第一页
            this.pageIndex = 1;
            this.searchParam = {
                ...param
            };

            //查询之前清除所有选中信息
            this.information.selectIds = new Set();
            this.selectAll = false;
            this.selectedNum = 0;
            this._mxGetList();
        },

        /**
         * 进入详情/编辑页面
         * @param param
         * @private
         */
        _mxToDetail(param) {
            toPath.call(this, param, this.detailPath);
        },

        /**
         * 跳转到编辑页面
         * @param param
         * @private
         */
        _mxToEdit(param){
            toPath.call(this, param, this.editPath);
        },

        /**
         * 删除列表中项目
         * @param id
         * @param text
         * @param formUrl
         * @private
         */
        _mxDeleteItem(id, text = '确定删除吗？', formUrl = (url, id)=>{return `${url}/${id}`}) {
            this.$confirmDialog(() => this._mxDoDelete(id, formUrl(this.delAPI, id)), text);
        },
        /**
         * 删除列表中项目，确认弹出框提示信息中不带网址信息
         * @param id
         * @param text
         * @param formUrl
         * @private
         */
        _mxDeleteItemDialogWithoutWebsite(id, text = '当前信息被删除后将不能再恢复，您是否删除？', formUrl = (url, id)=>{return `${url}/${id}`}) {
            this.$confirmDialogWithoutWebsite(() => this._mxDoDelete(id, formUrl(this.delAPI, id)), text);
        },
        /**
         * 确认删除项目操作
         * @param id
         * @param url
         * @private
         */
        _mxDoDelete(id, url){
            this.$delete.call(this, url).then(res => {
                if (resOk(res)) {
                    this.$Message.info('删除成功！');
                    this._mxRemoveSelectIds(id);
                    this._mxGetList();
                } else {
                    this.$Message.info('删除失败！');
                }
            });
        },

        /**
         * 对表格数据进行自定义调整
         * @param rows
         * @returns {*}
         * @private
         */
        @overwrite('对表格数据进行调整')
        _mxFormListData(rows){
            return rows;
        },

        /**
         * 选中全部
         */
        _mxSelectAllItem(value){
            this.listData.forEach(item => {
                item.selected = value;
                this._mxSelectOne({id: item.id, value: value})
            })
        },

        /**
         * 切换单个订单是否选中
         * @param id
         * @param value
         */
        _mxSelectOne({ id, value }) {
            if(value){
                this.information.selectIds.add(id);
            }else {
                this.information.selectIds.delete(id);
            }
            this.selectedNum = this.information.selectIds.size;

            this._mxJudgeSelectAll();
        },

        /**
         * 判断是否全选中
         */
        _mxJudgeSelectAll(){
            //默认状态为全选中
            let selectAllFlag = !!this.listData.length;
            //判断是否当前页面所有的项目都已经选中
            this.listData.forEach(item => {
                if (!item.selected) {
                    selectAllFlag = false;
                }
            });
            this.selectAll = selectAllFlag;
        },

        /**
         * 批量删除已选中项目
         * @param ids
         * @private
         */
        _mxRemoveSelectIds(ids = ''){
            let removeList = [];
           if(ids.constructor === String || ids.constructor === Number){
               removeList = [ids]
            }else if(ids.constructor === Array || ids.constructor === Set){
               removeList = [...ids];
            }else {
               return
           }

            removeList.forEach(id => {
                this.information.selectIds.delete(id);
            });
            this.selectedNum = this.information.selectIds.size;
        },

        /**
         * 调整提交的参数
         *
         * @param data
         * @returns {*}
         * @private
         */
        _formatRequestData(data) {
            return data;
        },

        /**
         * 调用列表查询方法前的钩子
         * @private
         */
        _mxBeforeGetList() {

        },

        /**
        * 渲染表单中switch组件
        * @param h
        * @param params
        * @returns {*[]}
        * @private
        */
       _mxRenderSwitch(h, params) {
           return [
               h('i-switch', {
                   props: {
                       value: params.row.inuse,
                   },
                   on: {
                       'on-change': value => this._mxSwitch(params.row.id, value)
                   }
               })
           ]
       },

       /**
        * 列表切换是否启用状态
        * @param id
        * @param value
        * @private
        */
       _mxSwitch(id, value) {
           const _url = this.submitAPI || this.searchAPI;
           this.$put(`${_url}/opening/${id}?inuse=${value}`, { inuse: value }).then(({ msg, code }) => {
               if (code === 0) {
                   this.$Message.success('操作成功!');
                   this._mxGetList();
               }
           });
       }
    }
}
