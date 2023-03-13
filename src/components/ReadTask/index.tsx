import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { TaskType } from '../../@types/TaskType';
import ContrastButton from '../ContrastButton';
import * as S from './styles'

type Props = {
    modalProps: ModalProps,
    task: TaskType
}
const ReadTask: React.FC<Props> = ({ modalProps, task }) => {
    console.log("🚀 ~ file: index.tsx:11 ~ task:", task)
    return (
        <Modal {...modalProps}>
            <S.Container>
                <S.CloseModal activeOpacity={0} onPress={modalProps.onRequestClose} />
                <S.Main>
                    <S.Title>{task.titile}</S.Title>
                    <S.Description>{task.description}</S.Description>
                    <ContrastButton onPress={() => {}} h='20%'>Concluir tarefa</ContrastButton>
                </S.Main>

            </S.Container>
        </Modal>
    )
}

export default ReadTask;