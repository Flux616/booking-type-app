import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'screens.home.header'})

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.upperText}>{t('welcome')}</Text>
                <Text style={styles.lowerText}>{t('intro')}</Text>
            </View>
            <View>
                <Image style={styles.image} source={require('../../../../assets/images/avatar.jpg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    upperText: {
        color: '#3F96EA',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lowerText: {
        marginTop: 10,
        color: '#3F96EA'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});

export default Header;