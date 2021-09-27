import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StarIcon from '../../../components/StarIcon';

const PopularCity = ({ image, country, city, rating }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', {rating, city, country, image})}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.titleText}>{country}</Text>
            <Text style={styles.locationText}>{city}</Text>
            <View style={styles.rating}>
                <StarIcon width={10} height={10}/>
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        marginRight: 10,
        height: 210,
        width: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        shadowColor: '#808080',
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 4
    },
    titleText: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    locationText: {
        marginTop: 8,
        color: '#808080'
    },
    rating:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        right: 9,
        top: 9,
        padding: 4
    },
    ratingText: {
        color: '#ffcd00',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 2
    }
});

export default PopularCity;