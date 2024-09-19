import { TextField } from "@mui/material"
import { ChangeEventHandler } from "react"

interface Props {
    type?: string,
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

const UIInput = ({ type = 'text', value, onChange, placeholder }: Props) => {
    return (
        <TextField
            hiddenLabel
            placeholder={placeholder}
            type={type}
            variant='outlined'
            size='small'
            autoFocus
            value={value}
            onChange={onChange}
            required
        />
    )
}

export default UIInput