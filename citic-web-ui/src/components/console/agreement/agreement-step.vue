<template>
    <Steps :current="current">
        <Step title="服务合作协议"></Step>
        <Step title="保密协议"></Step>
        <Step title="企业级服务协议（SLA）"></Step>
    </Steps>
</template>

<script>
    export default {
        name: "",
        props:{
            current:{
                type:Number,
                default:0
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
