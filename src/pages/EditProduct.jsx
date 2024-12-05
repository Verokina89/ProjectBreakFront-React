import { useEffect, useState } from "react";
import { fetchDataProduct, putDataProduct } from "../services/API";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/dashboard.css'

const EditProduct = () => {
  const { productId } = useParams(); // Obtiene el ID del producto desde la URL
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Carga el producto cuando el componente se monta
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtén el token para autenticación
        const product = await fetchDataProduct(`/api/products/${productId}`, token); // Llama al endpoint para obtener el producto
        if (product) {
          setFormData(product); // Llena el formulario con los datos del producto
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el producto');
        console.error(err);
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

  // Envía los datos del formulario para actualizar el producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Obtén el token
      const result = await putDataProduct(`/api/products/${productId}`, formData, token); // Llama al endpoint PUT
      if (result) {
        alert('Producto actualizado exitosamente.');
        navigate('/dashboard'); // Redirige al Dashboard
      } else {
        alert('Error al actualizar el producto.');
      }
    } catch (err) {
      console.error('Error al actualizar:', err);
      setError('Error al actualizar el producto');
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