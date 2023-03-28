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
                            1.申报路径：财务处主页→绩效工资、科研津补贴申报（谷歌、火狐浏览器）；
                        </View>
                        <View>
                            2.系统打印的重庆邮电大学劳务发放表--科研津补贴，项目负责人签字，部门盖章。每月5、6号，逢周末节假日顺延，交至财务处核算科（新行政楼2楼2011）绩效科、研津补贴专用投递箱。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                            1.适用人群：在职职工，项目组成员；
                        </View>
                        <View>
                            2.发放时间：月底与绩效工资合并发放；
                        </View>
                        <View>
                            3.计税方式：与工资薪金合并计税。
                        </View>

                    </View>
                </View>
            </View>

        )
    }


}