import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import Remarks from './remarks'
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
                            2.发票
                        </View>
                        <View>
                            3.设备入库单
                        </View>
                        <View>
                            4.验收报告
                        </View>
                        <View>
                            5.合同
                        </View>
                        <View>
                            6.大额货币资金申请表
                        </View>
                    </View>
                </View>
                <Remarks/>
            </View>
        )
    }


}