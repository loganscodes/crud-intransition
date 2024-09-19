import { Box } from "@mui/material"
import { FormEventHandler, ReactNode } from "react"

import itransitionLogo from '../../assets/itransition_logo.jpeg'


interface Props {
    onSubmit: FormEventHandler<HTMLFormElement>
    children: ReactNode
}

const Form = ({ onSubmit, children }: Props) => {
    return (
        <Box component='form' onSubmit={onSubmit} style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '5em',
            border: '1px solid black'
        }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={itransitionLogo} alt="" height={100} width={100} />
            </div>

            {children}

        </Box>
    )
}

export default Form