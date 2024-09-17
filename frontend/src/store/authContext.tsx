import { createContext, ReactNode, useContext, useState } from "react"

interface AuthContextType{
    isAuthenticated: boolean,
    login: (token: string) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!localStorage.getItem('token')
    })

    const login = (token: string) => {
        localStorage.setItem('token', token)
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error('useAuth must be used within an AuthProvider')
    
    return context
}