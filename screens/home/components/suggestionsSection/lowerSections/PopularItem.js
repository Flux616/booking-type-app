import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

const PopularItem = (props) => (
    <View style={styles.item}>
        <Image style={styles.image} source={props.image}/>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.locationText}>{props.location}</Text>
        <View style={styles.rating}>
            <Text style={styles.ratingText}>{props.rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        marginRight: 10,
        height: 210,
        width: 160,
        backgroundColor: 'white',
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
        color: 'gray'
    },
    rating:{
        borderRadius: 2,
        backgroundColor: 'white',
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

export default PopularItem