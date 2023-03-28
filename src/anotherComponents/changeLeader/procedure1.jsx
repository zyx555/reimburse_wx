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
                        需要区分科研经费和非科研经费，分别填表、签字盖章之后交预算管理科。其中（1）科研经费下载地址为http://caiwu.cqupt.edu.cn/info/1042/1442.htm，（2）非科研经费下载地址为http://caiwu.cqupt.edu.cn/info/1042/1441.htm
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}