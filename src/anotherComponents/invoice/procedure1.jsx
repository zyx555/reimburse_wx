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
                        1.合同复印件（首次开发票还需带合同原件）；
                        </View>
                        <View>
                        2.预开发票承诺书（不论款项是否已经收到，下载地址：http://caiwu.cqupt.edu.cn/info/1042/1321.htm）；
                        </View>
                        <View>
                        3.税金从项目支付的填内部收费结算单（下载地址：http://caiwu.cqupt.edu.cn/info/1041/1214.htm）；
                        </View>
                        <View>
                        4.没有项目的开票现场网银转税款。（户名：重庆邮电大学，开户银行：工行重庆南山支行，账号：3100027409008801204 用途备注姓名+税金）                                                                                          
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}