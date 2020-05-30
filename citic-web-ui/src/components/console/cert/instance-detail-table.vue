<style lang="scss" scoped type="text/scss">
.instance-detail-table{
    .download,.recertification{
        width: 100%;
        min-height: 100px;
        background-color: #F5FAFD;
        overflow: hidden;
        .download-url{
            width: 210px;
            line-height: 20px;
            text-align: center;
            margin: 30px auto;
            padding: 10px;
            color: #00BBF1;
            border: 1px solid #00BBF1;
            background-color: #fff;
        }
    }
    .recertification{
        line-height: 100px;
        padding-left: 100px;
    }
    .uploadFiles{
        padding: 20px 0 20px 30px;
    }
    .fileStyle{
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        float: left;
    }
    .square-icon{
        width: 10%;
        text-align: center;
        display: inline-block;
        cursor: pointer;
    }
    .loopholeReport,.complianceReporting{
        width: 380px;
        display: inline-block;
        float: left;
        .uploadAdd{
            text-align: center;
            border: 1px solid #cccccc;
            margin: 10px 0;
        }
    }
    .complianceReporting{
        margin-left: 30px;
    }
    .hint{
        display: inline-block;
        padding-left: 30px
    }
    h2{
        font-size: 100%;
    }
}
</style>
<style lang="scss">
    .instance-detail-table{
        .ivu-btn-primary{
            background-color: #00BBF1;
            border-color: #00BBF1;
        }
        .ivu-btn-primary[disabled]{
            color: #bbbec4;
            background-color: #f7f7f7 !important;
            border-color: #dddee1 !important;
        }
        .ivu-upload-list{
            margin-top: 8px;
            /*line-height: 10px;*/
        }
    }

</style>

<template>
    <div class="instance-detail-table">
        <Table :columns="columns1" :data="tenantList"></Table>
        <!--下载证书-->
        <div class="download" v-if="status=='auth_pass'">
            <div class="download-url" @click="download">
                <Icon type="ios-download-outline" size="16"></Icon>
                <a href="javascript:void(0);" style="color: #00BBF1">下载品牌认证证书安装文档</a>
            </div>
        </div>
        <!--重新上传文件-->
        <div class="download uploadFiles" v-if="status=='security_auth_refuse'">

            <div class="loopholeReport" v-if="isScanFail()">
                <ci-upload
                    refName="vulnerabilityScan"
                    :filesName=vulnerabilityScanFiles
                    btnName="重新上传第三方漏洞扫描报告"
                    @handleSuccess="handleSuccess"
                    @handleRemove="removeScanReport"
                ></ci-upload>
            </div>

            <div class="complianceReporting" v-if="isSecurityFail()">
                <ci-upload
                    refName="complianceReporting"
                    :filesName=complianceReportingFiles
                    btnName="重新上传合规报告"
                    @handleSuccess="handleSuccess"
                    @handleRemove="removeRuleReport"
                    :formatName="['doc','docx','png','jpg','bmp','pdf','rar','zip','xlsx','xls']"
                    :tipTxt=tipText
                ></ci-upload>
            </div>

            <Button style="float:left;" @click="submitBtn" v-if="isSubmit">提交文件</Button>

            <Button style="float:right;margin-right: 60px" @click="cancelInstance">取消认证</Button>
        </div>
        <!--修改信息-->
        <div class="recertification" v-if="status=='brand_auth_refuse' && !modification">
            <Button type="primary" @click="editMessage" v-if="(userInfo.role & 2) === 2">修改信息</Button>
            <h2 class="hint" v-if="(userInfo.role & 2) === 2">请您详细核实未通过原因，点击前往修改相关信息。</h2>
            <h2 class="hint" v-else>请您详细核对未通过原因，并提醒管理员修改相关信息。</h2>
            <Button style="float:right;margin-right: 60px;margin-top: 35px" @click="cancelInstance">取消认证</Button>
        </div>
        <!--修改信息-->
        <div class="recertification" v-if="status=='brand_auth_refuse' && modification">
            <Button type="primary" @click="submitEdit" :disabled="isSubmitEdit">提交修改</Button>
            <Button @click="cancelEdit" style="margin-left: 10px">取消修改</Button>
            <h2 class="hint">修改完成后，点击重新提交品牌审核。</h2>
        </div>

        <Modal
            v-model="examine" class="reject-reason-box"
            :title="examineTest" cancel-text="">
            <div style="text-align: left;padding: 20px">
                <p class="item"><h4 style="display: inline-block">不通过项：</h4>{{examineNode}}</p>
                <p class="item"><h4 style="display: inline-block">驳回意见：</h4>{{examineTxt}}</p>
            </div>
        </Modal>
    </div>

