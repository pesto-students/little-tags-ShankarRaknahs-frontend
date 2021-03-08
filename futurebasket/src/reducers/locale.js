// let locale = window.localStorage.getItem("language").trim();
// console.log({locale})
// if(!locale || !locale.includes["es", "en"]) locale = 'en';

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