import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LocationCities from './components/LocationCities'
import LocationHeader from './components/LocationHeader'
import LocationSearchBar from './components/LocationSearchBar'



const Location = () => (
    <ScrollView>
        <LocationHeader/>
        <LocationSearchBar/>
        <LocationCities/>
    </ScrollView>
)

export default Location

const styles = StyleSheet.create({})
