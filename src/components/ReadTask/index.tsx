import React, { useContext } from 'react';
import { Modal, ModalProps } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { TaskType } from '../../@types/TaskType';
import { updatetask } from '../../api/updateTask';
import { AuthContext } from '../../contexts/AuthContext';
import ContrastButton from '../ContrastButton';
import * as S from './styles'

type Props = {
    modalProps: ModalProps,
    task: TaskType
}
const ReadTask: React.FC<Props> = ({ modalProps, task }) => {

    const { user } = useContext(AuthContext)
    const queryClient = useQueryClient()
    const { mutate } = useMutation(
        () => updatetask({
            title: task.titile,
            description: task.description,
            status: 'done',
            taksID: task.id,
            token: user?.token || ''
        }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )

    return (
        <Modal {...modalProps}>
            <S.Container>
                <S.CloseModal activeOpacity={0} onPress={modalProps.onRequestClose} />
                <S.Main>
                    <S.Title>{task.titile}</S.Title>
                    <S.Description>{task.description}</S.Description>
                    <ContrastButton onPress={() => mutate()} h='20%'>Concluir tarefa</ContrastButton>
                </S.Main>

            </S.Container>
        </Modal>
    )
}

export default ReadTask;