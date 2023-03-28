import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './negativeList.scss'


import c from '../../img/c.svg'
import e from '../../img/e.svg'
import f from '../../img/notes.svg'
import h from '../../img/nib.svg'
import i from '../../img/i.svg'
import l from '../../img/l.svg'
import m from '../../img/m.svg'
import q from '../../img/q.svg'
import r from '../../img/r.svg'

export default class Index extends Component {
    itemClick = (item, index) => {
        switch (index) {
            case 0:
                Taro.navigateTo({ url: '../../negativeComponents/equipment/index' })
                break;
            case 1:
                Taro.navigateTo({ url: '../../negativeComponents/material/index' })
                break;
            case 2:
                Taro.navigateTo({ url: '../../negativeComponents/test/index' })
                break;
            case 3:
                Taro.navigateTo({ url: '../../negativeComponents/book/index' })
                break;
            case 4:
                Taro.navigateTo({ url: '../../negativeComponents/meeting/index' })
        break;
        case 5:
            Taro.navigateTo({url:'../../negativeComponents/otherExpenses/index'})
        break;
        case 6:
            Taro.navigateTo({url:'../../negativeComponents/outFunds/index'})
        break;
       
        
        }
    }
    itemClick2=(item,index)=>{
        switch(index){
            case 0:
                Taro.navigateTo({url:'../../negativeComponents/splitPayment/index'})    
            break;
            case 1:
                Taro.navigateTo({url:'../../negativeComponents/change/index'})
            break;
            case 2:
                Taro.navigateTo({url:'../../negativeComponents/e-invoice/index'})

        }
    }
    render() {
        return (
            <View>
                <View className='title1'>一、常见经济业务典型问题</View>
                <AtGrid onClick={this.itemClick.bind(this)} data={
                    [
                        {
                            image: i,
                            value: '设备费'
                        },
                        {
                            image: h,
                            value: '材料费'
                        },
                        {
                            image: m,
                            value: '测试化验加工费'
                        },
                        {
                            image: e,
                            value: '出版/文献/信息传播/知识产权事务费'
                        },
                        {
                            image: c,
                            value: '会议/差旅'
                        },
                        {
                            image: l,
                            value: '其他费用'
                        },
                        {
                            image: l,
                            value: '外拨经费'
                        }
                    ]} />



                <View className='title1'>二、其他典型问题</View>
                <AtGrid onClick={this.itemClick2.bind(this)} data={
                    [
                        {

                            image: r,
                            value: '拆分支付'
                        },
                        {
                            image: q,
                            value: '随意调账变动'
                        },
                        {
                            image: f,
                            value: '电子发票'
                        },
                    ]
                } />
            </View>
        )
    }
}