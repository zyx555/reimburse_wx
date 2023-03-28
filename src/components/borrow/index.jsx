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
                            1.借款审批单；
                        </View>
                        <View>
                            2.提供与各类报销业务一致的支撑材料，不含发票、出版文章封面等。（借款金额大于2万元且入个人卡的，详见报销注意事项第4点要求）
                        </View>
                        
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.差旅费一般不借款，建议使用公务卡结算；
                        </View>
                        <View>
                        2.借款人应是在职在编教职工；
                        </View>
                        <View>
                        3.取得发票后应及时在网报系统中制作冲账报销单，并将发票和冲账报销单及时提交至财务处，办理冲销。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}