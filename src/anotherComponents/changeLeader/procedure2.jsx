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
                        提交授权说明书至财务处核算科（新行政楼2楼2015），需经费负责人，被授权人签字并盖部门公章
                        </View>
                    </View>
                </View>
            </View>

        )
    }


}