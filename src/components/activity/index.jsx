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
                        2.发票；
                        </View>
                        <View>
                        3.支撑材料参考办公用品、工作餐、差旅等报销要求；
                        </View>
                        <View>
                        4.部门盖章的活动策划，人员名单。
                        </View>
                        
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.活动相关经费一次性报销；
                        </View>
                        <View>
                        2.各类业务超标不予报销；
                        </View>
                        <View>
                        3.奖品等需提供领取清单，并盖部门公章。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}