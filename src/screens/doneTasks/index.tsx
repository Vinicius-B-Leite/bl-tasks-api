import React, { useContext, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components/native';
import { getTasks } from '../../api/getTasks';
import CreateTask from '../../components/CreateTask';
import Task from '../../components/Task';
import { AuthContext } from '../../contexts/AuthContext';
import { TaskContext } from '../../contexts/TaskContext';
import * as S from './styles'



const DoneStask: React.FC = () => {

    const { colors, icon } = useTheme()
    const { user } = useContext(AuthContext)
    const { data, isLoading } = useQuery(
        ['doneTaks', user],
        () => user && getTasks({
            status: 'done',
            token: 'Bearer ' + user.token,
            userID: user.id
        }))

    if (isLoading) {
        return (
            <S.Container>
                <ActivityIndicator size={icon.lg} color={colors.contrast} />
            </S.Container>
        )
    }


    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: colors.bg }}
                contentContainerStyle={{ padding: '10%' }}
                data={data}
                renderItem={({ item }) => <Task task={item} onPress={() =>{}} />}
                ListEmptyComponent={() => <S.EmptyListAlert>Não há tarefas feitas</S.EmptyListAlert>}
            />
        </>

    )
}

export default DoneStask;