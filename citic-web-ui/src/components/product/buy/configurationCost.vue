<style lang="scss">
.configuration-cost{
    .label {
        font-size: 15px;
    }
    .markdown-modal{
        width: 800px;
    }
   

    .cost {
        font-size: 14px;
        color: red;
        display: block;
        margin: 10px 0;
        overflow: hidden;

        .cost-item {
            float: left;
            clear: both;
        }
        .opening {
            color: rgb(22, 155, 213)!important;
            cursor: pointer;
        }

        

        .cost-price-group {
            float: left;
            display: inline-block;
            width: 60%;

            .cost-price-item {
                padding: 0 10px;
                display: inline-block;
            }
        }
    }

    .btn-group {
        position: absolute;
        right: 40px;
        top: 80px;

        .ivu-btn {
            height: 40px;
            width: 140px;
            font-size: 15px;
            font-weight: bold;
            margin: 0 10px;
        }
    }
}
 #markdown-content{
     text-align: left;
     padding: 10px 20px;
    table{
        width: 100%;
        border: 1px solid #ddd;
        width: 100%;
        max-width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        tr{
            th,td{
                border: 1px solid #ddd;
                line-height: 40px;
                padding:0 5px;
                min-width: 100px;
            }

        }
    }
    
}
    
</style>

<template>
    <div class="configuration-cost">
        <p class="label">配置费用：</p>
        <div v-if="serviceType != '2'">
            <div class="cost" v-for="(costItem, index) in priceList" :key="index"  v-if="serviceType != '2'">
                <span class="cost-item">{{costItem}}</span>
                <!--<p class="cost-price-group">-->
                    <!--<span class="cost-price-item">-->
                        <!--{{costItem.value}}-->
                    <!--</span>-->
                <!--</p>-->
            </div>
        </div>
        

        <div class="cost" v-if="serviceType == '2'">
                <span class="cost-item opening" @click="modal = true">点击查看服务价格</span>
            </div>
        

        <Modal
            v-model="modal"
            :title="modelTitle"
            width = '800'
            >
            <div id="markdown-content" v-html="markdownData">
               
            </div>
             <div slot="footer">
                <Button type="error"  @click="modal = false">关闭</Button>
            </div>
        </Modal>
        
    </div>
</template>

<script>
import markdownit from 'markdown-it'
    export default {
        props: {
            title:{
                type:String,
                default: function () {
                    return ""
                },
            },
            priceList: {
                type: Array,
                default: function () {
                    return [];
                },
                required: true,
            },
            serviceType:{
                type:String,
                default: function () {
                    return "1"
                },
                 required: false,
            },
            serviceId:{
                type:String,
                default: function () {
                    return ""
                },
                 required: false,
            },
            // service
        },

        data() {
            return {
                modal: false,
                markdownData:""
            };
        },

        created() {

        },

        mounted() {
        },
        updated(){
            console.log("serviceType",this.serviceType, this.serviceId)
            if(this.serviceType == 2 && this.serviceId){
                this.createdMarkDownText()
            }

        },

        methods: {
            createdMarkDownText(){
                // let str = " 注意下面每一个标记如果和内容同行，中间都加一个空格\r\n\r\n我是大标题，和一级标题长得一样\r\n===\r\n我是次级标题，和二级标题长得一样\r\n---\r\n\r\n# 这是一级标题\r\n## 这是二级标题\r\n###### 一直到六级标题\r\n\r\n# 列表\r\n- 无序写法1\r\n* 无序写法2\r\n+ 无序写法3\r\n    + 嵌套加一个Tab\r\n        + 再套一层\r\n            + 再来\r\n1. 有序列表只有这一种写法\r\n2. 数字加点\r\n\r\n# 表格\r\n| 字段1    | 字段2  | 字段3    |\r\n| ---------|:-----:|---------:|\r\n|内容      |内容    |内容      |\r\n|这列左对齐 |这列居中|这列右对齐 |\r\n\r\n# 分割线\r\n***\r\n---\r\n___\r\n* * *\r\n- - -\r\n_ _ _\r\n注意：如果用---要和前方空行防止被当成标题符号\r\n\r\n# 字体\r\n*斜体1*\r\n_斜体2_\r\n**粗体**\r\n__粗体2__\r\n***斜粗体***\r\n___斜粗体2___\r\n~~删除线~~\r\n\r\n# 超链接\r\n[百度](https://www.baidu.com\"百度一下，你就知道\")\r\n\r\n# 插入图片\r\n！[图片alt](https://baike.baidu.com/pic/Bliss/52106/0/0bd162d9f2d3572ccd5be1ec8913632762d0c341?fr=lemma&ct=single#aid=0&pic=0bd162d9f2d3572ccd5be1ec8913632762d0c341\"title\")\r\n\r\n# 引用\r\n> 引用内容\r\n>> 嵌套引用\r\n\r\n# 代码块\r\n`单行代码`\r\n    ```\r\n    代码块\r\n> 注意下面每一个标记如果和内容同行，中间都加一个空格\r\n\r\n我是大标题，和一级标题长得一样\r\n===\r\n我是次级标题，和二级标题长得一样\r\n---\r\n\r\n# 这是一级标题\r\n## 这是二级标题\r\n###### 一直到六级标题\r\n\r\n# 列表\r\n- 无序写法1\r\n* 无序写法2\r\n+ 无序写法3\r\n    + 嵌套加一个Tab\r\n        + 再套一层\r\n            + 再来\r\n1. 有序列表只有这一种写法\r\n2. 数字加点\r\n\r\n# 表格\r\n| 字段1    | 字段2  | 字段3    |\r\n| ---------|:-----:|---------:|\r\n|内容      |内容    |内容      |\r\n|这列左对齐 |这列居中|这列右对齐 |\r\n\r\n# 分割线\r\n***\r\n---\r\n___\r\n* * *\r\n- - -\r\n_ _ _\r\n注意：如果用---要和前方空行防止被当成标题符号\r\n\r\n# 字体\r\n*斜体1*\r\n_斜体2_\r\n**粗体**\r\n__粗体2__\r\n***斜粗体***\r\n___斜粗体2___\r\n~~删除线~~\r\n\r\n# 超链接\r\n[百度](https://www.baidu.com\"百度一下，你就知道\")\r\n\r\n# 插入图片\r\n！[图片alt](https://baike.baidu.com/pic/Bliss/52106/0/0bd162d9f2d3572ccd5be1ec8913632762d0c341?fr=lemma&ct=single#aid=0&pic=0bd162d9f2d3572ccd5be1ec8913632762d0c341\"title\")\r\n\r\n# 引用\r\n> 引用内容\r\n>> 嵌套引用\r\n\r\n# 代码块\r\n`单行代码`\r\n    ```\r\n    代码块\r\n    ``` "
                this.$get(this.$API_ENUM.CITIC_SUPPLIER_SERVICES_OPENING_PRICE.replace("SERVICEID",this.serviceId)).then(res=>{
                    console.log(res)
                    let str = res.data.priceMarkDown
                    this.markdownData = markdownit().render(str);
                   
                })
                
                
                
            }
        },

        computed: {
            modelTitle(){
                return this.title + "服务价格说明"
            }
        },

        watch: {},

        components: {},
    }
</script>
