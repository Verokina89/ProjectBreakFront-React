//formulario para inicio de sesión de los usuarios(envia datos al backend, es decir, al endpoint /login)

import { useState } from "react";
import { postData } from  '../services/API'
import { useUser } from '../context/UseUser';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData("/auth/login", { email, password });
    if (response && response.token) {
      localStorage.setItem("token", response.token); //guarda el token en localStorage
      login(response.user); //guarda datos en el contexto
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contraseña:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;



// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useUser();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userData = await postData("/login", { email, password });
//     if (userData) {
//       login(userData); // Guarda los datos del usuario en el contexto
//     } else {
//       alert("Credenciales incorrectas");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label>Contraseña:</label>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Ingresar</button>
//     </form>
//   );
// };

// export default Login;