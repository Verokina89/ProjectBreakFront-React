import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, deleteData } from '../services/API';
import '../styles/dashboard.css'; // Asegúrate de tener un archivo CSS para los estilos

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); // Verifica si hay un token
    };

    const getProducts = async () => {
      const token = localStorage.getItem('token');
      const response = await fetchData('/api/products', token);
      if (response) {
        setProducts(response);
      } else {
        setError('Error al obtener los productos');
      }
    };

    checkAuthentication();
    getProducts();
  }, []);

  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`); // Navega a la página de edición
  };

  const handleDelete = async (productId) => {
    const token = localStorage.getItem('token');
    const response = await deleteData(`/api/products/${productId}`, token);
    if (response) {
      setProducts(products.filter((product) => product._id !== productId));
    } else {
      alert('Error al eliminar el producto');
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
            </div>
            {isAuthenticated && (
              <div className="product-actions">
                <button onClick={() => handleEdit(product._id)}>Editar</button>
                <button onClick={() => handleDelete(product._id)}>Eliminar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;



//---

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchData, deleteData } from '../services/API';
// import '../styles/dashboard.css'; // Asegúrate de tener un archivo CSS para los estilos

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuthentication = () => {
//       const token = localStorage.getItem('token');
//       setIsAuthenticated(!!token); // Verifica si hay un token
//     };

//     const getProducts = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetchData('/api/products', token);
//       if (response) {
//         setProducts(response);
//       } else {
//         setError('Error al obtener los productos');
//       }
//     };

//     checkAuthentication();
//     getProducts();
//   }, []);

//   const handleEdit = (productId) => {
//     navigate(`/edit-product/${productId}`); // Navega a la página de edición
//   };

//   const handleDelete = async (productId) => {
//     const token = localStorage.getItem('token');
//     const response = await deleteData(`/api/products/${productId}`, token);
//     if (response) {
//       setProducts(products.filter((product) => product._id !== productId));
//     } else {
//       alert('Error al eliminar el producto');
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       {error && <p className="error">{error}</p>}
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Precio: ${product.price}</p>
//             {isAuthenticated && (
//               <div className="product-actions">
//                 <button onClick={() => handleEdit(product._id)}>Editar</button>
//                 <button onClick={() => handleDelete(product._id)}>Eliminar</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Dashboard;



//-----------------------------------------------------------------------
// import { useEffect, useState } from 'react';
// import { fetchData } from "../services/API";

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       const token = localStorage.getItem("token");
//       const response = await fetchData("/api/products", token);
//       if (response) {
//         setProducts(response);
//       } else {
//         setError("Error al obtener los productos");
//       }
//     };
//     getProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {error && <p>{error}</p>}
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

//-----------------------------------------------------------------------

// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) navigate('/login');
//     });
//     return unsubscribe;
//   }, [auth, navigate]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const token = await auth.currentUser?.getIdToken();
//         const response = await axios.get('/api/products', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts(response.data);
//       } catch (err) {
//         console.error(err);
//         setError('Error fetching products');
//       }
//     };
//     fetchProducts();
//   }, [auth]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate('/login');
//     } catch (err) {
//       console.error('Logout error:', err);
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button onClick={handleLogout}>Logout</button>
//       {error && <p>{error}</p>}
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
