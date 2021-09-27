import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from '../../modules/location';
import Details from '../../modules/details';
import EditProfile, { getEditScreenNavigationOptions } from '../../modules/profile/components/edit';
import HomeTabs from './tabs';
import { RootStackParamList } from './constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name='HomeTabs'
                component={HomeTabs}
            />
            <Stack.Screen
                name='Details'
                component={Details}
            />
            <Stack.Screen
                name='Location'
                component={Location}
            />
            <Stack.Screen
                name='EditProfile'
                component={EditProfile}
                options={getEditScreenNavigationOptions}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigation;