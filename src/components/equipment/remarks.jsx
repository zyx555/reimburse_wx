import { Component } from "react";
import {View} from '@tarojs/components'
import './index.scss'
export default class Index extends Component{
   render(){
    return(
        <View className='article_content'>
        <View className='article_title'>
            备注
        </View>
        <View className='at-article__p'>
            <View>
            1.设备入库单“经费信息”栏，须与票据报销审批单上填写的“项目编号”一致；
            </View>
            <View>
            2.若资产处在报销资料上盖有“市财政支付”字样的蓝色章，请直接将设备报销票据交到资产处采购中心，待资产处采购中心录入系统后，由资产处移交给财务处；
            </View>
            <View>
            3.购买国产设备，应向购买方索取增值税专用发票，增值税专用发票上分别注明销售额和销项税额；同时，在办理报销等相关手续时，应将发票联、抵扣联分别粘贴到两张票据粘贴纸上，如为增值税电子发票，请打印两张作为发票联和抵扣联。
            </View>
        </View>
    </View>
    )
   }
}