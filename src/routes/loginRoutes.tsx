import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import login from '../screens/login';
import singup from '../screens/singup';

// import { Container } from './styles';


const Stack = createStackNavigator()
const LoginRoutes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={login} />
            <Stack.Screen name='Singup' component={singup} />
        </Stack.Navigator>
    )
}

export default LoginRoutes;