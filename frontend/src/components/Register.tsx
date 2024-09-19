import { useRegister } from "../hooks/useRegister"
import FormButtons from "./ui/FormButtons"
import UIForm from "./ui/UIForm"
import UIInput from "./ui/UIInput"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

    const { handleRegister, name, setName, email, setEmail, password, setPassword } = useRegister()

    return (
        <>
            <UIForm onSubmit={handleRegister}>
                <UIInput placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <UIInput placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <UIInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormButtons path="/login" nameButton="Register" nameAnchor="Login" />

                <ToastContainer  />

            </UIForm>


        </>
    )
}

export default Register