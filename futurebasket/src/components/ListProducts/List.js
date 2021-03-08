import Product from './Product';
import { useStyles } from './styles';

const List = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.productsContainer}>
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
