import React, { createContext, useContext, useState } from 'react'
import { IFormValues as IAuthFormData } from "component/SignInForm"

export const AuthContext: React.Context<any> = createContext({})

export default function AuthProvider({children}: any) {

    const [user, setUser]: [null | string, Function] = useState(localStorage.getItem('login') || null)

    const value = {
        user,
        signIn: (authFormData: IAuthFormData, callback: Function) => {
            console.log('signIn()', authFormData)
            setUser(authFormData.login)
            localStorage.setItem('login', authFormData.login)
            callback()
        },
        signOut: (callback: Function) => {
            console.log('signOut()')
            setUser(null)
            localStorage.removeItem('login')
            callback()
        },
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
