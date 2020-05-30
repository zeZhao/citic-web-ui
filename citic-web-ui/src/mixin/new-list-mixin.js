var tableMixin = {
    data () {
        return {
            //搜索组件得props
            //搜索组件的配置对象
            autoLoading: true,
            loading: false,
            isSave: true,
            searchFormConfig: [],
            //组件默认值
            defaultValue:{},
            //搜索组件返回的数据
            requestMethod: "GET",
            searchFormData: [],
            //表格列数据
            columns: [],
            //表格行数据
            listData: [],
            //从 sessionStorage取到的缓存查询条件
            storedValue: {},
            //页码数据
            page: {
                total: 0,
                pageIndex: 1,
                pageSize: 10,
                pageSizeOpts:[10,20,30,40,50,60]
            },
            //查询列表数据地址
            listUrl:'',
            throttleTimer:null,//节流定时器的ID
            timerTime:500//节流计时器时间
        }
    },
    created () {
        this._mixinParameterChecking()
    },
    beforeMount () {
        this._getStoredValue()
    },
    mounted () {

    },
    methods : {
        _searchChange(searchFormData){
            if(this.throttleTimer){
                clearTimeout(this.throttleTimer)
                this.throttleTimer = setTimeout(() => {
                    this._getListData(searchFormData)
                    this.throttleTimer = null
                }, this.timerTime);
            }else{
                this.throttleTimer = setTimeout(() => {
                    this._getListData(searchFormData)
                    this.throttleTimer = null
                },  this.timerTime);
            }
        },

        _getListData(searchFormData){
            //查询分页条件变化时mixin的回调
            if(!this.listUrl){
                console.warn('listUrl为空')
                return
            }
            this.searchFormData = searchFormData
            let requestData = this.requestParameterAssembly(searchFormData)
            if(requestData === false){
                return
            }
            if(this.autoLoading){
                this.loading = true
            }



            if( this.requestMethod == 'GET' ) {
                this.$get( this.listUrl,requestData ).then(res =>{

                    this.loading = false
                    this.mixinAssignment(res.data)

                }).catch(e => {
                    console.log(e)
                })
            }
        },

        requestParameterAssembly(searchFormData){
            //请求接口获得数据
            return {
                ...searchFormData.searchFormData,
                pageIndex: searchFormData.page.pageIndex,
                pageSize: searchFormData.page.pageSize,
            }
        },


        mixinAssignment(res){
            //返回数据赋值
            console.log('返回数据赋值')
            console.log(res)
            this.page.total = res.total
            this.listData = res.datas
        },
        _mixinParameterChecking(){
            //mixin参数校验
            let { listUrl,  searchFormData, columns, page } = this
            if( !listUrl ){
                console.error( "listUrl，查询列表数据地址为必填项" )
                return
            }
            // if( !window.axios ){
            //     console.error( '在老项目环境中本mixin强依赖axios,在新架构中可注释此校验' )
            //     return
            // }
            if( !columns || columns.length == 0 ) {
                console.warn( 'columns,表格列配置数据为空' )
            }
            if( !searchFormData || searchFormData.length == 0 ){
                console.warn( '查询条件配置项为空' )
            }
            if( !page ) {
                this.page = {}
                console.warn( 'page,分页工具为空' )
            }

        },
        _getStoredValue(){
            //获取缓存数据，并传给搜索组件
            let storedValue = sessionStorage.getItem(location.href)
            if(storedValue && this.isSave){
                storedValue = JSON.parse(storedValue)
                this.page.pageIndex = storedValue.page.pageIndex
                this.page.pageSize = storedValue.page.pageSize
                this.storedValue = storedValue
            }
        },
        _pageIndexChange(pageIndex){
            this.page.pageIndex = pageIndex
        },
        _pageSizeChange(pageSize){
            this.page.pageSize = pageSize
        },
        // debounce(){
        //     //防抖
        // },
        // throttle(){
        //     //节流
        // },
    }
}

export default tableMixin
