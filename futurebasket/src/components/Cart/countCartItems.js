const countCartItems = (cart) => {
    let count = 0;
    cart.forEach((item) => {
        for(const [key,values] of Object.entries(item.cart)) {
            count += parseInt(values.quantity);
        }
    })
    return count;
}

export default countCartItems;
