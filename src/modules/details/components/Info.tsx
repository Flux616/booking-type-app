import React from 'react';
import { View, FlatList } from 'react-native';
import StarIcon from '../../../components/StarIcon';
import HalfStarIcon from '../../../components/HalfStarIcon';
import EmptyStarIcon from '../../../components/EmptyStarIcon';
import BedIcon from '../../../components/BedIcon';
import DinnerIcon from '../../../components/DinnerIcon';
import ACIcon from '../../../components/ACIcon';
import BathIcon from '../../../components/BathIcon';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';

type Props = {
    rating: number,
    city: string,
    country: string
}

type FeatureProps = {
    SVG: JSX.Element,
    text: string
}

const Info: React.FC<Props> = ({rating, city, country}) => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.info'})

    const descriptionData = [
        {
            SVG: <BedIcon/>,
            text: t('beds'),
            key: 1
        },
        {
            SVG: <DinnerIcon/>,
            text: t('dinner'),
            key: 2
        },
        {
            SVG: <ACIcon/>,
            text: t('ac'),
            key: 3
        },
        {
            SVG: <BathIcon/>,
            text: t('bath'),
            key: 4
        },
    ];

    const createTable = (rating: number) => {
        const ratingTable = [];
        let counter = 0;

        for ( ; counter < Math.floor(rating); counter++) {
            ratingTable.push(<StarIcon style={{marginRight: 5}} height={18} width={18} key={counter}/>);
        }

        if (rating - counter >= 0.5) {
            ratingTable.push(<HalfStarIcon style={{marginRight: 5}} height={18} width={18} key={counter}/>);
            counter++;
        }

        for ( ; counter < 5; counter++) {
            ratingTable.push(<EmptyStarIcon style={{marginRight: 5}} height={18} width={18} key={counter}/>);
        }

        return ratingTable;
    };

    const RenderFeatures: React.FC<FeatureProps> = ({SVG, text}) => (
        <StyledFeatContainer>
            {SVG}
            <StyledFeatText>{text}</StyledFeatText>
        </StyledFeatContainer>
    );

    return (
        <View>
            <StyledTitleContainer>
                <StyledCityText>{city}</StyledCityText>
                <StyledCountryText>{country}</StyledCountryText>
                <StyledRatingView>
                    {createTable(rating)}
                </StyledRatingView>
            </StyledTitleContainer>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={descriptionData}
                renderItem={ ({item}) => <RenderFeatures SVG={item.SVG} text={item.text} key={item.key}/>}
            />
        </View>
    );
};

const StyledTitleContainer = styled.View`
justifyContent: space-between;
height: 65px;
marginTop: 15px
`

const StyledCityText = styled.Text`
color: ${props => props.theme.text}
fontWeight: bold;
fontSize: 24px
`

const StyledCountryText = styled.Text`
fontSize: 20px;
color: ${props => props.theme.descriptionText}
`

const StyledRatingView = styled.View`
flexDirection: row;
position: absolute;
right: 0px;
bottom: 20px
`

const StyledFeatContainer = styled.View`
justifyContent: space-around;
alignItems: center;
backgroundColor: ${props => props.theme.featContainer};
width: 95px;
height: 70px;
marginTop: 15px;
marginBottom: 20px;
marginRight: 10px;
padding: 5px;
borderRadius: 10px
`

const StyledFeatText = styled.Text`
color: ${props => props.theme.lowerText};
fontSize: 12px
`

export default Info;
