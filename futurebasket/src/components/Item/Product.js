import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { CardHeader, Icon, Snackbar, Tooltip } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Wishlist from "components/Wishlist/Wishlist";
import { addToCart, removeToCart } from "actions/cart";
import Alert from "@material-ui/lab/Alert";

function valuetext(value) {
  return `${value}`;
}

const marks = [
  { value: 1, label: 1 },
  { value: 5, label: 5 },
  { value: 10, label: 10 },
];
const Product = ({ item }) => {
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;

  const storeCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [sizesAddedToCart, setSizesAddedToCart] = useState([]);
  const [snackbar, setsnackbar] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick = (newState) => {
    setsnackbar({ open: true, ...newState });
  };

  const handleClose = () => {
    setsnackbar({ ...snackbar, open: false });
  };

  const { vertical, horizontal, open } = snackbar;

  const updateCartInStore = () => {
    dispatch(addToCart(item, size, quantity ));
  }
  const handleCartButtonClick = () => {
      if(size === ""){
      handleClick({
        vertical: 'bottom',
        horizontal: 'right',
      });
     } else {
      setSizesAddedToCart([...sizesAddedToCart, size]) 
      updateCartInStore();
      }
  }

  return (
    <Card variant="outlined">
      <div className={classes.container}>
        <div className={classes.childImages}>
          {item.childImagesSmall.map((image) => {
            return (
              <CardMedia
                component="img"
                className={classes.childCover}
                image={image}
              />
            );
          })}
        </div>
        <div>
          <CardHeader
            className={classes.header}
            action={<Wishlist item={item} />}
          />

          <CardMedia
            component="img"
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
              variant="subtitle1"
              style={{ textDecoration: "line-through" }}
              className={classes.originalPrice}
            >
              {item.originalPrice}
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
                    <Link to={`/product/${variant.variantId}`} key = {variant.variantId}>
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
            <ButtonGroup aria-label="size group" color="secondary">
              {item.sizes.map((itemSize, index) => (
                <>
                  <Button
                    variant="outlined"
                    onClick={() => setSize(itemSize)}
                    className={`${size === itemSize && classes.applyColor} ${
                      classes.sizeButton
                    } ${classes.sizeButton}`}
                  >
                    {itemSize}
                  </Button>
                </>
              ))}
            </ButtonGroup>
          </div>
          <div className={classes.quantityContainer}>
            <Button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === MIN_QUANTITY}
              className={`${classes.buttons} ${quantity === MIN_QUANTITY && classes.disabled}`}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === MAX_QUANTITY}
              className={`${classes.buttons} ${quantity === MAX_QUANTITY && classes.disabled}`}
            >
              +
            </Button>
          </div>
          <div>
            {sizesAddedToCart.includes(size) ? (
              <Link to="/cart">
                <Button
                  variant="contained"
                  color = "secondary"
                  size="large"
                  startIcon={<AddShoppingCartIcon />}
                  className={classes.actionButton}
                >
                  {" "}
                  Go To Cart
                </Button>
              </Link>
            ) : (
              <Button
                variant="contained"
                color = "secondary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                className={`${classes.actionButton} `}
                onClick={handleCartButtonClick}
              >
                {" "}
                Add to cart
              </Button>
            )}
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackbar.open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={2000}
      >
        <Alert onClose={handleClose}  variant="filled" severity='error'>
          Please Select the Size.
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default Product;
