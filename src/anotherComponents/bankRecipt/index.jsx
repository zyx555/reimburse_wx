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
                            经办人需提供对方单位名称、金额和付款日期等信息，到财务处资金结算科（新行政楼2楼2015）即可办理，如需要盖财务专用章的请到核算科（新行政楼2楼2011）办理。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                            受银行系统限制，只能打印6个月以内的银行回单。超过6个月以上的，请按凭证查询流程办理。
                            财务经办人员可能因其他业务外出，请事先预约。联系电话：62460941王老师。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}