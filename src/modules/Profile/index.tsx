import React from 'react';
import { StyleSheet, View } from 'react-native';
import Info from './components/Info';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import profile from '../../config/stores/profile';
import { observer } from 'mobx-react';

const Profile = () => {
    const {name, description, image, status} = profile.user

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Info name={name} description={description} image={image}/>
                <Status status={status} setStatus={(status) => profile.setStatus(status)}/>
                <Dashboard/>
                <Footer/>
            </View>
        </View>
    )
};

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

export default observer(Profile);
