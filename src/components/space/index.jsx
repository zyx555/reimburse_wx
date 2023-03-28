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
                            1.网报审批单，外币支付的版面费还应提供《重庆邮电大学涉外经费开支明细表》；
                        </View>
                        <View>
                            2.发票（国际刊物可提供Invoice或Receipt）；
                        </View>
                        <View>
                            3.论文录用或审稿通知；
                        </View>
                        <View>
                            4.出版社缴费通知；
                        </View>
                        <View>
                            5.已见刊文章封面及首页；
                        </View>
                        <View>
                            6.支付凭据：详见报销注意事项第2点要求。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                            1.由于文章发表周期长，可先网上填报《重庆邮电大学借款审批单》进行对公转账（若个人先行垫付，须提供付款记录），同时提供论文录用通知、缴费通知办理借款。文章发表后，及时办理借款冲账手续；
                        </View>
                        <View>
                            2.若报销会议注册费，会议论文无需见刊，提供论文即可。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}