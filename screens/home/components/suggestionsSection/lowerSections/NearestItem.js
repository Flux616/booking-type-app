import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

const NearestItem = (props) => (
    <View style={styles.item}>
        <Image style={styles.image} source={props.image}/>
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
    }
})

export default NearestItem