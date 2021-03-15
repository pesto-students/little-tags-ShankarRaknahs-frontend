import { combineReducers } from 'redux'
import localeReducer from './locale';
import wishlistReducer from "./wishlist";
import cartReducer from "./cart";

const allReducers = combineReducers({
    localeReducer,
    wishlistReducer,
    cartReducer
})

export default allReducers;
