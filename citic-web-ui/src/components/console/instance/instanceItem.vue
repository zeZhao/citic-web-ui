<style scoped lang="scss">
.instance-item {
    padding: 5px 0;

    .body {
        transition: 0.2s linear;
        box-shadow: 0 3px 10px -3px rgba(2, 33, 45, 0.2);

        .row {
            background: #fff;
            display: flex;

            .column {
                border-left: 1px solid #f2f2f2;
                padding: 15px 10px;
                position: relative;
                word-break: break-all;

                .toggle-btn {
                    cursor: pointer;
                    position: absolute;
                    display: inline-block;
                    height: 32px;
                    width: 32px;
                    border-radius: 50px;
                    background: #f5f5f5
                        url("../../../../static/images/console/instance/icon-plus.png")
                        center no-repeat;
                    background-size: 20px 20px;
                    left: -16px;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: 0.1s;

                    &.active {
                        background-image: url("../../../../static/images/console/instance/icon-reduce.png");
                    }
                }

                .first-label {
                    padding-left: 10px;
                    /*border-left: 1px solid #f2f2f2;*/
                    display: inline-block;

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 40px;
                        width: 1px;
                        background: #f2f2f2;
                    }
                }
            }
        }

        .content {
            border-top: 1px solid #f2f2f2;
            padding: 20px 0 10px 0;
            font-size: 12px;
            background: #fff;

            .info-loading {
                margin: 20px auto;
                width: 30px;
                height: 30px;
            }

            .config-tree {
                max-height: 425px;
                overflow-y: auto;
                padding: 0 40px;
            }

            .btn-group {
                margin-top: 10px;
            }
        }

        &:hover {
            box-shadow: 0 3px 10px -3px rgba(101, 181, 255, 0.6);
            transform: scale(1.01);
        }
    }
}
</style>

<template>
    <div class="instance-item">
        <div class="body">
            <div @click="toggleContent" style="cursor: pointer;">
                <Row class="row">
                    <Col class="column" span="4" style="padding-left: 40px;">
                        <span class="toggle-btn" :class="{active: showContent}"></span>
                        <span class="first-label">{{instance.serviceName}}</span>
                    </Col>
                    <Col class="column" span="4">{{instance.providerName}}</Col>
                    <Col class="column" span="4">{{instance.instanceId}}</Col>
                    <Col class="column" span="4">{{instance.supplyInstanceId}}</Col>
                    <Col class="column" span="4">{{instance.costCenterName}}</Col>
                    <Col class="column" span="4">{{instance.appBaseName}}</Col>
                </Row>
            </div>
            <div class="content" v-show="showContent">
                <template v-if="loading">
                    <div class="info-loading">
                        <Spin size="large"></Spin>
                    </div>
                </template>

                <template v-if="detail">
                    <ci-configuration-tree class="config-tree" :config="detail.instanceDetail"></ci-configuration-tree>

                    <ci-instance-btn-group
                        class="btn-group"
                        :config="detail.instanceOperation"
                        :serviceId="instance.serviceId"
                        :instanceId="instance.instanceId"
                        :consoleUrl="instance.consoleUrl"
                        @refreshSelf="refreshSelf"
                        @refreshAll="refreshAll"
                    ></ci-instance-btn-group>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import configurationTree from "./configurationTree";
import instanceBtnGroup from "./instanceBtnGroup";

/**
 * 根据实例状态code获取对应状态名称
 * @param statusCode
 */
function getStatusByCode(statusCode) {
    switch (statusCode) {
        case "normal":
            return "正常";
        case "creating":
            return "创建中";
        case "deleting":
            return "删除中";
        case "deleted":
            return "已删除";
    }
}

export default {
    props: {
        instance: {
            type: Object,
            required: true
        },

        actionConfig: {
            type: Array,
            required: true
        },

        instanceStatus: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            editPath: "/product/buy",

            showContent: false,
            detail: null,
            loading: false
        };
    },

    created() {},

    mounted() {},

    methods: {
        toggleContent() {
            console.log(111);
            this.showContent = !this.showContent;

            if (this.detail === null && !this.loading) {
                this.getSelfDetail();
            }
        },

        getSelfDetail() {
            this.detail = null;
            this.loading = true;

            const { instanceId, supplyInstanceId, serviceId } = this.instance;

            this.$get(
                this.$API_ENUM.CITIC_PORTAL_INSTANCE_GETINSTANCENEWDETAIL,
                {
                    instanceId,
                    supplyInstanceId,
                    serviceId
                }
            ).then(res => {
                const detail = res.data;

                if (detail.instanceDetail) {
                    for (let key in detail.instanceDetail) {
                        let value = detail.instanceDetail[key] || "";

                        if (value.includes("<br>")) {
                            value = value.split("<br>").filter(item => !!item);
                        }
                        detail.instanceDetail[key] = value;
                    }

                    detail.instanceDetail = this.formatTree(
                        detail.instanceDetail
                    );

                    // 添加实例状态展示
                    detail.instanceDetail.push({
                        label: "实例状态",
                        value: getStatusByCode(this.instanceStatus)
                    });
                }

                this.detail = detail;

                this.loading = false;
            });
        },

        formatTree(map) {
            const tree = [];

            for (let key in map) {
                let value = map[key];

                if (
                    value.constructor === String ||
                    value.constructor === Number
                ) {
                    tree.push({
                        label: key,
                        value: value
                    });
                } else if (value.constructor === Boolean) {
                    tree.push({
                        label: key,
                        value: value ? "是" : "否"
                    });
                } else if (value.constructor === Array) {
                    tree.push({
                        label: key,
                        child: this.formatArray(value)
                    });
                } else {
                    tree.push({
                        label: key,
                        child: this.formatTree(value)
                    });
                }
            }
            return tree;
        },

        formatArray(arr) {
            const tree = [];

            arr.map((item, index) => {
                if (
                    item.constructor === String ||
                    item.constructor === Number
                ) {
                    tree.push({
                        label: "",
                        value: item
                    });
                } else {
                    tree.push({
                        label: "",
                        child: this.formatTree(item)
                    });
                }
            });

            return tree;
        },

        /**
         * 刷新自身数据
         */
        refreshSelf() {
            this.getSelfDetail();
        },

        /**
         * 刷新列表数据
         */
        refreshAll() {
            this.$emit("refreshList");
        }
    },

    components: {
        "ci-configuration-tree": configurationTree,
        "ci-instance-btn-group": instanceBtnGroup
    }
};
</script>
