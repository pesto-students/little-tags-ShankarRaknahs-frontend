import menInSuits from '../../assets/categorizer/men-in-suit-3.jpg';
import menInFormals from '../../assets/categorizer/men-formal-1.jpg';
import menInCausuals from '../../assets/categorizer/men-causual-wear.jpg';
import menInShorts from '../../assets/categorizer/man-shorts.jpg';
import menInHoodies from '../../assets/categorizer/man-hoodie.jpg';

const menInSuit = {
  title: 'Men-In-Suit',
  image: {
    path: menInSuits,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  iconPosition: [
    {
      title: 'Suit',
      position: 'absolute',
      top: '20%',
      right: '20%',
    },
    {
      title: 'Suit-Pant',
      position: 'absolute',
      top: '60%',
      right: '12%',
    },
    {
      title: 'Formal-Shoes',
      position: 'absolute',
      top: '85%',
      right: '10%',
      // width: '35%',
    },
  ],
};

const menInFormal = {
  title: 'Men-In-Formals',
  image: {
    path: menInFormals,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  iconPosition: [
    {
      title: 'Formal-Shirt',
      position: 'absolute',
      top: '20%',
      right: '10%',
    },
    {
      title: 'Causual-Pant',
      position: 'absolute',
      top: '60%',
      right: '12%',
    },
    {
      title: 'Formal-Shoes',
      position: 'absolute',
      top: '80%',
      right: '14%',
      // width: '35%',
    },
  ],
};

const menInCausual = {
  title: 'Men-In-Causuals',
  image: {
    path: menInCausuals,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  iconPosition: [
    {
      title: 'Causual-Shirt',
      position: 'absolute',
      top: '10%',
      left: '65%',
    },
    {
      title: 't-shirt',
      position: 'absolute',
      top: '60%',
      left: '55%',
    },
    {
      title: 'causual-shoes',
      position: 'absolute',
      top: '85%',
      left: '40%',
    },
  ],
};

const menInShort = {
  title: 'Men-In-Shorts',
  image: {
    path: menInShorts,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  iconPosition: [
    {
      title: 'Causual-Shirt',
      position: 'absolute',
      top: '12%',
      left: '60%',
    },
    {
      title: 'shorts',
      position: 'absolute',
      top: '55%',
      left: '60%',
    },
    {
      title: 'sneakers',
      position: 'absolute',
      top: '80%',
      left: '64%',
    },
  ],
};

const menInHoodie = {
  title: 'Men-In-Hoodie',
  image: {
    path: menInHoodies,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  iconPosition: [
    {
      title: 'hoodie',
      position: 'absolute',
      top: '30%',
      left: '40%',
    },
  ],
};

export const menModal = [
  menInSuit,
  menInFormal,
  menInCausual,
  menInShort,
  menInHoodie,
];
