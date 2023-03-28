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
                            1.网报审批单
                        </View>
                        <View>
                            2.发票
                        </View>
                        <View>
                            3.专利受理通知书；
                        </View>
                        <View>
                            4.支付凭据：详见报销注意事项第2点要求。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.专利定点服务机构详情见OA上《关于公布重庆邮电大学专利代理定点服务机构的通知》；
                        </View>
                        <View>
                        2.特殊业务请归口管理部门签字同意报销。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}