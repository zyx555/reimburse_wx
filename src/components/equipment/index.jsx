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
    render() {
        return (

            <View>
                <AtList>
                    <AtListItem note='金额<2万元' arrow='right' onClick={this.handleClick0} />
                    <AtListItem note='科研经费（外来）＜20万，其余经费2万≤金额＜10万' arrow='right' onClick={this.handleClick1} />
                    <AtListItem note='科研经费（外来）≥20万，其余经费≥10万' arrow='right' onClick={this.handleClick2} />
                </AtList>
            </View>
        )
    }
}
