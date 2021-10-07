import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { useTheme } from 'styled-components/native';
import { DetailsScreenNavigationProps, Location } from '../../../config/navigation/types';
import LocationsStore from '../../../config/stores/locations';

const HomeSearchBar = () => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.searchBar'});
    const [cityInput, setCityInput] = useState('');
    const theme = useTheme();
    const coutryList = LocationsStore.locations;

    const searchCity = (countryList: Array<Location>, cityInput: string) => {
        const filteredCity = countryList.filter(({city}: {city: string}) => city === cityInput)[0];
        if (filteredCity) {
            return navigation.navigate('Details', filteredCity);
        }
        return Alert.alert(t('alert'));

    };

    return (
        <Wrapper>
            <SearchInput
                value={cityInput}
                placeholder={t('placeholder')}
                placeholderTextColor={theme.lowerText}
                autoCapitalize={'words'}
                onChangeText={setCityInput}
            />
            <SearchButton onPress={() => searchCity(coutryList, cityInput)}>
                <Icon
                    name={'search'}
                    size={26}
                    color={theme.background}
                />
            </SearchButton>
        </Wrapper>);
};

const Wrapper = styled.View`
flexDirection: row;
justifyContent: space-between;
marginBottom: 10px
marginHorizontal: 10px;
marginTop: 30px;
`;

const SearchInput = styled.TextInput`
backgroundColor: ${props => props.theme.searchBar};
borderRadius: 6px;
flex: 1px;
height: 50px;
marginRight: 20px;
paddingHorizontal: 15px;
`;

const SearchButton = styled.TouchableOpacity`
backgroundColor: ${props => props.theme.schemeColor};
borderRadius: 4px;
height: 50px;
padding: 12px;
width: 50px;
`;

export default HomeSearchBar;