//formulario para inicio de sesión de los usuarios(envia datos al backend, es decir, al endpoint /login)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useUser } from "../context/UseUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      login(user); 
      localStorage.setItem("token", await user.getIdToken()); 
      navigate("/dashboard");
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Credenciales incorrectas o error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;