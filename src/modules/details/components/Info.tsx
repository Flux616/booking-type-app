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
    const { t } = useTranslation('translation');

    const descriptionData = [
        {
            SVG: <BedIcon/>,
            text: t('screens.details.info.beds'),
            key: 1
        },
        {
            SVG: <DinnerIcon/>,
            text: t('screens.details.info.dinner'),
            key: 2
        },
        {
            SVG: <ACIcon/>,
            text: t('screens.details.info.ac'),
            key: 3
        },
        {
            SVG: <BathIcon/>,
            text: t('screens.details.info.bath'),
            key: 4
        },
    ];

    const createTable = (rating: number) => {
        const ratingNum = rating;
        const ratingTable = [];
        let counter = 0;

        for ( ; counter < Math.floor(ratingNum); counter++) {
            ratingTable.push(<StarSvg height={18} width={18} key={counter}/>);
        }

        if (ratingNum - counter >= 0.5) {
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
                <CityName>{t(`cities.${city}`, 'New County')}</CityName>
                <CountryName>{t(`countries.${country}`, 'Awesome City')}</CountryName>
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
  height: 65px;
  justifyContent: space-between;
  marginTop: 15px;
`;

const CityName = styled.Text`
  color: ${props => props.theme.text}
  fontWeight: bold;
  fontSize: 24px;
`;

const CountryName = styled.Text`
  color: ${props => props.theme.descriptionText}
  fontSize: 20px;
`;

const RatingContainer = styled.View`
  bottom: 20px;
  flexDirection: row;
  position: absolute;
  right: 0px;
`;

const FeatContainer = styled.View`
  alignItems: center;
  backgroundColor: ${props => props.theme.featContainer};
  borderRadius: 10px;
  height: 70px;
  justifyContent: space-around;
  marginBottom: 20px;
  marginRight: 10px;
  marginTop: 15px;
  padding: 5px;
  width: 95px;
`;

const FeatText = styled.Text`
  color: ${props => props.theme.lowerText};
  fontSize: 12px;
`;

const StarSvg = styled(StarIcon)`
  marginRight: 5px;
`;

const HalfStarSvg = styled(HalfStarIcon)`
  marginRight: 5px;
`;

const EmptyStarSvg = styled(EmptyStarIcon)`
  marginRight: 5px;
`;

export default Info;
