import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/Home'
import ProfileStackScreen from './stacks/Profile'

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
    <NavigationContainer style={styles.container}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                    case 'Home':
                        iconName = focused ? 'home' : 'home-outline';
                        break;

                    case 'Profile':
                        iconName = focused ? 'person' : 'person-outline';
                        break;

                    default: break;
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00bfff',
                tabBarInactiveTintColor: '#808080',
                headerShown: false
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8ff'
    }
});

export default AppNavigation