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
                        经办人在财务主页（财务在线）下载服务中下载打印《重庆邮电大学财务信息查询表》，在纸质件上填写查询用途，并在查询内容注明开户许可证及需要的份数，请查询单位或项目负责人签字、单位盖章，财务部门负责人签字后，到新行政楼2楼2015即可办理。
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