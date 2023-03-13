import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import login from '../screens/login';
import singup from '../screens/singup';
import { AuthRootParamsList } from './AuthModel';

// import { Container } from './styles';


const Stack = createStackNavigator<AuthRootParamsList>()
const LoginRoutes: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={login} />
            <Stack.Screen name='Singup' component={singup} />
        </Stack.Navigator>
    )
}

export default LoginRoutes;