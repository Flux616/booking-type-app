import { makeAutoObservable } from 'mobx';
import { locationsStore } from '../../../__mocks__/locationsStore';
import { Location } from '../navigation/types';

class LocationsStore {
    locations: Array<Location> = locationsStore

    constructor() {
        makeAutoObservable(this);
    }
}

const store = new LocationsStore();

export default store;