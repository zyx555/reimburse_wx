import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
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
                        前置环节为科技处或社科处，科研人员不需前往财务处办理。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}