let locale = localStorage.getItem("language");
if(!locale || !locale.includes["es", "en"]) locale = 'en';

const localeReducer = (state = locale, action) => {
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