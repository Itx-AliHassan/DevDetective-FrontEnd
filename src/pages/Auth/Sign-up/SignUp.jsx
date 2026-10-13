import { SignUp } from "@clerk/react"

const AppSignUp = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUp signInUrl="/auth/sign-in" />
        </div>
    )
}

export default AppSignUp