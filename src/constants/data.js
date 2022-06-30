import { images } from './images';

export const businessInfo = [
  {
    name: '工业互联网',
    introduction: '工业互联网是……………………………………………………'
  },
  {
    name: '农业数字化',
    introduction: '农业数字化是……………………………………………………'
  },
  {
    name: '乡村振兴',
    introduction: '乡村振兴是……………………………………………………'
  },
  {
    name: '智慧农贸',
    introduction: '智慧农贸是……………………………………………………'
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
      title: '工业互联网',
      text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      status: STATUS.origin
    },
    {
      image: images.agriculture2,
      title: '数字乡村',
      text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或',
      status: STATUS.origin
    },
    {
      image: images.agriculture3,
      title: '数字农业',
      text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或',
      status: STATUS.origin
    }
  ],
  [
    {
      image: images.building1,
      title: '区块链',
      text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或',
      status: STATUS.origin
    },
    {
      image: images.building2,
      title: '数字化转型服务',
      text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或',
      status: STATUS.origin
    },
    {
      image: images.building3,
      title: '智慧农贸',
      text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或',
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
    title: '前往中国电信进行交流',
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
