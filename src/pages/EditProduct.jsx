import { useEffect, useState } from "react";
import { fetchDataProduct, putDataProduct } from "../services/API";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams(); 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    size: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  
  useEffect(() => {

    const fetchProduct = async () => {
      setLoading(true); 
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          setMessage("Autenticación requerida. Por favor, inicia sesión.");
          setLoading(false);
          return;
        }
        const product = await fetchDataProduct(`/api/products/${productId}`, token);
        if (product) {
          setFormData({
            name: product.name || "",
            description: product.description || "",
            price: product.price || "",
            image: product.image || "",
            category: product.category || "",
            size: product.size || "",
          });
        } else {
          setMessage("Error: Producto no encontrado.");
        }
      } catch (error) {
        console.error("Error al cargar producto:", error);
        setMessage("Error al cargar el producto.");
        
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Requiere Auth. Por favor, inicia sesion.");
        return;
      }

      const result = await putDataProduct(`/api/products/${productId}/edit`, formData, token);

      if (result) {
        setMessage("Producto Actualizado.");
        setTimeout(() => navigate("/dashboard"), 2000); 
        
      } else {
        setMessage("Error al actualizar producto. Verifica los datos.");
      }
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      setMessage("Error al procesar la solicitud.");
    }
  };

  if (loading) {
    return <p>Cargando datos del producto...</p>; 
  }

  return (
    <div>
      <h1>Editar Producto</h1>
      {message && <p>{message}</p>}
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
          <label htmlFor="image">Imagen:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            id="category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="size">Tamaño:</label>
          <input
            id="size"
            name="size"
            type="text"
            value={formData.size}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default EditProduct;