import womenInSuits from '../../assets/categorizer/women/women-in-jeans.jpg';
import womenInFormals from '../../assets/categorizer/women/women-in-random.jpg';
import womenInSalwars from '../../assets/categorizer/women/women-in-causuals.jpg';

const womenInSuit = {
  id: 1,
  title: 'Women-In-Suit',
  image: {
    path: womenInSuits,
    style: {
      position: 'relative',
      margin: 5,
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

const womenInFormal = {
  id: 2,
  title: 'Women-In-Formals',
  image: {
    path: womenInFormals,
    style: {
      position: 'relative',
      margin: 5,
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
        right: '8%',
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

const womenInSalwar = {
  id: 3,
  title: 'Women-In-Salwar',
  image: {
    path: womenInSalwars,
    style: {
      position: 'relative',
      margin: 5,
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

export const womenModal = [womenInSuit, womenInFormal, womenInSalwar];
