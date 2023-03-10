import React from 'react';
import { View } from 'react-native';
import * as S from './styles'

const ContrastButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <S.Button>
            <S.Label>{children}</S.Label>
        </S.Button>
    )
}

export default ContrastButton;