import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './list.scss'

import a from '../../img/a.svg'
import b from '../../img/b.svg'
import c from '../../img/c.svg'
import d from '../../img/d.svg'
import e from '../../img/e.svg'
import f from '../../img/notes.svg'
import g from '../../img/g.svg'
import h from '../../img/nib.svg'
import i from '../../img/i.svg'
import j from '../../img/users.svg'
import k from '../../img/k.svg'
import l from '../../img/l.svg'
import m from '../../img/m.svg'
import n from '../../img/n.svg'
import o from '../../img/o.svg'
import p from '../../img/p.svg'
import q from '../../img/q.svg'
import r from '../../img/r.svg'
import s from '../../img/s.svg'
import t from '../../img/t.svg'
import u from '../../img/user-card.svg'

export default class list extends Component {

  itemClick = (item, index) => {
    console.log(index)
    switch (index) {
      case 0:
        Taro.navigateTo({ url: '../../components/urbanTravel/index' })
        break;
      case 1:
        Taro.navigateTo({ url: '../../components/domesticTravel/index' })
        break;
      case 2:
        Taro.navigateTo({ url: '../../components/internationalTravel/index' })
        break;
      case 3:
        Taro.navigateTo({ url: '../../components/expressDelivery/index' })
        break;
      case 4:
        Taro.navigateTo({ url: '../../components/book/index' })
        break;
      case 5:
        Taro.navigateTo({ url: '../../components/space/index' })
        break;
      case 6:
        Taro.navigateTo({ url: '../../components/publishingBook/index' })
        break;
      case 7:
        Taro.navigateTo({ url: '../../components/patentAgent/index' })
        break;
      case 8:
        Taro.navigateTo({ url: '../../components/officeSupplies/index' })
        break;
      case 9:
        Taro.navigateTo({ url: '../../components/equipment/index' })
        break;
      case 10:
        Taro.navigateTo({ url: '../../components/meeting/index' })
        break;
      case 11:
        Taro.navigateTo({ url: '../../components/officialReceptions/index' })
        break;
      case 12:
        Taro.navigateTo({ url: '../../components/cooperate/index' })
        break;
      case 13:
        Taro.navigateTo({ url: '../../components/test/index' })
        break;
      case 14:
        Taro.navigateTo({ url: '../../components/borrow/index' })
        break;
      case 15:
        Taro.navigateTo({ url: '../../components/activity/index' })
        break;
      case 16:
        Taro.navigateTo({ url: '../../components/insurance/index' })
        break;
      case 17:
        Taro.navigateTo({ url: '../../components/InstituteDues/index' })
        break;
      case 18:
        Taro.navigateTo({ url: '../../components/software/index' })
        break;
      case 19:
        Taro.navigateTo({ url: '../../components/deposit/index' })
        break;
      case 20:
        Taro.navigateTo({ url: '../../components/transfer/index' })
        break;
      case 21:
        Taro.navigateTo({ url: '../../components/travelMoney/index' })
        break;
    }
  }

