import { useEffect, useState } from "react";
import { fetchDataProduct, putDataProduct } from "../services/API";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/dashboard.css'

const EditProduct = () => {
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Product ID en EditProduct:", productId);

    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const product = await fetchDataProduct(`/api/products/${productId}`, token);
        setFormData(product);
      } catch (error) {
        setMessage("Error al cargar el producto.");
      }
    };
    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await putDataProduct(`/api/products/${productId}/edit`, formData, token);
      setMessage("Producto actualizado exitosamente.");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      setMessage("Error al actualizar producto.");
    }
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Imagen (URL):</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
   
  );
};

export default EditProduct;