import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Profile from '../../../modules/profile'
import EditProfile from '../../../modules/profile/components/edit'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
    const headerStyle = {
        headerStyle: {
            backgroundColor: '#f8f8ff',
            shadowColor: 'transparent'
        },
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    return (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name='UserProfile'
            component={Profile}
            style={headerStyle}
            options={{
                title: 'Profile'
            }}
        />
        <ProfileStack.Screen
            name='EditProfile'
            component={EditProfile}
            style={headerStyle}
            options={({ navigation }) => ({
                title: 'Edit Profile',
                headerLeft: () => (
                    <Icon
                        name='chevron-back-outline'
                        size={26}
                        color='#808080'
                        onPress={navigation.goBack}
                    />
                )
            })}
        />
    </ProfileStack.Navigator>
)};

export default ProfileStackScreen