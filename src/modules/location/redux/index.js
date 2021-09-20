import { createSlice } from "@reduxjs/toolkit";

const locationsSlice = createSlice({
    name: 'locations',
    initialState: [
        {
            country: 'Sweden',
            city: 'Stockholm',
            image: require('../../../../assets/images/countries/sweden/stockholm.jpeg'),
            id: 1,
            rating: '★ 4.5',
            price: '150€/Day'
        },
        {
            country: 'Netherlands',
            city: 'Amsterdam',
            image: require('../../../../assets/images/countries/netherlands/amsterdam.jpg'),
            id: 2,
            rating: '★ 4.6',
            price: '130€/Day'
        },
        {
            country: 'United Kingdom',
            city: 'London',
            image: require('../../../../assets/images/countries/united-kingdom/london.jpg'),
            id: 3,
            rating: '★ 4.1',
            price: '115€/Day'
        },
        {
            country: 'Hungary',
            city: 'Budapest',
            image: require('../../../../assets/images/countries/hungary/budapest.jpg'),
            id: 4,
            rating: '★ 4.2',
            price: '90€/Day'
        },
        {
            country: 'Denmark',
            city: 'Copenhagen',
            image: require('../../../../assets/images/countries/denmark/copenhagen.jpeg'),
            id: 5,
            rating: '★ 4.7',
            price: '90€/Day'
        },
        {
            country: 'Germany',
            city: 'Frankfurt',
            image: require('../../../../assets/images/countries/germany/frankfurt.jpg'),
            id: 6,
            rating: '★ 4.4',
            price: '90€/Day'
        },
        {
            country: 'Poland',
            city: 'Gdansk',
            image: require('../../../../assets/images/countries/poland/gdansk.jpg'),
            id: 7,
            rating: '★ 4.3',
            price: '90€/Day'
        },
        {
            country: 'Czech Republic',
            city: 'Prague',
            image: require('../../../../assets/images/countries/czech-republic/prague.jpg'),
            id: 8,
            rating: '★ 4.6',
            price: '90€/Day'
        }
    ],
    reducers: {

    }
})

export default locationsSlice.reducer;