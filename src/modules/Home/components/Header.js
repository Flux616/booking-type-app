import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <View>
            <Text style={styles.upperText}>Welcome Buddy</Text>
            <Text style={styles.lowerText}>Start search your trip!</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../../../assets/images/avatar.jpg')} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    upperText: {
        color: '#3F96EA',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lowerText: {
        marginTop: 10,
        color: '#3F96EA'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});

export default Header;