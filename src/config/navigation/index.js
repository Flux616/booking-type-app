import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/Home';
import ProfileStackScreen from './stacks/Profile';

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
    <NavigationContainer style={styles.container}>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#00bfff',
                tabBarInactiveTintColor: '#808080',
                headerShown: false
            }}>
            <Tab.Screen
                name='Home'
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => <Icon name={focused ? 'person' : 'person-outline'} size={size} color={color} />
                }} />
        </Tab.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8ff'
    }
});

export default AppNavigation;