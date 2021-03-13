import womenInJeans from '../../assets/categorizer/women/women-in-jean.jpg';
import womenInSuits from '../../assets/categorizer/women/women-in-suit.jpg';
import womenInTshirts from '../../assets/categorizer/women/women-in-tshirt.jpg';

const womenInJean = {
  id: 1,
  title: 'Women-In-Jeans',
  image: {
    path: womenInJeans,
  },
  positions: [
    {
      id: 1,
      title: 'causual-dress',
      style: {
        position: 'absolute',
        top: '13%',
        left: '30%',
      },
    },
    {
      id: 2,
      title: 'Jean-Pants',
      style: {
        position: 'absolute',
        top: '35%',
        left: '25%',
      },
    },
    {
      id: 3,
      title: 'Shoes',
      style: {
        position: 'absolute',
        top: '55%',
        left: '5%',
      },
    },
  ],
};

const womenInSuit = {
  id: 2,
  title: 'Women-In-Jeans',
  image: {
    path: womenInSuits,
  },
  positions: [
    {
      id: 1,
      title: 'suits',
      style: {
        position: 'absolute',
        top: '13%',
        left: '30%',
      },
    },
    {
      id: 2,
      title: 'Suit-Pants',
      style: {
        position: 'absolute',
        top: '35%',
        left: '25%',
      },
    },
  ],
};
const womenInTshirt = {
  id: 3,
  title: 'Women-In-Tshirt',
  image: {
    path: womenInTshirts,
  },
  positions: [
    {
      id: 1,
      title: 'T-shirts',
      style: {
        position: 'absolute',
        top: '30%',
        left: '15%',
      },
    },
    {
      id: 2,
      title: 'JEAN-Pants',
      style: {
        position: 'absolute',
        top: '55%',
        left: '30%',
      },
    },
  ],
};

export const womenModal = [womenInJean, womenInSuit, womenInTshirt];
