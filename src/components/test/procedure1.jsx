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
                            1.网报审批单；
                        </View>
                        <View>
                        2.发票（必须备注具体服务事项，如无法备注，必须由服务单位出具盖章的服务内容情况说明）。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}