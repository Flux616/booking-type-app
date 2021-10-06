import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from '../../modules/location';
import Details from '../../modules/details';
import EditProfile, { getEditScreenNavigationOptions } from '../../modules/profile/components/edit';
import HomeTabs from './tabs';
import { RootStackParamList } from './types';
import { ThemeProvider } from 'styled-components/native';
import { observer } from 'mobx-react';
import CurrentTheme from '../stores/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
    <ThemeProvider theme={CurrentTheme.currentTheme}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}>
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
                    options={({navigation}) => getEditScreenNavigationOptions({navigation})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
)

export default observer(AppNavigation);