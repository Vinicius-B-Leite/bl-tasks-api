import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import Header from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import AppRoutes from './app';
import LoginRoutes from './loginRoutes';

// import { Container } from './styles';

const Routes: React.FC = () => {
    const { colors } = useTheme()
    const { user } = useContext(AuthContext)



    return (
        <NavigationContainer>
            <StatusBar backgroundColor={colors.darkBg} barStyle='light-content' />
            {
                user ? (<>
                    <Header />
                    <AppRoutes />
                </>) : <LoginRoutes />
            }
        </NavigationContainer>
    )
}

export default Routes;