import enMessages from "./en.json";
import esMessages from "./es.json";

const locales = {
    en: {
        locale : 'en',
        message: enMessages,
    },
    es: {
        locale: 'es',
        message: esMessages
    }
}

export const getLocaleData = locale => 
    locales[locale] ? locales[locale] : locales['en'];
