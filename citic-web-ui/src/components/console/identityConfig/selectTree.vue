<style scoped lang="scss">
    .select-tree {
        .tree-group {
            border-bottom: 1px dotted #e5e5e5;
            padding: 20px 0 10px 0;
        }
    }
</style>

<template>
    <div class="select-tree">

        <template v-for="(node, index) in root">
            <ci-select-tree-node class="tree-group"
                                 :key="index"
                                 :node="node"
                                 :disabled="disabled"
                                 :freeze="freeze"
                                 v-model="selectMap"
                                 @change="nodeSelectChange"></ci-select-tree-node>
        </template>

    </div>
</template>

<script>
    import SelectTreeNode from './selectTreeNode';

    const FREEZE_TIME = 1;

    export default {
        props: {

            root: {
                required: true,
                type: Array,
            },

            value: {
                required: true,
                type: Array,
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                // 阻止叶子节点状态改变，触发父节点change事件造成事件错误
                freeze: false,

                selectMap: {},
            }
        },

        created() {
            this.markSelect(this.root);
        },

        methods: {

            doMarkSelect(data) {
                // 为数组类型说明当前data为根
                if (data.constructor === Array) {
                    data.forEach(item => this.doMarkSelect(item));
                    return;
                }

                // 所有选中过的节点
                const selected = this.selectMap;

                // 当前节点是否全部选中
                let selectAll = true;

                // 当前节点有子节点
                if (data.child) {
                    data.child.forEach(node => {

                        // 包含 key 的节点说明是叶子节点
                        // 判断是否有没选中的子节点，有一个没选中则父节点没选中
                        if (node.key) {

                            // 叶子节点是否在存在与选中列表中
                            this.$set(node, 'select', selected.hasOwnProperty(node.key));

                            // 标记当前父节点为叶子节点的一级父节点
                            this.$set(data, 'leafParent', true);

                        } else {
                            // 不是叶子节点则 递归查询子节点判断 当前节点子节点是否全部选中
                            this.$set(node, 'select', this.doMarkSelect(node));
                        }

                        // 标记子节点含有父节点
                        this.$set(node, 'parent', true);

                        // 子节点不是全部选中则标记父节点不是全选中状态
                        if (!node.select) {
                            selectAll = false;
                        }
                    })
                } else {
                    // 判断当前是否是单节点的树
                    if (data.key) {
                        // 存在key说明是一级节点并且是叶子节点
                        selectAll = selected.hasOwnProperty(data.key)
                    }
                }

                // 设置当前节点选中状态
                this.$set(data, 'select', selectAll);
                return selectAll;
            },

            /**
             * 处理产品与服务数据
             * 对选中的节点标记
             */
            markSelect(data) {
                this.freeze = true;

                if (this.value) {
                    const selectMap = {};
                    this.value.forEach(key => selectMap[key] = true);
                    this.selectMap = selectMap;
                }

                this.doMarkSelect(data);
                setTimeout(() => {
                    this.freeze = false;
                }, FREEZE_TIME);
            },

            /**
             * 节点选中状态改变
             */
            nodeSelectChange() {
                const value = [];
                for (let selectMapKey in this.selectMap) {

                    if (this.selectMap.hasOwnProperty(selectMapKey) && this.selectMap[selectMapKey]) {
                        value.push(selectMapKey);
                    }
                }

                this.$emit("input", value);
            },
        },

        watch: {
            value() {
                // value改变重新渲染树
                this.markSelect(this.root);
            },

            root() {
                // root改变重新渲染树
                this.markSelect(this.root);
            },
        },

        computed: {},

        components: {
            'ci-select-tree-node': SelectTreeNode,
        }
    }
</script>
