import { gql } from '@apollo/client';

export const GET_CITIES = gql`
    query GetCities {
        cities {
            country
            city
            image
            cityKey
            rating
            price
            description
        }
    }
`;

export const ADD_CITY = gql`
    mutation addCity($country: String, $city: String, $image: String, $cityKey: String, $rating: Float, $price: Int, $description: String) {
        addCity(country: $country, city: $city, image: $image, cityKey: $cityKey, rating: $rating, price: $price, description: $description) {
          country
          city
          image
          cityKey
          rating
          price
          description
        }
    }
`;