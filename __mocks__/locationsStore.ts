import i18n from "../src/config/i18n"

export const locationsStore = [
    {
        country: i18n.t('countries.sweden'),
        city: i18n.t('cities.stockholm'),
        image: require('../assets/images/countries/sweden/stockholm.jpeg'),
        key: 'stockholm',
        rating: 4.5,
        price: 150
    },
    {
        country: i18n.t('countries.netherlands'),
        city: i18n.t('cities.amsterdam'),
        image: require('../assets/images/countries/netherlands/amsterdam.jpg'),
        key: 'amsterdam',
        rating: 4.6,
        price: 130
    },
    {
        country: i18n.t('countries.uk'),
        city: i18n.t('cities.london'),
        image: require('../assets/images/countries/united-kingdom/london.jpg'),
        key: 'london',
        rating: 4.1,
        price: 115
    },
    {
        country: i18n.t('countries.hungary'),
        city: i18n.t('cities.budapest'),
        image: require('../assets/images/countries/hungary/budapest.jpg'),
        key: 'budapest',
        rating: 4.2,
        price: 90
    },
    {
        country: i18n.t('countries.denmark'),
        city: i18n.t('cities.stockholm'),
        image: require('../assets/images/countries/denmark/copenhagen.jpeg'),
        key: 'copenhagen',
        rating: 4.7,
        price: 90
    },
    {
        country: i18n.t('countries.germany'),
        city: i18n.t('cities.frankfurt'),
        image: require('../assets/images/countries/germany/frankfurt.jpg'),
        key: 'frankfurt',
        rating: 4.4,
        price: 90
    },
    {
        country: i18n.t('countries.poland'),
        city: i18n.t('cities.gdansk'),
        image: require('../assets/images/countries/poland/gdansk.jpg'),
        key: 'gdansk',
        rating: 4.3,
        price: 90
    },
    {
        country: i18n.t('countries.czech'),
        city: i18n.t('cities.prague'),
        image: require('../assets/images/countries/czech-republic/prague.jpg'),
        key: 'prague',
        rating: 4.6,
        price: 90
    }
]