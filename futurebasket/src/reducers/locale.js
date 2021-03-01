const localeReducer = (state = "Es", action) => {
    switch (action.type) {
        case 'En':
            return 'Es';
        case 'Es':
            return 'En';
        default:
            return state;
    }
}

export default localeReducer;