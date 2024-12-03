//envuelve la aplicación y proporciona el contexto para manejar el estado del usuario.useUser: un custom hook para acceder fácilmente al contexto del usuario en cualquier componente.
import { useState } from "react";
import PropTypes from "prop-types"; 
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};