</template>

<script>
    import upload from './instance-detail-upload'
    export default {
        props:{
            tenantList:{
                type:Array
            },
            authStatus:{
                type:String
            },
            auditStatusDetailVO:{
                type:Object
            },
            order1:{
                type: Array
            }
        },
        components: {
            'ci-upload': upload
        },
        data() {
            return {
                //审核弹窗
                examine:false,
                examineTest: '',
                examineTxt: '',
                examineNode: '',
                //驳回项
                auditRefuseNode: 'all_fail',
                isSubmit:false,
                tipText:"'doc','docx','png','jpg','bmp','pdf','rar','zip','xlsx','xls'",
                finalRejection:{
                    securityReportUrl:'',
                    securityGradeRecordsUrl:''
                },
                instanceId:this.$route.query.id,
                status: this.authStatus,
                columns1: [
                    {
                        title: '状态',
                        key: 'statusDisplay'
                    },
                    {
                        title: '操作/通过时间',
                        key: 'operateTimeStr'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 200,
                        key: 'auditNote',
                        render: (h, params) => {
                            if(params.row.auditType == 'brand'){//品牌认证状态下
                                if(params.row.auditStatus == 'audit_pass'){//品牌通过
                                    if(params.row.auditNote){
                                        return [
                                            h('Button', {
                                                props: {
                                                    type:'primary'
                                                },
                                                on:{
                                                    click:()=>{
                                                        this.examine = true
                                                        this.examineTest='查看审批意见'
                                                        this.examineTxt = params.row.auditNote
                                                    }
                                                }
                                            }, '查看审批意见'),
                                        ]
                                    }else{
                                        return [
                                            h('span', {}, '--')
                                        ]
                                    }
                                }else if(params.row.auditStatus == 'wait_audit'){//品牌审核中
                                    return [
                                        h('Button', {
                                            on:{
                                                click:()=>{
                                                    this.cancelInstance()
                                                }
                                            }
                                        }, '取消认证'),
                                    ]
                                }else if(params.row.auditStatus == 'audit_refuse'){//品牌审核失败
                                    return [
                                        h('Button', {
                                            props: {
                                                type:'success'
                                            },
                                            on:{
                                                click:()=>{
                                                    this.examine = true
                                                    this.examineTest='查看未通过原因'
                                                    this.examineTxt = params.row.auditNote
                                                    this.examineNode = params.row.auditRefuseNodeDisplay
                                                }
                                            }
                                        }, '查看未通过原因'),
                                    ]
                                }
                            }else if(params.row.auditType == 'security'){ //安全检测状态下
                                if(params.row.auditStatus == 'audit_pass'){
                                    if(params.row.auditNote){
                                        return [
                                            h('Button', {
                                                props: {
                                                    type:'primary'
                                                },
                                                on:{
                                                    click:()=>{
                                                        this.examine = true
                                                        this.examineTest='查看审批意见'
                                                        this.examineTxt = params.row.auditNote
                                                    }
                                                }
                                            }, '查看审批意见'),
                                        ]
                                    }else{
                                        return [
                                            h('span', {}, '--')
                                        ]
                                    }
                                }else if(params.row.auditStatus == 'wait_audit'){
                                    return [
                                        h('Button', {
                                            on:{
                                                click:()=>{
                                                    this.cancelInstance()
                                                }
                                            }
                                        }, '取消认证'),
                                    ]
                                }else if(params.row.auditStatus == 'audit_refuse'){
                                    return [
                                        h('Button', {
                                            props: {
                                                type:'success'
                                            },
                                            on:{
                                                click:()=>{
                                                    this.examine = true
                                                    this.examineTest='查看未通过原因'
                                                    this.examineTxt = params.row.auditNote
                                                    this.examineNode = params.row.auditRefuseNodeDisplay
                                                }
                                            }
                                        }, '查看未通过原因')
                                    ]
                                }
                            }else{
                                return [
                                    h('span', {}, '--')
                                ]
                            }
                        }
                    }
                ],
                vulnerabilityScanFiles:[],
                complianceReportingFiles:[],
                //是否修改
                isEdit: true,
                modification: false,
                isSubmitEdit: false,
                //修改信息
                form:{},
                provinces:[],
                citys:[],
                baseLineList:[],
                costCenterList:[],
                costCenterId:'',
                industryFatherList:[],
                industrySonList:[],
                //当前用户信息
                userInfo: this.$store.state.userInfo.USER_INFO,
                tenantInfo: this.$store.state.userInfo.TENANT_INFO,

            }
        },
        created() {},

        mounted() {},

        methods: {
            /*
            * 上传成功
            * */
            handleSuccess(name,files) {
                if(this.auditRefuseNode === 'scan_fail' || this.auditRefuseNode === 'website_scan_fail'){
                    this.vulnerabilityScanFiles = files
                }
                if(this.auditRefuseNode === 'security_fail'){
                    this.complianceReportingFiles = files
                }
                if(this.auditRefuseNode === 'all_fail'){
                    if(name === 'vulnerabilityScan'){
                        this.vulnerabilityScanFiles = files
                    }
                    if(name === 'complianceReporting'){
                        this.complianceReportingFiles = files
                    }
                }
            },

            /*
            * 提交文件
            *
            * */
            async submitBtn(){
                const files_cr = []
                const files_vb = []
                this.complianceReportingFiles.forEach(item=> {files_cr.push(item.response.image_url)})
                this.vulnerabilityScanFiles.forEach(item=> {files_vb.push(item.response.image_url)})

                if(this.auditRefuseNode === 'scan_fail' || this.auditRefuseNode === 'website_scan_fail'){
                    if(files_vb){
                        await this.relaunchAuth(files_vb,'')
                    }
                }
                if(this.auditRefuseNode === 'security_fail'){
                    if(files_cr){
                        await this.relaunchAuth('',files_cr)
                    }
                }
                if(this.auditRefuseNode === 'all_fail'){
                    if(files_cr && files_vb){
                        await this.relaunchAuth(files_vb,files_cr)
                    }
                }
            },
            /*
            * 漏洞扫描文件删除
            * */
            removeScanReport(fileList){
                this.vulnerabilityScanFiles = fileList
            },
            /*
            * 合规报告
            * */
            removeRuleReport(fileList){
                this.complianceReportingFiles = fileList
            },
            /*
            * 重新上传
            * */
            relaunchAuth(url1,url2){
                this.$put(`${this.$API_ENUM.CITIC_AUTH_RELAUNCH_AUTH}/${this.instanceId}`,{
                    securityReportUrl:`${url1}`,
                    securityGradeRecordsUrl:`${url2}`
                }).then(res=>{
                    this.$emit('_mxGetFormInfo')
                })
            },
            /*
            * 上传显示
            * */
            isScanFail(){
                return this.auditRefuseNode === 'scan_fail'|| this.auditRefuseNode === 'all_fail' || this.auditRefuseNode === 'website_scan_fail'
            },
            isSecurityFail() {
                return this.auditRefuseNode === 'security_fail' || this.auditRefuseNode === 'all_fail'
            },
            /*
            * 下载安装文档
            * */
            download(){
                this.downloadFileByUrl(`${this.$CONFIG.BASE_API_URL}${this.$API_ENUM.CITIC_AUTH_DOWNLOAD_INSTALLATION_DOC}/${this.instanceId}`)
            },
            /*
            * 取消认证
            * */
            cancelInstance(){
                this.$post(this.$API_ENUM.CITIC_AUTH_CANCEL_AUTH,{
                    authInstanceId:this.instanceId
                }).then(res=>{
                    this.$emit('_mxGetFormInfo')
                })
            },
            /*
            * 重新认证
            * */
            goBuy(){
                this.$router.push({
                    path:'../../product/cert/buy'
                })
            },
            // 获取业务类型
            getindustryFatherData(){
                this.$get(this.$API_ENUM.CITIC_BUSINESS_TYPE_CHILD,{id:0}).then(res=>{
                    this.industryFatherList = res.datas
                    let [industryFatherName,industryFatherId,typeName] = ['','',[]]
                    this.order1.forEach(item=>{
                        if(item.key === 'business_type_name'){
                            typeName = item.value.split("-")
                            industryFatherName = typeName[0]
                        }
                    })
                    this.industryFatherList.forEach(item=>{
                        if(item.name === industryFatherName){
                            industryFatherId = item.id
                        }
                    })
                    this.getindustrySonData(industryFatherId,typeName[1])
                    this.$store.commit('setIndustrFatherList',this.industryFatherList)
                })
            },
            getindustrySonData(value,name){
                this.$get(this.$API_ENUM.CITIC_BUSINESS_TYPE_CHILD, {id: value}).then(res=>{
                    this.industrySonList = res.datas
                    this.$store.commit('setIndustrSonList',this.industrySonList)
                })
            },
            //获取省市
            getProvinces() {
                this.$get(`${this.$API_ENUM.AREA_PROVINCE}?country=中国`).then(res=>{
                    this.provinces = res.data
                    let [provincesName,typeName] = ['',[]]
                    this.order1.forEach(item=>{
                        if(item.key === 'company_address'){
                            typeName = item.value.split("-")
                            provincesName = typeName[0]
                        }
                    })
                    this.getCitys(provincesName)
                    this.$store.commit('setProvinces',this.provinces)
                })
            },
            getCitys(val) {
                this.$get(`${this.$API_ENUM.AREA_CITY}?country=中国&province=${val}`).then(res=>{
                    this.citys = res.data
                    this.$store.commit('setCitys',this.citys)
                });
            },
            /*
            * 修改信息
            * */
            editMessage(){
                this.modification = true
                this.$emit('setEditState',true)
                this.getindustryFatherData()
                this.getProvinces()
                const { fullname, email, mobile } = this.userInfo;
                this.form.contact_name = fullname;
                this.form.contact_phone = mobile;
                this.form.contact_mail = email;
            },
            /*
            * 提交修改
            * */
            submitEdit(){
                const { citicId, email, mobile } = this.userInfo;
                const { name, citicId: tenantCiticId } = this.tenantInfo;
                let costIds = ''
                this.order1.map(item=>{
                    const { key, valueDisplay, value } = item
                    let obj = {}
                    if(key === 'business_type_name'){
                        if(item.postData){
                            obj['business_type_id'] = item.postData
                            obj[key] = item.valueDisplay
                            Object.assign(this.form,obj)
                        }else{
                            obj['business_type_id'] = this.industrySonId
                            obj[key] = item.valueDisplay
                            Object.assign(this.form,obj)
                        }
                    }
                    else if(key === 'authentication_type'|| key === 'security_auth_type'|| key === 'app_release_platform'|| key ==='app_release_platform'|| key ==='app_research_status'|| key ==='website_research_status'|| key ==='app_deploy'|| key ==='website_deploy'|| key ==='app_payment_type'|| key ==='security_grade'|| key ==='certification_period'){
                        obj[key] = value
                        Object.assign(this.form,obj)
                    }else{
                        obj[key] = valueDisplay
                        Object.assign(this.form,obj)
                    }

                })


                this.$emit('submitUpdate',this.form)

            },
            /*
            * 取消修改
            * */
            cancelEdit(){
                this.modification = false
                this.$emit('setEditState',false)
            }
        },

        computed: {},

        watch: {
            tenantList(val){
                this.auditRefuseNode = val[val.length-1].auditRefuseNode
            },
            vulnerabilityScanFiles(val){
                if(val.length > 0) {
                    if(this.auditRefuseNode === 'all_fail'){
                        if(this.complianceReportingFiles.length > 0){
                            this.isSubmit = true
                        }
                    }else{
                        this.isSubmit = true
                    }
                }else{
                    this.isSubmit = false
                }
            },
            complianceReportingFiles(val){
                if(val.length > 0) {
                    if(this.auditRefuseNode === 'all_fail'){
                        if(this.vulnerabilityScanFiles.length > 0){
                            this.isSubmit = true
                        }
                    }else{
                        this.isSubmit = true
                    }
                }else{
                    this.isSubmit = false
                }
            },
            authStatus(val){
                this.status = val
            },
            // order1(newVal,oldVal){
            //     if(newVal !== oldVal){
            //
            //         // this.isSubmitEdit = false
            //     }
            // }

        }
    }
</script>
