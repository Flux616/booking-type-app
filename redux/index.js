import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import locationsSlice from "./locationsSlice";


const rootReducer = combineReducers({
    profile: profileSlice,
    locations: locationsSlice
})

export const store = configureStore({
    reducer: rootReducer
})