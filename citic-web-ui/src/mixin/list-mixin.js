import { overwrite } from './annotation'

/**
 * 记录当前页面的查询信息
 */
function storageSearchData() {
    if (!this.useRecord) {
        return;
    }

    //store记录当前页码及查询条件
    this.$store.commit('recordSearch', {
        path: this.$route.path,
        //调用查询时默认跳转到第一页
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        //查询条件参数
        searchParam: {
            ...this.searchParam
        }
    });
}

export default {
    data: function () {
        return {
            pageIndex: 1,
            pageSize: 20,
            //查询条件参数
            searchParam: {},

            listData: [],
            total: 0,
            pageSizeOpts: [20, 40, 60, 100],
            loading: false,

            searchAPI: '',
            delAPI: '',
            editPath: '',

            //是否记录列表查询信息
            // useRecord: true,
        }
    },

    created() {
        this._mxGetList();
    },

    methods: {
        /***
         * 获取表格数据
         * @private
         */
        _mxGetList() {
            this.loading = true;

            //记录查询数据
            // storageSearchData.call(this);

            //传递查询参数时清除空条件
            const searchParam = Object.assign({}, this.searchParam);
            for (const key in searchParam) {
                if (!searchParam[key]) {
                    delete searchParam[key];
                }
            }

            this.$get(this.searchAPI, {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                ...searchParam
            }).then(res => {
                //兼容性处理
                this.loading = false;
                if (res.data.content) {
                    this.listData = this._mxFormListData(res.data.content);
                    this.total = res.data.totalElements;
                } else if (res.data.data) {
                    this.listData = this._mxFormListData(res.data.data);
                    this.total = res.data.totalCount;
                } else {
                    this.listData = this._mxFormListData(res.data);
                }
            });
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
        _mxDoSearch(param) {
            //调用查询时默认跳转到第一页
            this.pageIndex = 1;
            this.searchParam = {
                ...param
            };
            this._mxGetList();
        },

        /**
         * 进入详情/编辑页面
         * @param param
         * @private
         */
        _mxToDetail(param) {
            //判断是不是字符串，字符串直接当做id传递，
            //对象当query传递
            let query = {};
            if (!param) {

            } else if (param.constructor === String) {
                query = { id: param }
            } else if (param.constructor === Object) {
                query = param;
            }
            this.$router.push({
                path: this.editPath,
                query
            });
        },

        /**
         * 删除列表中项目
         * @param id
         * @param method    兼容性处理condition列表删除接口更新后可以删除
         * @private
         */
        _mxDeleteItem(id, method = 'delete') {
            this.$Modal.confirm({
                title: '确认框',
                content: '<p>确认删除该条数据吗？</p>',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    this.$delete.call(this, `${this.delAPI}/${id}`).then(res => {
                        if (res.code === 0) {
                            this.$Message.info('删除成功！');
                            this._mxGetList();
                        } else {
                            this.$Message.info('删除失败！');
                        }
                    });
                }
            })
        },

        /**
         * 对表格数据进行调整
         * @param rows
         * @returns {*}
         * @private
         */
            @overwrite('对表格数据进行调整')
        _mxFormListData(rows) {
            return rows;
        }
    }
}
