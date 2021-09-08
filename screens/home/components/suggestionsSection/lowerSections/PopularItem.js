import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

const PopularItem = (props) => {
    return (
        <View style={styles.item}>
            <Image style={styles.image} source={props.image}/>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.locationText}>{props.location}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        marginRight: 10,
        height: 220,
        width: 170,
        backgroundColor: 'white',
        borderRadius: 4
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 4
    },
    titleText: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    locationText: {
        marginTop: 8,
        color: 'gray'
    }
})

export default PopularItem