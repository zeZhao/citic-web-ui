<style scoped lang="scss">
    .tabs-group{
        height: 35px;
        line-height: 35px;
        overflow: hidden;
        border-bottom: 1px solid #eeeeee;

        .tab{
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            float: left;
            padding: 0 20px;
            color: #1a1a1a;
            cursor: pointer;
            transition: .3s;

            &:hover{
                color: #ed3f14;
            }

            &.active{
                background: #ed3f14;
                color: #fff;
            }
        }
    }
</style>

<template>
    <div class="tabs-group">
        <span class="tab" :class="{active: defaultActive === item.value}" v-for="(item, index) in tabs"
              :key="item.value" @click="choose(item.value, index)">
            {{item.name}}
        </span>
    </div>
</template>

<script>
    export default {

        props: {
            tabs: {
                default: function () {
                    return [];
                },
                type: Array,
                required: true,
            },

            defaultActive: {
                default: "",
                type: String,
            }
        },

        data() {

            return {

            };
        },

        created() {

        },

        mounted() {
        },

        methods: {
            choose(key, index) {
                this.$emit('change', key, index)
            }
        },

        computed: {},

        watch: {
            /* defaultActive(value){
                 this.activeIndex = value;
             }*/
        },

        components: {},
    }
</script>
