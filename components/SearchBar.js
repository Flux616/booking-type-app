import React from "react"
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import Icon from 'react-native-elements'


const SearchBar = () => {
    
    return (
        <View style={styles.container}>
            <TextInput
              style={styles.searchInput}
              placeholder={'Search here...'}
              autoCapitalize={true}
            />
            <TouchableOpacity
              style={styles.button}
            >
                <Text>Find</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 20
    },
    searchInput: {
        width: "70%",
        backgroundColor: '#e6e6fa',
        borderRadius: 6,
        paddingHorizontal: 10,
        height: 44
    },
    button: {
        height: 44,
        width: "23%",
        backgroundColor: '#278CCF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5
    }
})

export default SearchBar