import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../../../modules/profile/'
import EditProfile from '../../../modules/profile/modules/edit/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ProfileStack = createNativeStackNavigator();

const ProfileScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name='User Profile'
            component={Profile}
            options={{
                title: 'Profile Info',
                headerStyle: {
                    backgroundColor: '#f8f8ff',
                    shadowColor: 'transparent'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        />
        <ProfileStack.Screen
            name='Edit Profile'
            component={EditProfile}
            options={({ navigation }) => ({
                title: 'Edit Profile',
                headerStyle: {
                    backgroundColor: '#f8f8ff',
                    shadowColor: 'transparent'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerLeft: () => (
                    <Icon
                        name='chevron-back-outline'
                        size={26}
                        color='#808080'
                        onPress={() => { navigation.goBack(); }}
                    />
                )
            })}
        />
    </ProfileStack.Navigator>
);

export default ProfileScreen