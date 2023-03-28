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
                            1.网报审批单
                        </View>
                        <View>
                            2.发票
                        </View>
                        <View>
                            3.图书封面；
                        </View>
                        <View>
                            4.书籍书号信息页；
                        </View>
                        <View>
                            5.合同：详见报销注意事项第3点要求。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                            由于出版周期长，可先网上填报《重庆邮电大学借款审批单》，同时提供出版合同原件办理借款。出版后，及时办理借款冲账手续。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}