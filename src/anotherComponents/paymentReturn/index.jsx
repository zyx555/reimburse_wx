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
                        1.将款项转账入学校基本户（户名：重庆邮电大学，开户银行：工行重庆南山支行，账号：3100027409008801204）；
                        </View>
                        <View>
                        2.提供一份情况说明（下载地址：http://caiwu.cqupt.edu.cn/info/1041/1472.htm）交财务处核算科（新行政楼2楼2011）。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}