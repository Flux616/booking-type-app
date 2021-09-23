import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';

const Home = () => (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.home} nestedScrollEnabled={true}>
            <Header/>
            <SearchBar/>
            <Suggestions/>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    home: {
        marginHorizontal: 20,
        marginTop: 15
    },
    safeArea: {
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});

export default Home;