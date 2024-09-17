import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        await axios.post('http://localhost:8000/auth/register', { name, email, password })
        navigate('/login')
    }

    return (
        <Box component='form' onSubmit={handleRegister} style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '5em',
            border: '1px solid black'
        }}>
            <TextField
                hiddenLabel
                placeholder='Name'
                variant='outlined'
                size='small'
                type='text'
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <TextField
                hiddenLabel
                placeholder='Email'
                variant='outlined'
                size='small'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                hiddenLabel
                placeholder='Password'
                variant='outlined'
                size='small'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* <TextField
                hiddenLabel
                placeholder="Repeat Password"
                variant='outlined'
                size='small'
            /> */}

            <Button type='submit' variant='contained'>Register</Button>
            <Link to='/login'>Login</Link>
        </Box>
    )
}

export default Register