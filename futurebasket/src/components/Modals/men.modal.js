import menInSuits from '../../assets/categorizer/men-in-suit-3.jpg';
import menInFormals from '../../assets/categorizer/men-formal-1.jpg';
import menInCausuals from '../../assets/categorizer/men-causual-wear.jpg';
import menInShorts from '../../assets/categorizer/man-shorts.jpg';
import menInHoodies from '../../assets/categorizer/man-hoodie.jpg';

const menInSuit = {
  id: 1,
  title: 'Men-In-Suit',
  image: {
    path: menInSuits,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  positions: [
    {
      id: 1,
      title: 'Suit',
      style: {
        position: 'absolute',
        top: '20%',
        right: '20%',
      },
    },
    {
      id: 2,
      title: 'Suit-Pant',
      style: {
        position: 'absolute',
        top: '60%',
        right: '12%',
      },
    },
    {
      id: 3,
      title: 'Formal-Shoes',
      style: {
        position: 'absolute',
        top: '85%',
        right: '10%',
      },

      // width: '35%',
    },
  ],
};

const menInFormal = {
  id: 2,
  title: 'Men-In-Formals',
  image: {
    path: menInFormals,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  positions: [
    {
      id: 1,
      title: 'Formal-Shirt',
      style: {
        position: 'absolute',
        top: '20%',
        right: '10%',
      },
    },
    {
      id: 2,
      title: 'Causual-Pant',
      style: {
        position: 'absolute',
        top: '60%',
        right: '12%',
      },
    },
    {
      id: 3,
      title: 'Formal-Shoes',
      style: {
        position: 'absolute',
        top: '80%',
        right: '14%',
      },
      // width: '35%',
    },
  ],
};

const menInCausual = {
  id: 3,
  title: 'Men-In-Causuals',
  image: {
    path: menInCausuals,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  positions: [
    {
      id: 1,
      title: 'Causual-Shirt',
      style: {
        position: 'absolute',
        top: '10%',
        left: '65%',
      },
    },
    {
      id: 2,
      title: 't-shirt',
      style: {
        position: 'absolute',
        top: '60%',
        left: '55%',
      },
    },
    {
      id: 3,
      title: 'causual-shoes',
      style: {
        position: 'absolute',
        top: '85%',
        left: '40%',
      },
    },
  ],
};

const menInShort = {
  id: 4,
  title: 'Men-In-Shorts',
  image: {
    path: menInShorts,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  positions: [
    {
      id: 1,
      title: 'Causual-Shirt',
      style: {
        position: 'absolute',
        top: '12%',
        left: '60%',
      },
    },
    {
      id: 2,
      title: 'shorts',
      style: {
        position: 'absolute',
        top: '55%',
        left: '60%',
      },
    },
    {
      id: 3,
      title: 'sneakers',
      style: {
        position: 'absolute',
        top: '80%',
        left: '64%',
      },
    },
  ],
};

const menInHoodie = {
  id: 5,
  title: 'Men-In-Hoodie',
  image: {
    path: menInHoodies,
    style: {
      height: 500,
      width: 470,
      position: 'relative',
    },
  },
  positions: [
    {
      id: 1,
      title: 'hoodie',
      style: {
        position: 'absolute',
        top: '30%',
        left: '40%',
      },
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
