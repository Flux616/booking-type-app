import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

<<<<<<< HEAD
const PopularItem = ({ item }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={item.image}/>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.locationText}>{item.location}</Text>
        <View style={styles.rating}>
            <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
=======
const PopularItem = (props) => (
    <View style={styles.item}>
        <Image style={styles.image} source={props.image}/>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.locationText}>{props.location}</Text>
>>>>>>> main
    </View>
)

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        marginRight: 10,
<<<<<<< HEAD
        height: 210,
        width: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: 4
    },
    image: {
        width: 140,
        height: 140,
=======
        height: 220,
        width: 170,
        backgroundColor: 'white',
        borderRadius: 4
    },
    image: {
        width: 150,
        height: 150,
>>>>>>> main
        borderRadius: 4
    },
    titleText: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    locationText: {
        marginTop: 8,
<<<<<<< HEAD
        color: '#808080'
    },
    rating:{
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
=======
        color: 'gray'
>>>>>>> main
    }
})

export default PopularItem