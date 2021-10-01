import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type Props = {
    price: number
}

const Footer: React.FC<Props> = ({price}) => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.footer'})

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{t('title')}</Text>
                <Text style={styles.price}>{price}{t('price')}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{t('booking')}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 65,
        paddingTop: 10,
        paddingBottom: 10
    },
    title: {
        color: '#808080'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        backgroundColor: '#3F96EA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '800'
    }
});