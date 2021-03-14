import { combineReducers } from 'redux'
import localeReducer from './locale';
import wishlistReducer from "./wishlist";

const allReducers = combineReducers({
    localeReducer,
    wishlistReducer
})

export default allReducers;
