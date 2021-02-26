import menInSports from '../../assets/categorizer/men/men-random.jpg';
import menInJeans from '../../assets/categorizer/men/men-in-causuals.jpg';
import menInCausuals from '../../assets/categorizer/men/men-in-suits.jpg';

const menInSport = {
  id: 1,
  title: 'Men-In-Sports',
  image: {
    path: menInSports,
  },
  positions: [
    {
      id: 1,
      title: 'causual-dress',
      style: {
        position: 'absolute',
        top: '23%',
        left: '15%',
      },
    },
    {
      id: 2,
      title: 'sports-shoes',
      style: {
        position: 'absolute',
        top: '55%',
        left: '45%',
      },
    },
  ],
};

const menInJean = {
  id: 2,
  title: 'Men-In-Causuals',
  image: {
    path: menInJeans,
    style: {
      position: 'relative',
      margin: 10,
    },
  },
  positions: [
    {
      id: 1,
      title: 'T-Shirt',
      style: {
        position: 'absolute',
        top: '25%',
        left: '30%',
      },
    },
    {
      id: 2,
      title: 'sports-tracks',
      style: {
        position: 'absolute',
        top: '65%',
        left: '35%',
      },
    },
  ],
};

const menInCausual = {
  id: 3,
  title: 'Men-In-Causuals',
  image: {
    path: menInCausuals,
    style: {
      position: 'relative',
      margin: 10,
    },
  },
  positions: [
    {
      id: 1,
      title: 'Suits',
      style: {
        position: 'absolute',
        top: '30%',
        left: '30%',
      },
    },
    {
      id: 2,
      title: 'Formal-Pants',
      style: {
        position: 'absolute',
        top: '80%',
        left: '20%',
      },
    },
  ],
};

export const menModal = [menInJean, menInCausual, menInSport];
