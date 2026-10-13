import { SignIn } from "@clerk/react"

const AppSignIn = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignIn signUpUrl="/auth/sign-up" />
        </div>
    )
}

export default AppSignIn