import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Cities from './components/Cities'
import SearchBar from './components/SearchBar'

const Location = () => (
    <ScrollView>
        <SearchBar/>
        <Cities/>
    </ScrollView>
)

export default Location
