import React from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';

const Gallery = () => {
    const cityImages = [
        {path: require('../../../../assets/images/countries/denmark/copenhagen/1.jpg')},
        {path: require('../../../../assets/images/countries/denmark/copenhagen/2.jpg')},
        {path: require('../../../../assets/images/countries/denmark/copenhagen/3.jpg')},
        {path: require('../../../../assets/images/countries/denmark/copenhagen/4.jpg')}
    ];

    return (
        <View>
            <Text style={styles.text}>Gallery</Text>
            <FlatList
                contentContainerStyle={styles.container}
                scrollEnabled={false}
                horizontal
                data={cityImages}
                renderItem={({item}) => <View style={styles.imageContainer}><Image style={styles.image} source={item.path}/></View>}
            />
        </View>
    );};

export default Gallery;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between'
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
        width: undefined
    }
});
