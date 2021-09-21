import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from '../../modules/location';
import Details from '../../modules/details';
import EditProfile from '../../modules/profile/components/edit';
import HomeTabs from './tabs.js';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#3F96EA',
                    tabBarInactiveTintColor: '#808080',
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
                    options={({ navigation }) => ({
                        title: 'Edit Profile',
                        headerShown: true,
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
            </Stack.Navigator>
        </NavigationContainer>
    );};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    }
});

export default AppNavigation;