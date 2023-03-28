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
                        申请人提供《重庆邮电大学财务信息查询申请表》（下载地址：http://caiwu.cqupt.edu.cn/info/1043/1201.htm），经单位或项目负责人签字、单位盖章，交财务处处领导签字后，交由财务处综合科（新行政楼2楼2007）办理所需查询财务资料。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.需明确查询财务资料的内容。
                        </View>
                        <View>
                        2.财务经办人员可能因其他业务外出，请事先预约。联系电话：62834766帅老师。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}