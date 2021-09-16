<<<<<<< HEAD
import React, {useState} from "react"
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";

const HomeSearchBar = () => {
    const [countryInput, setCountryInput] = useState('')
    const coutryList = useSelector(state => state.locations)

    const searchCountry = countryInput => {
        const filteredCountry = countryList.filter(item => item.country === countryInput)
        //TODO: Navigation to details of filtered item
    }

    return (
    <View style={styles.container}>
        <TextInput
            value={countryInput}
            style={styles.searchInput}
            placeholder={'Search city here...'}
            autoCapitalize={'words'}
            onChangeText={(value) => setCountryInput(value)}
        />
        <TouchableOpacity style={styles.searchIcon}>
            <Ionicons
                name={'search'}
                size={26}
                color={'#f8f8ff'}
                onPress={searchCountry}
            />
        </TouchableOpacity>
    </View>)
}
=======
import React from "react"
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeSearchBar = () => (
    <View style={styles.container}>
        <TextInput
            style={styles.searchInput}
            placeholder={'Search here...'}
            autoCapitalize={true}
        />
        <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name={'search'} size={26} color={'ghostwhite'} />
        </TouchableOpacity>
    </View>
)
>>>>>>> main

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30,
<<<<<<< HEAD
        marginHorizontal: 10
=======
        marginHorizontal: 20
>>>>>>> main
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#e6e6fa',
        borderRadius: 6,
        marginRight: 20,
        height: 50,
        paddingHorizontal: 15
    },
    searchIcon: {
        height: 50,
        width: 50,
<<<<<<< HEAD
        backgroundColor: '#00bfff',
=======
        backgroundColor: 'deepskyblue',
>>>>>>> main
        padding: 12,
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

export default HomeSearchBar