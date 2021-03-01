import menInSports from '../../assets/categorizer/men/men-random1.jpg';
import menInJeans from '../../assets/categorizer/men/men-in-causuals1.jpg';
import menInCausuals from '../../assets/categorizer/men/men-in-suits1.jpg';
import menInRandoms from '../../assets/categorizer/men/boy-in-tshirt1.jpg';
import menInHoodies from '../../assets/categorizer/men/men-in-hoodie.jpg';

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
      title: 'Jean-Pants',
      style: {
        position: 'absolute',
        top: '65%',
        left: '25%',
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
        top: '10%',
        left: '20%',
      },
    },
    {
      id: 2,
      title: 'sports-tracks',
      style: {
        position: 'absolute',
        top: '45%',
        left: '20%',
      },
    },
    {
      id: 3,
      title: 'sports-shoes',
      style: {
        position: 'absolute',
        top: '65%',
        left: '25%',
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
        top: '15%',
        left: '10%',
      },
    },
    {
      id: 2,
      title: 'Formal-Pants',
      style: {
        position: 'absolute',
        top: '40%',
        left: '1%',
      },
    },
  ],
};

const menInRandom = {
  id: 4,
  title: 'Men-In-Random1',
  image: {
    path: menInRandoms,
    style: {
      position: 'relative',
      margin: 10,
    },
  },
  positions: [
    {
      id: 1,
      title: 'T-shirts',
      style: {
        position: 'absolute',
        top: '45%',
        left: '20%',
      },
    },
  ],
};

const menInHoodie = {
  id: 4,
  title: 'Men-In-Hoodie',
  image: {
    path: menInHoodies,
    style: {
      position: 'relative',
      margin: 10,
    },
  },
  positions: [
    {
      id: 1,
      title: 'Hoodie',
      style: {
        position: 'absolute',
        top: '45%',
        left: '20%',
      },
    },
  ],
};

export const menModal = [
  menInJean,
  menInSport,
  menInRandom,
  menInCausual,
  menInHoodie,
];
