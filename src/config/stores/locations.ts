import { makeAutoObservable } from 'mobx';
import { Alert } from 'react-native';
import { ADD_CITY, GET_CITIES } from '../../modules/home/API/queries';
import { client } from '../graphql';
import { Location } from '../navigation/types';
import uuid from 'react-native-uuid';
import { graphql } from 'graphql';
import { DELETE_CITY, EDIT_DESCRIPTION } from '../../modules/details/API/queries';

class LocationsStore {
    locations: any = []

    constructor() {
        makeAutoObservable(this);
    }

    async getCities() {
        try {
            const response = await client.query({query: GET_CITIES});
            this.locations = response.data['cities'];
        } catch(error) {
            Alert.alert('Error', 'Could not get cities');
        }
    }

    async pushNewCity() {
        const cityData = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json();
        const cityImage = await fetch('https://source.unsplash.com/featured/?skyline');

        const {street, city} = cityData['address'];
        const key = uuid.v4();
        const cityImageUrl = cityImage['url'];
        const defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet consectetur tincidunt.';

        const cityObject = {city: city, country: street, image: cityImageUrl, key: key, rating: '4.5', price: '130', description: defaultDescription};

        await client.mutate({mutation: ADD_CITY, variables: cityObject});
        this.locations = [cityObject, ...this.locations];
    }

    async deleteCity(key: string) {
        await client.mutate({mutation: DELETE_CITY, variables: {key: key}});
        this.locations = this.locations.filter((city: Location) => city.key !== key);
    }

    async editCityDescription(description: string, key: string) {
        await client.mutate({mutation: EDIT_DESCRIPTION, variables: {description, key}});
        this.locations = this.locations.map((city: any) => {
            if (city.key === key) city.description = description;
            return city;
        });
    }
}

const store = new LocationsStore();

export default store;