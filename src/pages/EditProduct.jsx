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
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga
  const navigate = useNavigate();

  // Carga los datos del producto al montar el componente
  useEffect(() => {

    const fetchProduct = async () => {
      setLoading(true); //mesS de carga
      try {
        const token = localStorage.getItem("token"); // Recupera el token
        if (!token) {
          setMessage("Autenticación requerida. Por favor, inicia sesión.");
          setLoading(false);
          return;
        }
        const product = await fetchDataProduct(`/api/products/${productId}`, token); // Obtiene los datos del producto
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

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario para actualizar el producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); //reset mss
    console.log("Enviando datos del formulario:", formData); ////////////
    try {
        const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Autenticación requerida. Por favor, inicia sesión.");
        console.error("Token no encontrado en localStorage"); //////////
        return;
      }

      console.log("Token encontrado:", token); // Log para verificar el token

      const result = await putDataProduct(`/api/products/${productId}/edit-product`, formData, token);

      if (result) {
        setMessage("Producto actualizado exitosamente.");
        setTimeout(() => navigate("/dashboard"), 2000); // Redirige solo si la actualización fue exitosa
      } else {
        setMessage("Error al actualizar producto. Por favor, verifica los datos.");
        console.error("Error: El resultado es null o inválido.");
      }
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      setMessage("Error al procesar la solicitud.");
    }
  };

  if (loading) {
    return <p>Cargando datos del producto...</p>; // Muestra un mensaje de carga
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













/*
const EditProduct = () => {
  const { productId } = useParams(); // Captura el ID del producto desde la URL
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    size: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Carga los datos del producto al montar el componente
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token"); // Recupera el token
        const product = await fetchDataProduct(`/api/products/${productId}`, token); // Obtiene los datos del producto
        setFormData(product); // Llena el formulario con los datos obtenidos
      } catch (error) {
        setMessage("Error al cargar el producto.");
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario para actualizar el producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const result = await putDataProduct(`/api/products/${productId}/edit`, formData, token); // Actualiza el producto
      setMessage("Producto actualizado exitosamente.");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirige al Dashboard
    } catch (error) {
      setMessage("Error al actualizar el producto.");
      console.error(error);
    }
  };

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
*/