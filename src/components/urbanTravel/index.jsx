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
                    1.网报审批单；
                    </View>
                    <View>
                    2.交通费：出租车票，网约车发票（含行程单），定点租赁服务单位市内租车费发票（含清单）；
                    </View>
                    <View>
                    3.住宿费：住宿费发票；
                    </View>
                    <View>
                    4.培训费：发票，会议/培训通知（无通知须由对方单位提供盖章的住宿情况说明）；
                    </View>
                    <View>
                    5.支付凭据：详见报销注意事项第2点要求。
                </View>
                </View>
                </View>
                <View className='article_content'>
                <View className='article_title'>
                备注
                </View>
                <View className='at-article__p'>
                    <View>
                    1.同一或相连报销单中出现的连号出租车票、同天同一出租车票不予报销，特殊情况说明原因；
                    </View>
                    <View>
                    2.公共交通车票必须提供由公交公司出具的正式行程单；
                    </View>
                    <View>
                    3.公务车辆定点租赁服务单位可在“办公自动化—事务通知”中搜索“公务车辆定点租赁服务单位”；
                    </View>
                    <View>
                    4.使用B、G、E、F、Y科研经费报销市内差旅费，参照《《重庆邮电大学中央财政科研经费差旅费管理办法（试行）》（重邮〔2021〕253 号）执行；
                    </View>
                    <View>
                    5.自驾不予报销。
                </View>
                </View>
                </View>
            </View>
        )
    }


}