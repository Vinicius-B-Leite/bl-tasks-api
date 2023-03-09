import React from 'react';
import { View } from 'react-native';
import * as S from './style'
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'styled-components/native';


const Header: React.FC = () => {


    const { colors, icon } = useTheme()

    return (
        <S.Container>
            <S.Title>BL <S.TitleContrast>Tarefas</S.TitleContrast></S.Title>
            <Feather name='plus-square' size={icon.md} color={colors.contrast} />
        </S.Container>
    )
}

export default Header;