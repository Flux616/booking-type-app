import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProfileFooter = () => (
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

export default ProfileFooter

const styles = StyleSheet.create({
    header: {
        color: 'gray'
    },
    switch: {
        marginTop: 10,
        fontWeight: 'bold',
        color: 'royalblue'
    },
    logOut: {
        marginTop: 10,
        fontWeight: 'bold',
        color: 'crimson'
    }
})
