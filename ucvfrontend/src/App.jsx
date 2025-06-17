import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import CambiarContraseña from "./pages/CambiarContraseña";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./layouts/PrivateLayout";
import ListaUsuarios from "./pages/ListaUsuarios";
import PortalInstitucional from "./pages/PortalInstitucional";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/register" element={<AuthForm isLogin={false} />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/PortalInstitucional" element={<PortalInstitucional />} />


        {/* Rutas protegidas con navbar */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <Perfil />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/cambiar-contraseña"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <CambiarContraseña />
              </PrivateLayout>
            </PrivateRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<AuthForm isLogin={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
