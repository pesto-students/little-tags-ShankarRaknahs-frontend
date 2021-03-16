import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { useStylesItems } from './styles';
import React from 'react'

function ItemDisplay({item}) {
  const classes = useStylesItems();

    return (
        <>
        {Object.keys(item.cart).map(size => (
            <div className={classes.productContainer}>
            <Card>
              <div className={classes.container}>
                <CardMedia
                  component='img'
                  className={classes.cover}
                  image={item.image}
                />
                <CardContent>
                  <Typography variant='subtitle1'>{item.title}</Typography>
                  <Typography variant='subtitle2' className={classes.brand}>
                    {item.company}
                  </Typography>
                  <div style = {{margin : "1rem 0rem"}}>
                  <Typography variant='span' >
                  size: { size}
                  </Typography>
                  </div>
                  <div className={classes.priceDetails}>
                    <Typography variant='subtitle1' className={classes.price}>
                      &#8377;{item.price}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      style={{ textDecoration: 'line-through' }}
                      className={classes.originalPrice}
                    >
                      {item.originalPrice}
                    </Typography>
                    <Typography className={(classes.discount)}>
                      ({item.discount} off)
                    </Typography>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          ))}
          </>
    )
}

export default ItemDisplay
