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
                            1.使用外来科研项目（B、G、F、J、D、H、S、E类经费）单笔金额20万元及以上，其他项目单笔金额10万元及以上的支付，执行大额支付审批程序。
                        </View>
                        <View>
                            2.申请人规范填写《重庆邮电大学大额货币资金支付申请表》（下载地址：http://caiwu.cqupt.edu.cn/info/1041/1212.htm）及日常报销材料，经项目负责人、单位负责人审批盖章后交至财务处综合科（新行政楼2楼2007）审核。
                        </View>
                        <View>
                            3.审核通过后,由财务处将资金支付申请资料报送校领导签批并完成后续报销。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                            1.使用单位在向财务处提出大额资金支付申请前，必须确保所需经费预算已落实；
                        </View>
                        <View>
                            2.大额货币资金业务至少提前5个工作日申请。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}