import { Show, UserProfile } from "@clerk/react"
import AppRoutes from "./pages/Routes"

const App = () => {
  return (
    <>
      <Show when="signed-in">
        <UserProfile />
      </Show >

      <Show when="signed-out">
        <AppRoutes />
      </Show>
    </>
  )
}

export default App