import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/home/Home';
import Location from './screens/location/Location';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
              iconName = focused ? 'heart' : 'heart-outline'
            break;

            case 'Profile':
              iconName = focused ? 'person' : 'person-outline'
            break;

            default: break;
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'deepskyblue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Location" component={Location}/>
        <Tab.Screen name="Favorite" component={Home}/>
        <Tab.Screen name="Profile" component={Location}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
