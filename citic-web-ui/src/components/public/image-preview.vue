<style scoped lang="scss">
    .image-preview {
        transform: rotate3d(0, 0, 0);
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.71);

        .close-btn {
            position: absolute;
            right: 80px;
            top: 90px;
            font-size: 40px;
            color: #EDEDED;
            cursor: pointer;
        }

        .preview-content {

            &.block {
                display: block;
                padding: 30px 0;
            }

            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .left-btn, .right-btn {
                position: fixed;
                top: 50%;
                font-size: 50px;
                color: #EDEDED;
                cursor: pointer;
                transition: .3s;

                &.disabled {
                    color: rgba(237, 237, 237, 0.21);
                    cursor: not-allowed;
                }
            }

            .left-btn {
                left: 300px;

            }

            .right-btn {
                right: 300px;
            }

            .preview-image {
                max-width: 70%;
                margin: 0 auto;
                display: block;
                user-select: none;
            }
        }
    }
</style>

<template>
    <div class="image-preview" v-show="previewShow">
        <Icon type="android-close" class="close-btn" @click="close"/>

        <div class="preview-content" ref="previewContent" :class="{block: contentDisplayBlock}">
            <Icon type="android-arrow-dropleft-circle" class="left-btn" :class="{disabled: leftDisabled}"
                  @click="next(-1)"/>

            <img class="preview-image" :src="currentImg" ref="previewImage">

            <Icon type="android-arrow-dropright-circle" class="right-btn" :class="{disabled: rightDisabled}"
                  @click="next(1)"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                required: true,
            },

            images: {
                type: Array,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            },
        },

        data() {
            return {
                previewShow: false,
                imageIndex: 0,
                contentHeight: window.innerHeight,
                contentDisplayBlock: false
            }
        },

        methods: {
            close() {
                this.previewShow = false;
                this.$emit("on-close");
                this.$emit("input", false);
            },

            next(step) {

                if (this.images === undefined || this.imageIndex === undefined) {
                    return;
                }

                const MAX = this.images.length - 1;
                const MIN = 0;

                let nextStep = this.imageIndex + step;

                if (nextStep < MIN) {
                    nextStep = MIN;
                } else if (nextStep > MAX) {
                    nextStep = MAX
                }

                this.imageIndex = nextStep;
            },

            setFrame() {
                const image = this.$refs.previewImage;

                if (image) {
                    this.contentDisplayBlock = image.height + 60 >= this.contentHeight;
                }
            }
        },

        watch: {
            index(index) {
                this.imageIndex = index;
            },

            value(val) {
                this.previewShow = val;
            }
        },

        computed: {
            leftDisabled() {
                return this.imageIndex === 0;
            },

            rightDisabled() {

                if (this.images !== undefined && this.imageIndex !== undefined) {
                    return this.imageIndex === this.images.length - 1;
                }

                return true;
            },
            currentImg() {
                if (this.images && this.imageIndex !== undefined && this.imageIndex < this.images.length) {

                    this.$nextTick(() => {
                        this.setFrame();
                    });

                    return this.images[this.imageIndex];
                }
            }
        }
    }
</script>
