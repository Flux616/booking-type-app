import { gql } from '@apollo/client';

export const DELETE_CITY = gql`
    mutation deleteCity($cityKey: String) {
        deleteCity(cityKey: $cityKey)
    }
`;

export const EDIT_DESCRIPTION = gql`
    mutation editCityDescription($cityKey: String, $description: String) {
        editCityDescription(cityKey: $cityKey, description: $description)
    }
`;