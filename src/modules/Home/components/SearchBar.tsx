import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../../config/redux/hooks';

const HomeSearchBar = () => {
    const [countryInput, setCountryInput] = useState('');
    const coutryList = useAppSelector(state => state.locations);

    const searchCountry = (countryInput: string) => {
        const filteredCountry = countryList.filter(({country}: {country: string})  => country === countryInput);
        //TODO: Navigation to details of filtered item
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={countryInput}
                style={styles.searchInput}
                placeholder={'Search city here...'}
                autoCapitalize={'words'}
                onChangeText={setCountryInput}
            />
            <TouchableOpacity style={styles.searchIcon}>
                <Ionicons
                    name={'search'}
                    size={26}
                    color={'#FFFFFF'}
                    onPress={searchCountry}
                />
            </TouchableOpacity>
        </View>);
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 10,
        marginBottom: 10
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
        backgroundColor: '#3F96EA',
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
});

export default HomeSearchBar;