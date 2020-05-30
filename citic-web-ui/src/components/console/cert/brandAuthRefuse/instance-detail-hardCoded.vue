<style lang="scss" scoped type="text/scss">
    .editType {
        display: inline-block;
        width: 85%;

        .edit-btn, .ok-btn {
            display: inline-block;
            float: right;
            padding-right: 20px;
        }

        .ivu-radio-wrapper-checked {
            background: #61b3ff;
            color: #fff;
            border: none;
        }

        .ivu-radio-wrapper {
            min-width: 180px;
            text-align: center;
            margin-right: 10px;
        }
    }
</style>

<template>
    <div class="editType">
        <!--普通文本修改-->
        <Input
            ref="inp"
            v-model="hardCoded.textVal"
            v-if="inpIsShow(item)"
        ></Input>
        <!--上传图片-->
        <PictureUpload
            v-if="item.valueType === 'img'"
            :tipText="uploadText"
            :imgs="images"
            :fileMaxLen="1"
            @addImg="addFile($event,images)"
            @removeImg="removeFile($event,images)"
            class="lincense">
        </PictureUpload>
        <!--上传文件-->
        <FileUpload
            v-if="item.valueType === 'file'"
            :tipText="tipText2"
            @addFile="addFile($event,version_control)"
            @removeFile="removeFile($event,version_control,'app_version_control')"
            :fileMaxLen="3"
            :files="version_control">
        </FileUpload>

        <!--应用渠道-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'app_release_platform'">
            <Radio label="app_adapter_android_phone">Android</Radio>
        </RadioGroup>

        <!--app开发模型-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'app_research_status'">
            <Radio label="app_is_own">公司自主设计研发</Radio>
            <Radio label="app_ishalf_own">公司自主设计，外包人员开发</Radio>
            <Radio label="app_no_own">外包设计研发</Radio>
        </RadioGroup>
        <!--网站开发模型-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'website_research_status'">
            <Radio label="website_is_own">公司自主设计研发</Radio>
            <Radio label="website_ishalf_own">公司自主设计，外包人员开发</Radio>
            <Radio label="website_no_own">外包设计研发</Radio>
        </RadioGroup>
        <!--app部署位置-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'website_deploy'">
            <Radio label="website_physics_room">物理机房部署</Radio>
            <Radio label="website_cloud_room">云部署</Radio>
        </RadioGroup>
        <!--网站部署位置-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'app_deploy'">
            <Radio label="app_physics_room">物理机房部署</Radio>
            <Radio label="app_cloud_room">云部署</Radio>
        </RadioGroup>
        <!--APP付费类型-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'app_payment_type'">
            <Radio label="app_gratis">免费</Radio>
            <Radio label="app_pay">付费</Radio>
        </RadioGroup>
        <!--网络安全等级保护备案级别-->
        <Select v-model="hardCoded.textVal" v-if="item.key === 'security_grade'" style="width: 50%">
            <Option value="一级">一级</Option>
            <Option value="二级">二级</Option>
            <Option value="三级">三级</Option>
            <Option value="四级">四级</Option>
            <Option value="未定级备案">未定级备案</Option>
        </Select>
        <!--简介-->
        <div v-if="item.key === 'app_introduce'||item.key === 'company_introduce'||item.key === 'website_introduce'">
            <i-input ref="inp" v-model="hardCoded.textVal" type="textarea" :rows="7"></i-input>
            <span class="tips">请保持在300字以内</span>
        </div>
        <!--网络安全保护定级预期完成时间-->
        <DatePicker v-model="hardCoded.textVal" type="date" placeholder="请选择起始时间"
                    v-if="item.key === 'security_expected_start_time'"
        ></DatePicker>
        <DatePicker v-model="hardCoded.textVal" type="date" placeholder="请选择结束时间"
                    v-if="item.key === 'security_expected_end_time'"
        ></DatePicker>

        <!--认证期限-->
        <RadioGroup v-model="hardCoded.textVal" type="button" v-if="item.key === 'certification_period'">
            <Radio label="biennium">两年期</Radio>
        </RadioGroup>
        <!--业务类型-->
        <div v-if="item.key === 'business_type_name'">
            <Select v-model="industryFather" class="select-father" placeholder="请选择行业类型" @on-change="fatherChange">
                <Option v-for="item in industryFatherList" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
            <Select v-model="industrySon" class="select-son" placeholder="请选择行业类型">
                <Option v-for="item in industrySonListData" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
        </div>
        <!--公司地址-->
        <div v-if="item.key === 'company_address'">
            <Select v-model="hardCoded.province" @on-change="getCitysByProvince">
                <Option v-for="item in provinces" :value="item" :key="item">{{ item }}</Option>
            </Select>
            <Select v-model="hardCoded.city" :disabled="hardCoded.province === ''">
                <Option v-for="item in citys" :value="item" :key="item">{{ item }}</Option>
            </Select>
            <i-input v-model="hardCoded.position_address" placeholder="请填写详细地址" class="width400">></i-input>
        </div>
        <!--成本中心-->
        <Select v-model="hardCoded.costCenter" style="width: 50%" v-if="item.key === '成本中心'">
            <Option v-for="option in costCenterList" :key="option.id" :value="option.id" :label="option.name">
                {{option.name}}
            </Option>
        </Select>
        <!--服务号-->
        <Select v-model="hardCoded.textVal" v-if="item.key === 'account_type'">
            <Option value="服务号">服务号</Option>
            <Option value="订阅号">订阅号</Option>
        </Select>
        <!--主体类型-->
        <Select v-model="hardCoded.textVal" v-if="item.key === 'main_type'">
            <Option value="政府">政府</Option>
            <Option value="企业">企业</Option>
            <Option value="媒体">媒体</Option>
            <Option value="其他组织机构">其他组织机构</Option>
        </Select>
        <!--所属类型-->
        <Select v-model="hardCoded.textVal" v-if="item.key === 'type'">
            <Option value="政府">政府</Option>
            <Option value="企业">企业</Option>
            <Option value="媒体">媒体</Option>
            <Option value="网站">网站</Option>
            <Option value="应用">应用</Option>
            <Option value="机构">机构</Option>
            <Option value="公益">公益</Option>
            <Option value="校园组织">校园组织</Option>
        </Select>
    </div>
