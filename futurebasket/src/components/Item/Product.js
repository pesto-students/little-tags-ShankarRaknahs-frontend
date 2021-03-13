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
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}`;
}

const marks = [
  { value: 1, label: 1 },
  { value: 5, label: 5 },
  { value: 10, label: 10 },
];
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
          {/* <CardHeader
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
          /> */}

          <CardMedia
            component='img'
            className={classes.cover}
            image={item.image}
          />
        </div>
        <CardContent className={classes.content}>
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
              &#8377;{item.originalPrice}
            </Typography>
            <Typography className={(classes.lightText, classes.discount)}>
              ({item.discount} off)
            </Typography>
          </div>

          <div>
            {item.variantsColor ? (
              <div className={classes.colors}>
                <Typography variant='subtitle1' className={classes.selectSize}>
                  Colors
                </Typography>
                {item.variantsColor.map((variant) => {
                  return (
                    <Link to={`/product/${variant.variantId}`}>
                      <IconButton>
                        <Skeleton
                          variant='square'
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
            )}
          </div>

          <div className={classes.sizeContainer}>
            <Typography variant='subtitle1' className={classes.selectSize}>
              Select size
            </Typography>
            {item.sizes.map((size, index) => (
              <>
                <Avatar className={classes.avatar}>
                  <Typography variant='subtitle2'>{size}</Typography>
                </Avatar>
              </>
            ))}
          </div>

          <div>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              startIcon={<AddShoppingCartIcon />}
              className={classes.actionButton}
            >
              {' '}
              Add to cart
            </Button>
            <Button
              variant='outlined'
              size='large'
              startIcon={<FavoriteBorderIcon />}
              className={classes.wishlistButton}
            >
              {' '}
              Wishlist
            </Button>
          </div>
        </CardContent>
      </div>
      <div className={classes.detailsContainer}>
        <Typography variant='h6' className={classes.header}>
          {' '}
          Product details{' '}
        </Typography>
        <Typography variant='subtitle2'>{item.details}</Typography>
      </div>
    </Card>
  );
};

export default Product;
