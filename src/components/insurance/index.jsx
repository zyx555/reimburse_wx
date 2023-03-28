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
                        2.发票及投保清单。
                        </View>
                        <View>
                        3.合同：详见报销注意事项第3点要求。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}