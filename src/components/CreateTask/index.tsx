import React, { useState } from 'react';
import { Modal, ModalProps } from 'react-native';
import ContrastButton from '../ContrastButton';
import Input from '../Input';
import * as S from './styles'
// import { Container } from './styles';



const CreateTask: React.FC<ModalProps> = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <Modal {...props}>
            <S.ModalContainer>
                <S.CloseBtn activeOpacity={0} onPress={props.onRequestClose}/>
                <S.ModalContent>
                    <Input
                        error={false}
                        h='15%'
                        inputProps={{
                            placeholder: 'Título da tarefa',
                            value: title,
                            onChangeText: (txt) => setTitle(txt)
                        }}

                    />
                    <Input
                        h='55%'
                        error={false}
                        inputProps={{
                            placeholder: 'Descrição',
                            value: description,
                            onChangeText: (txt) => setDescription(txt)
                        }}

                    />
                    <ContrastButton h='15%' onPress={() => { }}>Criar</ContrastButton>
                </S.ModalContent>
            </S.ModalContainer>
        </Modal>
    );

}

export default CreateTask;