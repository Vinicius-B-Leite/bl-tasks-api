import React from 'react';
import { View } from 'react-native';
import { TaskType } from '../../@types/TaskType';
import * as S from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components/native';


const Task: React.FC<TaskType> = ({ titile, description, status, id, created_at, userID }) => {

    const { colors, icon } = useTheme()


    return (
        <S.Container>
            <S.Left>
                <S.Title numberOfLines={1}>{titile}</S.Title>
                <S.Description numberOfLines={1}>{description}</S.Description>
            </S.Left>
            <AntDesign name={status == 'on hold' ? 'arrowright' : 'check'} color={status == 'on hold' ? colors.text : colors.contrast} size={icon.md} />
        </S.Container>
    )
}

export default Task;