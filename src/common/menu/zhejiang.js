// const items = [
//   {
//     icon: 'el-icon-tickets',
//     index: 'enumeration',
//     title: '枚举类管理',
//     subs: [
//       {
//         index: 'enum',
//         title: '枚举类管理'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'market',
//     title: '市场成员管理',
//     subs: [
//       {
//         index: 'market1',
//         title: '市场成员-公共'
//       },
//       {
//         index: 'produceEle',
//         title: '发电企业'
//       },
//       {
//         index: 'elePower',
//         title: '电网企业'
//       },
//       {
//         index: 'saleMember',
//         title: '售电公司'
//       },
//       {
//         index: 'powerUser',
//         title: '电力用户'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'basic_data',
//     title: '基础数据管理',
//     subs: [
//       {
//         index: 'contract',
//         title: '省级交易合同'
//       },
//       {
//         index: 'settlement',
//         title: '结算成分管理'
//       },
//       {
//         index: 'unitForCommon',
//         title: '机组管理-公共'
//       },
//       {
//         index: 'unit',
//         title: '机组管理'
//       },
//       {
//         index: 'useElectric',
//         title: '用电单元'
//       },
//       {
//         index: 'clearingMember',
//         title: '结算单元管理'
//       },
//       {
//         index: 'subsidy',
//         title: '补助标准管理'
//       },
//       {
//         index: 'planPrice',
//         title: '计划用电价格方案'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'subsidyMenu',
//     title: '补助目录管理',
//     subs: [
//       {
//         index: 'group',
//         title: '补助目录管理-集团'
//       },
//       {
//         index: 'proCompany',
//         title: '补助目录管理-省公司'
//       },
//       {
//         index: 'basicLevel',
//         title: '补助目录管理-基层单位'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'spotMode',
//     title: '现货模式',
//     subs: [
//       {
//         index: 'proDayClearBazaar',
//         title: '省内日前市场结算曲线'
//       },
//       {
//         index: 'proNowClearBazaar',
//         title: '省内实时市场结算曲线'
//       },
//       {
//         index: 'betProDayClear',
//         title: '省间日前市场结算曲线'
//       },
//       {
//         index: 'betProInDayClear',
//         title: '省间日内市场结算曲线'
//       },
//       {
//         index: 'groupOutput',
//         title: '机组实际出力曲线'
//       },
//       {
//         index: 'outwardLong',
//         title: '中长期结算曲线'
//       },
//       {
//         index: 'realAccess',
//         title: '实际上网计量曲线'
//       },
//       {
//         index: 'realElectric',
//         title: '实际用电计量曲线'
//       },
//       {
//         index: 'freModulation',
//         title: '调频辅助服务结算依据'
//       },
//       {
//         index: 'peakLoad',
//         title: '调峰辅助服务结算依据'
//       },
//       {
//         index: 'ancillaryServices',
//         title: '备用辅助服务'
//       },
//       {
//         index: 'twoRules',
//         title: '“两个细则”考核'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'longMode',
//     title: '中长期模式',
//     subs: [
//       {
//         index: 'buyPower',
//         title: '电厂购电结算依据'
//       },
//       {
//         index: 'settlementBasis',
//         title: '售电公司结算依据'
//       },
//       {
//         index: 'powerCharge',
//         title: '售电公司应收电费依据'
//       },
//       {
//         index: 'transactionUser',
//         title: '直接交易用户结算依据'
//       },
//       {
//         index: 'proxyUser',
//         title: '售电公司代理用户数据'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'settlementModel',
//     title: '结算模型',
//     subs: [
//       {
//         index: 'funcInit',
//         title: '功能初始化'
//       },
//       {
//         index: 'funcManage',
//         title: '函数管理'
//       },
//       {
//         index: 'templateManage',
//         title: '模板管理'
//       },
//       {
//         index: 'settleCompon',
//         title: '结算分量管理',
//         subs: [
//           {
//             index: 'dataSouComponent',
//             title: '数据源管理'
//           },
//           {
//             index: 'dataSetComponent',
//             title: '数据集管理'
//           },
//           {
//             index: 'dataItemComponent',
//             title: '数据项管理'
//           },
//           {
//             index: 'measureunits',
//             title: '计量单位管理'
//           },
//           {
//             index: 'settleComponent',
//             title: '规则分量管理'
//           }
//         ]
//       },
//       {
//         index: 'projManage',
//         title: '方案管理'
//       },
//       {
//         index: 'settleItemManage',
//         title: '结算项管理'
//       },
//       {
//         index: 'settleVarietyManage',
//         title: '结算品种管理'
//       },
//       {
//         index: 'rulesManage',
//         title: '结算规则管理',
//         subs: [
//           {
//             index: 'formula',
//             title: '公式'
//           },
//           {
//             index: 'newGuide',
//             title: '新增向导'
//           },
//           {
//             index: 'expressionEditor',
//             title: '表达式编辑器'
//           }
//         ]
//       },
//       {
//         index: 'computeEngine',
//         title: '计算引擎'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'daySettle',
//     title: '日清分管理',
//     subs: [
//       {
//         index: 'genDaySettle',
//         title: '机组日清分'
//       },
//       {
//         index: 'memberDaySettle',
//         title: '售电公司日清分'
//       },
//       {
//         index: 'userDaySettle',
//         title: '电力用户日清分'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'monthSettle',
//     title: '月结算管理',
//     subs: [
//       {
//         index: 'powCompanySettle',
//         title: '发电企业结算',
//         subs: [
//           {
//             index: 'powPlantSettle',
//             title: '电厂月结算'
//           },
//           {
//             index: 'smallPowPlantSettle',
//             title: '地方小水电、小火电电厂电费结算'
//           }
//         ]
//       },
//       {
//         index: 'saleMemberSettle',
//         title: '售电公司月结算'
//       },
//       {
//         index: 'userSettle',
//         title: '用电用户月结算'
//       },
//       {
//         index: 'moneyRestSettle',
//         title: '资金余缺电费计算'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'bills',
//     title: '账单管理',
//     subs: [
//       {
//         index: 'billTemplate',
//         title: '账单模板'
//       },
//       {
//         index: 'billManage',
//         title: '账单管理'
//       }
//     ]
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'query',
//     title: '查询分析',
//     subs: [
//       {
//         index: 'settlementQuery',
//         title: '电厂电费结算情况查询'
//       },
//       {
//         index: 'billQuery',
//         title: '电费结算账单查询'
//       }
//     ]
//   }
// ]
const basic = [ // 基础数据管理
  // {
  //   index: 'enum',
  //   title: '枚举类管理'
  // },
  {
    icon: 'el-icon-tickets',
    index: 'market',
    title: '市场主体管理',
    subs: [
      {
        index: 'produceEle',
        title: '发电企业',
        subs: [
          {
            index: 'produceEle',
            title: '发电企业'
          },
          {
            icon: 'el-icon-tickets',
            index: 'unit',
            title: '机组管理'
          }
          // {
          //   icon: 'el-icon-tickets',
          //   index: 'economyunit',
          //   title: '经济机组'
          // },
          // {
          //   icon: 'el-icon-tickets',
          //   index: 'clearingMember',
          //   title: '结算机组'
          // }
        ]
      },
      // {
      //   index: 'elePower',
      //   title: '电网企业'
      // },
      {
        index: 'saleMember',
        title: '售电公司',
        subs: [
          {
            index: 'saleMember',
            title: '售电公司'
          }
        ]
      },
      {
        index: 'powerUser',
        title: '批发市场用户',
        subs: [
          {
            index: 'powerUser',
            title: '电力用户'
          }
          // {
          //   icon: 'el-icon-tickets',
          //   index: 'useElectric',
          //   title: '用电单元'
          // }
        ]
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'useElectric',
    title: '计划电价管理',
    subs: [
      {
        icon: 'el-icon-tickets',
        index: 'betweenProvince',
        title: '省间',
        subs: [
          {
            icon: 'el-icon-tickets',
            index: 'provincePlanPrice',
            title: '省间计划价格库信息'
          },
          {
            icon: 'el-icon-tickets',
            index: 'provinceLongPrice',
            title: '省间市场-中长期价格库信息'
          },
          {
            icon: 'el-icon-tickets',
            index: 'provinceNowPrice',
            title: '省间市场-现货价格库信息'
          }
          // {
          //   icon: 'el-icon-tickets',
          //   index: 'provinceCapacity',
          //   title: '省间容量价格信息'
          // }
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'province',
        title: '省级',
        subs: [
          {
            icon: 'el-icon-tickets',
            index: 'modelPrice',
            title: '基准电价管理'
          },
          {
            icon: 'el-icon-tickets',
            index: 'planScheme',
            title: '计划用电价格方案'
          },
          {
            icon: 'el-icon-tickets',
            index: 'transmissionPrice',
            title: '输配电价管理'
          },
          {
            icon: 'el-icon-tickets',
            index: 'goverFunds',
            title: '政府性基金及附加管理'
          },
          {
            icon: 'el-icon-tickets',
            index: 'powerFactor',
            title: '功率因数考核'
          },
          {
            icon: 'el-icon-tickets',
            index: 'saleElectricPrice',
            title: '销售目录电价'
          },
          {
            icon: 'el-icon-tickets',
            index: 'baseElectricPrice',
            title: '基本电价'
          }
        ]
      }
    ]
  },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'func',
  //   title: '结算模型管理',
  //   subs: [
  //     // {
  //     //   icon: 'el-icon-tickets',
  //     //   index: 'funcInit',
  //     //   title: '方案制定'
  //     // },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'projManage',
  //       title: '方案管理'
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'clearunit',
  //       title: '算费单元管理'
  //     },
  //     // {
  //     //   icon: 'el-icon-tickets',
  //     //   index: 'accountunit',
  //     //   title: '算费单元管理'
  //     // },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'settleVarietyManage',
  //       title: '结算品种管理'
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'settleItemManage',
  //       title: '结算项管理'
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'measureunits',
  //       title: '计算单位管理',
  //       subs: [
  //         {
  //           index: 'dataTypeManage',
  //           title: '计量类型管理'
  //         },
  //         {
  //           index: 'measureunits',
  //           title: '计量单位管理'
  //         }
  //       ]
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'settleComponent',
  //       title: '结算分量管理',
  //       subs: [
  //         {
  //           index: 'dataSouComponent',
  //           title: '数据源管理'
  //         },
  //         {
  //           index: 'dataSetComponent',
  //           title: '数据集管理'
  //         },
  //         {
  //           index: 'dataItemComponent',
  //           title: '数据项管理'
  //         },
  //         {
  //           index: 'settleComponent',
  //           title: '规则分量管理'
  //         }
  //       ]
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'formula',
  //       title: '结算规则管理'
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'funcManage',
  //       title: '算法规则管理',
  //       subs: [
  //         {
  //           index: 'funcManage',
  //           title: '函数管理'
  //         },
  //         {
  //           index: 'templateManage',
  //           title: '模板管理'
  //         }
  //       ]
  //     },
  //     {
  //       icon: 'el-icon-tickets',
  //       index: 'taskManagement',
  //       title: '任务调度管理',
  //       subs: [
  //         {
  //           index: 'dataManagement',
  //           title: '集成数据管理'
  //         },
  //         {
  //           index: 'recordManagement',
  //           title: '集成记录管理'
  //         },
  //         {
  //           index: 'schedulManagement',
  //           title: '调度任务管理'
  //         },
  //         {
  //           index: 'taskRecord',
  //           title: '调度任务调度记录'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    icon: 'el-icon-tickets',
    index: 'contract',
    title: '合同管理'
  },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'settlement',
  //   title: '交易类型管理'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'unit',
  //   title: '机组管理'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'economyunit',
  //   title: '经济机组'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'clearingMember',
  //   title: '结算单元管理'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'subsidyMenu',
  //   title: '常规可再生项目管理',
  //   subs: [
  //     {
  //       index: 'group',
  //       title: '常规可再生项目管理-集团'
  //     },
  //     {
  //       index: 'proCompany',
  //       title: '常规可再生项目管理-省公司'
  //     },
  //     {
  //       index: 'basicLevel',
  //       title: '常规可再生项目管理-基层单位'
  //     }
  //   ]
  // }
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'subsidy',
  //   title: '常规可再生项目与机组对应关系'
  // },
  {
    icon: 'el-icon-tickets',
    index: 'file1',
    title: '政策文件管理',
    subs: [
      {
        index: 'file',
        title: '日常文件',
        subs: [
          {
            index: 'file',
            title: '文件通知|国网文件'
          }
        ]
      },
      {
        index: 'reformFile',
        title: '电力体制改革文件'
      },
      {
        index: 'reformFileTwo',
        title: '电价政策文件'
      }
    ]
  }
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'dataEachOther',
  //   title: '数据集成交互'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'taskScheduling',
  //   title: '任务调度'
  // }
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'statisticalPro',
  //   title: '统计方案管理'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'billTemplate',
  //   title: '账单模板'
  // }
]
// const price = [
//   {
//     icon: 'el-icon-tickets',
//     index: 'modelPrice',
//     title: '标杆电价管理'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'planPrice',
//     title: '机组计划价格管理'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'provincePlanPrice',
//     title: '省间计划价格库信息'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'provinceLongPrice',
//     title: '省间市场-中长期价格库信息'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'provinceNowPrice',
//     title: '省间市场-现货价格库信息'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'provinceCapacity',
//     title: '省间容量价格信息'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'transmissionPrice',
//     title: '输配电价管理'
//   },
//   {
//     icon: 'el-icon-tickets',
//     index: 'goverFunds',
//     title: '政府性基金及附加管理'
//   }
// ]

const jsyj = [ // 结算依据
  {
    icon: 'el-icon-tickets',
    index: 'spotMode-1',
    title: '市场-省间管理',
    subs: [
      {
        index: 'betProDayClear',
        title: '省间日前市场结算曲线'
      },
      {
        index: 'betProInDayClear',
        title: '省间日内市场结算曲线'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'spotMode-2',
    title: '市场-省级管理',
    subs: [
      {
        index: 'contract',
        title: '合约市场',
        subs: [
          {
            index: 'outwardLong',
            title: '中长期结算曲线'
          }
        ]
      },
      {
        index: 'generateBazaar',
        title: '现货市场-发电企业',
        subs: [
          {
            index: 'proDayClearBazaar',
            title: '省内日前市场结算曲线'
          },
          {
            index: 'proNowClearBazaar',
            title: '省内实时市场结算曲线'
          }/** ,
           {
            index: 'groupOutput',
            title: '机组实际出力曲线'
          },

           {
            index: 'realAccess',
            title: '机组实际上网计量曲线'
          } */
        ]
      },
      {
        index: 'userBazaar',
        title: '现货市场-用户侧',
        subs: [
          {
            index: 'proDayClearUser',
            title: '省内日前市场结算曲线'
          },
          {
            index: 'proNowClearUser',
            title: '省内实时市场结算曲线'
          }/** ,
           {
            index: 'groupOutput',
            title: '机组实际出力曲线'
          },

           {
            index: 'realAccess',
            title: '机组实际上网计量曲线'
          } */
        ]
      },
      {
        index: 'powerBazaar',
        title: '现货市场-售电公司',
        subs: [
          {
            index: 'proDayClearGroup',
            title: '省内日前市场结算曲线'
          },
          {
            index: 'proNowClearGroup',
            title: '省内实时市场结算曲线'
          }/** ,
           {
            index: 'groupOutput',
            title: '机组实际出力曲线'
          },

           {
            index: 'realAccess',
            title: '机组实际上网计量曲线'
          } */
        ]
      }
      // {
      //   icon: 'el-icon-tickets',
      //   index: 'spotMode-6',
      //   title: '辅助服务结算依据',
      //   subs: [
      //     {
      //       index: 'freModulation',
      //       title: '调频辅助服务结算依据'
      //     },
      //     {
      //       index: 'peakLoad',
      //       title: '深度调峰辅助服务结算依据'
      //     },
      //     {
      //       index: 'ancillaryServices',
      //       title: '备用辅助服务结算依据'
      //     },
      //     {
      //       index: 'shareAndReturn',
      //       title: '分摊与返还'
      //     },
      //     {
      //       index: 'compensationCost',
      //       title: '追退补费用'
      //     },
      //     {
      //       index: 'twoRules',
      //       title: '“两个细则”考核'
      //     }
      //   ]
      // }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'spotMode-3',
    title: '非市场管理',
    subs: [
      // {
      //   icon: 'el-icon-tickets',
      //   index: 'unification',
      //   title: '非市场化电厂'
      // },
      {
        icon: 'el-icon-tickets',
        index: 'socialElectricity',
        title: '全社会用电量'
      },
      {
        icon: 'el-icon-tickets',
        index: 'unitCapacityCharge',
        title: '机组容量电费'
      },
      {
        icon: 'el-icon-tickets',
        index: 'twoRulesAssess',
        title: '两个细则考核、补偿费用'
      },
      {
        icon: 'el-icon-tickets',
        index: 'othercost',
        title: '其他费用依据'
      }
    ]
  }
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'unification',
  //   title: '地调电厂结算依据'
  // }
]
const func = [
  // 结算模型
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'funcInit',
  //   title: '方案制定'
  // },
  {
    icon: 'el-icon-tickets',
    index: 'projManage',
    title: '方案管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'clearunit',
    title: '算费单元管理'
  },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'accountunit',
  //   title: '算费单元管理'
  // },
  {
    icon: 'el-icon-tickets',
    index: 'settleVarietyManage',
    title: '结算品种管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'settleItemManage',
    title: '结算项管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'measureunits',
    title: '计算单位管理',
    subs: [
      {
        index: 'dataTypeManage',
        title: '计量类型管理'
      },
      {
        index: 'measureunits',
        title: '计量单位管理'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'settleComponent',
    title: '结算分量管理',
    subs: [
      {
        index: 'dataSouComponent',
        title: '数据源管理'
      },
      {
        index: 'dataSetComponent',
        title: '数据集管理'
      },
      {
        index: 'dataItemComponent',
        title: '数据项管理'
      },
      {
        index: 'settleComponent',
        title: '规则分量管理'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'formula',
    title: '结算规则管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'funcManage',
    title: '算法规则管理',
    subs: [
      {
        index: 'funcManage',
        title: '函数管理'
      },
      {
        index: 'templateManage',
        title: '模板管理'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'taskManagement',
    title: '任务调度管理',
    subs: [
      {
        index: 'dataManagement',
        title: '集成数据管理'
      },
      // {
      //   index: 'recordManagement',
      //   title: '集成记录管理'
      // },
      {
        index: 'schedulManagement',
        title: '调度任务管理'
      }
      // {
      //   index: 'taskRecord',
      //   title: '调度任务调度记录'
      // }
    ]
  }
]
const estimate = [
  // 预估管理
  {
    icon: 'el-icon-tickets',
    index: 'costEstimate',
    title: '发电企业购电费用预估'
  },
  {
    icon: 'el-icon-tickets',
    index: 'powerEstimate',
    title: '跨区跨省交易电费预估'
  }
]

const clear = [ // 清分结算
  {
    icon: 'el-icon-tickets',
    index: 'daySettle',
    title: '日清分管理',
    subs: [
      {
        index: 'genDaySettle',
        title: '机组日清分'
      },
      {
        index: 'memberDaySettle',
        title: '售电公司日清分'
      },
      {
        index: 'userDaySettle',
        title: '电力用户日清分'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'monthSettle',
    title: '月结算管理',
    subs: [
      {
        index: 'powPlantSettle',
        title: '电厂电费月结算'
        // subs: [
        //   {
        //     index: 'powPlantSettle',
        //     title: '电厂电费月结算'
        //   },
        //   {
        //     index: 'smallPowPlantSettle',
        //     title: '地调电厂电费结算'
        //   }
        // ]
      },
      {
        index: 'saleMemberSettle',
        title: '售电公司电费结算'
      },
      {
        index: 'userSettle',
        title: '电力用户月结算'
      }
      // {
      //   index: 'moneyRestSettle',
      //   title: '余缺电费计算'
      // }
    ]
  }
]

const bills = [
  {
    icon: 'el-icon-tickets',
    index: 'betweenProvince',
    title: '省间',
    subs: [
      {
        index: 'settlementBill',
        title: '跨区跨省交易结算账单'
      },
      {
        index: 'electricityBill',
        title: '公共容量电费账单'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'province',
    title: '省级',
    subs: [
      {
        index: 'billManage',
        title: '账单管理'
      },
      {
        index: 'electronicSignature',
        title: '电子签章'
      }
    ]
  }
]

const query = [
  {
    index: 'buyElectricityQuery',
    title: '发电企业购电费用预估查询'
  },
  {
    index: 'settlementQuery',
    title: '发电企业电费结算情况查询'
  },
  /* {
    index: 'billQuery',
    title: '电费结算账单查询'
  }, */
  {
    index: 'renewableQuery',
    title: '可再生清算查询'
  },
  {
    index: 'powerPlantQuery',
    title: '发电企业购电结算支付查询'
  },
  {
    index: 'saleMemberQuery',
    title: '售电公司结算支付查询'
  }
]

const powerFees = [
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'renewableEnergy',
  //   title: '常规可再生能源补助资金计算'
  // },
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'ulevPower',
  //   title: '发电企业超低排放电费结算'
  // },
  {
    icon: 'el-icon-tickets',
    index: 'retrieveClear',
    title: '退补清算'
  },
  {
    icon: 'el-icon-tickets',
    index: 'contractPerformance',
    title: '合约履行'
  },
  {
    icon: 'el-icon-tickets',
    index: 'disputeResolution',
    title: '争议处理'
  }
]

export default {
  // items,
  basic,
  // price,
  jsyj,
  func,
  estimate,
  clear,
  bills,
  query,
  powerFees
}
