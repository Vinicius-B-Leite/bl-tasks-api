import React, { createContext, useState } from 'react';
import { View } from 'react-native';
import { UserType } from '../@types/UserType';



type AuthContextType = {
    user: UserType | null,
    saveUser: (userCredencials: UserType) => void
}

export const AuthContext = createContext({} as AuthContextType)


type Props = {
    children: React.ReactNode
}
const AuthProvider: React.FC<Props> = ({ children }) => {

    const [user, setUser] = useState<UserType | null>(null)

    const saveUser = (userCredencials: UserType) => {
        setUser(userCredencials)
    }

    return (
        <AuthContext.Provider value={{ user, saveUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;