</template>

<script>

    import PictureUpload from 'com/public/picture-upload'
    import FileUpload from 'com/public/file-upload'
    import industryChoice from 'com/public/industry-choice'
    import checkInput from "utils/checkInput.js"

    export default {
        props:{
            item:{
                type: Object,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                hardCoded: {
                    textVal: this.value,
                    province: '',
                    city: '',
                    position_address: '',
                    costCenter: '',
                },
                tipText2: '上传文件支持doc/docx/jpg/png/bmp/pdf/rar/zip格式，上传最小尺寸不低于80px*80px。上传文件不能超过5M。',
                version_control: [],
                images: [],
                uploadText: '上传文件支持jpg/png，尺寸为512*512，上传文件不能超过2M。',
                industryFather: '',
                industrySon: '',
                industryFatherList: this.$store.state.instanceForm.industryFatherList,
                industrySonListData: this.$store.state.instanceForm.industrySonList,
                provinces: this.$store.state.instanceForm.provinces,
                citys: this.$store.state.instanceForm.citys,
                costCenterList: [],
                attestationType: ''
            }
        },
        created() {
            this.getCitys()
        },
        mounted() {
        },

        methods: {
            /*
            * 修改
            * */
            valueType(val) {

                const {valueType, key} = this.item
                /*首先判断内容类型   （normal、img、file）*/
                if (valueType === 'normal' || !valueType) {
                    //处理业务类型展示
                    if (key === 'business_type_name') {
                        const typeNames = val.split('-')
                        this.industryFatherList.forEach(items => {
                            if (items.name === typeNames[0]) {
                                this.industryFather = items.id
                                this.industrySonListData.forEach(items => {
                                    if (items.name === typeNames[1]) {
                                        this.industrySon = items.id
                                    }
                                })
                            }
                        })
                    }
                    //处理地址展示
                    else if (key === 'company_address') {
                        const address = val.split('-')
                        this.provinces.forEach(items => {
                            if (items === address[0]) {
                                this.hardCoded.province = items
                                this.citys.forEach(items => {
                                    if (items === address[1]) {
                                        this.hardCoded.city = items
                                        this.hardCoded.position_address = address[2]
                                    }
                                })
                            }
                        })
                    }
                    //处理单选按钮、下拉框展示
                    else if (key === 'type' || key === 'main_type' || key === 'account_type' || key === 'app_release_platform' || key === 'website_research_status' || key === 'website_deploy' || key === 'app_research_status' || key === 'app_deploy' || key === 'app_payment_type' || key === 'security_grade' || key === 'certification_period' || key === 'security_expected_start_time' || key === 'security_expected_end_time') {
                        this.hardCoded.textVal = val
                    } else {
                        this.hardCoded.textVal = val
                        this.$refs.inp.focus()
                    }

                } else if (valueType === 'img') {

                    let defaultFile = {name: '', url: val}
                    defaultFile.name = val.slice(val.lastIndexOf('/') + 1, val.length)
                    this.images.push(defaultFile)

                } else if (valueType === 'file') {

                    let arr = val.split(',')
                    arr.forEach(item => {
                        let defaultFile = {name: '', url: item}
                        defaultFile.name = item.slice(item.lastIndexOf('/') + 1, item.length)
                        this.version_control.push(defaultFile)
                    })
                }
            },

            /*
            * 确定
            * */
            okCnt() {
                const {valueType, key} = this.item
                if (valueType === 'normal' || !valueType) {
                    if (key === 'business_type_name') {
                        let [FatherName, SonName] = ['', '']
                        this.industryFatherList.forEach(item => {
                            if (item.id == this.industryFather) {
                                return FatherName = item.name
                            }
                        })
                        this.industrySonListData.forEach(item => {
                            if (item.id == this.industrySon) {
                                return SonName = item.name
                            }
                        })
                        this.$emit('input', `${FatherName}-${SonName}+${this.industrySon}`)
                    } else if (key === 'company_address') {
                        let address = this.hardCoded.position_address
                        if (address) {
                            if (address.length < 2 || address.length > 50) {
                                this.$Message.error('限2-50字！')
                            } else if (!checkInput.specialCharacters(address)) {
                                this.$Message.error('不支持特殊字符')
                            } else {
                                this.$emit('input', `${this.hardCoded.province}-${this.hardCoded.city}-${address}`)
                            }
                        } else {
                            this.$Message.error('此选项不能为空！')
                        }
                    } else if (key === 'security_expected_start_time' || key === 'security_expected_end_time') {
                        const date = this.hardCoded.textVal.Format('yyyy-MM-dd')
                        this.$emit('input', `${date}`)
                    } else if (key === 'app_release_platform' || key === 'app_release_platform' || key === 'app_research_status' || key === 'website_research_status' || key === 'app_deploy' || key === 'website_deploy' || key === 'app_payment_type' || key === 'security_grade' || key === 'certification_period') {
                        //“+”为相应key向提交的参数
                        this.$emit('input', `${this.defaultVal(this.hardCoded.textVal)}+${this.hardCoded.textVal}`)
                    } else {
                        if (this.hardCoded.textVal) {
                            let textVal = this.hardCoded.textVal
                            if(key === 'wechat_name'){
                                if(!/^[a-zA-Z0-9\u4E00-\u9FA5]{2,30}$/.test(textVal)){
                                    this.$Message.error("限2-30个字，仅能输入汉字、英文字母、数字")
                                    return;
                                }
                            }else if(key === 'wechat_account'){
                                if (textVal.length < 2 || textVal.length > 30) {
                                    this.$Message.error('限2-30个字！')
                                    return
                                }
                            }
                            else if (key === 'website_name' || key === 'company_name') {
                                const authenticationType = this.$store.state.instanceForm.authenticationType
                                if(authenticationType === 'wechat' && key === 'company_name'){
                                    if (!/^[a-zA-Z0-9\u4E00-\u9FA5]{2,30}$/.test(textVal)) {
                                        this.$Message.error('限2-30个字，仅能输入中文、英文字母、数字、特殊字符')
                                        return
                                    }
                                }
                                if (textVal.length < 2 || textVal.length > 50) {
                                    this.$Message.error('限2-50字！')
                                    return
                                } else if (!checkInput.specialCharacters(textVal)) {
                                    this.$Message.error('不支持特殊字符')
                                    return
                                }

                            } else if (key === 'micro_blog_name') {

                                if (!/^[a-zA-Z0-9\u4E00-\u9FA5]{5,30}$/.test(textVal)) {
                                    this.$Message.error('限5-30个字，仅能输入汉字、英文字母、数字')
                                    return
                                }
                            } else if (key === 'app_introduce' || key === 'company_introduce' || key === 'website_introduce') {

                                if (textVal.length > 300) {
                                    this.$Message.error('输入的长度请保持在300以内！')
                                    return
                                }
                            } else if (key === 'contact_name') {

                                if (!/^[a-zA-Z\u4E00-\u9FA5]{2,10}$/.test(textVal)) {
                                    this.$Message.error('限2-10个字，仅能输入汉字、英文字母！')
                                    return
                                }
                            } else if (key === 'contact_phone') {

                                if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(textVal)) {
                                    this.$Message.error('请输入正确的手机号格式！')
                                    return
                                }
                            } else if (key === 'contact_mail') {

                                if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(textVal)) {
                                    this.$Message.error('请输入正确的邮箱格式，格式如：test@sina.com')
                                    return
                                }
                            } else if (key === 'website_daily_pv' || key === 'website_daily_uv') {
                                if (!/^[1-9]\d*$/.test(textVal)) {
                                    this.$Message.error('请输入正整数！')
                                    return
                                }
                            }
                            this.$emit('input', `${this.hardCoded.textVal}`)

                        } else {
                            this.$Message.error('此选项不能为空！')
                        }

                    }
                } else if (valueType === 'img') {
                    const imgStr = this.images[0]
                    if (imgStr.url) {
                        this.$emit('input', imgStr.url)
                    } else {
                        this.$Message.error('此选项不能为空！')
                    }

                } else if (valueType === 'file') {
                    if (this.version_control.length) {//security_certify_url
                        this.$emit('input', this.filesToString(this.version_control))
                    } else {
                        this.$Message.error('此选项不能为空！')
                    }

                }
            },
            /*
            * 判断为输入框的
            * */
            inpIsShow({valueType, key}) {
                return (valueType === 'normal' || !valueType) && key !== 'type' && key !== 'security_expected_end_time'
                    && key !== 'security_expected_start_time' && key !== 'website_research_status' && key !== 'website_deploy'
                    && key !== 'account_type' && key !== 'main_type' && key !== 'app_release_platform' && key !== '成本中心'
                    && key !== 'company_address' && key !== 'business_type_name' && key !== 'app_research_status'
                    && key !== 'app_deploy' && key !== 'app_payment_type' && key !== 'security_grade' && key !== 'certification_period'
                    && key !== 'app_introduce' && key !== 'company_introduce' && key !== 'website_introduce'
            },
            /*
            * 实时获取业务子类型
            * */
            getindustrySonData(value) {
                return this.$get(this.$API_ENUM.CITIC_BUSINESS_TYPE_CHILD, {id: value})
            },
            fatherChange(val) {
                this.getindustrySonData(val).then(res => {
                    this.$nextTick(() => {
                        this.industrySonListData = res.datas
                        this.$store.commit('setIndustrSonList', this.industrySonListData)
                        this.industrySon = this.industrySonListData[0].id
                    })
                })
            },
            /*
            * 实时获取城市
            * */
            getCitys(val) {
                return this.$get(`${this.$API_ENUM.AREA_CITY}?country=中国&province=${val}`)
            },
            getCitysByProvince(item) {
                this.getCitys(item).then(res => {
                    this.$nextTick(() => {
                        this.citys = res.data
                        this.$store.commit('setCitys', this.citys)
                        //默认选中第一项
                        this.hardCoded.city = this.citys[0];
                    })

                });
            },

            /*
            * 上传文件
            * @files    文件列表
            * */
            addFile(val, files) {
                files.push(val)
            },
            /*
            * 删除文件
            * @files    文件列表
            * */
            removeFile(val, files) {
                files.splice(files.findIndex((item) => {
                    return item.uid === val.uid
                }), 1);
            },
            filesToString(files) {
                let arr = []
                files.forEach(item => {
                    arr.push(item.url)
                })
                return `${arr}`
            },

            /*
            * 特殊字段转换页面显示
            * */
            defaultVal(val) {
                switch (val) {
                    case 'app_adapter_android_phone':
                        return 'Android'
                        break
                    case 'app_is_own':
                        return '公司自主设计研发'
                        break
                    case 'website_is_own':
                        return '公司自主设计研发'
                        break
                    case 'app_ishalf_own':
                        return '公司自主设计，外包人员开发'
                        break
                    case 'website_ishalf_own':
                        return '公司自主设计，外包人员开发'
                        break
                    case 'app_no_own':
                        return '外包设计研发'
                        break
                    case 'website_no_own':
                        return '外包设计研发'
                        break
                    case 'website_physics_room':
                        return '物理机房部署'
                        break
                    case 'app_physics_room':
                        return '物理机房部署'
                        break
                    case 'website_cloud_room':
                        return '云部署'
                        break
                    case 'app_cloud_room':
                        return '云部署'
                        break
                    case 'app_gratis':
                        return '免费'
                        break
                    case 'app_pay':
                        return '付费'
                        break
                    case 'biennium':
                        return '两年期'
                        break
                    default:
                        return val
                        break
                }
            }
        },

        computed: {},

        watch: {},

        components: {
            PictureUpload,
            FileUpload,
            "ci-industry-choice": industryChoice
        },
    }
</script>
