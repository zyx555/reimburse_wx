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
                        2.项目计划任务书或合同；
                        </View>
                        <View>
                        3.外拨单位为行政事业单位的，提供加盖对方单位印章的银行回单或收款确认书。外拨单位为为企业的，提供发票。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}