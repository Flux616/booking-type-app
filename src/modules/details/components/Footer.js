import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.price}>150$/Day</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Booking</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        height: 50
    },
    title: {
        color: 'gray'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        backgroundColor: '#008cff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: '800'
    }
})
