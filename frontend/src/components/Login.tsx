import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../store/authContext"
import axios from "axios"
import { Box, Button, TextField } from "@mui/material"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogin = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const res = await axios.post('http://localhost:8000/auth/login', { email, password })
            alert(res.data.message)
            login(res.data.token)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Box component='form' onSubmit={handleLogin} style={{ 
            backgroundColor: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px', 
            padding: '5em',
            border: '1px solid black' 
        }}>

            <TextField
                hiddenLabel
                placeholder='email'
                variant='outlined'
                size='small'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                hiddenLabel
                placeholder='password'
                variant='outlined'
                size='small'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type='submit' variant="contained">Log In</Button>

            <Link to='/register'>Register</Link>
            
        </Box>
    )
}

export default Login