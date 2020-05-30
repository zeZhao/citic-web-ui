<style lang="scss">

.console-menu {
  /*padding-top: 100px;*/
  width: 220px;
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 14px;
  position: relative;
  /*position: fixed;*/
  /*height: 100%;*/
  /*z-index: 9998;*/
    .toggle-btn-close{
        z-index: 2;
        position: absolute;
        top: 40%;
        bottom: 0;
        right: 0;
        cursor: pointer;
        width: 24px;
        height: 56px;
        background: url("~static/images/consoleMenu/icon-toggle-open.png") 0px center no-repeat;
    }
    .toggle-btn{
        background: url("~static/images/consoleMenu/icon-toggle-close.png") 0px center no-repeat;
    }

        .title {
            width: 100%;
            background: #ccc;
            height: 20px;

        }
        .menus {
            width: 220px !important;
            background: none !important;
            color: #ffffff;
            overflow-y: auto;
            overflow-x: hidden;
            z-index: 1;

            &::-webkit-scrollbar {
                display: none
            }
            background: #434041 !important;

            .menu {
                .ivu-menu-submenu-title:hover{
                    .label{
                        color: #c60000;
                    }
                }

                &.no-child{
                    .ivu-menu-submenu-title-icon{
                        display: none;
                    }
                }

                &.active{
                    color: #c60000;
                }

                .icon {
                    display: inline-block;
                    width: 26px;
                    height: 26px;
                    background-size: cover;
                    vertical-align: middle;
                    background-repeat: no-repeat !important;
                }
                .label {
                    display: inline-block;
                    height: 24px;
                    margin-left: 8px;
                }
                .item {
                    padding-left: 60px !important;
                    color: rgba(255, 255, 255, 0.302);
                    border-left: 8px solid #434041;
                    border-right: 0;
                }
            }
        }
        .ivu-menu-vertical .ivu-menu-item {
            color: #ffffff;
        }
        .ivu-menu-vertical .ivu-menu-item:hover {
            color: #c60000;
            background: rgba($color: #000000, $alpha: 0.2);

            border-left: 8px solid #c60000;

        }
        .ivu-menu-vertical .ivu-menu-submenu-title:hover {
            background: none;
        }
        .ivu-menu-submenu-title {
            padding-left: 20px;
        }

        .ivu-menu-light.ivu-menu-vertical
        .ivu-menu-item-active:not(.ivu-menu-submenu) {
            color: #c60000;
            background: rgba($color: #000000, $alpha: 0.2);
            border-left: 8px solid #c60000;
            border-right: 0;
        }
        .line {
            width: 180px;
            border-top: 1px solid #413e3f;
            margin: 20px auto 0 auto;
        }

        .menus.ivu-menu-vertical.ivu-menu-light {
            &:after {
                display: none;
            }
        }
    }

    .console-menu-min {
        background-color: #f3f3f3;
        width: 24px;
        .menus {
            display: none;
        }
    }
</style>
<template>
    <div class="console-menu" :class="{'console-menu-min': toggle}">
        <div class="toggle-btn-close" @click="isToggle" :class="{'toggle-btn': toggle}"></div>

        <Menu ref="consoleMenu" class="menus" style="height :100%" :open-names="openNames" :active-name="activeName">

            <template v-for="(menu, pIndex) in menuListData">

                <!--只有一级父菜单-->
                <template v-if="!menu.children">
                    <Submenu :name="`${pIndex}`" class="menu no-child" :class="{active : pActive === pIndex}" :key="pIndex">
                        <template slot="title">
                            <div @click="changeMenu(menu.url, `${pIndex}`, null)">
                                <i class="icon" :style="{background:`url(${menu.icon})`}"></i>
                                <span class="label" >{{menu.title}}</span>
                            </div>
                        </template>
                    </Submenu>
                </template>

                <!--包含子菜单-->
                <template v-else>
                    <Submenu :name="`${pIndex}`" class="menu" :key="pIndex">
                        <template slot="title">
                            <i class="icon" :style="{background:`url(${menu.icon})`}"></i>
                            <span class="label">{{menu.title}}</span>
                        </template>

                        <MenuItem :name="`${pIndex}_${sIndex}`" v-for="(son, sIndex) in menu.children"
                                  :key="sIndex" class="item" @click.native="changeMenu(son.url, `${pIndex}`, `${pIndex}_${sIndex}`)">{{son.label}}
                        </MenuItem>
                    </Submenu>
                </template>

            </template>

        </Menu>
    </div>
</template>

<script>

    import consoleMenuData from "static/json/menuData/menu-console-tree.js";
    import baseUtil from "utils/base.js";

    export default {

        data() {
            return {
                menuListData: consoleMenuData,
                toggle: false,

                activeName: '',
                openNames: [],
                pActive: 0,

                consoleMenu: null,
            };
        },

        created() {
            //租户管理员才可以查看“账单查询”和“收支明细”菜单
            this.menuListData.map((item,baseIndex) => {
                const role = this.$store.state.userInfo.USER_INFO.role; //登录用户角色
                if (item.code && item.code === 'feeCenter') {  //费用中心
                    const _children = item.children;


                    if ((role & 2) !== 2) { //非租户管理员
                        _children.map((child, index) => {
                            if (child.code && child.code === 'billQuery') { //账单查询
                                _children.splice(index, 1);
                            } else if (child.code && child.code === 'inOutBill') { //收支明细
                                _children.splice(index, 1);
                            }

                            // else if(child.code && child.code === 'auth'){
                            //     _children.splice(index, 1);
                            // }
                        });
                    }
                }

                if(item.code && item.code === 'auth'){//权限管理只有租户管理员可以看
                     if ((role & 2) !== 2) { //非租户管理员
                        this.menuListData.splice(baseIndex, 1)

                     }
                }



            });
        },

        mounted(){
            this.consoleMenu = this.$refs.consoleMenu;

            this.matchRouter();
        },

        methods: {

            isToggle() {
                if (this.toggle === false) {
                    this.toggle = !this.toggle;
                    this.$emit('change', 'minLeft')
                } else if (this.toggle === true) {
                    this.toggle = !this.toggle;
                    this.$emit('change', 'maxLeft')
                }
            },

            changeMenu(url, pName, sName) {

                // 一级菜单
                if(!sName){
                    this.pActive = ~~pName;
                }else {
                    //子菜单
                    this.pActive = null;
                }

                this.activeName = sName;
                this.$nextTick(() => {
                    this.consoleMenu.updateActiveName();
                });


                //菜单跳转清除全部页面查询记录 wpj
                this.$store.commit('resetAllSearch');
                baseUtil.goCompatible(url)
            },

            matchRouter(){
                const path = this.$route.path.replace("/citic-web-ui", "");

                let pIndex = 0;

                for (const parent of this.menuListData) {
                    let sIndex = 0;

                    // 包含子菜单
                    if(parent.children){
                        for (let child of parent.children) {

                            if(path.includes(child.url)){
                                this.activeName = `${pIndex}_${sIndex}`;
                                this.pActive = pIndex;

                                if (!this.openNames.includes(pIndex.toString())) {
                                    this.openNames.push(pIndex.toString());
                                    this.$nextTick(() => {
                                        this.consoleMenu.updateOpened()
                                    });
                                }
                                break;
                            }

                            sIndex++;
                        }
                    }else {
                        if(path.includes(parent.url)){
                            this.activeName = pIndex;
                            this.pActive = pIndex;
                            break;
                        }
                    }

                    pIndex++;
                }
            }
        },

        components: {},

        watch: {

            $route(){
                this.matchRouter();
            },

            // $route(){
            //     console.log("=======================")
            //
            //     this.$nextTick(()=>{
            //
            //
            //
            //         console.log("======", this.activeName, "======", this.openNames)
            //
            //          const consoleMenu = this.$refs.consoleMenu;
            //         this.activeName = "";
            //         this.openNames = [];
            //         consoleMenu.updateOpened();
            //         consoleMenu.updateActiveName();
            //     })
            //
            // }
        }
    };
</script>

