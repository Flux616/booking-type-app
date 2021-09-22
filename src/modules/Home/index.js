import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';
import VirtualizedView from '../../components/VirtualizedView';

const Home = () => (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
        <VirtualizedView>
            <ScrollView style={styles.home} nestedScrollEnabled={true}>
                <Header/>
                <SearchBar/>
                <Suggestions/>
            </ScrollView>
        </VirtualizedView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    home: {
        marginHorizontal: 20,
        marginTop: 15
    },
    safeArea: {
        backgroundColor: '#FFFFFF'
    }
});

export default Home;