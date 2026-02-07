import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError("");
    const response = await login(email, password);
    setLoading(false);
    if (response.success && response.data) {
      navigate("/usuarios");
    } else if (response.errors && Array.isArray(response.errors)) {
      // Errores de validación
      const fieldErrors = {};
      response.errors.forEach(err => {
        fieldErrors[err.code.toLowerCase()] = err.errorMessages.join(" ");
      });
      setErrors(fieldErrors);
    } else if (!response.success && response.message) {
      setGeneralError(response.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center section-padding"
      style={{
        backgroundImage: "url('/Escudo%20con%20fondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card w-full max-w-md bg-white/90 backdrop-blur-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">Inicio de Sesión</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Ingresa tu email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>
          {generalError && <p className="text-red-600 text-center text-sm mb-2">{generalError}</p>}
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
