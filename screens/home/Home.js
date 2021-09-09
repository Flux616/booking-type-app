import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HomeHeader from './components/HomeHeader'
import HomeSearchBar from './components/HomeSearchBar'
import SuggestionsSection from './components/suggestionsSection/SuggestionsSection'

const Home = () => (
  <ScrollView>
    <HomeHeader/>
    <HomeSearchBar/>
    <SuggestionsSection/>
  </ScrollView>
)

export default Home