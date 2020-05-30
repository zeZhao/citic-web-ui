<template>
<div>
    <table class="panel-table table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>排名</th>
                <th>应用名称</th>
                <th style="width: 140px;">覆盖的业务和产品数量</th>
            </tr>
        </thead>
        <tbody v-if="rank && rank.length > 0">
            <tr v-for ="(item,index) in rank" :key="index">
                <td><span class="radius-bg">{{index+1}}</span></td>
                <td :title="item.innovateApplicationName">{{item.innovateApplicationName}}</td>
                <td>{{item.coverNumCount}}</td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="3">暂无数据</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    import Api from "utils/apiEnum.js"

    export default {
        data () {
            return {
                rank: []
            }
        },
        mounted() {
            this.getInnovateTop()
        },
        methods: {
            getInnovateTop() {
                this.$get(Api.INNOVATE_COVERNUMTOP, {},false).then(res => {
                this.rank = res.data
                })
            },
        }
    }
</script>
