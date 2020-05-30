<style scoped lang="scss">

</style>

<template>
    <Menu theme="light" :open-names="openName" :active-name="activeName" @on-select="toPath"
          @on-open-change="changeOpen" ref="menu" >

        <template v-for="parent of menuTree" >
            <MenuItem name="active" v-if="!parent.child" :name="parent.path" :key="parent.id">
                <Icon v-if="parent.icon" :type="parent.icon"></Icon>
                首页
            </MenuItem>
            <Submenu v-else :name="parent.id" :key="parent.id">
                <template slot="title">
                    <Icon v-if="parent.icon" :type="parent.icon"></Icon>
                    {{parent.name}}
                </template>
                <MenuItem v-for="son of parent.child" :name="son.path" :key="son.id">
                    <Icon v-if="son.icon" :type="son.icon"></Icon>
                    {{son.name}}
                </MenuItem>
            </Submenu>
        </template>

    </Menu>
</template>

<script>
    export default {
        data() {
            return {
                menuTree: [
                    {
                        id: 'home',
                        icon: 'ios-paper',
                        name: '首页',
                        path: '/home'
                    },
                    {
                        id: 'user',
                        icon: 'ios-people',
                        name: '用户管理',
                        child: [
                            {
                                id: 'new',
                                icon: 'ios-paper',
                                name: '新增用户',
                                path: '/user/new'
                            },
                            {
                                id: 'active',
                                name: '活跃用户',
                                path: '/user/active'
                            }
                        ]
                    },
                    {
                        id: 'org',
                        icon: 'ios-people',
                        name: 'org管理',
                        child: [
                            {
                                id: 'onew',
                                icon: 'ios-paper',
                                name: '新增org',
                                path: '/org/new'
                            },
                            {
                                id: 'oactive',
                                name: '活跃org',
                                path: '/org/active'
                            }
                        ]
                    },
                    {
                        id: 'appbase',
                        icon: 'ios-people',
                        name: '应用基线',
                        child: [
                            {
                                id: 'onew',
                                icon: 'ios-paper',
                                name: '应用基线',
                                path: '/console/appbase'
                            }
                        ]
                    }
                ],

                activeName: '/home',
                openName: []
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            toPath(path) {
                this.$router.push(path)
            },

            changeOpen(array) {
                this.openName = array;
            }
        },

        computed: {},

        watch: {
            $route() {
                const menu = this.$refs.menu
                console.log(this.$route)
                //遍历菜单，找出当前页面地址属于哪个一级或二级分类，设置正确的菜单展开样式
                const {path} = this.$route;
                for (const parent of this.menuTree) {
                    //判断是否有子菜单
                    if (parent.child) {
                        //遍历子菜单，发现被包含的页面则展开此父级菜单，并激活当前子菜单
                        for (const son of parent.child) {
                            if (path.includes(son.path)) {
                                this.activeName = son.path;
                                //如果已经打开的菜单包含了当前组，则不强制展开当前组
                                if (!this.openName.includes(parent.id)) {
                                    this.openName.push(parent.id)
                                    this.$nextTick(() => {
                                        menu.updateOpened()
                                    });
                                }
                                break;
                            }
                        }
                    } else {
                        if (path.includes(parent.path)) {
                            this.activeName = path;
                            break;
                        }
                    }
                }
            }
        },

        components: {},
    }
</script>
