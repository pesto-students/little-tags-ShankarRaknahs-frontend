const localeReducer = (state = 'en', action) => {
    switch (action.type) {
        case 'en':
            return 'es';
        case 'es':
            return 'en';
        default:
            return state;
    }
}

export default localeReducer;