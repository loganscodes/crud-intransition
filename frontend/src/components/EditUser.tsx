import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

const EditUser = () => {
    return (
        <Box component='form' style={{
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
            />

            <TextField
                hiddenLabel
                placeholder='Email'
                variant='outlined'
                size='small'
            />

            <TextField
                hiddenLabel
                placeholder='Password'
                variant='outlined'
                size='small'
            />

            <FormControl sx={{ m:1, minWidth: 120}} size='small'>
                <InputLabel id='select-small'>Status</InputLabel>
                <Select labelId='select-small' label='Status'>
                    <MenuItem>Active</MenuItem>
                    <MenuItem>Blocked</MenuItem>
                </Select>
            </FormControl>
        
        </Box>
    )
}

export default EditUser