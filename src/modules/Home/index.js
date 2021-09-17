import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Suggestions from './components/Suggestions'

const Home = () => (
  <SafeAreaView style={styles.safeArea} edges={['top']}>
    <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
      <Header/>
      <SearchBar/>
      <Suggestions/>
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

export default Home