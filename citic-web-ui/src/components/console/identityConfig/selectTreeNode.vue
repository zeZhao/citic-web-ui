<style scoped lang="scss">
    .select-tree-node {
        font-size: 14px;
        color: #333;
        padding-left: 15px;

        .form-line {
            margin-bottom: 10px;
        }

        .leaf-group {
            background: #f5f5f7;
            overflow: hidden;
            padding: 10px 10px 0 10px;
            margin-bottom: 10px;

            /deep/ .leaf-item {
                width: 25%;
                float: left;
            }
        }

    }
</style>

<template>
    <div class="select-tree-node">

        <!--展示节点自身-->
        <ci-select-item class="form-line"
                        :disabled="disabled"
                        :radio="isRealLeafNode"
                        :class="{'leaf-item': isRealLeafNode}"
                        v-model="node.select"
                        :label="node.label"
                        @change="singleNodeSelectChange"></ci-select-item>

        <!--包含子节点展示子节点-->
        <template v-if="!isLeafNode">

            <!--是否按照叶子节点的父节点展示-->
            <div :class="{'leaf-group': useLeafGroup}">
                <template v-for="(item, index) in node.child">
                    <ci-select-tree-node :key="index"
                                         :node="item"
                                         :disabled="disabled"
                                         :freeze="freeze"
                                         v-model="value"
                                         @change="groupNodeSelectChange"></ci-select-tree-node>
                </template>
            </div>

        </template>

    </div>
</template>

<script>
    import SelectItem from './selectItem';

    export default {

        name: 'ci-select-tree-node',

        props: {

            node: {
                required: true,
                type: Object,
            },

            value: {
                required: true,
                type: Object,
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },

            freeze: {
                required: true,
                type: Boolean,
            },
        },

        data() {
            return {
                selectMap: this.value,
            }
        },

        created() {

        },

        methods: {

            /**
             * 单个节点改变选中状态
             */
            singleNodeSelectChange() {
                if (this.freeze) {
                    return;
                }

                // 选则了子节点
                if (this.node.key) {

                    if (this.node.select) {
                        this.selectMap[this.node.key] = this.node.select;
                    } else {
                        delete this.selectMap[this.node.key];
                    }


                } else {
                    // 选则了父节点
                    // 选中了则标记全部子节点选中
                    // 取消选中则删除全部子节点
                    this.markChild(this.node, this.node.select);
                }
                this.$emit('change');
            },

            /**
             * 将节点变化事件上传到根节点处理
             */
            groupNodeSelectChange() {
                if (this.freeze) {
                    return;
                }

                this.$emit('change');
            },

            /**
             * 统一标记子节点
             */
            markChild(node, select) {

                if (node.child) {
                    node.child.forEach(item => {
                        item.select = select;

                        if (item.key) {

                            if (select) {
                                this.selectMap[item.key] = select;
                            } else {
                                delete this.selectMap[item.key];
                            }

                        } else {
                            this.markChild(item, select);
                        }

                    })
                }

            }
        },

        watch: {
            value(val) {
                this.selectMap = val;
            },

            selectMap(val) {
                this.$emit("input", val);
            },

            freeze(val) {
                this.freeze = val;
            }
        },

        computed: {
            // 是否是叶子节点
            isLeafNode() {
                return !this.node.child;
            },

            // 是否是真叶子节点（没有子节点，有父节点）
            isRealLeafNode() {
                return !this.node.child && !!this.node.parent;
            },

            useLeafGroup() {
                return this.node.leafParent;
            }
        },

        components: {
            'ci-select-item': SelectItem,
        }
    }
</script>
