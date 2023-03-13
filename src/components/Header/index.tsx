import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './style'
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'styled-components/native';
import { TaskContext } from '../../contexts/TaskContext';


const Header: React.FC = () => {


    const { colors, icon } = useTheme()
    const { toggleModal } = useContext(TaskContext)

    return (
        <S.Container>
            <S.Title>BL <S.TitleContrast>Tarefas</S.TitleContrast></S.Title>
            <TouchableOpacity onPress={toggleModal}>
                <Feather name='plus-square' size={icon.md} color={colors.contrast} />
            </TouchableOpacity>
        </S.Container>
    )
}

export default Header;