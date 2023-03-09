import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import DoneTasks from '../screens/doneTasks';
import DoTasks from '../screens/doTasks';

// import { Container } from './styles';


const Tab = createMaterialTopTabNavigator()

const AppRoutes: React.FC = () => {
    const { colors } = useTheme()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: colors.contrast
                },
                tabBarStyle: {
                    backgroundColor: colors.darkBg
                },
                tabBarActiveTintColor: colors.text
            }}
        >
            <Tab.Screen name='Dotasks' component={DoTasks} options={{ tabBarLabel: 'Fazer' }} />
            <Tab.Screen name='Donetasks' component={DoneTasks} options={{ tabBarLabel: 'Feitas' }} />
        </Tab.Navigator>
    )
}

export default AppRoutes;