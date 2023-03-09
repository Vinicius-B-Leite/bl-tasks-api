import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import Header from '../components/Header';
import AppRoutes from './app';
import LoginRoutes from './loginRoutes';

// import { Container } from './styles';

const Routes: React.FC = () => {

    const isLogged = true
    const { colors } = useTheme()
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={colors.darkBg} barStyle='light-content' />
            {
                isLogged ? (<>
                    <Header />
                    <AppRoutes />
                </>) : <LoginRoutes />
            }
        </NavigationContainer>
    )
}

export default Routes;