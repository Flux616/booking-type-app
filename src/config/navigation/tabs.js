import React from 'react';
import Home from '../../modules/Home';
import Profile from '../../modules/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeTab = createBottomTabNavigator();

const HomeTabs = () => (
    <HomeTab.Navigator screenOptions={{tabBarShowLabel: false}}>
        <HomeTab.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => <Icon name={focused ? 'home' : 'home-outline'} size={size} color={focused ? '#4494DA' : color}/>
            }}
        />
        <HomeTab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ({ focused, size, color }) => <Icon name={focused ? 'person' : 'person-outline'} size={size} color={focused ? '#4494DA' : color} />
            }}
        />
    </HomeTab.Navigator>
);

export default HomeTabs;
