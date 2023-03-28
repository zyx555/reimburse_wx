import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtDivider,AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <>
    
      <View className='at-article'>
        <View className='article_title'>
          《重庆邮电大学财务管理办法》（重邮〔2015〕126号）第二十六条规定，经费负责人必须按照审批权限规定严格控制和审查支出情况，对支出的真实性、合法性、相关性、合理性负责。
        </View>
        <View className='article_subTitle'>
          报销注意事项：
        </View>
        <View className='at-article__content'>
          <View className='at-article__p'>
            1.发票清单要求：若发票上显示“详见销货清单”，无论金额大小，都应当提供与发票对应的销货清单。单张发票<Text className='keyNote'>≥100元</Text>时，发票上应注明商品/服务内容、单价、数量等明细信息，否则应当提供加盖公章的明细清单或网上订单截图。
          </View>
          <View className='at-article__p'>
            2.银行卡结算要求：单笔支付超过<Text className='keyNote'>200元（含）以上</Text>的情况应提供刷卡POS单、网上支付记录等可以清晰显示对应款项已成功支付的支付凭据（其中支付成功的手机提示短信、网上实付款成功截图应显示出卡号信息），并附说明或学生证复印件。
          </View>
          <View className='at-article__p'>
            3.合同或协议要求：无论金额大小，合同或协议作报销附件时需双方签章（单位公章或合同专用章），首次付款或借款均需提供合同原件。其中，付款金额<Text className='keyNote'>≥20000元应提供合同或协议。</Text>
          </View>
          <View className='at-article__p'>
            4.<Text className='keyNote'>借款金额≥20000元</Text>且打入个人银行卡的，借款审批单须财务处领导签字。
          </View>
          <View className='at-article__p'>
            5.经费负责人作为当事人的报销审批手续：项目负责人为处级及以上领导，交叉审签或报上级领导审签；项目负责人为其他人员时，由其领导审签。
          </View>
          <View className='at-article__p'>
            6.<Text className='keyNote'>票据遗失</Text>报销流程：（1）因保管不当丢失的交通票据，必须由本人写出书面说明，提供旁证证明，经单位领导和财务处领导审批；（2）其余从外单位取得的原始凭证如有遗失，应当由经办单位取得原出具凭证单位盖有公章的证明，需注明原来凭证的号码、金额和内容等，并由经办单位负责经费审批的领导、校财务处负责人签字，经主管财务的校领导审批。
          </View>
          <View className='at-article__p'>
            7.各类<Text className='keyNote'>情况说明</Text>：需经办人和项目负责人签字，并盖部门公章，特殊情况还需部门负责人或业务归口部门负责人签字；
          </View>
          <View className='at-article__p'>
            8.每年<Text className='keyNote'>4月1日起</Text>不再报销上年发票（版面费发票除外）；
          </View>
          <View className='at-article__p'>
            9.<Text className='keyNote'>职能部门日常性公用经费</Text>一次借款或报销金额<Text className='keyNote'>≥5000元</Text>，由分管本单位工作的校领导审批。
          </View>
        </View>
      
      </View>
      <AtDivider>
          {/* <AtIcon value='check-circle'></AtIcon> */}
        </AtDivider>
      </>
    )
  }
}
