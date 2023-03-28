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
                    2.《重庆邮电大学因公出国（境）任务申请表》、《因公临出国（境）任务和预算内部审核表》、重庆市因公出国（境）人员审核表、重庆市人民政府出国赴港澳任务批件；
                    </View>
                    <View>
                    3.境内机票（行程单和登机牌），境外机票票据及登机牌，国外城市间交通费票据、住宿费票据（租房的还须提供租房合同）、其他费用票据（注册费、签证费、防疫、保险费等）、票据付款记录等材料。
                    </View>
                </View>
                </View>
                <View className='article_content'>
                <View className='article_title'>
                备注
                </View>
                <View className='at-article__p'>
                    <View>
                    按照学校规定，出国人员经费经国际处和人事处审核后，由校长审批。
                    </View>
                    
                </View>
                </View>
            </View>
        )
    }


}