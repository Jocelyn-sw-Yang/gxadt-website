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

export const projectImages1 = [
  {
    image: images.agriculture1,
    status: STATUS.origin
  },
  {
    image: images.agriculture2,
    status: STATUS.origin
  },
  {
    image: images.agriculture3,
    status: STATUS.origin
  }
];

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

export const projectImages2 = [
  {
    image: images.building1,
    status: STATUS.origin
  },
  {
    image: images.building1,
    status: STATUS.origin
  },
  {
    image: images.building1,
    status: STATUS.origin
  }
];
