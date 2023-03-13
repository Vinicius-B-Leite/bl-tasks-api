import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'

type Props = {
    children: React.ReactNode,
    onPress: () => void,
    enable?: boolean,
    h?: number | string
}

const ContrastButton = ({ children, onPress, enable = true, h }: Props) => {
    return (
        <S.Button onPress={() => enable && onPress()} enable={enable} h={h}>
            <S.Label enable={enable}>{children}</S.Label>
        </S.Button>
    )
}

export default ContrastButton;