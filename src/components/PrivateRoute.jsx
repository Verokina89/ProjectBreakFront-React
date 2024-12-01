// ruta protegida que sólo permita el acceso si el usuario está autenticado.
import { Navigate } from 'react-router-dom';


function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem('token'); // Ejemplo de autenticación basada en token.

    if (!isAuthenticated) {
        // Si el usuario no está autenticado, redirige a /login.
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, renderiza el contenido protegido.
    return children;
}

export default PrivateRoute;



/*
Este componente actúa como un envoltorio para proteger rutas específicas en tu aplicación. Si el usuario no está autenticado, lo redirige a la página de inicio de sesión.
localStorage.getItem('token'):

Este ejemplo asume que guardas un token de autenticación en el localStorage después de que el usuario inicia sesión. Si no utilizas localStorage, puedes adaptar este comportamiento para leer el estado de autenticación desde un contexto o un estado global como Redux.
<Navigate to="/login" replace />:

Este componente de react-router-dom redirige al usuario a una ruta específica (en este caso, /login). El atributo replace evita que se acumule un historial de redirecciones.
Renderización condicional:

Si el usuario está autenticado (isAuthenticated === true), renderiza el contenido protegido.
Si no lo está, lo redirige a la página de inicio de sesión.
*/








// import { Navigate } from "react-router-dom";
// import { useUser } from "../context/UserContext";

// const PrivateRoute = ({ children }) => {
//   const { user } = useUser();

//   return user ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

/*
Si el usuario está autenticado (user no es null), se renderiza componente hijo. Si no, redirige al usuario al inicio de sesión (/login).
*/