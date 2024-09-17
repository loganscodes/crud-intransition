import { Button } from "@mui/material"
import { useAuth } from "../store/authContext"

const Logout = () => {

    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <Button variant='contained' style={{ margin: '15px', display: 'flex'}} onClick={handleLogout}>Logout</Button>
    )
}

export default Logout