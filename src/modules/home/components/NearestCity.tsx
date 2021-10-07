import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import StarIcon from '../../../components/StarIcon';
import { DetailsScreenNavigationProps } from '../../../config/navigation/types';

type Props = {
    image: ImageSourcePropType;
    rating: number;
    price: number;
    country: string;
    city: string;
}

const NearestItem: React.FC<Props> = ({ image, rating, price, country, city }) => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();
    const { t } = useTranslation('translation', {keyPrefix: 'screens.home.suggestions'});

    return (
        <CityCard onPress={() => navigation.navigate('Details', { rating, city, country, image, price })}>
            <CityImage source={image} />
            <RatingContainer>
                <StarSvg height={10} width={10} />
                <Rating>{rating}</Rating>
            </RatingContainer>
            <PriceContainer>
                <Price>{price}{t('price')}</Price>
            </PriceContainer>
            <TextArea>
                <CountryName>{country}</CountryName>
                <CityName>{city}</CityName>
            </TextArea>
        </CityCard>
    );
};

const CityCard = styled.TouchableOpacity`
  flexDirection: row;
  padding: 10px;
  margin: 10px;
  height: 120px;
  borderRadius: 4px;
  backgroundColor: ${props => props.theme.locationContainer};
  shadowColor: ${props => props.theme.shadowColor};
  shadowOpacity: 0.1
  shadowRadius: 10px
`;

const CityImage = styled.Image`
  borderRadius: 4px;
  height: 100px;
  width: 100px;
`;

const RatingContainer = styled.View`
  backgroundColor: ${props => props.theme.locationContainer};
  borderRadius: 4px;
  flexDirection: row;
  padding: 7px;
  position: absolute;
  right: 0px;
`;

const Rating = styled.Text`
  color: ${props => props.theme.ratingText};
  fontSize: 16px
  fontWeight: bold;
`;

const PriceContainer = styled.View`
  borderRadius: 4px;
  bottom: 0px;
  padding: 14px
  position: absolute;
  right: 0px;
`;

const Price = styled.Text`
  color: ${props => props.theme.ratingText};
  fontSize: 17px
  fontWeight: bold;
`;

const TextArea = styled.View`
  justifyContent: space-around;
  marginBottom: 15px;
  marginLeft: 15px;
  marginTop: 10px
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

const StarSvg = styled(StarIcon)`
  marginRight: 3px
  marginTop: 4px;
`;

export default NearestItem;