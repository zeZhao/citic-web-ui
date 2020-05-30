<template>
    <div class="enterprise">
        <div class="step">
            <ci-agreement-step :current="current"></ci-agreement-step>
        </div>
        <Card class="agree-con" dis-hover>
            <div class="agree-header">
                <div class="agree-hd-tit">
                    企业级服务协议（SLA）
                </div>
            </div>
            <div class="agree-container">
                <p>一、协议适用范围</p>
                <p>本协议相关规定适用于中信科技发展有限公司（以下简称“中信科技”）为中信云租户 <span class="bluealert bottomline">{{firstParty.fullname}}</span>所提供的中信云的服务支持业务。任何非中信科技版权的产品所产生的故障或相关问题均不在此协议约定的条款范围内。</p>
                <p>二、协议适用时间</p>
                <table class="user-defined">
                    <tr>
                        <th width="50%">对应期间</th>
                        <th width="50%">服务支持</th>
                    </tr>
                    <tr style="height: 35px">
                        <td>云平台交付期间</td>
                        <td>无</td>
                    </tr>
                    <tr style="height: 35px">
                        <td>云平台及云服务产品使用期间</td>
                        <td>适用本协议</td>
                    </tr>
                    <tr style="height: 35px">
                        <td>云平台及云服务产品下线</td>
                        <td>自动终止本协议</td>
                    </tr>
                </table>
                <p>本协议一旦启用，任何一方如果希望变更或提前终止本协议内容，需要提前40个工作日以书面形式通知。</p>
                <p>三、服务支持范围</p>
                <p>3.1支持范围</p>
                <p>3.1.1故障排除：</p>
                <p>定义：云平台及由云平台提供的云服务产品在正式运行期间产生的任何故障。</p>
                <p>3.1.1服务咨询：</p>
                <p>定义：使用云平台及由云平台提供的云服务产品而引发的各类业务相关或技术相关咨询。</p>
                <p>3.2不支持范围</p>
                <p>3.2.1如因不可抗力造成平台及产品瘫痪，中信科技负责租户的数据安全及软件功能恢复，但恢复时间等相关约定不在本协议规定内。</p>
                <p>3.2.2因租户的不当操作造成的系统故障、数据丢失或数据错误，中信科技只负责提供能力范围内的咨询服务。故障修复及数据恢复、数据修复不在本协议规定范围内。</p>
                <p>3.2.3各类因业务需要而产生的新开发需求，须通报产品经理，按照开发需求流程处理，开发时间和上线时间等均不在本协议规定内。</p>
                <p>3.2.4 租户在中信云平台上配置的非中信科技版权的第三方软件所发生的故障或问题，均不在本协议规定范围内。中信科技客服团队仅提供能力范围内的建议和指导。</p>
                <p>四、支持相关条款约定</p>
                <p>4.1服务时间及服务渠道说明</p>
                <table class="user-defined">
                    <tr>
                        <th width="20%">服务时间</th>
                        <th width="20%">服务优先级</th>
                        <th width="20%">服务方式</th>
                        <th width="40%">接入方式说明</th>
                    </tr>
                    <tr>
                        <td rowspan="3">周一至周五 9：00 - 18：00</td>
                        <td rowspan="3">紧急/高/中/低</td>
                        <td>即时通讯</td>
                        <td>中信云c.citic页面右侧悬浮窗（在线客服）入口</td>
                    </tr>
                    <tr>
                        <td>工单</td>
                        <td>中信云c.citic页面右侧悬浮窗（在线客服）入口</td>
                    </tr>
                    <tr>
                        <td>邮件</td>
                        <td>cloud_service@citic.com</td>
                    </tr>
                    <tr>
                        <td rowspan="3">周一至周五 9：00 - 18：00</td>
                        <td>紧急/高</td>
                        <td>即时通讯</td>
                        <td>中信云c.citic页面右侧悬浮窗（在线客服）入口</td>
                    </tr>
                    <tr>
                        <td rowspan="2">中/低</td>
                        <td>工单</td>
                        <td>中信云c.citic页面右侧悬浮窗（在线客服）入口</td>
                    </tr>
                    <tr>
                        <td>邮件</td>
                        <td>cloud_service@citic.com</td>
                    </tr>
                </table>
                <p>4.2优先级定义</p>
                <table class="user-defined">
                    <tr>
                        <th width="20%">编号</th>
                        <th width="20%">优先级</th>
                        <th width="60%">定义</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>紧急</td>
                        <td class="border-hide">1、任何影响系统运行，并造成业务中断的问题；<br>2、影响全网10%以上或100以上租户的业务中断的问题；<br>3、云平台瘫痪超过一小时；</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>高</td>
                        <td class="border-hide">1、任何影响系统运行，但未造成业务中断的问题；<br>2、影响全网5%以上或50以上租户的业务中断的问题；<br>3、云平台重要功能模块出现问题，严重影响业务部门的工作效率。
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>中</td>
                        <td class="border-hide">1、网络性能受到影响，但未影响整个业务的运行；<br>2、影响租户大于10以上，但未影响整个网络的运行；</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>低</td>
                        <td class="border-hide">1、网络运行和业务不受影响的故障，可通过定期版本更新解决；<br>2、业务或平台使用等相关咨询；<br>3、服务开通或终止类请求；</td>
                    </tr>
                </table>
                <p>4.2.1优先级可能会由中信科技客服团队根据不同服务请求内容在后台录入时进行重新定义；</p>
                <p>4.2.2如果对已经定义的优先级别有异议，可通过联系中信科技客服团队并解释合理理由后进行升级或降级；</p>
                <p>4.2.3对于不能在规定各等级的业务恢复时限内恢复业务的，则需在此时间内把优先级降低至少一个等级，同时在原优先级时间段内提供对应的代替或临时方案避免租户业务损失；</p>
                <p>4.3响应时间</p>
                <table class="user-defined">
                    <tr>
                        <th width="10%">编号</th>
                        <th width="10%">优先级</th>
                        <th width="40%">响应时间（适用于工单、邮件渠道）</th>
                        <th width="40%">接入邮件</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>紧急</td>
                        <td>30分钟</td>
                        <td class="border-hide">工作时间：电话、在线工单、即时通讯、邮件；<br>非工作时间：电话</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>高</td>
                        <td>1小时</td>
                        <td class="border-hide">工作时间：电话、在线工单、即时通讯、邮件；<br>非工作时间：电话</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>中</td>
                        <td>2小时</td>
                        <td class="border-hide">工作时间：电话、在线工单、即时通讯、邮件；<br>非工作时间：无</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>低</td>
                        <td>4小时</td>
                        <td class="border-hide">工作时间：电话、在线工单、即时通讯、邮件；<br>非工作时间：无</td>
                    </tr>
                </table>
                <p>4.3.1响应时间：</p>
                <p>仅适用于工单渠道的服务请求，指工单服务请求从“已提交”到“处理中”的时间；</p>
                <p>五、免责</p>
                <p>5.1租户使用云平台服务所用的任何数据，其数据内容由租户自己负完全责任。</p>
                <p>5.2租户保证所用数据来源的合法性， 并承担不当获取造成的一切责任。</p>
                <p>5.3租户须将云平台服务用于合法的目的，在使用服务过程中必须遵守中华人民共和国大陆法律或相关法规的规定。</p>
                <p>六、不可抗力</p>
                <p>6.1“不可抗力”是指所有超出本协议双方合理控制范围的事件，该事件应不可预见，或虽然可以预见，但通过合理努力无法阻止或避免其发生，且这类事件发生于本协议签字之后，并且阻止任何一方全部或部分履行本协议。</p>
                <p>6.2 如果在符合6.1条款中所述条件的情况下，一方未履行其本协议项下的任何义务,
                    不应被认为构成违约；如果不可抗力事件致使该方未能全部履行其在本协议项下的义务，双方应立即相互协商以找出合理解决办法，并应尽所有合理的努力尽可能地减小不可抗力的后果；</p>
                <p>6.3 在不可抗力事件发生后的5个工作日内，受不可抗力影响的一方应书面通知对方，解释其未履行或不能完全履行本协议项下义务的原因，并且其履行本协议的期限应延长，延长期应与不可抗力事件造成的拖延期相同。</p>
                <p>七、名词释义</p>
                <p>中信科技：中信云提供商。中信云平台的相关版权均归属于中信科技，中信科技总体负责中信云的建设、运营工作；</p>
                <p>租户：中信云平台及其产品、服务的使用者，以公司为单位，是签订本协议的主体；</p>
                <p>云平台：中信科技提供的由中信科技拥有版权的云平台；</p>
                <p>云平台服务产品：中信科技提供的由中信科技拥有版权的运行于中信科技云平台上的相关产品及服务；</p>
                <p>供应商：指为中信云提供平台基础设施或者云平台服务产品的厂商。</p>
                <div style="text-align: center;margin-top: 20px">
                    <Button type="primary" size="large" @click="isConfirm">确定协议并保存</Button>
                    <Button type="primary" size="large" @click="goBack">返回</Button>
                </div>

            </div>
        </Card>
    </div>

</template>

<script>
    import agreementStep from './agreement-step'
    export default {
        props:{
            firstParty:{}
        },
        data() {
            return {
                current:2
            }
        },
        methods:{
            isConfirm(){
                this.$emit('protocol')
            },
            goBack(){
                this.$emit('goConfidentiality')
            }
        },
        components:{
            'ci-agreement-step':agreementStep
        }
    }
</script>

<style lang="scss" scoped>
    .user-defined{
        width: 98%;
        margin: 10px auto;
        border: 1px solid #ccc !important;
    }
    .user-defined tr{
        border: 1px solid #ccc !important;
    }
    .user-defined th{
        height: 35px;
        border: 1px solid #ccc !important;
    }
    .user-defined td{
        text-align: center;
        border: 1px solid #ccc !important;
    }
    .user-defined .border-hide{
        text-align: left;
        padding: 5px 5px;
    }

</style>
