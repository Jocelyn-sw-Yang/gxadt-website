import { images } from './images';

export const businessInfo = [
  {
    title: '工业互联网',
    titleEN: 'Industrial Internet',
    introduction: `\xa0\xa0\xa0\xa0\xa0\xa0\xa0根据国家工信委和信通院的批准，实施广西农副食品加工行业和制糖行业工业互联网二级节点项目的设计、建设、运营工作，并在二级节点项目的基础上，推动广西全自治区工业互联网的实施、建设、运营服务工作，涉及产品溯源、产品全生命周期管理、供应链金融服务、产品大数据汇总分析等。`
  },
  {
    title: '农业数字化',
    titleEN: 'Agricultural Digitalization',
    introduction: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0根据国家和地方政策，打造农产品标准质量体系，积极参与行业数字化转型促进中心的建设，构建和实施农业数字化项目咨询服务平台，开展数字乡村建设、实施乡村产业、乡村环境治理、乡村文化建设、农村智慧能源、智慧水务等项目建设，提供相关的产业咨询服务。'
  },
  {
    title: '乡村振兴',
    titleEN: 'Rural Vitalization',
    introduction: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0以建设乡村振兴服务平台为抓手，基于标识解析技术建设帮扶产品认证，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果，预防系统性返贫，建设美丽乡村，提升脱贫地区产业质量，推动广西农产品提质增效，行销全国各地。'
  },
  {
    title: '智慧农贸',
    titleEN: 'Smart Farmers Market',
    introduction: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0对传统农贸市场进行智慧化升级改造，有利于加强对市场内诚信计量和价格的监管，使用信息化技术支撑、服务，实现农贸市场内交易农副产品的来源可追溯；实现对来源端和销售终端的精准控制。有效改变传统农贸市场“脏、乱、差”现象，推动农贸市场的信息化发展。'
  },
];


const STATUS = {
  origin: 'origin',
  expand: 'expand',
  collapse: 'collapse'
};

export const projectImages = [
  [
    {
      image: images.agriculture1,
      title: '数字乡村',
      text: '积极参与行业数字化转型促进中心的建设，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果',
      status: STATUS.origin
    },
    {
      image: images.business2,
      title: '工业互联网',
      text: '积极参与行业数字化转型促进中心的建设，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果',
      status: STATUS.origin
    },
    {
      image: images.agriculture3,
      title: '数字农业',
      text: '积极参与行业数字化转型促进中心的建设，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果',
      status: STATUS.origin
    }
  ],
  [
    {
      image: images.project2,
      title: '区块链',
      text: '积极参与行业数字化转型促进中心的建设，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果',
      status: STATUS.origin
    },
    {
      image: images.agriculture2,
      title: '数字化转型服务',
      text: '积极参与行业数字化转型促进中心的建设，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果',
      status: STATUS.origin
    },
    {
      image: images.agriculture5,
      title: '智慧农贸',
      text: '积极参与行业数字化转型促进中心的建设，大力推动农产品帮扶消费和农业投资经营地不断发展，巩固国家脱贫攻坚成果',
      status: STATUS.origin
    }
  ]
];

export const visions = [
  {
    title: '助力乡村振兴',
    title_EN: 'Support rural revitalization',
    text: '坚持“姓农、务农、为农”的发展方向，把“姓农”放在首位，推进“务农”工作，提升“为农”服务能力，以品质铸造品牌，为推动广西农业发展和实现乡村振兴作出贡献。',
  },
  {
    title: '打造数字农业',
    title_EN: 'Building digital agriculture',
    text: '公司确定“数据驱动，产业融合”的发展目标，秉承“开放、合作、共赢”的宗旨，大数据为农业产业应用赋予价值，应用为大数据产业增值，驱动融合实现价值。',
  }
];

export const news = [
  {
    title: '助力乡村振兴',
    date: '2022年6月10日',
    image: images.agriculture1,
    text: '坚持“姓农、务农、为农”的发展方向，把“姓农”放在首位，推进“务农”工作，提升“为农”服务能力，以品质铸造品牌，为推动广西农业发展和实现乡村振兴作出贡献。',
  },
  {
    title: '前往中国电信就二级节点项目进行友好交流',
    date: '2022年6月29日',
    image: images.building1,
    text: '公司确定“数据驱动，产业融合”的发展目标，秉承“开放、合作、共赢”的宗旨，大数据为农业产业应用赋予价值，应用为大数据产业增值，驱动融合实现价值。',
  },
  {
    title: '打造数字农业',
    date: '2022年7月29日',
    image: images.agriculture3,
    text: '公司确定“数据驱动，产业融合”的发展目标，秉承“开放、合作、共赢”的宗旨，大数据为农业产业应用赋予价值，应用为大数据产业增值，驱动融合实现价值。',
  }
];
