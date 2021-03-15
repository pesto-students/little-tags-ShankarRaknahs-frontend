export const addToCart = (item, size, quantity) => {
    return {
        type: "addToCart",
        item,
        quantity,
        size
    }
}

export const removeToCart = (item, size, quantity) => {
    return {
        type: "removeToCart",
        item,
        quantity, 
        size
    }
}
