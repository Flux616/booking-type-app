import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

type Props = {
    uniqueStyle: StyleProp<ViewStyle>,
    name: string,
    label: string
}

const DashboardButton: React.FC<Props> = ({uniqueStyle, name, label}) => (
    <TouchableOpacity>
        <View style={styles.section}>
            <View style={[styles.icon, uniqueStyle]}>
                <MaterialCommunityIcon name={name} size={28} color={'#FFFFFF'}/>
            </View>
            <Text style={styles.iconText}>{label}</Text>
            <MaterialIcon name='keyboard-arrow-right' size={22} color={'#808080'} style={styles.forwardIcon}/>
        </View>
    </TouchableOpacity>
);

const ProfileDashboard = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.dashboard'})

    return (
        <View>
            <Text style={styles.header}>{t('title')}</Text>
            <View>
                <DashboardButton uniqueStyle={styles.payment} name='wallet-outline' label={t('payments')}/>
                <DashboardButton uniqueStyle={styles.achievements} name='medal' label={t('achievements')}/>
                <DashboardButton uniqueStyle={styles.privacy} name='shield-lock-outline' label={t('privacy')}/>
            </View>
        </View>
    );
}

export default ProfileDashboard;

const styles = StyleSheet.create({
    header: {
        color: '#808080'
    },
    section: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        marginLeft: 20,
        fontWeight: 'bold'
    },
    forwardIcon: {
        position: 'absolute',
        right: 0
    },
    payment: {
        backgroundColor: '#32CD32'
    },
    achievements: {
        backgroundColor: 'gold'
    },
    privacy: {
        backgroundColor: '#808080'
    }
});