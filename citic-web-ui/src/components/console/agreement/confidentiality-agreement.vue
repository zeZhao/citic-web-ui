<template>
    <div class="confidentiality">
        <div class="step">
            <ci-agreement-step :current="current"></ci-agreement-step>
        </div>
        <Card class="agree-con" dis-hover>
            <div class="agree-header">
            <div class="agree-hd-tit">
                保密协议
            </div>
        </div>
            <div class="agree-container">
                <Form ref="confidentialityForm" :model="confidentialityForm" :rules="confidentialityRule" class="agree-container">
                    <p>披露方：中信科技发展有限公司（以下简称为“中信科技”），系一家依据“中国”法律设立并存续的有限责任公司，其联系地址为北京市朝阳区新源南路3号-3至24层101内20层A2004-05单元，法定代表人
                        李凡。</p>
                    <p>接收方：<span class="bluealert bottomline">{{firstParty.fullname}}</span>，系一家依照“中国”法律设立并存续的有限责任公司，其联系地址位于<span
                        class="bluealert bottomline">{{firstParty.streetAddress}}</span>，法定代表人为&nbsp;<span
                        class="bluealert bottomline">{{firstParty.legalRepresentName}}</span></p>
                    <p>
                        本协议中，“披露方”指向另一方披露保密信息（或以其名义披露保密信息）的一方。“接收方”指从另一方接收保密信息（或以其名义接收保密信息）的一方。“第三方”是指除甲、乙双方以及为了评估、实施本协议约定的合作计划而必需披露的公司员工、董事、监事、高级管理人员、关联公司及外部专业机构以外的其他任何个人、公司、企业、政府部门或其他任何组织。</p>
                    <p>
                        中信科技与接收方被单独称为“一方”，合称为“双方”。就本协议而言，“一方”包括其分支机构、子公司、关联公司、代理人、董事、雇员及外聘服务机构。在本协议有效期间，双方保证各自的分支机构、子公司、关联公司、代理人、董事、雇员及外聘服务机构均应遵守本协议。</p>
                    <p></p>
                    <p>鉴于</p>
                    <p>1、就云计算服务事项，双方正在洽谈建立合作关系；</p>
                    <p>2、中信科技拥有与中信云有关或相关的并对中信科技具有商业价值的某些保密信息，且中信科技一直采取一切必要的措施保护该等信息，防止任何对该等信息的任何未经授权的披露；</p>
                    <p>3、接收方在就上述事项进行磋商的过程中或在合作的过程中均有可能获悉中信科技的保密信息；</p>
                    <p>4、基于避免保密信息泄露目的，中信科技将向接收方披露特定的保密信息；本协议中中信科技为信息披露方,接收方为信息接收方。</p>
                    <p>由此，双方特此达成如下协议，以昭信守：</p>
                    <p></p>
                    <p>第一条 保密信息</p>
                    <p>1.1 “保密信息”一语包括签署协议之前/后接收方从中信科技获得的一切及所有的商业信息，其内容包括但不限于：</p>
                    <p>1.1.1 由中信科技向接收方提供的有关服务产品设想、方案、财务状况、经营状况、法律状况、发展规划、工作成果等各方面的非公开的相关资料；</p>
                    <p>1.1.2 双方基于上述内容所讨论、开发、修改或形成的资料。</p>
                    <p>1.1.3 其他在谈判、签署或履行中信科技和接收方之间有关协议而被接收方获得的、有关合作协议或合同的条款或事项的信息。</p>
                    <p>1.2 上述信息可以以数据、文字及记载上述内容的资料、光盘、软件、图书等有形媒介体现，也可通过口头、视听等无形形式体现，由中信科技据此协议合法地披露给接收方。</p>
                    <p>1.3 上述保密信息不包括以下信息：</p>
                    <p>1.3.1 在披露之时，接收方在不违反法律法规的情形下已知悉的信息，并且就接收方所知其并不需要对该等信息承担任何具有约束力的保密义务；</p>
                    <p>1.3.2 在不违反本协议项下约定责任的前提下，保密信息已经在公众领域合法公开，或能从公众领域合法获得；或者接收方已经合法地从第三方处获得；</p>
                    <p>1.3.3 保密信息是接收方或其关联或附属公司独立开发，而且未从中信科技获得的信息中获益。</p>
                    <p></p>
                    <p>第二条 保密义务</p>
                    <p>2.1 接收方承诺，在本协议约定的保密期限内，对于中信科技披露的保密信息，未经中信科技书面许可，接收方不得复制、使用或向第三方披露任何保密信息；对于双方的合作信息，经双方一致同意方可对外披露。</p>
                    <p>2.2 接收方承诺，在本协议约定的保密期限内，对其获知及取得的本协议第一条约定的保密信息，采取严格的保密措施防止该信息泄漏，保密措施包括并不限于：</p>
                    <p>2.2.1 对保密信息予以备案或登记；</p>
                    <p>2.2.2
                        不创建超出为实现用途而合理必需的、或本保密协议条款所允许的保密信息的更多副本，包括但不限于复制本、总结、摘要、分析、备忘录、编辑作品或任何其他包含、反映或源自保密信息的文档、文件或记录（以下称为“副本”）；</p>
                    <p>2.2.3 尽可能地将保密信息及其副本与接收方持有的所有其他文件和记录分开存放，并为接收方控制的保密信息及其副本提供防盗和防止未经授权访问等方面的保护。</p>
                    <p>2.3
                        接收方保证，在本协议约定的保密期限内，只在本协议所规定的合作范围内使用上述保密信息，并保证仅向评估、实施本协议约定的合作计划而必需披露的公司员工、董事、监事、高级管理人员、关联公司及外部专业机构进行披露，接收方保证上述人员清楚该保密信息的保密性和应承担的义务，并保证上述人员已同意接受本协议条款的约束，且确保上述人员承担保密责任的程度不低于本协议规定的程度。</p>
                    <p>2.4
                        在本协议约定的保密期限内,经中信科技提出要求，接收方应按照中信科技的指示将含有保密信息的所有文件或其他资料归还给中信科技；并/或者按照中信科技的指示予以销毁（包括但不限于以电子或数字形式存储的记录）。</p>
                    <p>2.5 接收方如发生中信科技的保密信息被泄漏或被第三方非法获取等情形时，接收方应当及时书面通知中信科技。</p>
                    <p></p>
                    <p>第三条 保密期限</p>
                    <p>3.1 本协议的保密期限，即接收方对中信科技保密信息、资料等负有保密义务的期限，为自本协议生效之日起<b class="underline-sm"></b>年，至<b
                        class="underline-sm"></b>年<b class="underline-sm"></b>月<b class="underline-sm"></b>日终止。</p>
                    <p>第四条 披露限制</p>
                    <p>
                        4.1未经中信科技事先书面许可，接收方不应全部或部分地将保密信息披露给任何人；但接收方可以将保密信息披露给已承诺遵守本协议项下保密和不披露义务的评估、实施本协议约定的合作计划而必需披露的公司员工、董事、监事、高级管理人员、关联公司及外部专业机构。</p>
                    <p>4.2
                        接收方可以披露按照法律、法规、规范性文件的要求、或监管机构的规定、或有管辖权的法院、仲裁机构或行政机构的指令和裁定须予披露的信息（以仅满足上述义务所需为限），但接收方应尽合理努力首先与中信科技进行充分沟通，以确定是否可能避免或限制该等强制性信息披露（除非在上述情况下，通知中信科技或与中信科技沟通是非法的或可能导致接收方触犯刑事法律）；其次，采取中信科技可能要求的所有措施实现上述避免或限制；第三，如果信息披露是必需的，则采取所有合理的措施在该信息披露前与中信科技协商该信息披露的内容（并且，如适用，与中信科技协商任何公告的措辞）。在前述情况下，可披露的保密信息仅以被合法要求披露的范围为限。</p>
                    <p></p>
                    <p>第五条 保密协议的终止</p>
                    <p>5.1 约定的保密期限届满，本协议终止；</p>
                    <p>5.2 “双方”约定的下列终止条件出现，本协议终止：</p>
                    <p>5.2.1 双方另行签署了保密协议，经双方书面确认，本协议终止；</p>
                    <p>5.2.2 本协议中涉及的合作项目未达成合作，或提前终止，经双方书面确认，本协议终止；</p>
                    <p>5.3 依据法律的相关规定终止。</p>
                    <p>第六条 协议终止或因任何原因失效后各方的权利义务</p>
                    <p>6.1 本协议终止或因任何原因失效后不影响接收方对协议终止前所披露的保密信息的保密义务。</p>
                    <p>6.2 自本协议终止或因任何原因失效之日起[ 10
                        ]天内，接收方应按照中信科技的指示将含有保密信息的所有文件或其他资料归还给中信科技；并/或者按照中信科技的指示予以销毁（包括但不限于以电子或数字形式存储的记录）。</p>
                    <p>第七条 陈述与保证</p>
                    <p>7.1接收方在本协议项下的义务对其合法继受人和被许可受让人均有约束力。</p>
                    <p>7.2不论本协议约定之合作计划是否成功，本协议所约定之保密义务和违约责任对接收方均有效。</p>
                    <p>7.3 双方同意，本协议生效之前披露的任何保密信息亦应适用本协议。</p>
                    <p></p>
                    <p>第八条 知识产权</p>
                    <p>8.1 中信科技向接收方披露保密信息所体现的知识产权权益（包括不限于商标、专利、著作权、商业秘密等知识产权权益）归中信科技享有，接收方不享有与该等保密信息相关的知识产权权益。</p>
                    <p></p>
                    <p>第九条 违约责任</p>
                    <p>9.1
                        接收方确认如接收方或接收方人员有违背本协议规定的行为的，则（1）接收方应根据中信科技的要求，采取补救措施；（2）向中信科技赔偿因其违约行为而使中信科技遭受的经济损失或任何政府机构的罚款以及中信科技为获得救济而发生的费用（包括：调查费、律师费、诉讼费等费用）。</p>
                    <p>第十条 法律适用与争议解决</p>
                    <p>10.1 本协议的订立、效力、解释、履行和争议均适用中华人民共和国法律。</p>
                    <p>10.2 因履行协议发生的任何争议或权利要求(“争议”)，均由各方友好协商解决。如协商不成，按下列方式处理：</p>
                    <p>10.2.1 报集团法律合规部协调解决，确需通过诉讼或仲裁方式解决的，须经集团领导批准。</p>
                    <p>10.2.2 如未能于争议开始后三十（30）日之内以10.2.1方式解决有关争议，则任一方均可向乙方所在地的人民法院起诉。</p>
                    <p></p>
                    <p>第十一条 其他</p>
                    <p>11.1 本协议自双方法定代表人或其授权代表签字并盖章之日起生效。本协议的有效期与第三条约定的保密期限相同，到期之后自动解除/终止。经双方协商一致，可以延长本协议的有效期。</p>
                    <p>11.2 本协议各条的标题仅为行文方便而设，不得视为等同于该条款所包含的全部内容。</p>
                    <p>11.3 本协议的任何条款的无效或被撤销，均不影响本协议其他条款的有效性。</p>
                    <p>11.4 本协议未尽事宜，双方经协商一致可签订补充协议。补充协议与本协议具有同等效力。</p>
                    <p>11.5 一方未能或迟延行使本协议项下的任何权利，不能被视为对此等权利或其它权利的放弃，且单独或部分行使此等权利，并不排除行使或进一步行使此等权利或行使其它权利。</p>
                    <p>11.6 本协议任何条款无效、不合法或不可强制执行，将不影响本协议其余条款继续有效。</p>
                    <p>11.7 双方商定的其他事项：[ 无 ]。</p>
                    <p>11.8 本协议正本一式[4 ]份，每一方各执[2]份，每份具有同等效力。</p>
                    <p></p>
                    <p>第十二条 通知和送达</p>
                    <p>12.1
                        本协议项下的通知应以当面递交、信件或传真方式按以下所示地址和号码发出，除非任何一方已书面通知其他方其变更后的地址和号码。通知如用当面递交方式发送的，签收时间为收到时间；用信件方式发送的，寄出之第三天为收到时间；以传真方式发送的，发出时间即为收到时间。</p>
                    <p></p>
                    <p>发给中信科技的通知应当发往下列地址：</p>
                    <p>地址：北京市朝阳区新源南路6号京城大厦1701室</p>
                    <p>邮政编码：</p>
                    <p>电话号码：010-59668392</p>
                    <p>传真：</p>
                    <p>收件人： 王芳</p>
                    <p></p>
                    <p>发给接收方的通知应当发往下列地址：</p>
                    <div class="dash-border">
                        <span class="redalert">当前为必填项</span>
                        <FormItem label="地址：" prop="accessory1Address" :label-width="100">
                            <Input type="text" v-model="confidentialityForm.accessory1Address" placeholder="请输入您的通信地址" style="width: 300px">
                            </Input>
                        </FormItem>
                        <FormItem label="邮政编码：" prop="accessory1Postcode" :label-width="100">
                            <Input type="text" v-model="confidentialityForm.accessory1Postcode" placeholder="请输入邮政编码" style="width: 300px">
                            </Input>
                        </FormItem>
                        <FormItem label="电话号码：" prop="accessory1Telephone" :label-width="100">
                            <Input type="text" v-model="confidentialityForm.accessory1Telephone" :maxlength="11" placeholder="请输入常用电话" style="width: 300px">
                            </Input>
                        </FormItem>
                        <FormItem label="传真：" prop="accessory1Fax" :label-width="100">
                            <Input type="text" v-model="confidentialityForm.accessory1Fax" placeholder="请输入公司传真" style="width: 300px">
                            </Input>
                        </FormItem>
                        <FormItem label="收件人：" prop="accessory1Recipients" :label-width="100">
                            <Input type="text" v-model="confidentialityForm.accessory1Recipients" :maxlength="255" placeholder="请输入收件人姓名" style="width: 300px">
                            </Input>
                        </FormItem>
                    </div>
                    <div class="sign-half">
                        <p>中信科技发展有限公司：</p>
                        <p>法定代表人或授权人签字：</p>
                        <p>盖章： </p>
                        <p>日期：<b class="underline-sm"></b>年<b class="underline-sm"></b>月<b class="underline-sm"></b>日</p>
                    </div>
                    <div class="sign-half">
                        <p class="bluealert bottomline">{{firstParty.fullname}}</p>
                        <p>法定代表人或授权人签字：</p>
                        <p>盖章：</p>
                        <p>日期：<b class="underline-sm"></b>年<b class="underline-sm"></b>月<b class="underline-sm"></b>日</p>
                    </div>
                    <p class="redalert" style="margin-top: 20px; display: block;  float: left;overflow: hidden; ">注：协议签署日期以线下双方确认为准</p>
                    <div style="clear: both"></div>
                    <FormItem style="margin-top: 20px;text-align: center;">
                        <Button type="primary" size="large" @click="handleSubmit('confidentialityForm')">确定</Button>
                        <Button type="primary" size="large" @click="goBack">返回</Button>
                    </FormItem>
                </Form>
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
                current:1,
                confidentialityForm: {},
                confidentialityRule: {
                    accessory1Address: [
                        { required: true, message: '该项为必填项', trigger: 'blur'},
                    ],
                    accessory1Postcode: [
                        { required: true, message: '该项为必填项', trigger: 'blur'},
                        { message: '请输入正确的邮政编码', trigger: 'blur', pattern: /^[0-9]{6}$/ }
                    ],
                    accessory1Telephone: [
                        { required: true, message: '该项为必填项', trigger: 'blur'},
                        { message: '请输入有效的手机号码', trigger: 'blur', pattern: /(^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$)/}
                    ],
                    accessory1Fax: [
                        { required: true, message: '该项为必填项', trigger: 'blur'},
                        { message: '请输入正确的传真号码', trigger: 'blur', pattern: /^[0-9]*$/}],
                    accessory1Recipients: [
                        { required: true, message: '该项为必填项', trigger: 'blur'},
                        { message: '存在不支持的字符', trigger: 'blur', pattern: /^[\u4E00-\u9FA5A-Za-z0-9]+$/}
                    ]
                }
            }
        },
        methods:{
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$emit('goEnterprise',this.confidentialityForm)
                    }else {
                        this.$Message.error('请正确填写信息！');
                    }
                })
            },
            goBack(){
                this.$emit('goCooperation')
            }
        },
        components:{
            'ci-agreement-step':agreementStep
        }
    }
</script>

<style lang="scss">

</style>
