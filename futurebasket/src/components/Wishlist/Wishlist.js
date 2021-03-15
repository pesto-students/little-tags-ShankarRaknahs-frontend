import React, { useEffect, useState } from "react";
import { Avatar, IconButton, makeStyles, Tooltip } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist, removeWishlist } from "actions/wishlist";

function Wishlist({ item }) {
 const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#f0f0f7',
  },
  wishlistButton: {
    color: "red",
  }
})

  const wishlist = useSelector((state) => state.wishlistReducer);
  const [wishlisted, setWishlisted] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const handleWishlistClick = (event) => {
    if (!wishlisted) {
      dispatch(addWishlist(item));
      setWishlisted(true);
    } else {
      dispatch(removeWishlist(item));
      setWishlisted(false);
    }
  };

  useEffect(() => {
    if(item) {
    let data = wishlist.filter((wishlistedItem) => wishlistedItem.id === item.id);
    setWishlisted(data.length > 0);
  }
  }, []);

  return (
    <div>
      <Avatar
        onClick={handleWishlistClick}
        className={` ${classes.avatar}  ${wishlisted && "wishlistButton"}`}
      >
        <Tooltip title="Wishlist" placement="top" arrow>
          <IconButton aria-label="settings">
            {wishlisted ? (
              <FavoriteIcon className={classes.wishlistButton} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Tooltip>
      </Avatar>
    </div>
  );
}

export default Wishlist;
