import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/icta.png";

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [rol, setRol] = useState("usuario");
  const [error, setError] = useState(null);
  const [verPassword, setVerPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password || (!isLogin && !fullName)) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const payload = isLogin
      ? { email, password }
      : { fullName, email, password, rol };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error en la solicitud.");
        return;
      }

      if (isLogin) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          alert("Inicio de sesión exitoso");
          navigate("/dashboard");
        } else {
          setError("No se recibió token del servidor.");
        }
      } else {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el servidor.");
    }
  };

  const inputStyle = { position: "relative" };
  const iconStyle = {
    position: "absolute",
    top: "50%",
    right: 10,
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <img
          src={logo}
          alt="ICTA Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <div className="card p-4 shadow" style={{ width: "22rem" }}>
          <h3 className="text-center mb-3">
            {isLogin ? "Iniciar sesión" : "Regístrate"}
          </h3>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            )}

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3" style={inputStyle}>
              <input
                type={verPassword ? "text" : "password"}
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setVerPassword(!verPassword)}
                style={iconStyle}
              >
                {verPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* ✅ Campo Rol para registro */}
            {!isLogin && (
              <div className="mb-3">
                <select
                  className="form-select"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
                >
                  <option value="usuario">Usuario</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100">
              {isLogin ? "Entrar" : "Registrarse"}
            </button>
          </form>

          {isLogin && (
            <div className="mb-3 text-center">
              <Link to="/forgot-password" className="small">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          )}

          <div className="mt-3">
            {isLogin ? (
              <p>
                ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
              </p>
            ) : (
              <p>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
