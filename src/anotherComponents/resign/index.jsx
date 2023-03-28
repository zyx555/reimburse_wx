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
                        《离职通知单》到财务处一卡通中心办理签字手续→《离职通知单》到财务处核算科（新行政楼2楼2011）办理签字手续→《离职通知单》到财务处综合科（新行政楼2楼2007）办理盖章手续。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.办理离职前须提前结清所有借款；
                        </View>
                        <View>
                        2.若有退赔，须提前将退赔款项汇款至学校账户，前往会计核算打印汇款银行回单。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}