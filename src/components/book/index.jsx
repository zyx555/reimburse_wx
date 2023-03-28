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
                    2.发票，单张发票金额≥100元，参考报销注意事项第1点；
                    </View>
                    <View>
                    3.支付凭据：详见报销注意事项第2点要求；
                    </View>
                    <View>
                    4.合同：详见报销注意事项第3点要求。
                    </View>
                </View>
                </View>

                <View className='article_content'>
                <View className='article_title'>
                备注
                </View>
                <View className='at-article__p'>
                    <View>
                    关于进一步明确购置图书办理固定资产入账相关事宜的通知http://oa.cqupt.edu.cn/notify.do?method=oneNotify&notifyId=38563702971688208&type=1
                </View>
                </View>
            </View>
            </View>
        )
    }


}