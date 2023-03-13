import React, { useEffect, useRef, useState } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import * as S from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native';



type Props = {
    iconName: string,
    inputProps: TextInputProps,
    error: boolean
}
const Input: React.FC<Props> = ({ iconName, inputProps, error }) => {

    const { icon, colors } = useTheme()
    const [isFocused, setIsFocused] = useState(false)


    return (
        <S.InputArea error={error} isFocused={isFocused}>
            <AntDesign
                name={iconName}
                color={colors.text}
                size={icon.md}
            />
            <S.Input
                {...inputProps}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onEndEditing={() => setIsFocused(false)}
            />
        </S.InputArea>
    )
}

export default Input;