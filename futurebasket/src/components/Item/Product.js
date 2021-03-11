import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Product = ({ item }) => {
  const classes = useStyles();

  return (
    <Card variant='outlined'>
      <div className={classes.container}>
        <div className={classes.childImages}>
          {item.childImagesSmall.map((image) => {
            return (
              <CardMedia
                component='img'
                className={classes.childCover}
                image={image}
              />
            );
          })}
        </div>
        <div>
          <CardHeader
            className={classes.header}
            title={
              item.variantsColor ? (
                <div className={classes.colors}>
                  {item.variantsColor.map((variant) => {
                    return (
                      <Link to={`/product/${variant.variantId}`}>
                        <IconButton>
                          <Skeleton
                            variant='circle'
                            animation={false}
                            width={20}
                            height={20}
                            style={{
                              backgroundColor: variant.color,
                              marginRight: 10,
                            }}
                          />
                        </IconButton>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )
            }
            action={
              <Avatar className={classes.avatar}>
                <IconButton aria-label='settings'>
                  <FavoriteBorderIcon />
                </IconButton>
              </Avatar>
            }
          />

          <CardMedia
            component='img'
            className={classes.cover}
            image={item.image}
          />
        </div>
        <CardContent className={classes.content}>
          <Typography variant='h5'>{item.title}</Typography>
          <div className={classes.priceDetails}>
            <Typography variant='h4' className={classes.price}>
              &#8377;{item.price}
            </Typography>
            <Typography
              variant='subtitle1'
              style={{ textDecoration: 'line-through' }}
              className={classes.originalPrice}
            >
              &#8377;{item.originalPrice}
            </Typography>
            <Typography className={(classes.lightText, classes.discount)}>
              ({item.discount} off)
            </Typography>
          </div>

          <div className={classes.sizeContainer}>
            <Typography variant='h6'>Select Size: </Typography>
            <ButtonGroup
              aria-label='size group'
              className={classes.sizeButtons}
            >
              {item.sizes.map((size, index) => (
                <>
                  <Button variant='outlined' className={classes.sizeButton}>
                    {size}
                  </Button>
                </>
              ))}
            </ButtonGroup>
          </div>
          <div>
            <Button
              variant='contained'
              startIcon={<AddShoppingCartIcon />}
              className={classes.actionButton}
            >
              {' '}
              Add to cart
            </Button>
          </div>
        </CardContent>
      </div>
      <div className={classes.detailsContainer}>
        <Typography variant='h6'> Product Details: </Typography>
      </div>
    </Card>
  );
};

export default Product;
