import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Remark from './remark'
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
                        《技术合同登记表》经科技处或社科处盖章→
财务处核算科（新行政楼2楼2011）盖章
                        </View>
                    </View>
                </View>
                <Remark />
            </View>
        )
    }


}