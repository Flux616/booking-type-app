import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileFooter = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.footer'})

    return (
        <View>
            <Text style={styles.header}>{t('title')}</Text>
            <TouchableOpacity>
                <Text style={styles.switch}>{t('switch')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.logOut}>{t('logout')}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProfileFooter;

const styles = StyleSheet.create({
    header: {
        color: '#808080'
    },
    switch: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#4169e1'
    },
    logOut: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#990000'
    }
});