import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "../css/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="login">
      <form action="post" onSubmit={onSubmit}>
        <h2>Inicio de Sesión</h2>
        <div>
          <FaUserCircle size="24" />
          <input
            type="text"
            placeholder="usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <RiLockPasswordFill size="24" />
          <input
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Ingresar" />
        <a href="/singup">Crear cuenta</a>
        <p>{loginStatus}</p>
      </form>
    </div>
  );
}

export default Login;
