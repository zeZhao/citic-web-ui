<style lang="scss" scoped>
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
    h2{
        font-size: 100%;
    }
</style>

<template>
    <div class="loopholeReport">
        <div style="width: 220px">
            <div v-for="(item,index) in filesName" :key="index">
                <template v-if="item.status === 'finished'">
                    <a href="javascript:void(0)" class="fileStyle" @click="download(item.response.image_url)">{{item.name}}</a>
                    <div class="square-icon">
                        <Icon type="ios-trash-outline" size="20" @click.native="handleRemove(item)" ></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress style="max-width: 95%" v-if="item.showProgress" :percent="item.percentage" :stroke-width="5" hide-info></Progress>
                </template>
            </div>
        </div>
        <Upload
            v-show="filesName.length < 3"
            :ref=refName
            name="multipartFile"
            :show-upload-list="false"
            :action=uploadUrl
            :format=formatName
            :max-size="51200"
            :on-success="handleSuccess"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            style="width: 220px;display: inline-block;margin: 10px 0"
        >
            <div style="text-align: center;border: 1px solid #cccccc" v-if="filesName.length > 0">
                <Icon type="android-add" size="52"></Icon>
                <p style="padding: 9px 9px">点击继续上传文件，最多不能超过3份</p>
            </div>
            <Button v-else type="primary" icon="ios-cloud-upload-outline">{{btnName}}</Button>
        </Upload>
        <div v-show="filesName.length === 0">
            <h2 style="line-height: 20px">支持上传文件{{tipTxt}}</h2>
            <h2 style="line-height: 20px">检测文件不通过，请重新上传文件</h2>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props:{
            refName:{
                type: String,
                required: true
            },
            filesName:{
                type: Array,
                required: true
            },
            formatName:{
                type: Array,
                default:()=> {
                    return ['doc','docx','png','jpg','bmp','pdf','rar','zip']
                }
            },
            btnName: {
                type: String,
                required: true
            },
            tipTxt: {
                type: String,
                default:()=> {
                    return "'doc','docx','png','jpg','bmp','pdf','rar','zip'"
                }
            }
        },
        data() {
            return {
                uploadUrl: `${this.$CONFIG.FILE_SERVER_URL}uploadFile.do`,
            }
        },
        created() {
        },

        mounted() {
        },

        methods: {
            /*
            * 上传成功
            * */
            handleSuccess(res,file,fileList) {
                this.$emit('handleSuccess',this.refName,fileList)
            },
            /*
            * 文件删除
            * */
            handleRemove(file){
                this.filesName.splice(this.filesName.indexOf(file),1)
                this.$emit('handleRemove',this.filesName)
                //TODO 由于该接口不需要token，所以临时使用axios解决
                axios.delete(`${this.$CONFIG.FILE_SERVER_URL}${file.uid}/deleteFile.do`)
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
            * 下载
            * */
            download(url){
                this.downloadFileByUrl(url)
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
