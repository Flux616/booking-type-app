import React from 'react';
import { StyleSheet, View } from 'react-native';
import Info from './components/Info';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const Profile = () => (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <Info/>
            <Status/>
            <Dashboard/>
            <Footer/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container: {
        marginHorizontal: 30,
        justifyContent: 'space-around',
        flex: 1
    }
});

export default Profile;
