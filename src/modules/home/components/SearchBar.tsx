import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DetailsScreenNavigationProps, Location } from '../../../config/navigation/types';
import LocationsStore from '../../../config/stores/locations'

const HomeSearchBar = () => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.searchBar'})
    const [cityInput, setCityInput] = useState('');
    const coutryList = LocationsStore.locations;

    const searchCity = (countryList: Array<Location>, cityInput: string) => {
        const filteredCity = countryList.filter(({city}: {city: string}) => city === cityInput)[0];
        if (filteredCity) {
            return navigation.navigate('Details', filteredCity)
        } else {
            return Alert.alert(t('alert'))
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={cityInput}
                style={styles.searchInput}
                placeholder={t('placeholder')}
                autoCapitalize={'words'}
                onChangeText={setCityInput}
            />
            <TouchableOpacity style={styles.searchIcon} onPress={() => searchCity(coutryList, cityInput)}>
                <Icon
                    name={'search'}
                    size={26}
                    color={'#FFFFFF'}
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