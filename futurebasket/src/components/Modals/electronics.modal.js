import electronicsAll from '../../assets/categorizer/Electronics/electronics.jpg';
import electronicsAll1 from '../../assets/categorizer/Electronics/electronics1.jpg';

const electronics = {
  id: 1,
  title: 'Electronics',
  image: {
    path: electronicsAll,
  },
  positions: [
    {
      id: 1,
      title: 'Laptops',
      style: {
        position: 'absolute',
        top: '13%',
        left: '30%',
      },
    },
    {
      id: 2,
      title: 'Harddisk',
      style: {
        position: 'absolute',
        top: '7%',
        left: '60%',
      },
    },
    {
      id: 3,
      title: 'Tablet',
      style: {
        position: 'absolute',
        top: '55%',
        left: '5%',
      },
    },
  ],
};
const electronics1 = {
  id: 2,
  title: 'Electronics',
  image: {
    path: electronicsAll1,
  },
  positions: [
    {
      id: 1,
      title: 'Monitors',
      style: {
        position: 'absolute',
        top: '2%',
        left: '30%',
      },
    },
    {
      id: 2,
      title: 'Wireless keyboards',
      style: {
        position: 'absolute',
        top: '35%',
        left: '25%',
      },
    },
    {
      id: 3,
      title: 'Wireless mouse',
      style: {
        position: 'absolute',
        top: '35%',
        left: '65%',
      },
    },
  ],
};

export const electronicModal = [electronics, electronics1];
