import React from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';

const Gallery = () => {
    const cityImages = [
        {
            path: require('../../../../assets/images/countries/denmark/copenhagen/2.jpg'),
            key: 1
        },
        {
            path: require('../../../../assets/images/countries/denmark/copenhagen/1.jpg'),
            key: 2
        },
        {
            path: require('../../../../assets/images/countries/denmark/copenhagen/3.jpg'),
            key: 3
        },
        {
            path: require('../../../../assets/images/countries/denmark/copenhagen/4.jpg'),
            key: 4
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Gallery</Text>
            <FlatList
                contentContainerStyle={styles.contentContainer}
                scrollEnabled={false}
                horizontal
                data={cityImages}
                renderItem={({item}) => <View style={styles.imageContainer}><Image style={styles.image} source={item.path} key={item.key}/></View>}
            />
        </View>
    );
};

export default Gallery;

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    contentContainer: {
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    },
    imageContainer: {
        width: 75,
        height: 75
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius: 6
    }
});