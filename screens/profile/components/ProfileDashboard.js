import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const DashboardButton = ({uniqueStyle, buttonName, buttonLabel}) => (
    <TouchableOpacity>
        <View style={styles.section}>
            <View style={[styles.icon, uniqueStyle]}>
                <MaterialCommunityIcon name={buttonName} size={28} color={'white'}/>
            </View>
            <Text style={styles.iconText}>{buttonLabel}</Text>
            <MaterialIcon name='keyboard-arrow-right' size={22} color={'gray'} style={styles.forwardIcon}/>
        </View>
    </TouchableOpacity>
)

const ProfileDashboard = () => (
    <View>
        <Text style={styles.header}>Dashboard</Text>
        <View>
            <DashboardButton uniqueStyle={styles.payment} buttonName='wallet-outline' buttonLabel='Payments'/>
            <DashboardButton uniqueStyle={styles.achievements} buttonName='medal' buttonLabel='Achievements'/>
            <DashboardButton uniqueStyle={styles.privacy} buttonName='shield-lock-outline' buttonLabel='Privacy'/>
        </View>
    </View>
)

export default ProfileDashboard

const styles = StyleSheet.create({
    header: {
        color: 'gray'
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
        backgroundColor: 'limegreen'
    },
    achievements: {
        backgroundColor: 'gold'
    },
    privacy: {
        backgroundColor: 'gray'
    }
})