//UserProvider: envuelve la aplicación y proporciona el contexto para manejar el estado del usuario.useUser: un custom hook para acceder fácilmente al contexto del usuario en cualquier componente.

import { UserProvider, useUser } from "./context/UserContext"
import useState  from "react";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = (userData) => {
      setUser(userData); // Guarda los datos del usuario
    };
  
    const logout = () => {
      setUser(null); // Limpia el estado del usuario
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };
