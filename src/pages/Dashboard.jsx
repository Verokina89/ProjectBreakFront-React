import { useEffect, useState } from 'react';
import { fetchData } from "../services/API";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("token");
      const response = await fetchData("/api/products", token);
      if (response) {
        setProducts(response);
      } else {
        setError("Error al obtener los productos");
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;



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
