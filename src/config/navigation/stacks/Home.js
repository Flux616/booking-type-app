import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../modules/home'
import Location from '../../../modules/location'
import Details from '../../../modules/details';


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name='Details' component={Details} />
        <HomeStack.Screen name='Related' component={Home} />
        <HomeStack.Screen name='Location' component={Location} />
    </HomeStack.Navigator>
);

export default HomeStackScreen

