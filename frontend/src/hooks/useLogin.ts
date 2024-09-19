import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/authContext"
import axios, { AxiosError } from "axios"
import { URL_ENDPOINT } from "../api/api"

export const useLogin = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
                const res = await axios.post(`${URL_ENDPOINT}/auth/login`, { email, password });
                alert(res.data.message);
                login(res.data.token);  
                navigate('/'); 
            } catch (error: unknown) {  
                const isAxiosError = error instanceof AxiosError;
                const statusCode = isAxiosError ? error.response?.status : null;
                
                if(statusCode === 403) return alert('Your account is blocked. Please contact support.');
                if(statusCode === 401) return alert('Wrong email or password')
            }
    }


    return{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    }



}