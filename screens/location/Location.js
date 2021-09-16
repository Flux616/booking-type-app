import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LocationCities from './components/LocationCities'
import LocationSearchBar from './components/LocationSearchBar'

const Location = () => (
    <ScrollView>
        <LocationSearchBar/>
        <LocationCities/>
    </ScrollView>
)

export default Location