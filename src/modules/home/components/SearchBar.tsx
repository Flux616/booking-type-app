import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { useTheme } from 'styled-components/native';
import { DetailsScreenNavigationProps, Location } from '../../../config/navigation/types';
import LocationsStore from '../../../config/stores/locations'

const HomeSearchBar = () => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.searchBar'})
    const [cityInput, setCityInput] = useState('');
    const theme = useTheme()
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
        <StyledView>
            <StyledTextInput
                value={cityInput}
                placeholder={t('placeholder')}
                placeholderTextColor={theme.lowerText}
                autoCapitalize={'words'}
                onChangeText={setCityInput}
            />
            <StyledTouchableOpacity onPress={() => searchCity(coutryList, cityInput)}>
                <Icon
                    name={'search'}
                    size={26}
                    color={theme.background}
                />
            </StyledTouchableOpacity>
        </StyledView>);
};

const StyledView = styled.View`
justifyContent: space-between;
flexDirection: row;
marginTop: 30px;
marginHorizontal: 10px;
marginBottom: 10px
`

const StyledTextInput = styled.TextInput`
flex: 1px;
backgroundColor: ${props => props.theme.searchBar};
borderRadius: 6px;
marginRight: 20px;
height: 50px;
paddingHorizontal: 15px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
height: 50px;
width: 50px;
backgroundColor: ${props => props.theme.schemeColor};
padding: 12px;
borderRadius: 4px;
`

export default HomeSearchBar;