export const addWishlist = (data) => {
    return {
        type: "add",
        item: data
    }
}

export const removeWishlist = (data) => {
    return {
        type: "remove",
        item: data
    }
}
