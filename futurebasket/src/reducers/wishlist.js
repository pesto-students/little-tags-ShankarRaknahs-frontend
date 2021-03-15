const wishlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'add': {
            state.push(action.item);
            return state;
        }
        case 'remove': {
            let data =  state.filter(item => item.id !== action.item.id);
            return data;
        }
        default:
            return state;
    }
}

export default wishlistReducer;