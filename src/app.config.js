export default defineAppConfig({
  pages: [
    "pages/list/list",
    "pages/index/index",
    'pages/negativeList/negativeList',


    "components/urbanTravel/index",
    "components/domesticTravel/index",
    "components/internationalTravel/index",
    "components/expressDelivery/index",
    "components/book/index",
    "components/space/index",
    "components/publishingBook/index",
    "components/patentAgent/index",
    "components/officeSupplies/index",
    "components/equipment/index",
    "components/equipment/procedure1",
    "components/equipment/procedure2",
    "components/equipment/procedure3",
    "components/meeting/index",
    "components/officialReceptions/index",
    "components/cooperate/index",
    "components/test/index",
    "components/test/procedure1",
    "components/test/procedure2",
    "components/borrow/index",
    "components/activity/index",
    "components/insurance/index",
    "components/InstituteDues/index",
    "components/software/index",
    "components/deposit/index",
    "components/transfer/index",
    "components/travelMoney/index",

    "anotherComponents/largePayment/index",
    "anotherComponents/paymentFailed/index",
    "anotherComponents/paymentReturn/index",
    "anotherComponents/giveFunds/index",
    "anotherComponents/giveFunds/procedure1",
    "anotherComponents/giveFunds/procedure2",
    "anotherComponents/resign/index",
    "anotherComponents/getFunds/index",
    "anotherComponents/getFunds/procedure1",
    "anotherComponents/getFunds/procedure2",
    "anotherComponents/budgetAdjustment/index",
    "anotherComponents/budgetAdjustment/procedure1",
    "anotherComponents/budgetAdjustment/procedure2",
    "anotherComponents/changeLeader/index",
    "anotherComponents/changeLeader/procedure1",
    "anotherComponents/changeLeader/procedure2",
    "anotherComponents/bankRecipt/index",
    "anotherComponents/license/index",
    "anotherComponents/paymentInquiry/index",
    "anotherComponents/paymentInquiry/procedure1",
    "anotherComponents/paymentInquiry/procedure2",
    "anotherComponents/financialDataQuery/index",
    "anotherComponents/voucherQuery/index",
    "anotherComponents/voucherQuery/procedure1",
    "anotherComponents/voucherQuery/procedure2",
    "anotherComponents/sealBusiness/index",
    "anotherComponents/sealBusiness/procedure1",
    "anotherComponents/sealBusiness/procedure2",
    "anotherComponents/sealBusiness/procedure3",
    "anotherComponents/sealBusiness/procedure4",
    "anotherComponents/sealBusiness/procedure5",
    "anotherComponents/sealBusiness/procedure6",
    "anotherComponents/sealBusiness/procedure7",
    "anotherComponents/card/index",
    "anotherComponents/card/procedure1",
    "anotherComponents/card/procedure2",
    "anotherComponents/publicAccumulationFunds/index",
    "anotherComponents/publicAccumulationFunds/procedure1",
    "anotherComponents/publicAccumulationFunds/procedure2",
    "anotherComponents/publicAccumulationFunds/procedure3",
    "anotherComponents/publicAccumulationFunds/procedure4",
    "anotherComponents/invoice/index",
    "anotherComponents/invoice/procedure1",
    "anotherComponents/invoice/procedure2",

  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "报销",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    // custom: true,
    selectedColor:'#7ebbb7',
    position: "top",
    list: [
      {
        pagePath: "pages/index/index",
        text: "报销注意事项",
      },
      {
        pagePath: "pages/list/list",
        text: "只跑一次清单",
      },
    ],
  },
});
