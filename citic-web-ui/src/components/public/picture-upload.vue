<template>
    <div class="ci-upload">
        <span class="tip">{{tipText}}</span>
        <div  v-for="(item, index) in uploadList" :key="index" :class=" uploadListClass  ">
            <template v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item.url)" class="square-icon"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)" class="square-icon"></Icon>
                </div>
            </template>
            <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
        </div>

        <Upload v-show="uploadList.length < fileMaxLen"
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultFileList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            name="multipartFile"
            type="drag"
            :action=uploadUrl
            class="upload">
            <div class="icon-wrapper">
                <Icon type="camera"></Icon>
            </div>
        </Upload>
        <Modal title="图片预览" v-model="visible">
            <img :src="imgUrl" v-if="visible" style="max-width: 100%">
            <div class="footer" slot="footer">
            </div>
        </Modal>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        //type枚举值 square 展示窗变正方形
        props: ['imgs', 'fileMaxLen','tipText','type'],
        data() {
            return {
                defaultFileList: [],
                imgUrl: '',
                visible: false,
                uploadList: [],
                uploadUrl: `${this.$CONFIG.FILE_SERVER_URL}uploadImageFile.do`
            }
        },
        mounted(){
            // console.log("typetype",this.type)
        },
        computed:{
            uploadListClass(){
                console.log("typetype",this.type)
                return `demo-upload-list ${this.type}`
            }
        },
        methods: {
            handleView(url) {
                this.imgUrl = url
                this.visible = true
            },
            handleRemove(file) {
                const fileList = this.$refs.upload.fileList
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
                this.$emit('removeImg', { url: file.url, uid: file.uid })

                //TODO 由于该接口不需要token，所以临时使用axios解决
                axios.delete(`${this.$CONFIG.FILE_SERVER_URL}${file.uid}/deleteFile.do`)
            },
            handleSuccess(res, file) {
                file.url = res.image_url;
                file.uuid = res.image_uuid;
                this.$emit('addImg', file);
            },

            handleFormatError() {
                this.$Notice.warning({
                    title: '图片文件格式有误。'
                })
            },
            handleMaxSize() {
                this.$Notice.warning({
                    title: '文件大小不能超过2M。'
                })
            },
            handleBeforeUpload() {
                const check = this.uploadList.length < this.fileMaxLen
                if (!check) {
                    this.$Notice.warning({
                        title: `最多只能上传${this.fileMaxLen}张图片。`
                    })
                }
                return check
            }
        },
        watch: {
            imgs: function () {
                this.$nextTick(() => { //赋值后马上更新
                    this.defaultFileList = this.imgs
                    if(!this.$refs.upload.fileList.length){
                        this.$nextTick(()=>{
                            this.uploadList = this.defaultFileList
                        })
                    }else{
                        this.uploadList = this.$refs.upload.fileList
                    }
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ci-upload {
        position: relative;
        .square{
            width: 200px!important;
            height: 200px!important;

            .square-icon{
                line-height: 200px!important;
            }

        }
        .tip{
            position: absolute;
            left:  240px;
            color: rgb(157, 157, 157);
            line-height: 20px;
        }
        .upload {
            display: inline-block;
            width:58px;

            .icon-wrapper {
                width: 58px;
                height: 58px;
                line-height: 58px;

                .ivu-icon {
                    font-size: 20px;
                }
            }
        }

        .demo-upload-list {
            display: inline-block;
            width: 60px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            border: 1px solid transparent;
            border-radius: 4px;
            overflow: hidden;
            background: #fff;
            position: relative;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
            margin-right: 4px;

            img {
                max-width: 100%;
                max-height: 100%;
            }

            &:hover {
                .demo-upload-list-cover {
                    display: block;
                    i {
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                        margin: 0 2px;
                    }
                }
            }
        }

        .demo-upload-list-cover {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, .6);
        }
    }
</style>
