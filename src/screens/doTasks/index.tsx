import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components/native';
import { TaskType } from '../../@types/TaskType';
import { getTasks } from '../../api/getTasks';
import CreateTask from '../../components/CreateTask';
import ReadTask from '../../components/ReadTask';
import Task from '../../components/Task';
import { AuthContext } from '../../contexts/AuthContext';
import { TaskContext } from '../../contexts/TaskContext';
import { EmptyListAlert } from '../doneTasks/styles';
import * as S from './style'



const DoTasks: React.FC = () => {

    const { colors, icon } = useTheme()
    const { user } = useContext(AuthContext)
    const { modalVisible, toggleModal } = useContext(TaskContext)
    const [currentReadTask, setCurrentReadTask] = useState<TaskType | null>(null)

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
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: colors.bg }}
                contentContainerStyle={{ padding: '10%' }}
                data={data}
                renderItem={({ item }) => <Task task={item} onPress={(task) => setCurrentReadTask(task)} />}
                ListEmptyComponent={() => <EmptyListAlert>Não há tarefas a serem feitas</EmptyListAlert>}
            />
            <CreateTask visible={modalVisible} transparent animationType='slide' onRequestClose={toggleModal} />
            {
                currentReadTask && (
                    <ReadTask
                        modalProps={{
                            visible: !!currentReadTask,
                            transparent: true,
                            animationType: 'slide',
                            onRequestClose: () => setCurrentReadTask(null)
                        }}
                        task={currentReadTask}
                    />
                )
            }
        </>

    )
}

export default DoTasks;