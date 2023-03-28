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
                        2.派出单位公函、重庆邮电大学国内公务接待审批单、重庆邮电大学国内公务接待清单；
                        </View>
                        <View>
                        3.发票；
                        </View>
                        <View>
                        4.菜单；
                        </View>
                        <View>
                        5.支付凭据：详见报销注意事项第2点要求。
                        </View>
                    </View>
                </View>
                <View className='article_content'>
                    <View className='article_title'>
                        备注
                    </View>
                    <View className='at-article__p'>
                        <View>
                        1.用餐：确因工作需要，可安排一次接待工作用餐，用餐标准为100元/人/餐；
                        </View>
                        <View>
                        2.陪餐人数：接待对象在 10 人以内的，陪餐人数不得超过 3 人；超过 10人的，不得超过接待对象人数的三分之一；
                        </View>
                        <View>
                        3.国内公务用餐可以安排自助餐或桌餐，供应家常菜。不得提供鱼翅、燕窝等高档菜肴和用野生保护动物制作的菜肴，不得提供香烟，不得饮酒（包括自备酒），不得使用私人会所、高消费餐饮场所。
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}