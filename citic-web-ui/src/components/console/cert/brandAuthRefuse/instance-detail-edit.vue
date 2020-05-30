<style scoped lang="scss">
    .param-form {
        padding:10px 0;
        .param-value {
            margin-left: 10px;
            word-break: break-all;
        }

        .image-group {
            width: 88%;
            margin-left: 10px;
            display: inline-block;

            img {
                max-width: 19%;
                margin-right: 1%;
                cursor: pointer;
            }
        }

        .download-link {
            margin-left: 10px;
            cursor: pointer;
            color: #2d8cf0;
            text-decoration: underline #2d8cf0;
            display: inline-block;
        }
        .param-value{
            width: 520px;
            display: inline-block;
        }
        .edit-btn,.ok-btn{
            display: inline-block;
            float: right;
            padding-right: 20px;
        }
    }
</style>
<style lang="scss">
    .param-form{
        .ivu-form-item{
            margin-bottom: 0 !important;
            padding: 9px 0 !important;
        }
        .ivu-form-item-label{
            width: 20%;
            text-align: left !important;
            padding-left: 30px !important;
        }
    }
</style>

<template>
    <div>
        <Form :label-width="220" class="param-form" ref="form" v-model="form">
            <FormItem v-for="(item, index) in form" :label="`${item.keyDisplay}：`" :key="index">
                <!--文字内容-->
                <p class="param-value" v-if="isNormal(item)">{{item.valueDisplay}}  {{item.keyUnitName === 'NONE' ? '' : item.keyUnitName}}</p>


                <!--图片内容-->
                <div class="image-group" v-if="isImg(item)">
                    <img :src="item.valueDisplay" :key="index" title="查看图片"
                         @click="openPreviewImage([item.valueDisplay], 0)">
                </div>

                <!--下载链接-->
                <ul class="download-link" v-if="isFile(item)">
                    <li v-for="(items,i) in item.value" :key="i" @click="download(items)">下载{{item.keyDisplay}}-{{i}}</li>
                </ul>

                <ci-hard-coded
                    :ref="`editType${index}`"
                    :item="item"
                    v-if="isEdit(item)"
                    v-model="textVal"
                >
                </ci-hard-coded>

                <Button class="edit-btn" @click="editBtn(item,index)" :disabled="isDisabled(item)" v-if="!isEdit(item)">修改</Button>
                <Button class="ok-btn" @click="okBtn(item,index)" v-if="isEdit(item)">确定</Button>

            </FormItem>

            <ci-image-preview v-model="previewOpen" :images="previewImages" :index="previewIndex"></ci-image-preview>
        </Form>
    </div>

</template>

<script>
    import instanceDetailHardCoded from './instance-detail-hardCoded'

    export default {
        props: {
            order1: {
                type: Array,
                required: true,
            },
            authType: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                form: this.order1,
                previewOpen: false,
                previewImages: [],
                previewIndex: 0,
                textVal: '',
                authenticationType:''
            }
        },
        created(){
        },

        methods: {
            openPreviewImage(images, index) {
                this.previewImages = images;
                this.previewIndex = index;
                this.previewOpen = true;
            },

            editBtn(item,index){
                this.form.forEach((items)=>{
                    items.edit = false
                })
                item.edit = true
                if(item.valueType === 'file'){
                    this.$nextTick(()=>{
                        this.textVal = item.valueDisplay
                    })
                }else {
                    this.$nextTick(()=>{
                        this.textVal = item.value
                    })
                }
                this.$nextTick(()=>{
                    this.$refs[`editType${index}`][0].valueType(this.textVal)
                })

            },

            okBtn(item,index){

                this.$refs[`editType${index}`][0].okCnt()
                if(item.valueType === 'file'){
                    this.$nextTick(()=>{
                        item.value = this.textVal.split(',')
                        item.valueDisplay = this.textVal
                    })
                }else if(item.key === 'business_type_name'){
                    this.$nextTick(()=>{
                        let typeName = this.textVal.split("+")
                        item.value = typeName[0]
                        item.valueDisplay = typeName[0]
                        this.$set(item,'postData',typeName[1])
                    })
                }else if(item.key === 'app_release_platform' || item.key === 'app_research_status' || item.key === 'website_research_status' || item.key === 'app_deploy' || item.key === 'website_deploy' || item.key === 'app_payment_type' || item.key === 'security_grade' || item.key === 'certification_period'){
                    let typeName = this.textVal.split("+")
                    item.value = typeName[1]
                    item.valueDisplay = typeName[0]
                }
                else{
                    item.value = this.textVal
                    item.valueDisplay = this.textVal
                }
                item.edit = false

            },

            download(url){
                this.downloadFileByUrl(url)
            },

            isNormal({valueType, edit}){
                return !valueType || valueType === 'normal' && !edit;
            },

            isImg({valueType, edit}){
                return valueType === 'img' && !edit;
            },

            isFile({valueType, edit}){
                return valueType === 'file' && !edit;
            },
            isEdit({edit}){
                return edit
            },
            isDisabled({key}){
                if(this.authenticationType === 'wechat' || this.authenticationType === 'microblog'){
                    return key === 'authentication_type' || key === 'security_auth_type' || key === '应用基线' || key === '成本中心';
                }else{
                    return key === 'authentication_type' || key === 'security_auth_type' || key === 'contact_name' || key === 'contact_phone' || key === 'contact_mail' || key === '应用基线' || key === '成本中心';
                }
            }

        },

        watch:{
            order1(val){
                this.form = val
                this.form.forEach(item=>{
                    if(item.valueType === 'file'){
                        item.value = item.valueDisplay.split(',')
                    }
                    this.$set(item,'edit',false)
                })
            },
            authType(val){
                this.authenticationType = val
                this.$store.commit('setAuthenticationType',val)
            }
        },

        components: {
            'ci-hard-coded': instanceDetailHardCoded
        }
    }
</script>
