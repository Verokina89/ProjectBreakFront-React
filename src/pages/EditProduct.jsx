import { useEffect, useState } from "react";
import { fetchData, putData } from "../services/API";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await fetchData(`/api/products/${productId}`);
      setFormData(product);
    };
    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await putData(`/api/products/${productId}/edit`, formData);
    if (result) {
      alert("Producto actualizado exitosamente.");
    } else {
      alert("Error al actualizar producto.");
    }
  };

  if (!formData) return <p>Cargando...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <input name="name" value={formData.name} onChange={handleInputChange} />
      <input name="description" value={formData.description} onChange={handleInputChange} />
      <input name="image" value={formData.image} onChange={handleInputChange} />
      <input name="category" value={formData.category} onChange={handleInputChange} />
      <input name="size" value={formData.size} onChange={handleInputChange} />
      <input name="price" value={formData.price} onChange={handleInputChange} />
      <button type="submit">Actualizar Producto</button>
    </form>
  );
};
export default EditProduct;
