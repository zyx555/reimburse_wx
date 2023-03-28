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
                        凭证查询申请人提供《重庆邮电大学财务信息查询申请表》（下载地址：http://caiwu.cqupt.edu.cn/info/1043/1201.htm），经单位或项目负责人签字、单位盖章，交财务处处领导签字、盖财务公章后，到校档案馆办理查询
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        上年度以前的财务凭证一般于当年6月底前移交移交至档案馆
                        </View>
                    </View>
                </View>
            </View>

        )
    }


}