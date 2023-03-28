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
                        方式一：关注微信公众号“重庆邮电大学财务处”，点击“教工查询—来款认领”，输入“来款单位名称”或“金额区间”，即可查询来款情况。
                        </View>
                        <View>
                        方式二：进入办公自动化平台，点击“财务在线”，进入“2019年及以后网上服务综合平台—财务查询系统”，点击【来款信息】→【来款查询】进入操作界面。
                        </View>
                    </View>
                </View>
    
            </View>

        )
    }


}