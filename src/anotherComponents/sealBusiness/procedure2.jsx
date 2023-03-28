import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import { AtList, AtListItem } from "taro-ui"

import './index.scss'
export default class Index extends Component {

    handleClick0 = () => {
        Taro.navigateTo({ url: './procedure3' })
    }
    handleClick1 = () => {
        Taro.navigateTo({ url: './procedure4' })
    }
    handleClick2 = () => {
        Taro.navigateTo({ url: './procedure5' })
    }
    handleClick3 = () => {
        Taro.navigateTo({ url: './procedure6' })
    }
    handleClick4 = () => {
        Taro.navigateTo({ url: './procedure7' })
    }
    
    render() {
        return (
            <View>
                <AtList>
                    <AtListItem title='科研结题财务数据表' arrow='right' onClick={this.handleClick0} />
                    <AtListItem title='科研预算申报资料' arrow='right' onClick={this.handleClick1} />
                    <AtListItem title='科研办理免税资料' arrow='right' onClick={this.handleClick2} />
                    <AtListItem title='凭证影印件、询证函、绩效核算表及其他' arrow='right' onClick={this.handleClick3} />
                    <AtListItem title='银行回单' arrow='right' onClick={this.handleClick4} />
                </AtList>
            </View>
        )
    }

}