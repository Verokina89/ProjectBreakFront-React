import { useEffect, useState } from "react";
import { fetchDataProduct } from "../services/API";


const Category = () => {
  const [category, setCategory] = useState("T-shirts"); // Categoría por defecto
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductsByCategory = async () => {
      const response = await fetchDataProduct(`/api/products/category/${category}`);
      if (response) {
        setProducts(response);
      } else {
        setError("Error al obtener los productos por categoría");
      }
    };
    getProductsByCategory();
  }, [category]);

  return (
    <div className="categoys">
      <h1>Productos por Categoría</h1>
      {error && <p>{error}</p>}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="T-shirts">T-shirts</option>
        <option value="Sweaters">Sweaters</option>
        <option value="Accessories">Accessories</option>
        <option value="Snack">Snack</option>
      </select>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;