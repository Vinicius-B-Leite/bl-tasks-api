import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useMutation } from 'react-query';
import { useTheme } from 'styled-components/native';
import { UserType } from '../../@types/UserType';
import { api } from '../../api/api';
import { login } from '../../api/login';
import ContrastButton from '../../components/ContrastButton';
import Input from '../../components/Input';
import { AuthContext } from '../../contexts/AuthContext';
import * as S from './styles'

const Login: React.FC = () => {

    const { colors, icon } = useTheme()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { saveUser } = useContext(AuthContext)


    const { mutate, isLoading, } = useMutation(
        () => login({ password, username }),
        {
            onSuccess: (data: UserType) => saveUser({ ...data }),
            onError: (err: Error) => setError(err.message)
        })



    return (
        <KeyboardAvoidingView style={{ flex: 1 }} enabled={false} behavior='height'>
            <S.Container>
                <S.Title>BL <S.ContrastTitle>Tarefas</S.ContrastTitle> </S.Title>
                <S.SubTitle>Faça login</S.SubTitle>

                <Input error={['Usuário não existe', 'Nome de usuário ou senha incorreta'].includes(error)}
                    iconName='user'
                    inputProps={{
                        placeholder: 'Nome de usuário',
                        placeholderTextColor: colors.text,
                        value: username,
                        onChangeText: (txt) => setUsername(txt)
                    }}
                />
                {['Usuário não existe', 'Nome de usuário ou senha incorreta'].includes(error) && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <Input error={error == 'Nome de usuário ou senha incorreta'}
                    iconName='lock'
                    inputProps={{
                        placeholder: 'Senha',
                        placeholderTextColor: colors.text,
                        value: password,
                        onChangeText: (txt) => setPassword(txt)
                    }}
                />
                {['Nome de usuário ou senha incorreta'].includes(error) && <S.ErrorMessage>{error}</S.ErrorMessage>}


                <ContrastButton onPress={() => mutate()} enable={(password.length > 0 && username.length > 0)}>{
                    isLoading
                        ?
                        <ActivityIndicator color={colors.text} size={icon.md} />
                        :
                        'ENTRAR'
                }
                </ContrastButton>
            </S.Container>

        </KeyboardAvoidingView>
    )
}

export default Login;