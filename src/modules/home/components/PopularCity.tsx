import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import StarIcon from '../../../components/StarIcon';
import { DetailsScreenNavigationProps } from '../../../config/navigation/types';

type Props = {
    image: string,
    country: string,
    city: string,
    rating: string,
    price: string,
    cityKey: string,
    description: string
}

const PopularCity: React.FC<Props> = ({ image, country, city, rating, price, cityKey, description}) => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();
    const { t } = useTranslation('translation');

    const test = () => {
        console.log(description);
        navigation.navigate('Details', {rating, city, country, image, price, cityKey, description});
    };

    return (
        <CityCard onPress={test}>
            <CityImage source={{uri: image}}/>
            <CountryName>{t('countries.' + country)}</CountryName>
            <CityName>{t('cities.' + city)}</CityName>
            <RatingContainer>
                <StarIcon width={10} height={10}/>
                <Rating>{rating}</Rating>
            </RatingContainer>
        </CityCard>
    );
};

const CityCard = styled.TouchableOpacity`
  backgroundColor: ${props => props.theme.locationContainer};
  borderRadius: 4px;
  height: 210px;
  marginRight: 10px;
  padding: 10px;
  shadowColor: ${props => props.theme.shadowColor};
  shadowOpacity: 0.1;
  shadowRadius: 10px
  width: 160px;
`;

const CityImage = styled.Image`
  borderRadius: 4px
  height: 140px;
  width: 140px;
`;

const CountryName = styled.Text`
  color: ${props => props.theme.text};
  fontWeight: bold;
  marginTop: 8px;
`;

const CityName = styled.Text`
  color: ${props => props.theme.lowerText};
  marginTop: 8px;
`;

const RatingContainer = styled.View`
  alignItems: center;
  backgroundColor: ${props => props.theme.locationContainer};
  borderRadius: 2px;
  flexDirection: row;
  padding: 4px
  position: absolute;
  right: 9px;
  top: 9px;
`;

const Rating = styled.Text`
  color: ${props => props.theme.ratingText};
  fontSize: 12px;
  fontWeight: bold;
  marginLeft: 2px
`;

export default PopularCity;