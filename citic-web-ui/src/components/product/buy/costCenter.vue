<style  scoped lang="scss">
.const-center{

}
</style>
<template>
    <div class="const-center" >
        <Form :label-width="labelWidth" class="base-form" :model="form" ref="form" :rules="ruleValidate" >
            <FormItem :label="labelText.costCenter" prop="costCenter">
                <Select v-model="form.costCenter" :style="styleObj.costCenter" @on-change="costCenterChange" :label-in-value='true'>
                     <Option v-for="option in costCenterList" :key="option.id" :value="option.id" :label="option.name">
                         {{option.name}}
                     </Option>

                </Select>

                <!-- <RadioGroup v-model="form.costCenter" type="button">
                    <Radio v-for="option in costCenterList"
                           :key="option.id"
                           :value="option.id"
                           :label="option.id"
                    >
                        {{option.name}}
                    </Radio>
                </RadioGroup> -->
            </FormItem>

            <FormItem :label="labelText.baseLine" prop="baseLine">
                <Select v-model="form.baseLine" :style="styleObj.baseLine" @on-change="baseLineChange" :label-in-value='true'>
                    <Option v-for="option in baseLineList"
                            :key="option.citicId"
                            :value="option.citicId"
                    >
                        {{option.name}}
                    </Option>
                </Select>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        props:{
            styleObj:{
                required: false,
                default: function(){
                    return {
                    }
                }
            },
            labelText: {
                required: false,
                default: function(){
                    return {
                        costCenter:"成本中心",
                        baseLine:"应用基线"
                    }
                }
            },
            labelWidth: {
                required: false,
                default: function(){
                    return 90
                }
            }
        },
        data() {
            const { id } = this.$route.query;
            let costCenter = '', baseLine = '';
            const config = this.$getSession(this.$LOCAL_STORAGE_KEYS.EDIT_INSTANCE_CONFIG + id);
            if(config){
                const {appBaseId, costCenterId} = config;
                costCenter = costCenterId;
                baseLine = appBaseId;
            }

            return {
                costCenterList: [], //成本中心原数据
                baseLineList: [], //基线数据
                userInfo: this.$store.state.userInfo.USER_INFO,

                form: {
                    costCenter,
                    baseLine,
                },
                formDatas: {

                },

                ruleValidate: {
                    costCenter: [
                        { required: true, message: '请选择成本中心', trigger: 'change' }
                    ],
                    baseLine: [
                        { required: true, message: '请选择应用基线', trigger: 'change' }
                    ],
                }
            };
        },

        created() {
            this.initPage();
        },

        methods: {
            costCenterChange(data){
                console.log(data)
                this.formDatas.costCenter = data
            },
            baseLineChange(data){
                data.label = data.label.replace(/[\r\n]/g,"").replace(/\ +/g,"");
                this.formDatas.baseLine = data
                console.log(this.formDatas)
            },
            initPage() {
                //成本中心
                this.$get(this.$API_ENUM.CITIC_COSTCENTEROFFICE_COST_CENTERS).then(res => {
                    const costCenters = res.costCenters;
                    this.costCenterList = costCenters;
                    this.form.costCenter =costCenters[0].id
                    console.log("成本中心", this.costCenterList)
                    this.costCenterChange({
                        label:this.costCenterList[0].name,
                        value: this.costCenterList[0].id,
                    })

                });

                //应用基线
                this.$get(this.$API_ENUM.USER_APP_BASES).then(res => {
                    this.baseLineList = res.appBases.filter(item => item.available);
                    this.form.baseLine = this.baseLineList[0].citicId
                    this.baseLineChange(
                            {
                              label:this.baseLineList[0].name,
                              value: this.baseLineList[0].citicId,
                            }
                        )
                });
            },


            validate() {
                return new Promise((resolve, reject) => {
                    this.$refs['form'].validate((valid) => {
                        resolve(valid);
                    })
                });
            },
            getData () {
                 return new Promise((resolve, reject) => {
                    this.$refs['form'].validate((valid) => {

                        if(valid){
                            resolve(this.formDatas)
                        }else{
                            resolve(false)
                        }
                    })
                });
            },

            getCenterData(){
                return this.validate().then(valid => {
                    if(valid){
                        return Object.assign(this.form, {
                            baseLineName: this.baseLineList.find(item => item.citicId === this.form.baseLine).name,
                            costCenterName: this.costCenterList.find(item => item.id === this.form.costCenter).name,
                        });
                    }else {
                        return false;
                    }
                })
            },
        },
    };
</script>


