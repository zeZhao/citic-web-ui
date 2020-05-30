<style scoped lang="scss">
    .param-form {
        padding:10px 0;
        .param-value {
            margin-left: 10px;
            word-break: break-all;
        }

        .image-group {
            margin-left: 10px;

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
        }
        .param-value{
            width: 520px;
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
    <Form :label-width="220" class="param-form">
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
                <li @click="download(item.value)" v-if="item.value.length === 1">下载{{item.keyDisplay}}</li>              
                <li v-for="(items,i) in item.value" :key="i" @click="download(items)" v-else>下载{{item.keyDisplay}}-{{i}}</li>
            </ul>
            <!--<span class="download-link" v-if="isFile(item)" @click="download(items.keyDisplay)">下载{{item.keyDisplay}}</span>-->

        </FormItem>

        <ci-image-preview v-model="previewOpen" :images="previewImages" :index="previewIndex"></ci-image-preview>
    </Form>
</template>

<script>
    export default {
        props: {
            order: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                form: this.order,
                previewOpen: false,
                previewImages: [],
                previewIndex: 0,
            }
        },

        methods: {
            openPreviewImage(images, index) {
                this.previewImages = images;
                this.previewIndex = index;
                this.previewOpen = true;
            },

            download(url){
                this.downloadFileByUrl(url)
            },

            isNormal({valueType}){
                return !valueType || valueType === 'normal';
            },

            isImg({valueType}){
                return valueType === 'img';
            },

            isFile({valueType}){
                return valueType === 'file';
            },

        },


        watch:{
            order(val){
                this.form = val
                this.form.forEach(item=>{
                    if(item.valueType === 'file'){
                        item.value = item.valueDisplay.split(',')
                    }
                })
            }
        }
    }
</script>
