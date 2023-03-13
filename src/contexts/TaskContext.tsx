import React, { createContext, useState } from 'react';
import { View } from 'react-native';



type Props = {
    children: React.ReactNode
}

type TaskContextType = {
    modalVisible: boolean
    toggleModal: () => void
}

export const TaskContext = createContext({} as TaskContextType)

const TaskProvider: React.FC<Props> = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }


    return (
        <TaskContext.Provider value={{ modalVisible, toggleModal }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;