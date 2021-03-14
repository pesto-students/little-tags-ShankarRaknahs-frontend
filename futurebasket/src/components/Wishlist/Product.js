import React from 'react';
import { useStyles } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Product = ({ item }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <div className={classes.productContainer}>
      <Card className={classes.cartItem}>
        <div className={classes.container}>
          <CardMedia
            component='img'
            className={classes.cover}
            image={item.image}
          />
          <CardContent>
            <Typography variant='h6'>{item.title}</Typography>
            <Typography variant='body1' className={classes.brand}>
              {item.company}
            </Typography>
            <div className={classes.priceDetails}>
              <Typography variant='h6' className={classes.price}>
                &#8377;{item.price}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ textDecoration: 'line-through' }}
                className={classes.originalPrice}
              >
                {item.originalPrice}
              </Typography>
              <Typography className={(classes.lightText, classes.discount)}>
                ({item.discount} off)
              </Typography>
            </div>

            <div>
              <Button variant='outlined' className={classes.button}>
                Remove
              </Button>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                Add to cart
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Product;
