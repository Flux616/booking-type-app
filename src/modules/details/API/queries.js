import { gql } from '@apollo/client';

export const DELETE_CITY = gql`
    mutation deleteCity($key: String) {
        deleteCity(key: $key)
    }
`;

export const EDIT_DESCRIPTION = gql`
    mutation editCityDescription($key: String, $description: String) {
        editCityDescription(key: $key, description: $description)
    }
`;