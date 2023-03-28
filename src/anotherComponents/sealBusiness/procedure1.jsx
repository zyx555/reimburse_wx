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
                        以下2点满足其一即可盖章：
                        </View>
                        <View>
                        1.填写《财务处用印申请表》（下载地址：http://caiwu.cqupt.edu.cn/info/1042/1462.htm）并签章；
                        </View>
                        <View>
                        2.需要盖章的资料上，已有财务处领导或相关工作人员的签字。
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        盖章业务AB角人员：金辉、帅霞、孙琼
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}