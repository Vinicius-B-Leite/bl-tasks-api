import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'

type Props = {
    children: React.ReactNode,
    onPress: () => void,
    enable?: boolean
}

const ContrastButton = ({ children, onPress, enable = true }: Props) => {
    return (
        <S.Button onPress={() => enable && onPress()} enable={enable}>
            <S.Label enable={enable}>{children}</S.Label>
        </S.Button>
    )
}

export default ContrastButton;