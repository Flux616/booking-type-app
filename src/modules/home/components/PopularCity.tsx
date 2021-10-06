import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';
import StarIcon from '../../../components/StarIcon';
import { DetailsScreenNavigationProps } from '../../../config/navigation/types';

type Props = {
    image: ImageSourcePropType,
    country: string,
    city: string,
    rating: number,
    price: number
}

const PopularCity: React.FC<Props> = ({ image, country, city, rating, price }) => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();

    return (
        <StyledTouchableOpacity onPress={() => navigation.navigate('Details', {rating, city, country, image, price})}>
            <StyledImage source={image}/>
            <StyledTitleText>{country}</StyledTitleText>
            <StyledLocationText>{city}</StyledLocationText>
            <StyledRatingView>
                <StarIcon width={10} height={10}/>
                <StyledRatingText>{rating}</StyledRatingText>
            </StyledRatingView>
        </StyledTouchableOpacity>
    );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
padding: 10px;
marginRight: 10px;
height: 210px;
width: 160px;
backgroundColor: ${props => props.theme.locationContainer};
borderRadius: 4px;
shadowColor: ${props => props.theme.shadowColor};
shadowOpacity: 0.1;
shadowRadius: 10px
`

const StyledImage = styled.Image`
width: 140px;
height: 140px;
borderRadius: 4px
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

const StyledRatingView = styled.View`
flexDirection: row;
alignItems: center;
borderRadius: 2px;
backgroundColor: ${props => props.theme.locationContainer};
position: absolute;
right: 9px;
top: 9px;
padding: 4px
`

const StyledRatingText = styled.Text`
color: ${props => props.theme.ratingText};
fontWeight: bold;
fontSize: 12px;
marginLeft: 2px
`

export default PopularCity;