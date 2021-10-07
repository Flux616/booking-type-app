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

type Props = { rating: number, city: string, country: string }

type FeatureProps = { SVG: JSX.Element, text: string }

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
            ratingTable.push(<StarSvg height={18} width={18} key={counter}/>);
        }

        if (rating - counter >= 0.5) {
            ratingTable.push(<HalfStarSvg height={18} width={18} key={counter}/>);
            counter++;
        }

        for ( ; counter < 5; counter++) {
            ratingTable.push(<EmptyStarSvg height={18} width={18} key={counter}/>);
        }

        return ratingTable;
    };

    const RenderFeatures: React.FC<FeatureProps> = ({SVG, text}) => (
        <FeatContainer>
            {SVG}
            <FeatText>{text}</FeatText>
        </FeatContainer>
    );

    return (
        <View>
            <TextArea>
                <CityName>{city}</CityName>
                <CountryName>{country}</CountryName>
                <RatingContainer>
                    {createTable(rating)}
                </RatingContainer>
            </TextArea>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={descriptionData}
                renderItem={ ({item}) => <RenderFeatures SVG={item.SVG} text={item.text} key={item.key}/>}
            />
        </View>
    );
};

const TextArea = styled.View`
justifyContent: space-between;
height: 65px;
marginTop: 15px
`

const CityName = styled.Text`
color: ${props => props.theme.text}
fontWeight: bold;
fontSize: 24px
`

const CountryName = styled.Text`
fontSize: 20px;
color: ${props => props.theme.descriptionText}
`

const RatingContainer = styled.View`
flexDirection: row;
position: absolute;
right: 0px;
bottom: 20px;
`

const FeatContainer = styled.View`
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

const FeatText = styled.Text`
color: ${props => props.theme.lowerText};
fontSize: 12px
`

const StarSvg = styled(StarIcon)`
marginRight: 5px
`

const HalfStarSvg = styled(HalfStarIcon)`
marginRight: 5px
`

const EmptyStarSvg = styled(EmptyStarIcon)`
marginRight: 5px
`

export default Info;
