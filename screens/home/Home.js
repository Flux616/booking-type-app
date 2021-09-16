import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
<<<<<<< HEAD
import { SafeAreaView } from 'react-native-safe-area-context'
=======
>>>>>>> main
import HomeHeader from './components/HomeHeader'
import HomeSearchBar from './components/HomeSearchBar'
import SuggestionsSection from './components/suggestionsSection/SuggestionsSection'

const Home = () => (
<<<<<<< HEAD
  <SafeAreaView style={styles.safeArea} edges={['top']}>
    <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
      <HomeHeader/>
      <HomeSearchBar/>
      <SuggestionsSection/>
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  home: {
    marginHorizontal: 20,
    marginTop: 15
  },
  safeArea: {
    backgroundColor: '#f8f8ff'
  }
})

=======
  <ScrollView>
    <HomeHeader/>
    <HomeSearchBar/>
    <SuggestionsSection/>
  </ScrollView>
)

>>>>>>> main
export default Home