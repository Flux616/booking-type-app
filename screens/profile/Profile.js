import React from 'react'
import { StyleSheet, View } from 'react-native'
import ProfileInfo from './components/ProfileInfo'
import ProfileStatus from './components/ProfileStatus'
import ProfileDashboard from './components/ProfileDashboard'
import ProfileFooter from './components/ProfileFooter'

const Profile = () => (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <ProfileInfo/>
            <ProfileStatus/>
            <ProfileDashboard/>
            <ProfileFooter/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f8f8ff'
    },
    container: {
        marginHorizontal: 30,
        justifyContent: 'space-around',
        flex: 1
    }
})

export default Profile
