import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

const NearestItem = (props) => (
    <View style={styles.item}>
        <Image style={styles.image} source={props.image}/>
        <View style={styles.rating}>
            <Text style={styles.ratingText}>{props.rating}</Text>
        </View>
        <View style={styles.price}>
            <Text style={styles.priceText}>{props.price}</Text>
        </View>
        <View style={styles.textArea}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.locationText}>{props.location}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        height: 120,
        borderRadius: 4,
        backgroundColor: 'white'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
    textArea: {
        justifyContent: 'space-around',
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 10
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
        borderRadius: 4,
        backgroundColor: 'ghostwhite',
        position: 'absolute',
        right: 0,
        padding: 7
    },
    ratingText: {
        color: '#ffcd00',
        fontWeight: 'bold',
        fontSize: 15
    },
    price: {
        borderRadius: 4,
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 14
    },
    priceText: {
        color: '#ffcd00',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default NearestItem