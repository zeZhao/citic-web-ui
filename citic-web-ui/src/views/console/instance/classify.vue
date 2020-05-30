<style scoped lang="scss">
    .classify-list {
        background: #fff;
        padding: 5px 0 20px 20px;
        column-count: 4;
        column-gap: 0;

        .classify-item {
            break-inside: avoid;
            box-sizing: border-box;
            padding: 0 20px 0 0;

            .header {
                color: #595656;
                padding: 15px 0 10px 0;
                font-size: 14px;

                & .red-dot {
                    display: inline-block;
                    background: #c30d23;
                    height: 4px;
                    width: 4px;
                    vertical-align: middle;
                    position: relative;
                    top: -2px;
                    margin-right: 10px;
                }
            }

            .entry {
                line-height: 30px;
                border: 1px solid #e6e6e6;
                padding: 0 10px;
                margin-bottom: 10px;
                color: rgba(89, 86, 86, 0.51);
                font-size: 12px;
                cursor: pointer;

                &.active {
                    color: #595656;
                    border-color: #595656;
                }

                &:hover {
                    color: #ed3f13;
                    border-color: #ed3f13;
                }
            }
        }
    }
</style>

<template>
    <ci-content-frame>
        <div class="classify-list">
            <div class="classify-item" v-for="category in classifyList" :key="category.categoryId">
                <h3 class="header"><span class="red-dot"></span>{{category.categoryName}}</h3>

                <p class="entry" :class="{active: service.instanceNum}" v-for="service in category.supplierService"
                   :key="service.supplierServiceId" @click="toInstanceList(service)">
                    {{service.supplierServiceName}}
                    <span v-if="service.instanceNum">({{service.instanceNum}})</span>
                </p>
            </div>
        </div>
    </ci-content-frame>
</template>

<script>

    export default {
        data() {
            return {
                classifyList: []
            };
        },

        created() {
            this.initPage();
        },

        mounted() {

        },

        methods: {
            initPage() {
                const classifyList = [];

                this.$get(`${this.$API_ENUM.CITIC_PORTAL_INSTANCE_CLASSIFY}`).then(res => {
                    for (let key in res.data) {
                        classifyList.push(res.data[key]);
                    }
                    this.classifyList = classifyList;
                });
            },

            toInstanceList(service) {
                const {citicServiceAlias, supplierAlias, instanceNum} = service;
                if (instanceNum) {
                    this.$router.push(`/console/instance?supplierAlias=${supplierAlias}&citicServiceAlias=${citicServiceAlias}`);
                }
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
