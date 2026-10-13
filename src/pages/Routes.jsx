import { Route, Routes } from "react-router-dom";

import AuthRoutes from "./Auth/Routes";
import LandingPage from "./Frontend/Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;