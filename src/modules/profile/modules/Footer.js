import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Footer = () => (
    <View>
        <Text style={styles.header}>My Account</Text>
        <TouchableOpacity>
            <Text style={styles.switch}>Switch to Other Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
    </View>
)

export default Footer

const styles = StyleSheet.create({
    header: {
        color: '#808080'
    },
    switch: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#4169e1'
    },
    logOut: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#990000'
    }
})
