import React from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';
import { cityImages } from '../../../../__mocks__/cityImages';

const Gallery = () => (
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