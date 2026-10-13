import { Route, Routes } from "react-router-dom"

import AuthRoutes from "./Auth/Routes"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}

export default AppRoutes