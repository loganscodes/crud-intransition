import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../store/authContext"

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute