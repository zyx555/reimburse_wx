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
                        1.向经费归口管理部门提交调整申请，经归口管理部门签字盖章（特殊业务需由经费归口管理部门提交学校办公会审定）；
                        </View>
                        <View>
                        2.申请提交财务处预算科（新行政楼2楼2009）。
                        </View>
                        
                    </View>
                </View>
            </View>

        )
    }


}