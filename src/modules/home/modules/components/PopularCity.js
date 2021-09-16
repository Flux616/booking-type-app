import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const PopularCity = (props) => (
    <View style={styles.item}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.titleText}>{props.city}</Text>
        <Text style={styles.locationText}>{props.country}</Text>
        <View style={styles.rating}>
            <Text style={styles.ratingText}>{props.rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginRight: 10,
        height: 210,
        width: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: 4
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
    rating: {
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
        fontSize: 12
    }
})

export default PopularCity