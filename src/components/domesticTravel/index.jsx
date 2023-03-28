import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './index.scss'
export default class Index extends Component {

    render() {
        return (
            <View>
                <View className='article_content'>
                    <View className='article_title'>
                        所需材料/流程
                    </View>
                    <View className='at-article__p'>
                        <View>
                            1.网报审批单、因公出差审批单（必须盖部门公章）；
                        </View>
                        <View>
                            2.城市间交通费：高铁、机票、船票等，外地租车需附合同或协议；
                        </View>
                        <View>
                            3.住宿费：住宿费发票；
                        </View>
                        <View>
                            4.培训费：发票，会议/培训通知 ；
                        </View>
                        <View>
                            5.支付凭据：城市间交通费以外的费用提供支付凭据，详见报销注意事项第2点要求。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                            1.因公出差应履行事前审批，因公出差审批单日期应早于或等于出差日期；
                        </View>
                        <View>
                            2.若往返起始地不是重庆，应提供说明
                        </View>
                        <View>
                            3.交通工具、住宿等超过标准的部分由个人自理；
                        </View>
                        <View>
                            4.原则上实际发生住宿而无住宿费发票的，不予报销。若出差期间对方单位承担住宿费用，应提供对方单位出具的有效证明（加盖对方单位公章）；
                        </View>
                        <View>
                            5.因工作需要邀请校外专家来校讲座等，按规定标准报销其交通费和住宿费（校外人员不可领取伙食补助、公杂补助）；
                        </View>
                        <View>
                            6.二级单位主要负责同志因公出差审批单由“外出请假申请表（OA申请）”替代；
                        </View>
                        <View>
                            7.机票原则上应该公务机票网购买，未在公务网购买机票的，须提供“说明+证明+登机牌”材料（如机票价格比公务网便宜的截图证明、因紧急事项出差公务网无此航班等）；
                        </View>
                        <View>
                            8.自驾不予报销；
                        </View>
                        <View>
                            9.从学校到出发地交通费：使用B、G、E、F、Y科研经费报销市内差旅费，参照《重庆邮电大学中央财政科研经费差旅费管理办法（试行）》（重邮〔2021〕253 号）执行，使用其余经费的，公杂和市内交通费二选一。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}