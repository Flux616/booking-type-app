import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

const Description = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.details.description'})

    return (
        <View>
            <Text style={styles.descriptionTitle}>{t('description')}</Text>
            <Text style={styles.descriptionText}>{t('contentText')}</Text>
        </View>
    );
}

export default Description;

const styles = StyleSheet.create({
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    descriptionText: {
        color: '#BFBFBF'
    },
});