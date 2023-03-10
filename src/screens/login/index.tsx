import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'styled-components/native';
import ContrastButton from '../../components/ContrastButton';
import Input from '../../components/Input';
import * as S from './styles'

const Login: React.FC = () => {

    const { colors } = useTheme()

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} enabled={false} behavior='height'>
            <S.Container>
                <S.Title>BL <S.ContrastTitle>Tarefas</S.ContrastTitle> </S.Title>
                <S.SubTitle>Faça login</S.SubTitle>

                <Input
                    iconName='user'
                    inputProps={{
                        placeholder: 'Nome de usuário',
                        placeholderTextColor: colors.text
                    }}
                />
                <Input
                    iconName='lock'
                    inputProps={{
                        placeholder: 'Senha',
                        placeholderTextColor: colors.text
                    }}
                />

                <ContrastButton>ENTRAR</ContrastButton>
            </S.Container>

        </KeyboardAvoidingView>
    )
}

export default Login;