import axios from "axios"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { URL_ENDPOINT } from "../api/api"

export const useRegister = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        await axios.post(`${URL_ENDPOINT}/auth/register`, { name, email, password })
        navigate('/login')
    }

    return{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        handleRegister
    }

}