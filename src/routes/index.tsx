import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import AppRoutes from './app';
import LoginRoutes from './loginRoutes';

// import { Container } from './styles';

const Routes: React.FC = () => {

    const isLogged = true

    return (
        <NavigationContainer>
            {
                isLogged ? <AppRoutes/> : <LoginRoutes/>
            }
        </NavigationContainer>
    )
}

export default Routes;