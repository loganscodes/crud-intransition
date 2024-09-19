import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

interface Props{
    nameButton: string,
    nameAnchor: string,
    path: string
}

const FormButtons = ({nameButton, nameAnchor, path}:Props) => {
    return (
        <>
            <Button type='submit' variant='contained' color="success">{nameButton}</Button>

            <Link to={path} style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle1">{nameAnchor}</Typography>
            </Link>
        
        </>

    )
}

export default FormButtons