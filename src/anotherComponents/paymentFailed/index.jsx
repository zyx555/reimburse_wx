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
                        填写情况说明（下载地址：http://caiwu.cqupt.edu.cn/info/1041/1471.htm），交至财务处核算科（新行政楼2楼2011）
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}