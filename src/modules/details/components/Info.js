import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import StarSVG from '../../../components/Star-svg';
import StarHalfSVG from '../../../components/StarHalf-svg';
import EmptyStarSVG from '../../../components/EmptyStar-svg';
import BedSVG from '../../../components/Bed-svg';
import DinnerSVG from '../../../components/Dinner-svg';
import ACSVG from '../../../components/AC-svg';
import BathSVG from '../../../components/Bath-svg';

const Info = () => {

    const descriptionData = [
        {
            SVG: <BedSVG/>,
            text: '2 Bed'
        },
        {
            SVG: <DinnerSVG/>,
            text: 'Dinner'
        },
        {
            SVG: <ACSVG/>,
            text: 'AC'
        },
        {
            SVG: <BathSVG/>,
            text: '1 Bath'
        },
    ];

    const rating = 5;

    const createTable = (rating) => {
        const ratingTable = [];
        let counter = 0;

        for ( ; counter < Math.floor(rating); counter++) {
            ratingTable.push(<StarSVG/>);
        }

        if (rating - counter >= 0.5) {
            ratingTable.push(<StarHalfSVG/>);
            counter++;
        }

        for ( ; counter < 5; counter++) {
            ratingTable.push(<EmptyStarSVG/>);
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
                <Text style={styles.city}>Copenhagen</Text>
                <Text style={styles.country}>Denmark</Text>
                <View style={styles.rating}>
                    {createTable(rating).map(item => item)}
                </View>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={descriptionData}
                renderItem={ ({item}) => <RenderFeatures SVG={item.SVG} text={item.text}/>}
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
