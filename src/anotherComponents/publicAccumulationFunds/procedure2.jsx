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
                        1、公积金贷款或组合贷款： ①身份证复印件②结婚证原件及复印件③房产证复印件④组合贷款商贷部分近1年还款明细。⑤离婚的提供离婚证原件及复印件，财产分割协议。   
                        </View>
                        <View>
                        2、商业贷款提取：①身份证复印件②结婚证原件及复印件③近1年还款明细④房产证复印件（或购房合同复印件，复印封面和备案登记证明即可）④离婚的提供离婚证原件及复印件，财产分割协议。                                                      
                        </View>
                        
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        首次提取成功的，公积金中心同时开通在线提取，以后每年以到账时间为准，自己在手机上操作提取。
                        </View>
                    </View>
                </View>
            </View>

        )
    }


}