/**
 * 在方法上添加操作验证
 *
 * @returns {function(*, *, *): *}
 * @constructor
 * @param config
 */
export function IdentityActionCheck(config = {}) {

    // 默认只有一个字符串格式的参数为操作枚举
    if(typeof config === 'string'){
        config = {
            actionEnum: config,
        }
    }

    /**
      	 名称		操作认证枚举					短信发送枚举						                短信验证枚举
         登录		-							-								                -
         保存配置		-							-								                -

         订单审批		VERIFY_ORDER_CHECK			VERIFY_ORDER_CHECK actionUniformityArg			VERIFY_ORDER_CHECK actionUniformityArg
         实例删除		VERIFY_INSTANCE_DELETE		VERIFY_INSTANCE_DELETE actionUniformityArg		VERIFY_INSTANCE_DELETE actionUniformityArg
         控制台		VERIFY actionEnumArg 		VERIFY actionEnumArg  			                VERIFY actionEnumArg
     */

    // 默认配置内容
    const defaultConfig = {
        // 认证类型
        actionType: 'action',
        // 操作枚举值
        actionEnum: undefined,
        // 动态拼接的参数位置（操作枚举为动态值时，格式是：actionEnum = ${actionEnum}_${args[actionEnumArg]}）
        actionEnumArg: -1,
        // 短信操作一致性校验参数（短信验证码需要保证操作数据一致性时，格式是：specialSign = ${args[actionUniformityArg]}）
        actionUniformityArg: -1,
    };

    const {
        actionType,
        menuEnum,
        actionEnumArg,
        actionUniformityArg,
    } = Object.assign(defaultConfig, config);

    return function (target, name, descriptor) {
        // 保存原始方法
        const originalFunction = descriptor.value;

        // 定义装饰方法
        descriptor.value = function (...args) {

            let menuEnumStr = menuEnum;
            let specialSign = "";

            // 如果是参数拼接而成的枚举，指定拼接的参数位置
            if(actionEnumArg >= 0){
                menuEnumStr = `${menuEnumStr}_${args[actionEnumArg]}`;
            }

            // 设置特殊校验参数
            if(actionUniformityArg >= 0){
                specialSign = args[actionUniformityArg] || '';

                if(specialSign){
                    specialSign = this.$md5.hex_md5(specialSign);
                }
            }

            // 调用校验方法
            this.$identityCheck({
                actionType,

                param: {
                    menuEnum: menuEnumStr,
                    specialSign,
                },

                success: () => {
                    originalFunction.call(this, ...args);
                }
            });
        };

        return descriptor;
    }
}
