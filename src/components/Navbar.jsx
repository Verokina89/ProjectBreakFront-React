import { Link  } from "react-router-dom";
import { useUser } from '../context/UseUser';
import '../styles/navbar.css'
import '../App.css'

const Navbar = () => {
  const { user, logout } = useUser();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Kianela</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/category">Categorias</Link>
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
            <li>
              <button onClick={logout} className="logout-button">
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
