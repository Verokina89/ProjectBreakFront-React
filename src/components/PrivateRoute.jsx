// ruta protegida que sólo permita el acceso si el usuario está autenticado.

import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

/*
Si el usuario está autenticado (user no es null), se renderiza componente hijo. Si no, redirige al usuario al inicio de sesión (/login).
*/