import React from 'react'
import { ScrollView } from 'react-native'
import HomeHeader from './components/HomeHeader'
import HomeSearchBar from './components/HomeSearchBar'
import SuggestionsSection from './components/suggestionsSection/SuggestionsSection'

const Home = () => {
    return (
      <ScrollView style={{backgroundColor: 'ghostwhite'}}>
        <HomeHeader/>
        <HomeSearchBar/>
        <SuggestionsSection/>
      </ScrollView>
    )
}

export default Home