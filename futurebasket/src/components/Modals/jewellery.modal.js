import earRings from '../../assets/categorizer/Jewellery/ear-rings.jpg';
import chains from '../../assets/categorizer/Jewellery/chain.jpg';
import rings from '../../assets/categorizer/Jewellery/ring.jpg';

const earRing = {
  id: 1,
  title: 'ear-ring',
  image: {
    path: earRings,
  },
  positions: [
    {
      id: 1,
      title: 'Ear-Ring',
      style: {
        position: 'absolute',
        top: '30%',
        left: '65%',
      },
    },
  ],
};
const chain = {
  id: 2,
  title: 'ear-ring',
  image: {
    path: chains,
  },
  positions: [
    {
      id: 1,
      title: 'chain',
      style: {
        position: 'absolute',
        top: '30%',
        left: '65%',
      },
    },
  ],
};

export const jewelleryModal = [earRing, chain];
