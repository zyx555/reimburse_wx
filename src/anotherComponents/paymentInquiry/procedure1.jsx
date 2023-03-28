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
                        经办人需提供来款的付款单位名称、金额和付款日期等信息，到财务处资金结算科（新行政楼2楼2015）即可办理，或电话62460941联系王老师查询。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        财务经办人员可能因其他业务外出，请事先预约。联系电话：62460941王老师。
                        </View>
                      
                    </View>
                </View>
            </View>
        )
    }


}