import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import StarSVG from '../../../components/StarSVG';
import StarHalfSVG from '../../../components/StarHalfSVG';
import EmptyStarSVG from '../../../components/EmptyStarSVG';

const Info = () => {

    const descriptionData = [
        {
            SVG: <StarSVG/>,
            text: '2 Bed'
        },
        {
            icon: 'ios-restaurant-outline',
            text: 'Dinner'
        },
        {
            icon: 'ios-game-controller-outline',
            text: 'AC'
        },
        {
            icon: 'ios-cash-outline',
            text: '1 Bath'
        },
    ];

    const rating = 3.5;

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
                renderItem={ ({item}) => <RenderFeatures icon={item.icon} text={item.text}/>}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        width: 95,
        height: 70,
        marginTop: 15,
        marginBottom: 20,
        marginRight: 10,
        borderRadius: 10
    }
});
