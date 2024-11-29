//UserContext para gestionar la autenticación y el estado del usuario en toda la aplicación.

import { createContext, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);