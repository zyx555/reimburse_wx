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
                        方式一：凭证查询申请人提供《重庆邮电大学财务信息查询申请表》（下载地址：http://caiwu.cqupt.edu.cn/info/1043/1201.htm），经单位或项目负责人签字、单位盖章，交财务处处领导签字后，到财务处稽核科（新行政楼2楼2013）办理查询；                                                                 
                        </View>
                        <View>
                        方式二：项目负责人（被授权人）直接从学校财务网上综合服务平台登陆财务查询系统，在网上进行查询，查看点击相关项目收支→凭证预览，根据需要点击右上角“下载”后，即可打印对应的会计凭证及附件                                                             
                        </View>
                    </View>
                </View>

                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.会计凭证影像化工作从2021年11月开始实施，目前凭证影像化查询只上线了2021年下半年的会计凭证，2021年上半年的影像化凭证后续将陆续上线；     
                        </View>
                        <View>
                        2.因凭证影像化与报销时间存在一定的时间差，如暂未查询到影像化凭证，请到财务处稽核科办理查询        联系电话：62460520
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}