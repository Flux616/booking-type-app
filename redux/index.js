import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSlice from "../src/modules/profile/redux";
import locationsSlice from "../src/modules/location/redux";


const rootReducer = combineReducers({
    profile: profileSlice,
    locations: locationsSlice
})

export const store = configureStore({
    reducer: rootReducer
})