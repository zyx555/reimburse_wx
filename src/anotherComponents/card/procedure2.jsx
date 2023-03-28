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
                        1.新进教工，本人带有效证件，人事处分配的统一认证码，电子档证件照（红蓝背景均可）；
                        </View>
                        <View>
                        2.临聘人员由所在部门提供办卡证明并加盖公章，本人带有效证件，电子档证件照（红蓝背景均可）
                        </View>
                        
                    </View>
                </View>
            </View>

        )
    }


}