import { makeAutoObservable } from 'mobx';
import { Alert } from 'react-native';
import { ADD_CITY, GET_CITIES } from '../../modules/home/API/queries';
import { client } from '../graphql';
import { City } from '../navigation/types';
import uuid from 'react-native-uuid';
import { graphql } from 'graphql';
import { DELETE_CITY, EDIT_DESCRIPTION } from '../../modules/details/API/queries';

class CitiesStore {
    cities!: Array<City>

    defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet consectetur tincidunt.';

    constructor() {
        makeAutoObservable(this);
    }

    async getCities() {
        try {
            const response = await client.query({query: GET_CITIES});
            this.cities = response.data['cities'];
        } catch(error) {
            Alert.alert('Error', 'Could not get cities');
        }
    }

    async addNewCity() {
        try {
            const cityData = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json();
            const cityImage = await fetch('https://source.unsplash.com/featured/?skyline');

            const {street, city} = cityData['address'];
            const cityKey = uuid.v4();
            const cityImageUrl = cityImage['url'];

            const cityObject = {city: city, country: street, image: cityImageUrl, cityKey: cityKey, rating: 4.5, price: 130, description: this.defaultDescription};

            await client.mutate({mutation: ADD_CITY, variables: cityObject});
            this.cities = [cityObject, ...this.cities];
        } catch(error) {
            Alert.alert('Error', 'Could not add new City');
        }
    }

    async deleteCity(cityKey: string) {
        try {
            await client.mutate({mutation: DELETE_CITY, variables: {cityKey: cityKey}});
            this.cities = this.cities.filter((city: City) => city.cityKey !== cityKey);
        } catch(error) {
            Alert.alert('Error', 'Could not delete this city');
        }
    }

    async editCityDescription(description: string, cityKey: string) {
        try {
            await client.mutate({mutation: EDIT_DESCRIPTION, variables: {description, cityKey}});
            this.cities = this.cities.map((city: City) => {
                if (city.cityKey === cityKey) city.description = description;
                return city;
            });
        } catch(error) {
            Alert.alert('Error', 'Could not update city description');
        }
    }
}

const store = new CitiesStore();

export default store;