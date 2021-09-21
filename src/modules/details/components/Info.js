import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-elements';


const Info = () => {

    const descriptionData = [
        {
            icon: 'ios-ice-cream-outline',
            text: 'Free Icecream'
        },
        {
            icon: 'ios-restaurant-outline',
            text: 'Restaurants'
        },
        {
            icon: 'ios-game-controller-outline',
            text: 'Entertainment'
        },
        {
            icon: 'ios-cash-outline',
            text: 'Expencive'
        },
    ];

    const RenderFeatures = ({icon, text}) => (
        <View style={styles.featContainer}>
            <Icon name={icon} size={20} color='gray'/>
            <Text style={styles.featText}>{text}</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.city}>Copenhagen</Text>
                <Text style={styles.country}>Denmark</Text>
                <Rating
                    style={styles.rating}
                    count={10}
                    readonly
                    startingValue={4.5}
                    imageSize={24}
                    ratingBackgroundColor='transparent'
                />
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
        height: 65
    },
    city: {
        fontWeight: 'bold',
        fontSize: 24
    },
    country: {
        fontSize: 20,
        color: 'gray'
    },
    rating: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        backgroundColor: 'black'
    },
    featText: {
        color: 'gray',
        fontSize: 14
    },
    featContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        width: 95,
        height: 70,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        borderRadius: 10
    }
});
