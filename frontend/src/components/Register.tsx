import { Box, TextField,  } from "@mui/material"
import { useRegister } from "../hooks/useRegister"
import FormButtons from "./ui/FormButtons"

const Register = () => {

    const { handleRegister, name, setName, email, setEmail, password, setPassword } = useRegister()

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

            <FormButtons nameButton="Register" nameAnchor="Login"/>
        </Box>
    )
}

export default Register