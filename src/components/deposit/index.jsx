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
                        1.重庆邮电大学履约保证金支付申请表（资产处主页下载）；
                        </View>
                        <View>
                        2.资产处规定的其他附件。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}