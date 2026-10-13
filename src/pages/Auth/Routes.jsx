import { Route, Routes } from "react-router-dom"

import AppSignUp from "./Sign-up/SignUp"
import AppSignIn from "./Sign-in/SignIn"

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/sign-up" element={<AppSignUp />} />
            <Route path="/sign-in" element={<AppSignIn />} />
        </Routes>
    )
}

export default AuthRoutes