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
                        1.填写经费下账说明（下载地址：http://caiwu.cqupt.edu.cn/info/1042/1443.htm），并提供相关佐证资料（如上级批文、合同、协议等）；
                        </View>
                        <View>
                        2.经签字盖章后提交至财务处，需新设项目的提交至预算科（新行政楼2楼2009），不需新设项目的提交至核算科（新行政楼2楼2011）。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}