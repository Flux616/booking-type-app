import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../modules/home';
import Location from '../../../modules/location';
import Details from '../../../modules/details';
import Profile from '../../../modules/profile';
import EditProfile from '../../../modules/profile/components/edit';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false, tabBarVisible: false }}>
        <HomeStack.Screen name='Details' component={Details} options={{ tabBarVisible: false }}/>
        <HomeStack.Screen name='Related' component={Home} />
        <HomeStack.Screen name='Location' component={Location} />
    </HomeStack.Navigator>
);

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
    };

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
    );};

export { HomeStackScreen, ProfileStackScreen };
