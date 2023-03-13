import React, { useContext, useState } from 'react';
import { Modal, ModalProps, ActivityIndicator } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { useTheme } from 'styled-components/native';
import { createTask } from '../../api/createTask';
import { AuthContext } from '../../contexts/AuthContext';
import ContrastButton from '../ContrastButton';
import Input from '../Input';
import * as S from './styles'
// import { Container } from './styles';



const CreateTask: React.FC<ModalProps> = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useContext(AuthContext)
    const { icon, colors } = useTheme()
    const queryClient = useQueryClient()

    const { mutate, isLoading } = useMutation(
        () => createTask({ title, description, token: user?.token || '', userID: user?.id || '' }),
        {
            onSuccess: () => {
                setTitle('')
                setDescription('')
                queryClient.invalidateQueries('doTaks')
            }
        },
    )

    return (
        <Modal {...props}>
            <S.ModalContainer>
                <S.CloseBtn activeOpacity={0} onPress={props.onRequestClose} />
                <S.ModalContent>
                    <Input
                        error={false}
                        h='15%'
                        inputProps={{
                            placeholder: 'Título da tarefa',
                            value: title,
                            onChangeText: (txt) => setTitle(txt)
                        }}

                    />
                    <Input
                        h='55%'
                        error={false}
                        inputProps={{
                            placeholder: 'Descrição',
                            value: description,
                            onChangeText: (txt) => setDescription(txt)
                        }}

                    />
                    <ContrastButton h='15%' onPress={() => mutate()} enable={title.length > 0 && description.length > 0}>
                        {isLoading ? <ActivityIndicator color={colors.text} size={icon.md} /> : 'Criar'}</ContrastButton>
                </S.ModalContent>
            </S.ModalContainer>
        </Modal>
    );

}

export default CreateTask;