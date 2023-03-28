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
                        1.重庆邮电大学探亲路费报销单（财务在线下载）；
                        </View>
                        <View>
                        2.人事处签字审批后交财务处核算科（新行政楼2楼2011）。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}