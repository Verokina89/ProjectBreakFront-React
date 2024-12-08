import { useEffect, useState } from "react";
import { fetchDataProduct } from "../services/API";
import "../styles/dashboard.css"; 
const Category = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("T-shirts");
  const [error, setError] = useState("");

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await fetchDataProduct(`/api/products/category/${category}`, token);
        if (response) {
          setProducts(response);
        } else {
          setError("Error al obtener los productos por categoría");
        }
      } catch (err) {
        setError("Hubo un error al cargar los productos");
        console.error(err);
      }
    };

    getProductsByCategory();
  }, [category]);
  return (
    <div className="categories">
      <h1>Productos por Categoría</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="T-shirts">T-shirts</option>
        <option value="Sweaters">Sweaters</option>
        <option value="Accessories">Accessories</option>
        <option value="Snack">Snack</option>
      </select>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;