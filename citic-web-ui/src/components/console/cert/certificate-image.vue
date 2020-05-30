<style scoped lang="scss">
    .certificate-image-frame {
    .image {
        display: block;
        width: 100%;
    }
    }
</style>
<template>
    <div class="certificate-image-frame">
        <img class="image" :src="image">
    </div>
</template>
<script>
    import certificateBase from '../../../../static/images/cert/certificate-base.png';
    import seal from '../../../../static/images/cert/seal.png';
    // 默认一行展示38个字符
    const FONT_NUMBER = 38;
    const FONT_STYLE = "'sans-serif'"; //"'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI', 'Microsoft Yahei', '微软雅黑', 'Tahoma', 'Arial', 'STHeiti', 'sans-serif'";
    export default {
        props: {
            /**
             * 参数示例
             company: '中信云网有限公司',
             application: '旗下网站',
             domain: 'www.c.citic',
             content: '已经通过中信品牌认证。中信品牌认证是中信集团品牌管理办公室通过中信云平台品牌在线认证系统，为授权使用中信品牌的子公司门户网站等互联网渠道应用开展数字化品牌认证服务。通过认证的子公司互联网渠道将统一在集团官网公示，便于社会公众查证识别。',
             authCode: '2018061300000053',
             effectiveDate: '2018-06-13至2021-06-13',
             authDate: '2018-06-13',
             organ: '中信集团品牌委员会办公室',
             sealDate: '2018-2021',
             */
            param: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                image: '',
                canvasWidth: 0,
                params: this.param
            }
        },
        created() {
        },
        mounted() {
            this.generate()
        },
        watch: {
            param(newVal) {
                this.params = newVal;
                this.generate();
            }
        },
        methods: {
            /**
             * 生成证书图片
             */
            async generate() {
                // 获取素材
                const {
                    canvas,
                    ctx,
                    baseImage,
                    sealImage,
                } = await this.getMaterial();
                // 画背景
                ctx.drawImage(baseImage, 0, 0);
                // 画印章
                ctx.drawImage(sealImage, 700, 510);
                const {
                    company,
                    application,
                    domain,
                    content,
                    authCode,
                    effectiveDate,
                    authDate,
                    organ,
                    sealDate,
                } = this.params;
                // 写公司名称
                this.writeText(ctx, company, 160, 0, {
                    fontSize: 39,
                    color: '#a47d34',
                    center: true,
                });
                // 写公司名称
                this.writeText(ctx, application, 220, 0, {
                    fontSize: 16,
                    color: '#666',
                    center: true,
                });
                // 网站域名
                this.writeText(ctx, domain, 280, 0, {
                    fontSize: 26,
                    color: '#a47d34',
                    center: true,
                });
                // 在线认证编码
                this.writeText(ctx, `在线认证编码：${authCode}`, 560, 160, {
                    fontSize: 14,
                    color: '#666',
                    center: false,
                });
                // 有效日期
                this.writeText(ctx, `有效日期：${effectiveDate}`, 590, 160, {
                    fontSize: 14,
                    color: '#666',
                    center: false,
                });
                // 认证日期
                this.writeText(ctx, `认证日期：${authDate}`, 560, 718, {
                    fontSize: 14,
                    color: '#666',
                    center: false,
                });
                // 认证机构
                this.writeText(ctx, `认证机构：${organ}`, 590, 600, {
                    fontSize: 14,
                    color: '#666',
                    center: false,
                });
                // 证书内容填写
                this.writeContent(ctx, content, 300, 160);
                // 添加印章时间
                this.writeText(ctx, `${sealDate}`, 766, 590, {
                    fontSize: 3,
                    bold: true,
                    color: '#d0141b',
                    center: false,
                    rotate: -12,
                });
                // 创建图片
                this.image = canvas.toDataURL();
            },
            /**
             * 图片上添加文字段落
             */
            writeContent(ctx, content, top, left) {
                const LINE_HEIGHT = 28;
                const BLANK_SPACE = 36;
                ctx.font = `18px ${FONT_STYLE}`;
                ctx.fillStyle = "#000";
                // 行号
                let line = 1;
                // 游标
                let index = 0;
                while (true) {
                    // 第一行少两个字，做空格位置
                    let length = line === 1 ? FONT_NUMBER - 2 : FONT_NUMBER;
                    const text = content.substr(index, length);
                    //获取完成，游标滑动
                    index += length;
                    if (!text) {
                        return
                    }
                    // 第一行文字添加两个空格
                    const padding = line === 1 ? left + BLANK_SPACE : left;
                    ctx.fillText(text, padding, top + (line * LINE_HEIGHT));
                    line++;
                }
            },
            /**
             * 图片上添加文字
             */
            writeText(ctx, text, top, left, config = {
                fontSize: 18,
                bold: false,
                color: '#000',
                center: true,
                rotate: 0,
            }) {
                ctx.font = `${config.bold ? 'bold' : ''} ${config.fontSize || 18}px ${FONT_STYLE}`;
                if (config.center) {
                    const textMeasure = ctx.measureText(text);
                    left = (this.canvasWidth - textMeasure.width) / 2;
                }
                // 有旋转角度：
                // 1.translate到旋转中心点（top, left默认为轴心位置）
                // 2.对元素计算宽度
                // 3.元素位置为 - textWidth/2, + fontSize/2
                // 4.旋转元素，此时旋转轴心为translate的位置
                if (config.rotate) {
                    ctx.translate(top, left);
                    const textMeasure = ctx.measureText(text);
                    const width = textMeasure.width;
                    left = -(width / 2);
                    top = config.fontSize / 2;
                    ctx.rotate(config.rotate * Math.PI / 180);
                }
                ctx.fillStyle = config.color;
                ctx.fillText(text, left, top);
            },
            /**
             * 获取基本操作素材对象
             */
            async getMaterial() {
                const canvas = document.createElement('canvas');
                // 获取图片素材
                const baseImagePromise = this.loadImage(certificateBase);
                const sealImagePromise = this.loadImage(seal);
                const baseImage = await baseImagePromise;
                const sealImage = await sealImagePromise;
                // 设置画布大小
                canvas.width = baseImage.width;
                canvas.height = baseImage.height;
                console.log(canvas.width, canvas.height)
                const ctx = canvas.getContext("2d");
                this.canvasWidth = canvas.width;
                return {
                    canvas,
                    ctx,
                    baseImage,
                    sealImage,
                }
            },
            /**
             * 根据url加载一张图片，返回图片对象
             * @param url
             * @returns {Promise<any>}
             */
            loadImage(url) {
                return new Promise((resolve, reject) => {
                    const image = document.createElement("img");
                    image.src = url;
                    image.onload = function () {
                        resolve(image);
                    }
                })
            }
        }
    }
</script>
