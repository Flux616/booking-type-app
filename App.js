import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './screens/home/Home';
import Location from './screens/location/Location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import Profile from './screens/profile/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from './screens/editProfile/EditProfile';
import { Provider } from 'react-redux';
import { store } from './redux';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name='Related' component={Home} />
        <HomeStack.Screen name='Location' component={Location} />
    </HomeStack.Navigator>
);

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name='User Profile'
            component={Profile}
            options={{
                title: 'Profile',
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
                        color='gray'
                        onPress={() => { navigation.goBack(); }}
                    />
                )
            })}
        />
    </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer style={styles.container}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                    case 'Home':
                        iconName = focused ? 'home' : 'home-outline';
                        break;

                    case 'Location':
                        iconName = focused ? 'compass' : 'compass-outline';
                        break;

                    case 'Favorite':
                        iconName = focused ? 'heart' : 'heart-outline';
                        break;

                    case 'Profile':
                        iconName = focused ? 'person' : 'person-outline';
                        break;

                    default: break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'deepskyblue',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8ff'
    }
});

const ProviderApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default ProviderApp;