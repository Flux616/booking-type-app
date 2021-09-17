import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../../../modules/profile';
import EditProfile from '../../../modules/profile/components/edit'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name='UserProfile'
            component={Profile}
            options={{
                title: 'Profile',
                headerStyle: {
                    backgroundColor: '#f8f8ff',
                    shadowColor: 'transparent',
                    borderBottomWidth: 0,
                    shadowColor: 'transparent',
                    shadowOffset: {height: 0}
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        />
        <ProfileStack.Screen
            name='EditProfile'
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

export default ProfileStackScreen