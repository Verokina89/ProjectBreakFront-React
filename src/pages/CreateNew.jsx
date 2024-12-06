import { useState } from "react";
import { postDataProduct } from "../services/API";
import { useNavigate } from "react-router-dom";


const CreateNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    size: "",
    price: "",
  });
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Recupera el token de autenticación
      const result = await postDataProduct("/api/products/create", formData, token); // Envía los datos al backend
      if (result) {
        setMessage("Producto creado exitosamente."); // Muestra mensaje de éxito
        setTimeout(() => {
          navigate("/dashboard"); // Redirige al Dashboard después de 2 segundos
        }, 2000);
      } else {
        setMessage("Error al crear producto."); // Muestra mensaje de error
      }
    } catch (error) {
      console.error("Error al crear producto:", error);
      setMessage("Hubo un error al procesar la solicitud."); // Muestra mensaje de error
    }
  }
  
  return (
    <div>
      <h2>Añadir Producto</h2>
      {message && <p>{message}</p>} {/* Mensaje de éxito o error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>URL Imagen</label>
          <input
            type="text"
            name="image"
            placeholder="URL Imagen"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Categoría</label>
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Tamaño</label>
          <input
            type="text"
            name="size"
            placeholder="Tamaño"
            value={formData.size}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CreateNew;




/*
con esta fncin da errr iectmnte

const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postDataProduct("/api/products/create", formData);
    if (result) {
      alert("Producto creado exitosamente.");
    } else {
      alert("Error al crear producto.");
    }
};






otro tipo de rturn
return (
    <div>
      <h1>Añadir Producto</h1>
      {message && <p>{message}</p>} {/* Muestra el mensaje si existe */
      // <form onSubmit={handleSubmit}>
      //   <div>
      //     <label>Nombre:</label>
      //     <input
      //       type="text"
      //       name="name"
  //           value={formData.name}
  //           onChange={handleInputChange}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label>Descripción:</label>
  //         <textarea
  //           name="description"
  //           value={formData.description}
  //           onChange={handleInputChange}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label>Imagen (URL):</label>
  //         <input
  //           type="text"
  //           name="image"
  //           value={formData.image}
  //           onChange={handleInputChange}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label>Categoría:</label>
  //         <input
  //           type="text"
  //           name="category"
  //           value={formData.category}
  //           onChange={handleInputChange}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label>Tamaño:</label>
  //         <input
  //           type="text"
  //           name="size"
  //           value={formData.size}
  //           onChange={handleInputChange}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label>Precio:</label>
  //         <input
  //           type="number"
  //           name="price"
  //           value={formData.price}
  //           onChange={handleInputChange}
  //           required
  //         />
  //       </div>
  //       <button type="submit">Crear Producto</button>
  //     </form>
  //   </div>
  // );

