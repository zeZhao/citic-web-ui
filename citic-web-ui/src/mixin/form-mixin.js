import { overwrite } from './annotation'

export default {
    data: function () {
        return {
            submitAPI: '',
        }
    },

    created() {
        this._mxGetFormInfo();
        // this._mxInitOpinion();
    },

    methods: {
        /**
         * 初始化表单数据
         */
        _mxGetFormInfo() {
            const { id } = this.$route.query;
            if (this.submitAPI && id) {
                this.$get(`${this.submitAPI}/${id}`).then(res => {
                    for (const key in res.data) {
                        const item = res.data[key];
                        if (typeof item === 'boolean') {
                            res.data[key] = `${item}`;
                        }
                    }
                    Object.assign(this.form, this._mxArrangeFormInfo(res.data));
                    // this._mxFormLoaded();
                })
            }
        },

        /**
         * 调整表单初始化数据
         * @param data      状态中的form对象
         * @returns {*}
         * @private
         */
        // @overwrite("调整表单初始化数据")
        _mxArrangeFormInfo(data) {
            return data;
        },

        // /**
        //  * 表单数据加载完成
        //  * @private
        //  */
        // @overwrite("表单数据加载完成")
        // _mxFormLoaded(){

        // },

        // /**
        //  * 初始化下拉菜单数据
        //  * @private
        //  */
        // @overwrite('初始化下拉菜单数据')
        // _mxInitOpinion() {

        // },

        /**
         * 提交表单前调整表单内数据
         * @param formData
         * @private
         */
        // @overwrite("提交表单前调整表单内数据")
        _mxArrangeSubmitData(formData) {
            return formData;
        },

        /**
         * 提交表单操作
         * @param validate    是否需要验证表单
         * @param name        表单的ref
         * @private
         */
        _mxHandleSubmit(validate = true, name = 'form') {

            const submit = () => {
                const submitData = this._mxArrangeSubmitData(Object.assign({}, this.form));
                if (this.form.id) { //修改
                    const _url = `${this.submitAPI}/${this.form.id}`
                    this.$put(_url, submitData).then(this._mxSuccess);
                } else { //新增
                    this.$post(this.submitAPI, submitData).then(this._mxSuccess);
                }
            };

            if (validate) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        submit();
                    } else {
                        this.$Message.error('表单校验失败!');
                    }
                })
            } else {
                submit()
            }
        },

        /**
         * 提交成功后执行
         * @param msg
         * @param code
         */
        _mxSuccess({ msg, code }) {
            if (code === 0 || code === '200') {
                this.$Message.success('操作成功!');
                this.$router.back();
            } else {
                this.$Message.error(msg);
            }
        },

        /**
         * 重置表单数据
         * @param name
         * @private
         */
        _mxHandleReset(name = 'form') {
            this.$refs[name].resetFields();
        }
    }
}
