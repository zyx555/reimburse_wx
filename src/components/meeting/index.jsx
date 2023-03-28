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
                        1.网报审批单；
                        </View>
                        <View>
                        2.发票（其中餐饮发票须提供菜单）；
                        </View>
                        <View>
                        3.会议通知（办公自动化或学校主页上的会议通知可直接打印，其余会议通知需部门负责人签字并盖部门公章）；
                        </View>
                        <View>
                        4.实际参会人员签到表原件；
                        </View>
                        <View>
                        5.支付凭据：详见报销注意事项第2点要求；
                        </View>
                        <View>
                        6.合同：详见报销注意事项第3点要求。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.会议所有费用应在会议结束后一次性报销完毕；
                        </View>
                        <View>
                        2.使用科研经费主办、承办会议的，综合定额标准是会议费开支的上限，合计560元/人/天，应在综合定额标准内结算报销。其中：住宿费350元/人/天，伙食费130元/人/天，其他费用80元/人/天（包括会议室租用费、交通费、印刷费、办公文具费等）。
                        </View>
                        <View>
                        3.《中央列出违反八项规定清单80条》规定“会议用餐严格控制菜品种类、数量和份量，严禁提供高档菜肴，不安排宴请，不上烟酒；会议会场一律不摆花草，不制作背景板，不提供水果”。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}