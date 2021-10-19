import { gql } from '@apollo/client';

export const GET_CITIES = gql`
    query GetCities {
        cities {
            country
            city
            image
            key
            rating
            price
            description
        }
    }
`;

export const ADD_CITY = gql`
    mutation addCity($country: String, $city: String, $image: String, $key: String, $rating: String, $price: String, $description: String) {
        addCity(country: $country, city: $city, image: $image, key: $key, rating: $rating, price: $price, description: $description) {
          country
          city
          image
          key
          rating
          price
          description
        }
    }
`;