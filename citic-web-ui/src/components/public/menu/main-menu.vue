<style scoped lang="scss">
.main-menu {
    // height: 520px;
    width: 250px;
    background: #666465;
    color: rgb(255, 255, 255);
    font-size: 12px;
    padding: 10px 0;
    position: relative;

    .lable {
        height: 42px;
        line-height: 16px;
        padding: 5px 30px;
        position: relative;
        vertical-align: middle;
        span {
            display: inline-block;
            padding-top: 8px;
        }
        &:hover {
            background-color: rgba(255, 255, 255, 0.102);
        }
        .icon {
            position: absolute;
            right: 30px;
            top: 15px;
        }
    }
    .children {
        opacity: 0.95;
        width: 0;
        height: 524px;
        position: absolute;
        left: 248px;
        top: 0;
        background: #ffffff;
        transition: width 0.5s;
        overflow: hidden;
        color: #000000;
        .group {
            display: none;
            padding: 0 30px;
            font-size: 18px;
            .child-group {
                color: rgb(51, 51, 51);
                font-size: 14px;
                .child {
                    position: relative;
                    margin-top: 20px;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding: 0 10px;
                    box-sizing: border-box;
                    &:hover {
                        color: rgb(205, 19, 27);
                    }
                }
            }
        }
    }
    .children-activity {
        width: 950px;
        .group {
            display: block;
        }
    }
}
.activity {
    background-color: #999697;
}
.isEffective-false {
    color: rgb(153, 153, 153);
}
</style>
<template>
    <div class="main-menu">
        <div
            class="lable"
            v-for="(iteam,inx) in menuData"
            :key="inx"
            @mouseover="lableMouseover(iteam)"
            @mouseout="mouseout"
        >
            <span>{{iteam.title}}</span>
            <Icon type="chevron-right" class="icon"></Icon>
        </div>
        <div
            class="children"
            :class="isShowChildren?'children-activity':'isEffective-false'"
            @mouseover="isShowChildren=true"
            @mouseout="mouseout"
        >
            <div class="group">
                <template v-for="(item, inx) in nowChildren">
                    <p style="margin-top:20px;">{{item.title}}</p>
                    <Row class="child-group">
                        <i-col
                            span="6"
                            class="child"
                            v-for="(iteam,inx) in item.children"
                            :key="inx"
                            :class="iteam.url?'':'isEffective-false'"
                            @click.native="go(iteam.url)"
                            :title="iteam.lable"
                        >{{iteam.lable}}</i-col>
                    </Row>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import MenuData from "static/json/menuData/menu";
export default {
    data() {
        return {
            isShowChildren: false,
            nowChildren: [],
            menuData: MenuData
        };
    },
    methods: {
        lableMouseover(iteam) {
            //this.isShowChildren =false;
            console.log(iteam);
            this.isShowChildren = true;
            this.nowChildren = iteam.childrenGroup;
        },
        mouseout() {
            this.isShowChildren = false;
        },
        go(url) {
            if (!url) return false;
            //debugger;
            let baseUrl = location.origin + "/";
            if (url[0] == "/") {
                this.$router.push(this.$CONFIG.UI_COMMON_PREFIX + url);
            } else if (url.indexOf("://") == -1) {
                location.href = baseUrl + url;
            } else {
                location.href = url;
            }
        }
    }
};
</script>

