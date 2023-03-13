import React, { useContext, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components/native';
import { getTasks } from '../../api/getTasks';
import CreateTask from '../../components/CreateTask';
import Task from '../../components/Task';
import { AuthContext } from '../../contexts/AuthContext';
import { TaskContext } from '../../contexts/TaskContext';
import { EmptyListAlert } from '../doneTasks/styles';
import * as S from './style'



const DoTasks: React.FC = () => {

    const { colors, icon } = useTheme()
    const { user } = useContext(AuthContext)
    const { modalVisible, toggleModal } = useContext(TaskContext)

    const { data, isLoading } = useQuery(
        ['doTaks', user],
        () => user && getTasks({
            status: 'on hold',
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
        <S.Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: colors.bg }}
                contentContainerStyle={{ padding: '10%' }}
                data={data}
                renderItem={({ item }) => <Task {...item} />}
                ListEmptyComponent={() => <EmptyListAlert>Não há tarefas a serem feitas</EmptyListAlert>}
            />
            <CreateTask visible={modalVisible} transparent animationType='slide' onRequestClose={toggleModal} />
        </S.Container>

    )
}

export default DoTasks;