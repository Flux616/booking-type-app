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
    const { t } = useTranslation('translation', {keyPrefix: 'screens.home.suggestions'})

    return (
        <StyledTouchableOpacity onPress={() => navigation.navigate('Details', { rating, city, country, image, price })}>
            <StyledImage source={image} />
            <StyledRatingView>
                <StarIcon style={{margin: 4}} height={10} width={10} />
                <StyledRatingText>{rating}</StyledRatingText>
            </StyledRatingView>
            <StyledPriceView>
                <StyledPriceText>{price}{t('price')}</StyledPriceText>
            </StyledPriceView>
            <StyledTextArea>
                <StyledTitleText>{country}</StyledTitleText>
                <StyledLocationText>{city}</StyledLocationText>
            </StyledTextArea>
        </StyledTouchableOpacity>
    )
};

const StyledTouchableOpacity = styled.TouchableOpacity`
flexDirection: row;
padding: 10px;
margin: 10px;
height: 120px;
borderRadius: 4px;
backgroundColor: ${props => props.theme.locationContainer};
shadowColor: ${props => props.theme.shadowColor};
shadowOpacity: 0.1
shadowRadius: 10px
`

const StyledImage = styled.Image`
width: 100px;
height: 100px;
borderRadius: 4px;
`

const StyledRatingView = styled.View`
flexDirection: row;
borderRadius: 4px;
backgroundColor: ${props => props.theme.locationContainer};
position: absolute;
right: 0px;
padding: 7px;
`

const StyledRatingText = styled.Text`
color: ${props => props.theme.ratingText};
fontWeight: bold;
fontSize: 16px
`

const StyledPriceView = styled.View`
borderRadius: 4px;
position: absolute;
right: 0px;
bottom: 0px;
padding: 14px
`

const StyledPriceText = styled.Text`
color: ${props => props.theme.ratingText};
fontWeight: bold;
fontSize: 17px
`

const StyledTextArea = styled.View`
justifyContent: space-around;
marginLeft: 15px;
marginBottom: 15px;
marginTop: 10px
`

const StyledTitleText = styled.Text`
marginTop: 8px;
fontWeight: bold;
color: ${props => props.theme.text}
`

const StyledLocationText = styled.Text`
marginTop: 8px;
color: ${props => props.theme.lowerText}
`

export default NearestItem;