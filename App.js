import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import SuggestionsSection from './components/suggestionsSection/SuggestionsSection'

const App = () => {
  return (
    <ScrollView style={{backgroundColor: 'ghostwhite'}}>
      <Header/>
      <SearchBar/>
      <SuggestionsSection/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
  }
});

export default App;
