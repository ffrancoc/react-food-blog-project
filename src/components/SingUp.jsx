import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "../css/SingUp.css";

function SingUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [singUpStatus, setSingUpStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ username, password, confirmPassword });
  };

  return (
    <div className="login">
      <form action="post" onSubmit={onSubmit}>
        <h2>Nuevo Registro</h2>
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
        <div>
          <RiLockPasswordFill size="24" />
          <input
            type="password"
            placeholder="confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Registrar" />
        <p>{singUpStatus}</p>
      </form>
    </div>
  );
}

export default SingUp;
