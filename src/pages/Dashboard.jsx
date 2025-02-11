import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataProduct, deleteDataProduct } from '../services/API';
import '../styles/dashboard.css'; 

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); 
    };
    const getProducts = async () => {
      const token = localStorage.getItem('token');
      const response = await fetchDataProduct('/api/products', token);
        if (response && Array.isArray(response)) {
        setProducts(response);
      } else {
        setError('Error al obtener los productos');
      }
    };

    checkAuthentication();
    getProducts();
  }, []);

  const handleEdit = (productId) => {
    const route = `/${productId}/edit/`;
    console.log("Navegando a:", route);
    navigate(route); 
  };

  const handleDelete = async (productId) => {
    const token = localStorage.getItem('token');
    const response = await deleteDataProduct(`/api/products/${productId}`, token);
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
              <p>{product.price}</p>
              <p>{product.color}</p>

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