import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

export default class index extends Component {
    handleClick0 = () => {
        Taro.navigateTo({ url: './procedure1' })
    }
    handleClick1 = () => {
        Taro.navigateTo({ url: './procedure2' })
    }
    handleClick2 = () => {
        Taro.navigateTo({ url: './procedure3' })
    }
    handleClick3 = () => {
        Taro.navigateTo({ url: './procedure4' })
    }

    render() {
        return (

            <View>
                <View className='at-article__p'>
                    <View>
                        1.公积金提取必须是重庆本地的房屋，购房合同或者房产证，发票时间1年之内。
                    </View>
                    <View>
                        2.交资料时间，每个月5日之前，遇到节假日顺延1日。
                    </View>
                    <View>
                        3.提公积金分五种情况，公积金贷款或组合贷款购房，商业贷款购房、全款购房，退休，租房所需资料如下：
                    </View>
                </View>
                <AtList>
                    <AtListItem title='首次提取' arrow='right' onClick={this.handleClick0} />
                    <AtListItem title='非首次提取' arrow='right' onClick={this.handleClick1} />
                    <AtListItem title='退休提取' arrow='right' onClick={this.handleClick2} />
                    <AtListItem title='租房提取' arrow='right' onClick={this.handleClick3} />
                </AtList>
            </View>
        )
    }
}
