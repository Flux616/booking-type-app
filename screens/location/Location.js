import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LocationCities from './components/LocationCities'
<<<<<<< HEAD
import LocationSearchBar from './components/LocationSearchBar'

const Location = () => (
    <ScrollView>
=======
import LocationHeader from './components/LocationHeader'
import LocationSearchBar from './components/LocationSearchBar'



const Location = () => (
    <ScrollView>
        <LocationHeader/>
>>>>>>> main
        <LocationSearchBar/>
        <LocationCities/>
    </ScrollView>
)

<<<<<<< HEAD
export default Location
=======
export default Location

const styles = StyleSheet.create({})
>>>>>>> main
