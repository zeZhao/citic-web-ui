import apiEnum from '../apiEnum';

const JUMP_TYPE = apiEnum.JUMP_TYPE;

/**
 * 产品详情跳转逻辑判断
 * @param service
 * @param windowTag
 */
export function jumpToProductDetail(service, windowTag) {

    const {jumpType, adapterServiceId, serviceAlias, supplierAlias} = service;

    let jumpUrl;

    if (adapterServiceId) {
        // 在线认证 citicCertification 25059951495872559
        //应用分发 applicationDistribution 201705311533857755

        if ("25059951495872559" === adapterServiceId) {

            jumpUrl = JUMP_TYPE["cert"];

        } else if ("201705311533857755" === adapterServiceId) {

            jumpUrl = JUMP_TYPE["applicationDistribution"];

        } else if ("reconServiceDetails" === jumpType) {

            jumpUrl = JUMP_TYPE[jumpType] + "?supplierAlias=" + supplierAlias + "&serviceAlias=" + serviceAlias;

        } else if ("customServiceDetails" === jumpType) {

            jumpUrl = JUMP_TYPE[jumpType].Format(serviceAlias, supplierAlias);

        } else {

            jumpUrl = JUMP_TYPE[jumpType] + adapterServiceId;

        }
    } else {

        if ("reconServiceDetails" === jumpType) {

            jumpUrl = JUMP_TYPE[jumpType] + "?supplierAlias=" + supplierAlias + "&serviceAlias=" + serviceAlias;

        } else if ("customServiceDetails" === jumpType) {

            jumpUrl = JUMP_TYPE[jumpType].Format(serviceAlias, supplierAlias);

        }
    }

    if (jumpUrl) {
        if (windowTag) {
            windowTag.location = jumpUrl;
        } else {
            window.open(jumpUrl, '_blank')
        }
    } else {
        this.$Message.warning('暂无详情，请从首页服务目录访问购买!');
    }

}
