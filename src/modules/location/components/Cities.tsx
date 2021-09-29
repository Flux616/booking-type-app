import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { citiesArray } from '../../../../__mocks__/locationsCititesArray';

const LocationCities = () => (
    <View>
        {citiesArray.map( selected => {
            if (selected.country === 'Germany') {
                return selected.citiesArray.map( city => (
                    <View style={styles.item} key={city.id}>
                        <Image style={styles.image} source={city.image}/>
                        <View style={styles.textArea}>
                            <Text style={styles.upperText}>{city.name}</Text>
                            <Text style={styles.lowerText}>{selected.country}</Text>
                        </View>
                    </View>
                ));
            }
        })}
    </View>
);

export default LocationCities;

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        height: 220,
        borderRadius: 4,
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: '100%',
        height: 130,
        borderRadius: 4
    },
    textArea: {
        justifyContent: 'space-around',
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 10
    },
    upperText: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    lowerText: {
        marginTop: 8,
        color: '#808080'
    }
});