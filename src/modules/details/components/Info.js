import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import StarIcon from '../../../components/StarIcon';
import HalfStarIcon from '../../../components/HalfStarIcon';
import EmptyStarIcon from '../../../components/EmptyStarIcon';
import BedIcon from '../../../components/BedIcon';
import DinnerIcon from '../../../components/DinnerIcon';
import ACIcon from '../../../components/ACIcon';
import BathIcon from '../../../components/BathIcon';

const Info = ({rating, city, country}) => {

    const descriptionData = [
        {
            SVG: <BedIcon/>,
            text: '2 Bed',
            key: 1
        },
        {
            SVG: <DinnerIcon/>,
            text: 'Dinner',
            key: 2
        },
        {
            SVG: <ACIcon/>,
            text: 'AC',
            key: 3
        },
        {
            SVG: <BathIcon/>,
            text: '1 Bath',
            key: 4
        },
    ];

    const createTable = (rating) => {
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

    const RenderFeatures = ({SVG, text}) => (
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
        fontSize: 14
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
