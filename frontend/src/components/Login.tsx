import { Box, TextField } from "@mui/material"
import { useLogin } from "../hooks/useLogin"
import FormButtons from "./ui/FormButtons"

const Login = () => {

    const { handleLogin, email, setEmail, password, setPassword } = useLogin()

    
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
                placeholder='Email'
                variant='outlined'
                size='small'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                hiddenLabel
                placeholder='Password'
                variant='outlined'
                size='small'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <FormButtons nameButton="Login" nameAnchor="Register"/>
        
        </Box>
    )
}

export default Login