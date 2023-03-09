import React from 'react';
import { View, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { TaskType } from '../../@types/TaskType';
import Task from '../../components/Task';

// import { Container } from './styles';


const data: TaskType[] = [
    {
        id: 'ws',
        description: '1jdsfkjskj',
        status: 'on hold',
        titile: 'yfyfy',
        userID: 'lkjfklsjklçj',
        created_at: new Date()
    },
    {
        id: 'ws',
        description: '1jdsfkjskj',
        status: 'on hold',
        titile: 'yfyfy',
        userID: 'lkjfklsjklçj',
        created_at: new Date()
    },
    {
        id: 'ws',
        description: '1jdsfkjskj',
        status: 'on hold',
        titile: 'yfyfy',
        userID: 'lkjfklsjklçj',
        created_at: new Date()
    },
    {
        id: 'ws',
        description: '1jdsfkjskj',
        status: 'on hold',
        titile: 'yfyfy',
        userID: 'lkjfklsjklçj',
        created_at: new Date()
    },
    {
        id: 'ws',
        description: '1jdsfkjskj',
        status: 'on hold',
        titile: 'yfyfy',
        userID: 'lkjfklsjklçj',
        created_at: new Date()
    },
    {
        id: 'ws',
        description: '1jdsfkjskj',
        status: 'on hold',
        titile: 'yfyfy',
        userID: 'lkjfklsjklçj',
        created_at: new Date()
    },
]
const DoTasks: React.FC = () => {

    const { colors } = useTheme()

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: colors.bg }}
            contentContainerStyle={{ padding: '10%' }}
            data={data}
            renderItem={({ item }) => <Task {...item} />}
        />
    )
}

export default DoTasks;