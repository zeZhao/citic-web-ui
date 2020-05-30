<!-- 行业选择组件 -->
<style  scoped lang="scss">
    .industry-choice{
        .select-father{
            width:30%;
        }

        .select-son{
            margin-left: 10px;
            width:65%;
        }
    }
</style>
<template>
    <Form ref="form" :model="formData" :rules="ruleValidate" :label-width="config.labelWidth" class="industry-choice">
        <FormItem label="业务类型" prop="bbbb">
            <Select v-model="formData.aaaa" class="select-father" placeholder="请选择行业类型" @on-change="fatherChange">
                <Option v-for="item in industryFatherListData" :value="item.id" :key="item.id" >{{ item.name }}</Option>
            </Select>
             <Select v-model="formData.bbbb" class="select-son" placeholder="请选择行业类型">
                <Option v-for="item in industrySonListData" :value="item.id" :key="item.id" >{{ item.name }}</Option>
            </Select>
        </FormItem>
    </Form>
</template>

<script>
import industryChoice from 'com/public/industry-choice'
export default {
    props:{
        config:{
            require: false,
            default: () => {
                return {
                    labelWidth: 120
                }
            }

        }
    },
    data () {
        return {
            formData: {
                aaaa: '',
                bbbb: '',
            },
            ruleValidate: {
                bbbb: [
                    { required: true, message: '该项不能为空', trigger: 'none', pattern: /([^\s])/ }
                ]
            },
            industryFatherListData:[],
            industrySonListData:[]
        };
    },

    mounted(){
        this.getIndustryFatherListData()
    },

    components: {},

    computed: {},

    methods: {
        getIndustryFatherListData(){

            this.$get(this.$API_ENUM.CITIC_BUSINESS_TYPE_CHILD,{id:0}).then(res =>{
                console.log(res)
                this.industryFatherListData = res.datas
            })
        },
        getIndustrySonListData(){

        },
        fatherChange(value){
            this.$get(this.$API_ENUM.CITIC_BUSINESS_TYPE_CHILD, {id: value}).then(res =>{
                console.log(res)
                this.$nextTick(()=>{
                    this.industrySonListData = res.datas
                    this.formData.bbbb = this.industrySonListData[0].id
                })

            })
            console.log(value)
        },
        async getData(){
            let valid = await this.$refs.form.validate()
            let businessType = {
                id:this.formData.bbbb,
                name:''
            }
            let [name1,name2] = ['','']

            if (!valid) {
                return false
            }

            this.industryFatherListData.forEach(item=>{
                if(item.id == this.formData.aaaa){
                    return name1 = item.name
                }
            })
            this.industrySonListData.forEach(item=>{
                if(item.id == this.formData.bbbb){
                    return name2 = item.name
                }
            })
            businessType.name = `${name1}-${name2}`
            return businessType
        }
    }
}

</script>
