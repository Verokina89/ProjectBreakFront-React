import { useState } from "react";
import { postData } from "../services/API";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    size: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postData("/api/products/create", formData);
    if (result) {
      alert("Producto creado exitosamente.");
    } else {
      alert("Error al crear producto.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Producto</h2>
      <input name="name" placeholder="Nombre" onChange={handleInputChange} />
      <input name="description" placeholder="Descripción" onChange={handleInputChange} />
      <input name="image" placeholder="URL Imagen" onChange={handleInputChange} />
      <input name="category" placeholder="Categoría" onChange={handleInputChange} />
      <input name="size" placeholder="Tamaño" onChange={handleInputChange} />
      <input name="price" placeholder="Precio" onChange={handleInputChange} />
      <button type="submit">Crear Producto</button>
    </form>
  );
};
export default AddProduct;
