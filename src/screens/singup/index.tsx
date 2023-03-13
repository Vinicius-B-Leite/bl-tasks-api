import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useMutation } from 'react-query';
import { useTheme } from 'styled-components/native';
import { UserType } from '../../@types/UserType';
import { api } from '../../api/api';
import { login } from '../../api/login';
import { singup } from '../../api/singup';
import ContrastButton from '../../components/ContrastButton';
import Input from '../../components/Input';
import { AuthContext } from '../../contexts/AuthContext';
import { AuthRootParamsList } from '../../routes/AuthModel';
import * as S from './styles'




type Nav = StackScreenProps<AuthRootParamsList, 'Login'>

const Singup: React.FC<Nav> = ({ navigation }) => {

    const { colors, icon } = useTheme()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    const { mutate, isLoading, } = useMutation(
        () => singup(username, password),
        {
            onSuccess: () => navigation.goBack(),
            onError: (err: Error) => setError(err.message)
        })



    return (
        <KeyboardAvoidingView style={{ flex: 1 }} enabled={false} behavior='height'>
            <S.Container>
                <S.Title>BL <S.ContrastTitle>Tarefas</S.ContrastTitle> </S.Title>
                <S.SubTitle>Crie uma conta</S.SubTitle>

                <Input
                    error={'Este usário já está cadastrado' == error}
                    iconName='user'
                    inputProps={{
                        placeholder: 'Nome de usuário',
                        placeholderTextColor: colors.text,
                        value: username,
                        onChangeText: (txt) => setUsername(txt)
                    }}
                />
                {'Este usário já está cadastrado' == error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <Input
                    error={false}
                    iconName='lock'
                    inputProps={{
                        placeholder: 'Senha',
                        placeholderTextColor: colors.text,
                        value: password,
                        onChangeText: (txt) => setPassword(txt)
                    }}
                />

                <Input
                    error={confirmPassword != password}
                    iconName='lock'
                    inputProps={{
                        placeholder: 'Senha',
                        placeholderTextColor: colors.text,
                        value: confirmPassword,
                        onChangeText: (txt) => setConfirmPassword(txt),

                    }}
                />
                {confirmPassword != password && <S.ErrorMessage>Senhas diferentes</S.ErrorMessage>}


                <ContrastButton onPress={() => mutate()} enable={(password.length > 0 && username.length > 0 && password == confirmPassword)}>{
                    isLoading
                        ?
                        <ActivityIndicator color={colors.text} size={icon.md} />
                        :
                        'Criar'
                }
                </ContrastButton>

                <S.SingupBtn onPress={() => navigation.navigate('Singup')}>
                    <S.SingupTxt>Fazer Login</S.SingupTxt>
                </S.SingupBtn>
            </S.Container>

        </KeyboardAvoidingView>
    )
}

export default Singup;