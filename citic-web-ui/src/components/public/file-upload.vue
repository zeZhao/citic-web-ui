<style lang="scss" scoped>
.fileUpload{
    .tip{
        width: 315px;
        line-height: 15px;
        float: left;
        margin-left: 15px;
        margin-top: 20px;
        color: #9d9d9d;
    }
    .uploadingStyle{
        width: 150px;
        border-radius: 15px;
        margin-top: 30px;
        background-color: #57a3f3;
        border-color: #57a3f3;
    }
    .fileStyle{
        max-width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        float: left;
    }
    .square-icon{
        width: 5%;
        text-align: center;
        display: inline-block;
        cursor: pointer;
    }
}
</style>

<template>
    <div class="fileUpload">
        <div style="width: 220px">
            <div v-for="(item,index) in uploadList" :key="index">
                <template v-if="item.status === 'finished'">
                    <a href="javascript:void(0)" class="fileStyle" @click="download(item.url)">{{item.name}}</a>
                    <div class="square-icon">
                        <Icon type="ios-trash-outline" size="20" @click.native="handleRemove(item)" ></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress style="max-width: 95%" v-if="item.showProgress" :percent="item.percentage" :stroke-width="5" hide-info></Progress>
                </template>
            </div>
        </div>
        <Upload v-show="uploadList.length < fileMaxLen"
            ref="upload"
            style="width: 220px;float: left"
            type="drag"
            name="multipartFile"
            :show-upload-list="false"
            :default-file-list="defaultFileList"
            :format=format
            :max-size="51200"
            :on-success="handleSuccess"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :action=uploadUrl>
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或拖拽将文件拖拽到这里上传</p>
            </div>
        </Upload>
        <div class="tip" v-show="uploadList.length < fileMaxLen">
            <p>{{tipText}}</p>
        </div>
        <div class="clear"></div>
    </div>


</template>

<script>
    import axios from 'axios'

    export default {
        props: {
            files: {
                type: Array,
                required: true
            },
            fileMaxLen: {
                type: Number,
                default:1
            },
            format: {
                type: Array,
                default:()=>{
                    return ['doc','docx','png','jpg','bmp','pdf','rar','zip']
                }
            },
            tipText: {
                type: String,
                default:()=>{
                    return '上传文件支持doc/docx/jpg/png/bmp/pdf/rar/zip格式，上传最小尺寸不低于80px*80px。上传文件不能超过5M。文件最多不能超过3份'
                }
            }
        },
        data() {
            return {
                uploadList: [],
                defaultFileList: [],
                uploadUrl: `${this.$CONFIG.FILE_SERVER_URL}uploadFile.do`
            }
        },
        created() {
        },

        mounted() {
        },

        methods: {
            handleRemove(file){
                const fileList = this.$refs.upload.fileList
                fileList.splice(fileList.indexOf(file), 1)
                this.$emit('removeFile', { url: file.url, uid: file.uid })

                //TODO 由于该接口不需要token，所以临时使用axios解决
                axios.delete(`${this.$CONFIG.FILE_SERVER_URL}${file.uid}/deleteFile.do`)
            },
            handleSuccess(res, file) {
                file.url = res.image_url;
                this.$emit('addFile', file);
            },
            handleFormatError() {
                this.$Notice.warning({
                    title: '文件格式有误。'
                })
            },
            handleMaxSize() {
                this.$Notice.warning({
                    title: '文件大小不能超过50M。'
                })
            },
            /*
            * 下载文件
            * */
            download(url){
                this.downloadFileByUrl(url)
            },
        },

        computed: {},

        watch: {
            files: function (val) {
                this.$nextTick(() => { //赋值后马上更新
                    this.defaultFileList = this.files
                    if(!this.$refs.upload.fileList.length){
                        this.$nextTick(()=>{
                            this.uploadList = this.defaultFileList
                        })
                    }else{
                        this.uploadList = this.$refs.upload.fileList
                    }
                });
            }
        },

        components: {},
    }
</script>
