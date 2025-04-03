import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./layouts/PrivateLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/register" element={<AuthForm isLogin={false} />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<AuthForm isLogin={true} />} />
        {/* ✅ Dashboard protegido */}
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
    <Route path="*" element={<AuthForm isLogin={true} />} />
      </Routes>
    </Router>
  );
}

export default App;

