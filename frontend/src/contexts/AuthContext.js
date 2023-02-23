import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(null)

    const checkLoggedInUser = () => {
        const storageToken = localStorage.getItem("token");
        return !!storageToken
    };

    const AuthLogin = async (token) => {
        try {
            if (!token) {
                alert('Algo deu errado verificque ');
            } else {
                setAuthToken(token)
                localStorage.setItem("token", token);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const Logout = async () => {
        try {
            setAuthToken()
            localStorage.removeItem('token')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ authToken, AuthLogin, checkLoggedInUser, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider