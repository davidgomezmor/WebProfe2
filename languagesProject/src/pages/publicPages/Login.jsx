import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { LogOut } from "./logOut";

export const Login = () => {
  const navigate = useNavigate();
  const { login, logOut, email, setEmail, password, setPassword, error, setError } =
    useContext(AuthContext);

  // AUTENTIFICACIÓ / ERROR AL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid email or password");
      // return <Navigate to="/Home"/> 
    }
    console.log(error);

    setEmail("");
    setPassword("");

    navigate("/HomeUser");

  };
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <h2 className="text-center text-3xl font-bold mb-4">LOGIN</h2>
  
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="input input-bordered input-primary w-full max-w-xs py-2 px-3 rounded"
                  type="email"
                  placeholder="Introduce tu email"
                  autoComplete="on"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className="input input-bordered input-primary w-full max-w-xs py-2 px-3 rounded"
                  type="password"
                  placeholder="Contraseña"
                  minLength="6"
                  required
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4 text-right">
                <Link
                  className="text-sm text-primary-500 hover:text-primary-700"
                  type="link"
                  to="/ForgotPassword"
                >
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleLogin}
                >
                  Acceder
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-primary-500 hover:text-primary-700"
                  type="link"
                  to="/register/"
                >
                  Crear cuenta
                </Link>
              </div>
            </form>
            <div className="text-center">
              <LogOut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}