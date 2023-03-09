import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components/native';
import { getTasks } from '../../api/getTasks';
import Task from '../../components/Task';
import * as S from './style'



const DoTasks: React.FC = () => {

    const { colors, icon } = useTheme()
    const { data, isLoading } = useQuery('doTaks', () => getTasks({ status: 'on hold', token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZpbmNpdXMgQkwiLCJpYXQiOjE2NzgyMzcxMDEsInN1YiI6IjI2ODk1ZGI4LThlODMtNGM2NC1iNTljLTQzNDJjMDI5YjI4MSJ9.2iuw7US6IPa7n1aOfckTQyVeX6EB8SrQwS5HRVShs6k', userID: 'a2a5bde6-a8a9-4753-882b-dabfebd22b5c' }))

    if (isLoading) {
        return (
            <S.Container>
                <ActivityIndicator size={icon.lg} color={colors.contrast} />
            </S.Container>
        )
    }


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