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
                        1.申报路径：财务处主页→综合服务平台→网上申报管理系统（谷歌/360极速浏览器）；
                        </View>
                        <View>
                        2.系统打印的重庆邮电大学劳务发放表，项目负责人签字，部门盖章，通过网络报销投递机投单。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.适用人群：非在职职工；
                        </View>
                        <View>
                        2.交单时间：随时投递；
                        </View>
                        <View>
                        3.发放时间：1-20号提交当月依次发放，20号之后提交次月发放；
                        </View>
                        <View>
                        4.计税方式：当月累计计税，次年汇算清缴自行在“个税APP”补退税。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}