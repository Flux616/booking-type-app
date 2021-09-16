import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const DashboardButton = ({uniqueStyle, name, label}) => (
    <TouchableOpacity>
        <View style={styles.section}>
            <View style={[styles.icon, uniqueStyle]}>
                <MaterialCommunityIcon name={name} size={28} color={'#FFFFFF'}/>
            </View>
            <Text style={styles.iconText}>{label}</Text>
            <MaterialIcon name='keyboard-arrow-right' size={22} color={'#808080'} style={styles.forwardIcon}/>
        </View>
    </TouchableOpacity>
)

const ProfileDashboard = () => (
    <View>
        <Text style={styles.header}>Dashboard</Text>
        <View>
            <DashboardButton uniqueStyle={styles.payment} name='wallet-outline' label='Payments'/>
            <DashboardButton uniqueStyle={styles.achievements} name='medal' label='Achievements'/>
            <DashboardButton uniqueStyle={styles.privacy} name='shield-lock-outline' label='Privacy'/>
        </View>
    </View>
)

export default ProfileDashboard

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
})