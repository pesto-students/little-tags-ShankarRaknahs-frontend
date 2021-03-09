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
            item.colors ? (
              <div className={classes.colors}>
                {item.colors.map((color) => {
                  return (
                    <IconButton>
                      <Skeleton
                        variant='circle'
                        animation={false}
                        width={12}
                        height={12}
                        style={{ backgroundColor: color, marginRight: 10 }}
                      />
                    </IconButton>
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
          <CardActionArea>
            <div className={classes.coverContainer}>
              <CardMedia
                component='img'
                className={classes.cover}
                image={item.image}
                title={classes.title}
              />
            </div>

            <CardContent className={classes.content}>
              <Typography noWrap variant='body2'>
                {item.title}
              </Typography>
              <Typography variant='subtitle1' className={classes.price}>
                Rs. {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
      </Card>
    </div>
  );
};

export default Product;
