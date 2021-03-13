import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, CardHeader } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStyles } from './styles';

const Product = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <Link
            to={`/product/${item.id}`}
            style={{ 'text-decoration': 'none', color: 'inherit' }}
          >
            <CardActionArea className={classes.actionArea}>
              <div className={classes.coverContainer}>
                <CardMedia
                  component='img'
                  className={classes.cover}
                  image={item.image}
                  title={classes.title}
                />
              </div>

              {
                <Avatar className={classes.avatar}>
                  <IconButton aria-label='settings'>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Avatar>
              }
              <CardContent className={classes.content}>
                <Typography className={classes.lightText} variant='span'>
                  {item.company}
                </Typography>
                <Typography noWrap variant='subtitle1'>
                  {item.title}
                </Typography>
                <div className={classes.priceDetails}>
                  <Typography variant='subtitle1' className={classes.price}>
                    &#8377;{item.price}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    style={{ 'text-decoration': 'line-through' }}
                    className={classes.originalPrice}
                  >
                    {item.originalPrice}
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
