const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToCart': {
            let item = action.item;
            let res = state.filter(ele => ele.id === item.id )
            if(!res.length) {
                item['cart'] = {};
                state.push(item);
            }
            for(const prod of state) {
                if(prod.id === action.item.id) {
                    if(!prod['cart'][action.size]) {
                        prod['cart'][action.size] = {
                            "quantity": action.quantity
                        }
                    } else {
                        let quantity = Math.min(prod['cart'][action.size] + action.quantity, 5);
                        prod['cart'][action.size] = {
                            "quantity": quantity 
                        }
                    }
                    break;
                }
            }
            return state;
        }
        case 'removeToCart': {
            for(const prod of state) {
                if(prod.id === action.item.id) {
                    if(prod['cart'][action.size]) {
                        let quantity = Math.max(prod['cart'][action.size]['quantity'] - 1, 0);
                        if(quantity === 0) 
                            delete  prod['cart'][action.size];
                        else
                            prod['cart'][action.size]['quantity'] = quantity; 
                    }
                    break;
                }
            }
            return state;
        }
        default:
            return state;
    }
}

export default cartReducer;