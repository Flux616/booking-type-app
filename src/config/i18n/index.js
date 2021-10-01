import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ru from './ru';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            ru: ru
        },
        lng: 'ru',
        fallbackLng: 'en'
    });

export default i18n;
