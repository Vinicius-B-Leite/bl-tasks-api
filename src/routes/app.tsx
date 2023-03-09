import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View } from 'react-native';
import DoneTasks from '../screens/doneTasks';
import DoTasks from '../screens/doTasks';

// import { Container } from './styles';


const Tab = createMaterialTopTabNavigator()
const AppRoutes: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dotasks' component={DoTasks} />
            <Tab.Screen name='Donetasks' component={DoneTasks} />
        </Tab.Navigator>
    )
}

export default AppRoutes;