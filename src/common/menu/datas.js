const basic = [
  // 基础数据管理
  {
    icon: 'el-icon-tickets',
    index: 'market',
    title: '市场成员管理',
    subs: [
      {
        index: 'produceEle',
        title: '发电企业'
      },
      {
        index: 'elePower',
        title: '电网企业'
      },
      {
        index: 'saleMember',
        title: '售电公司'
      },
      {
        index: 'powerUser',
        title: '电力用户'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'clearingMember',
    title: '结算单元管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'useElectric',
    title: '用电单元'
  },
  {
    icon: 'el-icon-tickets',
    index: 'contract',
    title: '合同管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'unit',
    title: '机组管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'economyunit',
    title: '经济机组'
  },
  {
    icon: 'el-icon-tickets',
    index: 'enum',
    title: '枚举类管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'componentInformation',
    title: '结算成分管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'componentAndBreedRelation',
    title: '结算成分与结算品种关系'
  },
  {
    icon: 'el-icon-tickets',
    index: 'componentTraded',
    title: '结算成分与交易结算成分对应关系'
  },
  {
    icon: 'el-icon-tickets',
    index: 'priceManage',
    title: '价格管理',
    subs: [
     /* {
        index: 'modelPrice',
        title: '基准电价管理'
      },*/
      {
        index: 'planScheme',
        title: '计划用电价格方案'
      },
      {
        index: 'transmissionPrice',
        title: '输配电价管理'
      },
      {
        index: 'goverFunds',
        title: '政府基金及附加管理'
      }
    ]
  }
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'mulQuery',
  //   title: '综合查询'
  // }
]

const xhscdfjs = [
  // 现货市场电费结算
  {
    icon: 'el-icon-tickets',
    index: 'jsyj',
    title: '结算依据',
    subs: [
      {
        icon: 'el-icon-tickets',
        index: 'spotMode-1',
        title: '上网侧结算依据',
        subs: [
          {
            index: 'proDayClear',
            title: '省内日前市场结算曲线'
          },
          {
            index: 'proNowClear',
            title: '省内实时市场结算曲线'
          },
          {
            index: 'betProDayClear',
            title: '省间日前市场结算曲线'
          },
          {
            index: 'betProInDayClear',
            title: '省间日内市场结算曲线'
          },
          {
            index: 'outwardLong',
            title: '中长期结算曲线'
          },
          {
            index: 'groupOutput',
            title: '机组实际出力曲线'
          },
          {
            index: 'realAccess',
            title: '机组实际上网计量曲线'
          }
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'spotMode-2',
        title: '用户侧结算依据',
        subs: [
          {
            index: 'realElectric',
            title: '实际用电计量曲线'
          },
          {
            index: 'powerCharge',
            title: '售电公司应收电费依据'
          },
          {
            index: 'transactionUser',
            title: '直接交易用户结算数据'
          },
          {
            index: 'proxyUser',
            title: '售电公司代理用户数据'
          }
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'spotMode-3',
        title: '辅助服务结算依据',
        subs: [
          {
            index: 'freModulation',
            title: '调频辅助服务结算依据'
          },
          {
            index: 'peakLoad',
            title: '调峰辅助服务结算依据'
          },
          {
            index: 'ancillaryServices',
            title: '备用辅助服务结算依据'
          },
          {
            index: 'shareAndReturn',
            title: '分摊与返还'
          },
          {
            index: 'twoRules',
            title: '“两个细则”考核'
          },
          {
            index: 'retrieveCost',
            title: '追退补结算依据'
          },
          {
            index: 'compensationCost',
            title: '追退补费用'
          }
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'spotMode-x',
        title: '机组成本补偿',
        subs: [
          {
            index: 'x1',
            title: '机组启动费用补偿结算依据'
          },
          {
            index: 'x1',
            title: '机组机会成本补偿'
          },
          {
            index: 'x1',
            title: '机组运行成本补偿'
          },
          {
            index: 'x1',
            title: '必开机组成本补偿结算依据'
          }
        ]
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'spotMode-4',
    title: '逻辑依据模型',
    subs: [
      {
        index: 'logicModelQuery',
        title: '逻辑依据模型查询'
      },
      {
        index: 'dataQualityMonitor',
        title: '依据数据质量监控'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'spotMode-6',
    title: '电费清分',
    subs: [
      {
        index: 'genDaySettle',
        title: '发电企业日清分'
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
  }
]

const hyscdfjs = [
  // 合约市场电费结算
  {
    icon: 'el-icon-tickets',
    index: 'spot',
    title: '结算依据',
    subs: [
      {
        index: 'powerGenNonSpotMarket',
        title: '发电企业月度结算依据'
      },
      {
        index: 'powerSalesNonSpotMarket',
        title: '售电公司月度结算依据'
      },
     /* {
        index: 'costEstimate',
        title: '发电企业购电费用预估'
      },*/
      {
        index: 'ulev',
        title: '超低排放结算依据'
      },
      {
        index: 'unification',
        title: '地调电厂结算依据'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'clearCalc',
    title: '清分计算',
    subs: [
      {
        index: 'powerFeeCalculation',
        title: '发电企业购电费清分计算'
      },
      {
        index: 'saleFeeCalculation',
        title: '售电公司电费清分计算'
      },
      {
        index: 'ulevPower',
        title: '发电企业超低排放电费结算'
      },
      {
        index: 'smallPowPlantSettle',
        title: '地调电厂电费结算'
      }
    ]
  }
]

const cgkzs = [
  // 常规可再生补助资金结算
  {
	icon: 'el-icon-tickets',
	index: 'rseBaseInfo',
	title: '基础信息管理',
	subs: [
	  {
		icon: 'el-icon-tickets',
		index: 'proCompany',
		title: '常规可再生能源补助目录管理',
	  },
	  {
		icon: 'el-icon-tickets',
		index: 'modelPrice',
		title: '基准电价管理'
	  }
	]
  },
  {
	icon: 'el-icon-tickets',
	index: 'rsePrjRelation',
	title: '可再生项目关系设置',
	subs: [
	  {
		icon: 'el-icon-tickets',
		index: 'subsidy',
		title: '与机组对应关系设置'
	  },
	  {
		icon: 'el-icon-tickets',
		index: 'subsidyRelation',
		title: '汇报关系设置'
	  }
	]
  },
  {
    icon: 'el-icon-tickets',
    index: 'renewableEnergy',
    title: '常规可再生能源补助资金计算'
  },
  {
    icon: 'el-icon-tickets',
    index: 'projectClear',
    title: '常规可再生项目清算管理'
  },

  {
    icon: 'el-icon-tickets',
    index: 'receivables',
    title: '补助资金收款确认'
  },
  {
	icon: 'el-icon-tickets',
	index: 'rseInfoQuery',
	title: '信息查询',
	subs: [
	  {
		icon: 'el-icon-tickets',
		index: 'enquiry',
		title: '接网工程项目查询'
	  },
	  {
		icon: 'el-icon-tickets',
		index: 'connectClear',
		title: '接网工程清算查询'
	  },
	]
  },
  {
    icon: 'el-icon-tickets',
    index: 'fpManage',
    title: '发票业务管理',
    subs: [
      {
      icon: 'el-icon-tickets',
      index: 'fpc',
      title: '发票池管理'
      },
      {
      icon: 'el-icon-tickets',
      index: 'fpjyRenewable',
      title: '发票校验及结算处理'
      },
      {
        icon: 'el-icon-tickets',
        index: 'fukuanRenewable',
        title: '电费付款申请'
      }
    ]
    }
]

const fbsgf = [] // 分布式光伏

const monthSettle = [
  // 月度结算管理
  {
    index: 'powPlantSettle',
    title: '发电企业月结算'
  },
  {
    index: 'saleMemberSettle',
    title: '售电公司月结算'
  },
  {
    index: 'userSettle',
    title: '电力用户月结算'
  },
  {
    index: 'offSpotSaleMember',
    title: '非现货售电公司'
  },
  {
    index: 'offSpotProduceEle',
    title: '非现货发电企业'
  }
]

const kqksdfjs = [
  // 跨区跨省电费结算
  {
    icon: 'el-icon-tickets',
    index: 'priceSc',
    title: '价格方案',
    subs: [
      {
        index: 'provincePlanPrice',
        title: '跨区跨省计划价格方案信息'
      },
      {
        index: 'provinceLongPrice',
        title: '跨区跨省市场中长期价格方案信息'
      },
      {
        index: 'provinceNowPrice',
        title: '跨区跨省现货价格方案'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'estimate',
    title: '预估管理',
    subs: [
      {
        index: 'powerEstimateFan',
        title: '跨区跨省交易电费预估单'
      },
      {
        index: 'powerEstimate',
        title: '区内跨省交易电费暂估单'
      },
      {
        index: 'provisionalEstimate',
        title: '容量电费暂估账单'
      }
    ]
  }
]

const bills = [
  // 账单管理
  {
    icon: 'el-icon-tickets',
    index: 'bills-1',
    title: '跨区跨省电费结算账单',
    subs: [
      {
        index: 'bill_settlement',
        title: '跨区跨省交易结算账单'
      },
      {
        index: 'areaSettleBill',
        title: '区内跨省交易电费结算账单'
      },
      {
        index: 'clearingEstimate',
        title: '公共容量电费账单'
      }
    ]
  },
  // 日账单
  {
    icon: 'el-icon-tickets',
    index: 'dayBill',
    title: '日账单',
    subs: [
      {
        index: 'dayBillOfProduceEle',
        title: '发电企业'
      },
      {
        index: 'dayBillOfSaleMember',
        title: '售电公司'
      },
      {
        index: 'dayBillOfPowerUser',
        title: '电力用户'
      }
    ]
  },
  // 自定义账单
  {
    icon: 'el-icon-tickets',
    index: 'customBill',
    title: '自定义账单',
    subs: [
      {
        index: 'customBillOfProduceEle',
        title: '发电企业'
      },
      {
        index: 'customBillOfSaleMember',
        title: '售电公司'
      },
      {
        index: 'customBillOfPowerUser',
        title: '电力用户'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'billsPayment',
    title: '账单管理',
    subs: [
      {
        index: 'generateElectricity',
        title: '发电企业'
      },
      {
        index: 'sellElectricity',
        title: '售电公司'
      },
      {
        index: 'powerConsumer',
        title: '电力用户'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'billManage',
    title: '省内电费结算账单'
  },
  {
    icon: 'el-icon-tickets',
    index: 'billReproducible',
    title: '可再生能源结算账单'
  }
]

const retrieveClear = [
  // 退补清算
  {
    icon: 'el-icon-tickets',
    index: 'clearManage',
    title: '清算管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'disputeResolution',
    title: '争议处理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'repay',
    title: '追退补管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'contractAdjustment',
    title: '历史合约电价调整计算'
  }
]

const invoice = [
  // 发票管理
  {
    icon: 'el-icon-tickets',
    index: 'fpc',
    title: '发票池管理'
  },
  {
    icon: 'el-icon-tickets',
    index: 'fpjy',
    title: '发票校验及结算处理'
  }
]

const payment = [
  // 收付款管理
  {
    icon: 'el-icon-tickets',
    index: 'fukuan',
    title: '电费付款申请'
  },
  {
    icon: 'el-icon-tickets',
    index: 'shoukuan',
    title: '售电公司欠款回收'
  }
]

const query = [
  {
    icon: 'el-icon-tickets',
    index: 'buyElectricityQuery',
    title: '发电企业购电费用预估查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'settlementQuery',
    title: '发电企业电费结算情况查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'billQuery',
    title: '电费结算账单查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'renewableQuery',
    title: '常规可再生能源项目清算查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'renewableQueryProvince',
    title: '常规可再生能源项目清算查询(省公司)'
  },
  {
    icon: 'el-icon-tickets',
    index: 'powerPlantQuery',
    title: '发电企业购电结算支付查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'saleMemberQuery',
    title: '售电公司结算支付查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'x1',
    title: '售电公司结算情况查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'x1',
    title: '批发大用户电费结算情况查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'x1',
    title: '批发大用户电费回收情况查询'
  },
  {
    icon: 'el-icon-tickets',
    index: 'billDay',
    title: '日清分电能电费结算数据查询'
  }
]

const systemSet = [
  {
    icon: 'el-icon-tickets',
    index: 'basicSet',
    title: '基础数据设置',
    subs: [
      {
        index: 'settlement',
        title: '交易类型管理'
      },
      {
        index: 'componentInformation',
        title: '结算成分管理'
      },
      {
        index: 'componentTraded',
        title: '结算成分与交易结算成分对应关系管理'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'logicModel',
    title: '逻辑依据模型',
    subs: [
      {
        icon: 'el-icon-tickets',
        index: 'logicModelQuery',
        title: '逻辑依据模型查询'
      },
      {
        icon: 'el-icon-tickets',
        index: 'logicModelConfig',
        title: '逻辑依据模型配置'
      },
      {
        icon: 'el-icon-tickets',
        index: 'dataQualityMonitor',
        title: '依据数据质量监控'
      },
      {
        icon: 'el-icon-tickets',
        index: 'dataQualityConfig',
        title: '质量规则配置'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'func',
    title: '结算模型管理',
    subs: [
      {
        icon: 'el-icon-tickets',
        index: 'wizard',
        title: '向导'
      },
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
          },
         /* {
            index: 'taskRecord',
            title: '调度任务调度记录'
          }*/
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'controlCenter',
        title: '控制中心',
        subs: [
          {
            index: 'versionManagement',
            title: '模式版本管理'
          },
          {
            index: 'menuManagement',
            title: '菜单模式管理'
          },
          {
            index: 'ruleManagement',
            title: '规则模式管理'
          },
          {
            index: 'configManagement',
            title: '模式配置管理'
          }
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'basicConfiguration',
        title: '基础配置检测'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'billset',
    title: '账单结算设置',
    subs: [
      {
        icon: 'el-icon-tickets',
        index: 'billCycle',
        title: '账单结算周期设置'
      },
      {
        icon: 'el-icon-tickets',
        index: 'billTemplate',
        title: '账单模版管理'
      },
      {
        icon: 'el-icon-tickets',
        index: 'electronicSignature',
        title: '电子签章管理'
      }
    ]
  },
  {
    icon: 'el-icon-tickets',
    index: 'risk',
    title: '风险管控',
    subs: [
      {
        icon: 'el-icon-tickets',
        index: 'riskIndexSystem',
        title: '风险指标体系管理'
      },
      {
        icon: 'el-icon-tickets',
        index: 'riskIndicator',
        title: '风险指标管理'
      },
      {
        icon: 'el-icon-tickets',
        index: 'riskPoint',
        title: '风险点管理'
      },
      {
        icon: 'el-icon-tickets',
        index: 'settleParameter',
        title: '算法参数管理',
        subs: [
          {
            index: 'nodeConfiguration',
            title: '节点配置'
          },
          {
            index: 'propertyConfiguration',
            title: '属性配置'
          }
        ]
      },
      {
        icon: 'el-icon-tickets',
        index: 'eleRiskInspection',
        title: '电费结算风险校验'
      },
      {
        icon: 'el-icon-tickets',
        index: 'riskWarning',
        title: '风险预警'
      }
    ]
  }
]

const powerSettle = [
  {
    icon: 'el-icon-tickets',
    index: 'powerSettle',
    title: '电费结算与财务管控数据交互'
  }
]

const powerFees = [
  // 没用到的菜单
  {
    icon: 'el-icon-tickets',
    index: 'settlementBill',
    title: '跨区跨省交易结算账单'
  },
 /* {
    icon: 'el-icon-tickets',
    index: 'retrieveClear',
    title: '退补清算'
  },*/
  {
    icon: 'el-icon-tickets',
    index: 'contractPerformance',
    title: '合约履行'
  },
  /*{
    index: 'othercost',
    title: '其他费用依据'
  }*/
]

const systemManagement = [
  // 业务日志
  {
    icon: 'el-icon-tickets',
    index: 'LogManagement',
    title: '日志管理'
  },
  // 审计统计
  {
    icon: 'el-icon-tickets',
    index: 'auditconfig',
    title: '审计统计'
  },
  // 告警日志
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'warring',
  //   title: '告警信息'
  // },
  // // 审计策略
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'virus',
  //   title: '审计策略'
  // },
  // // 系统运行监控
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'system',
  //   title: '系统运行监控'
  // },
  // // 病毒防护
  // {
  //   icon: 'el-icon-tickets',
  //   index: 'inframicrobe',
  //   title: '病毒防护'
  // }
]

export default {
  // items,
  basic, // 基础数据
  xhscdfjs, // 现货市场电费结算
  hyscdfjs, // 合约市场电费结算
  cgkzs, // 常规可再生补助资金结算
  fbsgf, // 分布式光伏
  monthSettle, // 月度结算管理
  kqksdfjs, // 跨区跨省电费结算
  bills, // 账单管理
  retrieveClear, // 退补清算
  invoice, // 发票管理
  payment, // 收付款管理
  query, // 查询分析
  systemSet, // 系统配置
  powerSettle, // 电费结算与财务管控数据交互
  systemManagement, // 审计
  powerFees // 没用到的菜单
}
