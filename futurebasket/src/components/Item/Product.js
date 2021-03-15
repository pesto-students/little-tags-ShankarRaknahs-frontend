import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { CardHeader, Icon, Tooltip } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Wishlist from "components/Wishlist/Wishlist";
import { addToCart, removeToCart } from "actions/cart";

const Product = ({ item }) => {
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;

  const storeCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [sizesAddedToCart, setSizesAddedToCart] = useState([]);

  const updateCartInStore = () => {
    dispatch(addToCart(item, size, quantity ));
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
            title={
              item.variantsColor ? (
                <div className={classes.colors}>
                  {item.variantsColor.map((variant) => {
                    return (
                      <Link to={`/product/${variant.variantId}`}>
                        <Tooltip
                          title={`${variant.color}`}
                          placement="top"
                          arrow
                        >
                          <IconButton>
                            <Skeleton
                              variant="circle"
                              animation={false}
                              width={20}
                              height={20}
                              style={{
                                backgroundColor: variant.color,
                                marginRight: 10,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )
            }
            action={<Wishlist item={item} />}
          />

          <CardMedia
            component="img"
            className={classes.cover}
            image={item.image}
          />
        </div>
        <CardContent className={classes.content}>
          <Typography variant="h5">{item.title}</Typography>
          <div className={classes.priceDetails}>
            <Typography variant="h4" className={classes.price}>
              &#8377;{item.price}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ textDecoration: "line-through" }}
              className={classes.originalPrice}
            >
              &#8377;{item.originalPrice}
            </Typography>
            <Typography className={(classes.lightText, classes.discount)}>
              ({item.discount} off)
            </Typography>
          </div>

          <div className={classes.sizeContainer}>
            {/* <Typography variant='h6'>Select Size: </Typography> */}
            <ButtonGroup aria-label="size group" color="secondary">
              {item.sizes.map((itemSize, index) => (
                <>
                  <Button
                    variant="outlined"
                    onClick={() => setSize(itemSize)}
                    className={classes.sizeButton}
                    className={`${size === itemSize && classes.applyColor} ${
                      classes.sizeButton
                    }`}
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
              className={classes.buttons}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === MAX_QUANTITY}
              className={classes.buttons}
            >
              +
            </Button>
          </div>
          <div>
            {sizesAddedToCart.includes(size) ? (
              <Link to="/cart">
                <Button
                  variant="contained"
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
                size="large"
                startIcon={<AddShoppingCartIcon />}
                className={classes.actionButton}
                onClick={() => {
                  setSizesAddedToCart([...sizesAddedToCart, size]) 
                  updateCartInStore();
                }}
                disabled = {size === ""}
              >
                {" "}
                Add to cart
              </Button>
            )}
          </div>
        </CardContent>
      </div>
      <div className={classes.detailsContainer}>
        <Typography variant="h6"> Product Details: </Typography>
        <Typography variant="subtitle2">{item.details}</Typography>
      </div>
    </Card>
  );
};

export default Product;
