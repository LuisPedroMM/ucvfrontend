import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Dashboard from "./pages/Dashboard";
import CambiarContraseña from "./pages/CambiarContraseña";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./layouts/PrivateLayout";
import ListaUsuarios from "./pages/ListaUsuarios";
import PortalInstitucional from "./pages/PortalInstitucional";
import ProyectosInvestigacion from "./pages/ProyectosInvestigacion";
import EjecucionFinancieraProyectosInvestigacion from "./pages/EjecucionFinancieraProyectosInvestigacion";
import EjecucionFinancieraProyectosInfraestructura from "./pages/EjecucionFinancieraProyectosInfraestructura";
import GuardarProyectos from "./components/GuardarProyectos";


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/register" element={<AuthForm isLogin={false} />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        
        

        {/* Rutas protegidas con navbar */}
        <Route
          path="/portal-institucional"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <PortalInstitucional />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
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
          path="/cambiar-contraseña"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <CambiarContraseña />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <ListaUsuarios />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        
        <Route
   path="/proyectos-investigacion"
   element={
     <PrivateRoute>
       <PrivateLayout>
         <ProyectosInvestigacion />
       </PrivateLayout>
     </PrivateRoute>
   }
 />

 <Route
    path="/ejecucion-financiera-proyectos-investigacion"
    element={
      <PrivateRoute>
        <PrivateLayout>
          <EjecucionFinancieraProyectosInvestigacion />
        </PrivateLayout>
      </PrivateRoute>
    }
  />

  <Route
    path="/ejecucion-financiera-proyectos-infraestructura"
    element={
      <PrivateRoute>
        <PrivateLayout>
          <EjecucionFinancieraProyectosInfraestructura />
        </PrivateLayout>
      </PrivateRoute>
    }
  />

 <Route
          path="/guardar-proyectos"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <GuardarProyectos />
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
