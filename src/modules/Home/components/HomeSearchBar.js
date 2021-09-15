import React, {useState} from "react"
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";

const HomeSearchBar = () => {
    const [countryInput, setCountryInput] = useState('')
    const coutryList = useSelector(state => state.locations)

    const handleChange = value => setCountryInput(value)

    const searchCountry = countryInput => {
        const filteredCountry = countryList.filter(item => item.country === countryInput)
        //NAVIGATION TO DETAILS SCREEN WITH FILTERED ITEM WITH PROPS?
    }

    return (
    <View style={styles.container}>
        <TextInput
            value={countryInput}
            style={styles.searchInput}
            placeholder={'Search city here...'}
            autoCapitalize={'words'}
            onChangeText={handleChange}
        />
        <TouchableOpacity style={styles.searchIcon}>
            <Ionicons
                name={'search'}
                size={26}
                color={'ghostwhite'}
                onPress={searchCountry}
            />
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 10
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
        backgroundColor: 'deepskyblue',
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