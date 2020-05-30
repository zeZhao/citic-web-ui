<style scoped lang="scss">
    .product-introduce {

        .content {
            background: #fafafa;
            overflow: hidden;
            position: relative;

            .group {
                background: #fafafa;
                padding: 60px 0 20px 0;

                &.white {
                    background: #fff;
                }

                .group-content {
                    width: 1200px;
                    margin: 0 auto;
                    padding-left: 280px;

                    .module-title {
                        font-size: 16px;
                        position: relative;
                        padding-left: 8px;
                        margin: 0 auto 20px auto;

                        &::before {
                            content: "";
                            width: 2px;
                            height: 15px;
                            display: inline-block;
                            background: #d92028;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }

                    /deep/ .ivu-carousel {
                        width: 920px;
                        margin: 0 auto;
                    }

                    .flow-img-box {
                        width: 920px;
                        margin: 0 auto 20px auto;
                        padding: 20px;
                        border: 1px solid #d3d3d3;
                        background: #fff;
                        box-shadow: 0 0 10px 0 rgba(211, 211, 211, 0.56);

                        .flow-img {
                            width: 100%;
                            display: block;
                        }
                    }

                    .trait-img {
                        height: 530px;
                        display: block;
                        margin: 0 auto;
                        border: 1px solid #d3d3d3;
                        box-shadow: 0 0 10px 0 rgba(211, 211, 211, 0.56);
                    }

                    .use-img-box {
                        height: 750px;
                        width: 920px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #d3d3d3;
                        background: #fff;

                        .use-img {
                            display: block;
                            height: 710px;
                            margin: 0 auto;
                        }
                    }

                    .agreement-box {
                        width: 920px;
                        height: 750px;
                        margin: 0 auto;
                        background: #6dc7ef;
                        border: 1px solid #8bb8cb;
                        padding: 20px;

                        .agreement-window {
                            border-radius: 10px;
                            overflow: hidden;
                            height: 710px;
                            background: #fff;
                            padding: 3px;

                            .agreement-content {
                                height: 100%;
                                width: 100%;
                                padding: 30px;
                                overflow: auto;

                                img {
                                    max-width: 100%;
                                }
                            }

                            /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
                            ::-webkit-scrollbar {
                                width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
                                height: 4px;
                                background-color: rgb(255, 255, 255);
                            }

                            /*定义滚动条轨道 内阴影+圆角*/
                            ::-webkit-scrollbar-track {
                                width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
                                height: 4px;
                                background-color: rgb(255, 255, 255);
                            }

                            /*定义滑块 内阴影+圆角*/
                            ::-webkit-scrollbar-thumb {
                                border-radius: 10px;
                                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                                background-color: #cccccc;
                            }
                        }
                    }

                    .case-img-box {
                        height: 485px;
                        width: 920px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #d3d3d3;

                        .case-img {
                            display: block;
                            height: 445px;
                            margin: 0 auto;
                        }
                    }

                    .file-list {
                        width: 920px;
                        margin: 0 auto;
                        padding-bottom: 80px;

                        .item-box {
                            width: 300px;
                            height: 135px;
                            margin-right: 10px;
                            display: inline-block;
                            position: relative;
                            cursor: pointer;

                            &:last-child {
                                margin-right: 0;
                            }

                            &::after {
                                content: "";
                                background: url("../../../../static/images/product/detail/question.png");
                                width: 106px;
                                height: 123px;
                                display: inline-block;
                                position: absolute;
                                top: 16%;
                                right: -2%;
                                z-index: 0;
                            }

                            .file-item {
                                position: absolute;
                                z-index: 2;
                                width: 100%;
                                height: 100%;
                                padding: 35px 25px;
                                border: 1px solid #dedfe0;
                                transition: .3s;

                                .filename {
                                    transition: .3s;
                                    font-weight: bold;
                                    font-size: 13px;
                                    display: block;
                                    margin-bottom: 10px;

                                    &::before {
                                        content: "";
                                        background: url("../../../../static/images/product/detail/download.png");
                                        width: 25px;
                                        height: 20px;
                                        display: inline-block;
                                        margin-right: 8px;
                                        vertical-align: middle;
                                        position: relative;
                                        top: -2px;
                                        transition: .3s;
                                    }
                                }

                                .tips {
                                    display: block;
                                    font-size: 12px;
                                }

                                &:hover {
                                    border: 1px solid #90d4f2;
                                    box-shadow: 0 3px 10px 0 rgba(153, 153, 153, 0.31);

                                    .filename {
                                        color: #29b2ea;

                                        &::before {
                                            background-image: url("../../../../static/images/product/detail/download-active.png");
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .relation-service-group {
                        width: 920px;
                        margin: 0 auto;
                        padding-bottom: 80px;

                        &::after {
                            content: "";
                            clear: both;
                            display: block;
                            visibility: hidden;
                        }

                        .service-item {
                            width: 300px;
                            margin-right: 10px;
                            display: inline-block;
                            transition: .3s;
                            float: left;
                            cursor: pointer;

                            &:last-child {
                                margin-right: 0;
                            }

                            .head {
                                height: 100px;
                                background-color: #fff;
                                padding: 20px;

                                .logo {
                                    height: 100%;
                                    display: block;
                                    background-size: contain;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            }

                            .content {
                                border-top: 5px solid #2aade9;
                                height: 150px;
                                transition: .3s ease;
                                background-size: 100%;
                                background-position: center;

                                .title {
                                    color: #fff;
                                    font-weight: bold;
                                    font-size: 14px;
                                    text-align: center;
                                    margin: 30px 0 10px 0;
                                }

                                .info {
                                    color: #fff;
                                    font-size: 12px;
                                    text-align: center;
                                    padding: 0 20px;
                                    height: 70px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 4;
                                    -webkit-box-orient: vertical;
                                }
                            }

                            &:hover {
                                box-shadow: 0 2px 10px 0 rgba(153, 153, 153, 0.31);

                                .content {
                                    background-size: 110%;
                                }
                            }
                        }
                    }
                }
            }

            .router {
                left: 50%;
                top: 0;
                bottom: 0;
                transform: translate3d(-600px, 0, 0);
                position: absolute;

                .menu {
                    position: absolute;
                    left: 0;
                    top: 40px;
                    width: 200px;
                    border: 1px solid #f8f7f7;
                    background: #fff;
                    color: #444;
                    font-size: 14px;
                    text-align: left;
                    line-height: 60px;

                    .item {
                        padding-left: 40px;
                        border-bottom: 1px solid #d1d0d0;
                        cursor: pointer;
                        background: #fff;
                        transition: .3s;

                        .label {
                            transition: .3s;
                        }

                        .icon {
                            height: 20px;
                            width: 20px;
                            display: inline-block;
                            background-size: contain;
                            background-position: center;
                            background-repeat: no-repeat;
                            vertical-align: middle;
                            margin-right: 10px;

                            &.icon-function {
                                background-image: url("../../../../static/images/product/detail/icon-function.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-function-active.png");
                                }
                            }

                            &.icon-trait {
                                background-image: url("../../../../static/images/product/detail/icon-trait.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-trait-active.png");
                                }
                            }

                            &.icon-use {
                                background-image: url("../../../../static/images/product/detail/icon-use.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-use-active.png");
                                }
                            }

                            &.icon-agreement {
                                background-image: url("../../../../static/images/product/detail/icon-agreement.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-agreement-active.png");
                                }
                            }

                            &.icon-case {
                                background-image: url("../../../../static/images/product/detail/icon-case.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-case-active.png");
                                }
                            }

                            &.icon-manual {
                                background-image: url("../../../../static/images/product/detail/icon-manual.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-manual-active.png");
                                }
                            }

                            &.icon-relation {
                                background-image: url("../../../../static/images/product/detail/icon-relation.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-relation-active.png");
                                }
                            }

                            &.icon-buy {
                                background-image: url("../../../../static/images/product/detail/icon-buy.png");

                                &.active {
                                    background-image: url("../../../../static/images/product/detail/icon-buy-active.png");
                                }
                            }
                        }

                        &:last-child {
                            border: none;
                        }

                        &:hover {
                            .label {
                                color: #d92028;
                            }
                        }

                        &.active {
                            padding-left: 50px;
                            background: #d92028;
                            width: 220px;
                            border-radius: 10px;
                            transform: translateX(-10px);
                            position: relative;

                            .label {
                                color: #fff !important;
                            }

                            &::after {
                                content: '';
                                position: absolute;
                                border: 10px solid transparent;
                                border-left-color: #d92028;
                                right: -20px;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="product-introduce">
        <div class="content" ref="content">
            <div class="router">
                <ul class="menu" :style="{transform: `translateY(${routerTransform}px)`}">
                    <li class="item" :class="[isActive(index)]" v-for="(item, index) in routerList"
                        :key="index" @click="gotoLink(index, item)">
                        <span class="icon" :class="[item.icon, isActive(index)]"></span>
                        <span class="label">{{item.name}}</span>
                    </li>

                    <li class="item">
                        <span class="icon icon-buy"></span>
                        <span class="label" @click="toBuy">立即购买</span>
                    </li>
                </ul>
            </div>

            <div class="group">
                <div class="group-content">
                    <h3 class="module-title" ref="functionTag">产品功能介绍</h3>

                    <div class="flow-img-box" v-for="(item, index) in functionImgList" :key="index">
                        <img class="flow-img" :src="item.url" :alt="item.filename">
                    </div>
                </div>
            </div>

            <div class="group" :style="{'background-image': `url('${background}')`}">
                <div class="group-content">
                    <h3 class="module-title" ref="traitTag">产品特点</h3>

                    <Carousel
                        :autoplay="setting.autoplay"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :arrow="setting.arrow">
                        <CarouselItem v-for="(item, index) in traitImgList" :key="index">
                            <img class="trait-img" :src="item.url" :alt="item.filename">
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>

            <div class="group">
                <div class="group-content">
                    <h3 class="module-title" ref="useTag">使用场景</h3>

                    <Carousel
                        :autoplay="setting.autoplay"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :arrow="setting.arrow">

                        <CarouselItem v-for="(item, index) in useImgList" :key="index">
                            <div class="use-img-box">
                                <img class="use-img" :src="item.url" :alt="item.filename">
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>

            <div class="group">
                <div class="group-content">
                    <h3 class="module-title" ref="agreementTag">服务水平协议</h3>

                    <div class="agreement-box">
                        <div class="agreement-window">
                            <div class="agreement-content" v-html="serviceDetail.agreement"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group white">
                <div class="group-content">
                    <h3 class="module-title" ref="caseTag">成功案例</h3>

                    <Carousel
                        :autoplay="setting.autoplay"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :arrow="setting.arrow">

                        <CarouselItem v-for="(item, index) in caseImgList" :key="index">
                            <div class="case-img-box">
                                <img class="case-img" :src="item.url" :alt="item.filename">
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>

            <div class="group white">
                <div class="group-content">
                    <h3 class="module-title" ref="manualTag">使用手册</h3>

                    <div class="file-list">
                        <div class="item-box" v-for="(item, index) in manualFileList" :key="index"
                             @click="downloadFile(item.ossKey)">
                            <div class="file-item">
                                <span class="filename">{{item.name}}</span>
                                <label class="tips">此处为超链接形式,点击直接下载</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group">
                <div class="group-content">
                    <h3 class="module-title" ref="relationTag">相关产品</h3>

                    <div class="relation-service-group">
                        <div class="service-item" v-for="(item, index) in relationServiceMetadataList" :key="index"
                             v-if="item" @click="gotoProduct(index, item)">
                            <div class="head">
                                <span class="logo" :style="{'background-image': `url('${item.logoPath}')`}">

                                </span>
                            </div>

                            <div class="content" :style="{'background-image': `url('${serviceBackground}')`}">
                                <p class="title">{{item.serviceName}}</p>
                                <p class="info">{{item.summary}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import background from '../../../../static/images/product/detail/background.jpg';
    import serviceBackground from '../../../../static/images/product/detail/service-background.jpg';

    import marked from 'marked';

    export default {
        props: {
            introduceData: {
                type: Object,
                required: false,
                default: () => {
                    return {};
                },
            },
        },

        data() {
            return {
                background,
                serviceBackground,

                serviceDetail: {
                    id: '',
                    summary: '',
                    agreement: '',
                },

                //已经上传的文件列表
                functionImgList: [],
                traitImgList: [],
                useImgList: [],
                caseImgList: [],
                manualFileList: [],

                //关联服务展示数据
                relationServiceMetadataList: [],

                setting: {
                    autoplay: false,
                    autoplaySpeed: 5000,
                    dots: 'none',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'hover'
                },

                routerList: [
                    {
                        icon: 'icon-function',
                        name: '产品功能介绍',
                        tag: 'functionTag',
                    }, {
                        icon: 'icon-trait',
                        name: '产品特点',
                        tag: 'traitTag',
                    }, {
                        icon: 'icon-use',
                        name: '使用场景',
                        tag: 'useTag',
                    }, {
                        icon: 'icon-agreement',
                        name: '服务水平协议',
                        tag: 'agreementTag',
                    }, {
                        icon: 'icon-case',
                        name: '成功案例',
                        tag: 'caseTag',
                    }, {
                        icon: 'icon-manual',
                        name: '使用手册',
                        tag: 'manualTag',
                    }, {
                        icon: 'icon-relation',
                        name: '相关产品',
                        tag: 'relationTag',
                    },
                ],
                //激活的导航栏
                routerIndex: 0,
                //导航栏偏移量
                routerTransform: 0,

                //每一个锚点的位置
                tagPosition: {
                    functionTag: 0,
                    traitTag: 0,
                    useTag: 0,
                    agreementTag: 0,
                    caseTag: 0,
                    manualTag: 0,
                    relationTag: 0,
                },

                //阻止滚动监听
                preventScrollListener: false,
            };
        },

        created() {

        },

        mounted() {
            this.addScrollListener();
        },

        beforeDestroy() {
            window.onscroll = function () {
            }
        },

        updated() {
            this.updateTagPosition();
        },

        methods: {
            //页面元素更新后,计算一次各个锚点的实际位置
            updateTagPosition() {
                const functionTag = this.$refs.functionTag;
                const traitTag = this.$refs.traitTag;
                const useTag = this.$refs.useTag;
                const agreementTag = this.$refs.agreementTag;
                const caseTag = this.$refs.caseTag;
                const manualTag = this.$refs.manualTag;
                const relationTag = this.$refs.relationTag;

                this.tagPosition = {
                    functionTag: this.getElementPageTop(functionTag),
                    traitTag: this.getElementPageTop(traitTag),
                    useTag: this.getElementPageTop(useTag),
                    agreementTag: this.getElementPageTop(agreementTag),
                    caseTag: this.getElementPageTop(caseTag),
                    manualTag: this.getElementPageTop(manualTag),
                    relationTag: this.getElementPageTop(relationTag),
                };
            },

            //计算元素相对窗口顶部的位置
            getElementPageTop(element) {
                let actualTop = element.offsetTop;
                let parent = element.offsetParent;
                while (parent != null) {
                    actualTop += parent.offsetTop + (parent.offsetHeight - parent.clientHeight) / 2;
                    parent = parent.offsetParent;
                }
                return actualTop;
            },

            //监听浏览器滚动,动态更新导航栏状态
            addScrollListener() {
                window.onscroll = () => {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                    let content = this.$refs.content;
                    const contentHeight = content.clientHeight;

                    //更新导航条位置
                    if (scrollTop >= 850) {
                        let routerTransform = scrollTop - 850;

                        //当导航栏滚动距离 + 导航栏高度 > 内容整体高度时 不需要更新位置
                        if (routerTransform < contentHeight - 600) {
                            this.routerTransform = routerTransform;
                        }

                    } else {
                        this.routerTransform = 0;
                    }

                    //手动点击导航栏则阻止根据滚动激活导航条
                    if (this.preventScrollListener) {
                        return;
                    }

                    //更新导航条激活项目
                    let limit = 0;
                    let routerIndex = 0;
                    this.routerList.forEach((item, index) => {
                        limit = this.getTagActivePosition(index, item);

                        //滚动距离 >= tag更新位置记录
                        if (scrollTop >= limit) {
                            routerIndex = index;
                        }
                    });

                    this.routerIndex = routerIndex;
                }
            },

            getMetadata(serviceId) {
                return this.$get(this.$API_ENUM.CITIC_SERVICE_SERVICE_ID_METADATA.Format(serviceId));
            },

            //导航栏跳转操作
            gotoLink(index, item) {
                this.preventScrollListener = true;
                this.routerIndex = index;
                window.scrollTo(window.scrollX, this.getTagActivePosition(index, item));
                setTimeout(() => {
                    this.preventScrollListener = false
                })
            },

            //返回锚点真正激活时的偏移距离
            getTagActivePosition(index, item) {
                const tagTop = this.tagPosition[item.tag];
                //真正滚动距离 = tag位置 - (router上边距 + router位置 + 手动偏移)
                return tagTop - (40 + index * 61 - 40);
            },

            isActive(index) {
                return this.routerIndex === index ? 'active' : '';
            },

            /**
             * 跳转到相关产品的详情页面
             */
            gotoProduct(index, item) {

                const windowTag = window.open();

                // 查询一次服务详情，根据详情数据判断跳转地址
                this.$get(this.$API_ENUM.SUPPLIER_SERVICES_SUPPLIER_SERVICE_ID.Format(item.id)).then(res => {

                    const {
                        jumpType,
                        adapterServiceId,
                        citicService: {serviceAlias},
                        supplier: {supplierAlias},
                    } = res.data;

                    this.jumpToProductDetail({
                        jumpType,
                        adapterServiceId,
                        serviceAlias,
                        supplierAlias,
                    }, windowTag)

                });

            },

            /**
             * 跳转至购买页面
             */
            toBuy() {
                this.$emit("toBuy");
            },
        },

        computed: {},

        watch: {
            introduceData(value) {
                if (!value) {
                    return
                }

                const {agreement, summary, id, relationService, service: {id: serviceId}, functionImg, traitImg, useImg, caseImg, manualFile} = value;

                this.functionImgList = functionImg;
                this.traitImgList = traitImg;
                this.useImgList = useImg;
                this.caseImgList = caseImg;
                this.manualFileList = manualFile.map(file => {
                    let filenameArray = file.filename.split(".");
                    file.name = filenameArray.slice(0, filenameArray.length - 1).join(".");
                    return file;
                });

                this.serviceDetail = {
                    agreement: marked(agreement),
                    summary,
                    id,
                    service: {
                        id: serviceId,
                    },
                };

                //获取相关产品数据
                relationService.forEach(relation => {
                    const {relationService: {id}, order} = relation;

                    this.getMetadata(id).then(res => {
                        const {logoPath, summary, serviceName} = res.data;

                        const metadataList = Object.assign([], this.relationServiceMetadataList);
                        metadataList[order] = {logoPath, summary, serviceName, id};

                        this.relationServiceMetadataList = metadataList;
                    })
                });
            }
        },

        components: {},
    }
</script>
