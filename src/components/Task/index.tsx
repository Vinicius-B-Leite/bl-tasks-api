import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { TaskType } from '../../@types/TaskType';
import * as S from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTask } from '../../api/deleteTask';
import { AuthContext } from '../../contexts/AuthContext';

type Props  = {
    onPress: (task: TaskType) => void,
    task: TaskType
}
const Task: React.FC<Props> = ({ task, onPress }) => {
    const { created_at, description, id, status, titile, userID } = task
    const { colors, icon } = useTheme()
    const { user } = useContext(AuthContext)
    const queryClient = useQueryClient()
    const { mutate } = useMutation(
        () => deleteTask(id, user?.token || ''),
        {
            onSuccess: () => queryClient.invalidateQueries()
        }
    )

    const handleDelete = () => {
        Alert.alert(
            'Deletar tarefa',
            'Você deseja deletar a tarefa ' + titile + '?',
            [
                {
                    text: 'Sim',
                    onPress: () => mutate(),
                },
                {
                    text: 'Não',
                    style: 'default'
                }
            ]
        )
    }
    return (
        <S.Container onLongPress={handleDelete} onPress={() => onPress(task)}>
            <S.Left>
                <S.Title numberOfLines={1}>{titile}</S.Title>
                <S.Description numberOfLines={1}>{description}</S.Description>
            </S.Left>
            <AntDesign name={status == 'on hold' ? 'arrowright' : 'check'} color={status == 'on hold' ? colors.text : colors.contrast} size={icon.md} />
        </S.Container>
    )
}

export default Task;