import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, CardHeader } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStyles } from './styles';

const Product = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
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
                          width={12}
                          height={12}
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
        <div className={classes.details}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
            <CardActionArea className={classes.actionArea}>
              <div className={classes.coverContainer}>
                <CardMedia
                  component='img'
                  className={classes.cover}
                  image={item.image}
                  title={classes.title}
                />
              </div>

              <CardContent className={classes.content}>
                <Typography className={classes.lightText} variant='span'>
                  {item.company}
                </Typography>
                <Typography noWrap variant='h5'>
                  {item.title}
                </Typography>
                <div className={classes.priceDetails}>
                  <Typography variant='subtitle1' className={classes.price}>
                    Rs. {item.price}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    style={{ textDecoration: 'line-through' }}
                    className={classes.originalPrice}
                  >
                    Rs. {item.originalPrice}
                  </Typography>
                  <Typography className={(classes.lightText, classes.discount)}>
                    {item.discount} off
                  </Typography>
                </div>
                <div className={classes.sizeContainer}>
                  <Typography className={classes.lightText}>Size</Typography>
                  {item.sizes.map((size, index) => (
                    <>
                      <Typography
                        className={(classes.lightText, classes.sizes)}
                      >
                        {size}
                      </Typography>
                      {index !== item.sizes.length - 1 && (
                        <Typography className={classes.lightText}>,</Typography>
                      )}
                    </>
                  ))}
                </div>
              </CardContent>
            </CardActionArea>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Product;
