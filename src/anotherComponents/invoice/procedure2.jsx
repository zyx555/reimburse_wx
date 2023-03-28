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
                            1.合同复印件（一式二份）；
                        </View>
                        <View>
                            2.预开发票承诺书（不论款项是否已经收到，下载地址：http://caiwu.cqupt.edu.cn/info/1042/1321.htm）；
                        </View>
                        <View>
                            3.科委盖章的技术合同登记表（一式二份）。
                        </View>
                    </View>
                    </View>
                    <View className='article_content'>
                        <View className='article_title'>
                            备注
                        </View>
                        <View className='at-article__p'>
                            <View>
                            免税办理需带上合同原件先咨询财务处领导，然后到科技处办理。
                            </View>
                

                        </View>
                    </View>
                </View>

                )
    }


}