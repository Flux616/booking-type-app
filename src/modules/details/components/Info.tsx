import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import StarIcon from '../../../components/StarIcon';
import HalfStarIcon from '../../../components/HalfStarIcon';
import EmptyStarIcon from '../../../components/EmptyStarIcon';
import BedIcon from '../../../components/BedIcon';
import DinnerIcon from '../../../components/DinnerIcon';
import ACIcon from '../../../components/ACIcon';
import BathIcon from '../../../components/BathIcon';
import { useTranslation } from 'react-i18next';

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
            ratingTable.push(<StarIcon style={styles.ratingStar} height={18} width={18} key={counter}/>);
        }

        if (rating - counter >= 0.5) {
            ratingTable.push(<HalfStarIcon style={styles.ratingStar} height={18} width={18} key={counter}/>);
            counter++;
        }

        for ( ; counter < 5; counter++) {
            ratingTable.push(<EmptyStarIcon style={styles.ratingStar} height={18} width={18} key={counter}/>);
        }

        return ratingTable;
    };

    const RenderFeatures: React.FC<FeatureProps> = ({SVG, text}) => (
        <View style={styles.featContainer}>
            {SVG}
            <Text style={styles.featText}>{text}</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.city}>{city}</Text>
                <Text style={styles.country}>{country}</Text>
                <View style={styles.rating}>
                    {createTable(rating)}
                </View>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={descriptionData}
                renderItem={ ({item}) => <RenderFeatures SVG={item.SVG} text={item.text} key={item.key}/>}
            />
        </View>
    );
};

export default Info;

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'space-between',
        height: 65,
        marginTop: 15
    },
    city: {
        fontWeight: 'bold',
        fontSize: 24
    },
    country: {
        fontSize: 20,
        color: '#BFBFBF'
    },
    rating: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        bottom: 20
    },
    ratingStar: {
        marginLeft: 5
    },
    featText: {
        color: '#BFBFBF',
        fontSize: 12
    },
    featContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        width: 95,
        height: 70,
        marginTop: 15,
        marginBottom: 20,
        marginRight: 10,
        padding: 5,
        borderRadius: 10
    }
});