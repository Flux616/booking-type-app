import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import StarIcon from '../../../components/StarIcon';
import { DetailsScreenNavigationProps } from '../../../config/navigation/types';

type Props = {
    image: ImageSourcePropType;
    rating: number;
    price: number;
    country: string;
    city: string;
}

const NearestItem: React.FC<Props> = ({ image, rating, price, country, city }) => {
    const navigation = useNavigation<DetailsScreenNavigationProps>();
    const { t } = useTranslation('translation', {keyPrefix: 'screens.home.suggestions'})

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { rating, city, country, image, price })}>
            <Image style={styles.image} source={image} />
            <View style={styles.rating}>
                <StarIcon style={styles.ratingStar} height={10} width={10} />
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>{price}{t('price')}</Text>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.titleText}>{country}</Text>
                <Text style={styles.locationText}>{city}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        height: 120,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        shadowColor: '#808080',
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
    textArea: {
        justifyContent: 'space-around',
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 10
    },
    titleText: {
        marginTop: 8,
        fontWeight: 'bold'
    },
    locationText: {
        marginTop: 8,
        color: '#808080'
    },
    rating: {
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        right: 0,
        padding: 7
    },
    ratingText: {
        color: '#ffcd00',
        fontWeight: 'bold',
        fontSize: 15
    },
    ratingStar: {
        marginTop: 3.5,
        marginRight: 3
    },
    price: {
        borderRadius: 4,
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 14
    },
    priceText: {
        color: '#ffcd00',
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default NearestItem;