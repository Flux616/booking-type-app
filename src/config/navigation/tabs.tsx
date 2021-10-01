import React from 'react';
import Home from '../../modules/home';
import Profile from '../../modules/profile';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

type Props = {
    iconName: string
    focused: boolean
    size: number
    color: string
}

const HomeTab = createBottomTabNavigator();

const TabBarIcon: React.FC<Props> = ({iconName, focused, size, color}) => (
    <Icon name={focused ? `${iconName}` : `${iconName}-outline`} size={size} color={focused ? '#4494DA' : color}/>
)

const HomeTabs = () => {
    const { t } = useTranslation('translation', {keyPrefix: 'screens.profile.header'})

    return (
        <HomeTab.Navigator screenOptions={{tabBarShowLabel: false}}>
            <HomeTab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => <TabBarIcon focused={focused} size={size} color={color} iconName='home'/>
                }}
            />
            <HomeTab.Screen
                name='Profile'
                component={Profile}
                options={{
                    title: t('header'),
                    tabBarIcon: ({ focused, size, color }) => <TabBarIcon focused={focused} size={size} color={color} iconName='person'/>
                }}
            />
        </HomeTab.Navigator>
    );
}

export default HomeTabs;