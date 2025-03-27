import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icta.png"; // Asegúrate de tener este logo en assets

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Iniciando sesión con:", email, password);
    } else {
      console.log("Registrando usuario:", fullName, email, password);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <img src={logo} alt="ICTA Logo" style={{ width: "150px", marginBottom: "20px" }} />
        <div className="card p-4 shadow" style={{ width: "22rem" }}>
          <h3 className="text-center mb-3">{isLogin ? "Login" : "Regístrate"}</h3>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Nombre Completo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu Nombre"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              {isLogin ? "Ingresar" : "Crear Cuenta"}
            </button>
          </form>
          <p className="text-center mt-3">
            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes una cuenta?"}{" "}
            <Link to={isLogin ? "/register" : "/login"} className="fw-bold">
              {isLogin ? "Regístrate" : "Inicia Sesión"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