  itemClick2 = (item, index) => {
    console.log(index)
    switch (index) {
      case 0:
        Taro.navigateTo({ url: '../../anotherComponents/largePayment/index' })
        break;
      case 1:
        Taro.navigateTo({ url: '../../anotherComponents/paymentFailed/index' })
      case 2:
        Taro.navigateTo({ url: '../../anotherComponents/paymentReturn/index' })
        break;
      case 3:
        Taro.navigateTo({ url: '../../anotherComponents/giveFunds/index' })
        break;
      case 4:
        Taro.navigateTo({ url: '../../anotherComponents/resign/index' })
        break;
      case 5:
        Taro.navigateTo({ url: '../../anotherComponents/getFunds/index' })
        break;
      case 6:
        Taro.navigateTo({ url: '../../anotherComponents/budgetAdjustment/index' })
        break;
      case 7:
        Taro.navigateTo({ url: '../../anotherComponents/changeLeader/index' })
        break;
      case 8:
        Taro.navigateTo({ url: '../../anotherComponents/bankRecipt/index' })
        break;
      case 9:
        Taro.navigateTo({ url: '../../anotherComponents/license/index' })
        break;
      case 10:
        Taro.navigateTo({ url: '../../anotherComponents/paymentInquiry/index' })
        break;
      case 11:
        Taro.navigateTo({ url: '../../anotherComponents/financialDataQuery/index' })
        break;
      case 12:
        Taro.navigateTo({ url: '../../anotherComponents/voucherQuery/index' })
        break;
      case 13:
        Taro.navigateTo({ url: '../../anotherComponents/sealBusiness/index' })
        break;
      case 14:
        Taro.navigateTo({ url: '../../anotherComponents/card/index' })
        break;
      case 15:
        Taro.navigateTo({ url: '../../anotherComponents/publicAccumulationFunds/index' })
        break;
      case 16:
        Taro.navigateTo({ url: '../../anotherComponents/invoice/index' })
    }

  }
  render() {
    return (
      <View className='index'>
        <View className='title1'>一、日常报销业务</View>
         <View className='grid'>
        <AtGrid onClick={this.itemClick.bind(this)} data={
          [
            {
              image:a ,
              value: '市内差旅（主城九区）',
            },
            {
              image:b,
              value: '国内差旅（主城九区以外）'
            },
            {
              image: c,
              value: '国际差旅'
            },
            {
              image: d,
              value: '邮寄快递'
            },
            {
              image: e,
              value: '图书、资料、印刷'
            },
            {
              image:f,
              value: '版面、审稿、会议注册'
            },
            {
              image: e,
              value: '出版书籍'
            },
            {
              image: g,
              value: '专利代理'
            },
            {
              image: h,
              value: '办公用品、专用材料'
            },
            {
              image: i,
              value: '固定资产、低值易耗品'
            },
            {
              image: j,
              value: '会议（主办/承办会议）'
            },
            {
              image: k,
              value: '公务接待'
            }
            ,
            {
              image: l,
              value: '合作单位拨款、科研协作（外协）'
            }
            ,
            {
              image: m,
              value: '测试、化验、加工、技术服务费、信息服务费等服务'
            }
            ,
            {
              image: n,
              value: '借款'
            }
            ,
            {
              image: j,
              value: '举办各类活动（学生、党建等）'
            }
            ,
            {
              image: l,
              value: '保险费'
            }
            ,
            {
              image: n,
              value: '学会会费'
            },
            {
              image: g,
              value: '软著'
            }
            ,
            {
              image: n,
              value: '履约保证金'
            }
            ,
            {
              image: l,
              value: '内部转账'
            },
            {
              image: n,
              value: '探亲路费'
            }
          ]
        } />

</View>

        <View className='title1'>二、其他综合业务</View>

        <AtGrid onClick={this.itemClick2.bind(this)} data={
          [
            {
              image: l,
              value: '大额支付'
            },
            {
              image: o,
              value: '打款失败'
            },
            {
              image: n,
              value: '款项交回'
            },
            {
              image: k,
              value: '人员经费发放'
            },
            {
              image: p,
              value: '离职办理'
            },
            {
              image: l,
              value: '经费入账'
            },
            {
              image: q,
              value: '预算调整'
            },
            {
              image: p,
              value: '项目负责人及授权签字变更'
            },
            {
              image: r,
              value: '银行回单打印'
            },
            {
              image: f,
              value: '开户许可证及银行信息查询'
            },
            {
              image: r,
              value: '银行来款查询'
            },
            {
              image: s,
              value: '财务数据、财务报表查询'
            },
            {
              image: s,
              value: '凭证查询'
            },
            {
              image: t,
              value: '盖章业务'
            },
            {
              image: u,
              value: '一卡通业务'
            },
            {
              image: l,
              value: '公积金提取'
            }
            ,
            {
              image:r,
              value: '发票开具'
            }
          ]
        } />

      </View>
    )
  }
}
