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
    
    render() {
        return (

            <View>
                <AtList>
                    <AtListItem title='项目负责人变更' arrow='right' onClick={this.handleClick0} />
                    <AtListItem title='经费负责人授权签字变更' arrow='right' onClick={this.handleClick1} />
                   
                </AtList>
            </View>
        )
    }
}
