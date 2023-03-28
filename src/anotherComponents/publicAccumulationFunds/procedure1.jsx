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
                        1、公积金贷款或组合贷款购房首次提取：①身份证复印件②结婚证原件及复印件③组合贷款商贷部分还款明细（还了几个月打印几个月）④房产证复印件（或购房合同复印件，复印封面和备案登记证明即可）。                                                        
                        </View>
                        <View>
                        2、商业贷款首次提取：①身份证复印件②结婚证原件及复印件③还款明细（还了几个月打印几个月）④房产证原件和复印件（或购房合同复印件，复印封面和备案登记证明即可）⑤发票原件及复印件（或开发商盖财务章的收据，契税发票原件及复印件）⑥借款合同原件和复印件（复印封面和房子相关的信息）
                        </View>
                        <View>
                        3、全款购房：①身份证复印件②结婚证原件及复印件③房产证复印件（或购房合同复印件，复印封面和备案登记证明即可）④发票原件及复印件。
                        </View>
                        <View>
                        4、换房提公积金的参照上述资料加换房说明。
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