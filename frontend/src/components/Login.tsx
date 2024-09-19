import { useLogin } from "../hooks/useLogin"
import FormButtons from "./ui/FormButtons"

import UIForm from "./ui/UIForm"
import UIInput from "./ui/UIInput"

const Login = () => {

    const { handleLogin, email, setEmail, password, setPassword } = useLogin()

    
    return (
        <UIForm onSubmit={handleLogin}>
            <UIInput placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <UIInput placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <FormButtons path="/register" nameButton="Login" nameAnchor="Register"/>
        </UIForm>
    )
}

export default Login