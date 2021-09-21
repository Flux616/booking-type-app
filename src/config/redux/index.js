import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileSlice from '../../modules/profile/redux';
import locationsSlice from '../../modules/location/redux';


const rootReducer = combineReducers({
    profile: profileSlice,
    locations: locationsSlice
});

export const store = configureStore({
    reducer: rootReducer
});