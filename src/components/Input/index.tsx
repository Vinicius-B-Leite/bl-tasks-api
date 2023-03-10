import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native';



type Props = {
    iconName: string,
    inputProps: TextInputProps
}
const Input: React.FC<Props> = ({ iconName, inputProps }) => {

    const { icon, colors } = useTheme()

    return (
        <S.InputArea>
            <AntDesign
                name={iconName}
                color={colors.text}
                size={icon.md}
            />
            <S.Input
                {...inputProps}
            />
        </S.InputArea>
    )
}

export default Input;