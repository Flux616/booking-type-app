import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { cityImages } from '../../../../__mocks__/cityImages';
import { GalleryImageProp } from '../../../config/navigation/types';
import ImageGrid from './ImageGrid';

const Gallery = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.gallery'})

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t('gallery')}</Text>
            <FlatList<GalleryImageProp>
                contentContainerStyle={styles.contentContainer}
                scrollEnabled={false}
                horizontal
                data={cityImages}
                renderItem={({item}) => ImageGrid(item)}
            />
        </View>
    );
}

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
    }
});