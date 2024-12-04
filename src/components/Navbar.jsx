import { Link  } from "react-router-dom"
import { useUser } from '../context/UseUser'
// import {postData} from '../services/API'
import '../styles/navbar.css'
import '../App.css'

const Navbar = () => {
  const { user, logout } = useUser();
  //logica logout
  // const handleLogout = async () => {
  //   try {
  //     const response = await postData('/auth/logout'); // Llama al endpoint del backend
  //     if (response && response.success) {
  //       localStorage.removeItem('token'); // Limpia el token del localStorage
  //       logout(); // Limpia el estado del usuario en el contexto
  //     } else {
  //       console.error('Error al cerrar sesión:', response.error);
  //     }
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //   }
  // };
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token del localStorage
    logout(); // Limpia el contexto del usuario
    console.log("Sesión cerrada correctamente");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Kianela</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/category">Categorias</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        {!user ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* <li>
              <Link to="/favoritos">Favoritos</Link>
            </li> */}
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
