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
                        填写填写《财务处用印申请表》（下载地址：http://caiwu.cqupt.edu.cn/info/1042/1462.htm）并签章→财务处核算科（新行政楼2楼2011）盖章。
                        </View>
                    </View>
                </View>
                <Remark />
            </View>
        )
    }


}