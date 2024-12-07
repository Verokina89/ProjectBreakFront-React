import axios from 'axios';

const API_URL = "https://projectbreak-back-react.onrender.com";

// Manejo de solicitudes GET
export const fetchDataProduct = async (endpoint, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.get(`${API_URL}${endpoint}`, { headers });
    return response.data; // Axios maneja automáticamente errores HTTP
  } catch (error) {
    console.error("Error en la solicitud GET:", error.message);
    throw error;
  }
};

// Manejo de solicitudes POST
export const postDataProduct = async (endpoint, data, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const response = await axios.post(`${API_URL}${endpoint}`, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud POST:", error.message);
    throw error;
  }
};

// Manejo de solicitudes PUT
export const putDataProduct = async (endpoint, data, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const response = await axios.put(`${API_URL}${endpoint}`, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud PUT:", error.message);
    throw error;
  }
};

// Manejo de solicitudes DELETE
export const deleteDataProduct = async (endpoint, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.delete(`${API_URL}${endpoint}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error.message);
    throw error;
  }
};









// //Archivo clave para conecta con el back
// const API_URL = "https://projectbreak-back-react.onrender.com/api"; // URL de tu backend en producción (define la URL base de tu backend)

// //manejo de solicitudes GET(obtener productos )
// export const fetchDataProduct = async (endpoint, token = null) => {
//   try {
    
//     const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Agrega token si existe
//     const response = await fetch(`${API_URL}${endpoint}`, { headers });
//     if (!response.ok) {
//       throw new Error("Error en la solicitud GET");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error al obtener los datos:", error);
//     return null;
//   }
// };

// //manejo de POST
// export const postDataProduct = async (endpoint, data, token = null) => {
//   try {
//     const headers = {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }), //añade token si existe
//     };
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error("Error en la solicitud POST");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error al enviar los datos:", error);
//     return null;
//   }
// };

// //solicitudes PUT
// export const putDataProduct = async (endpoint, data, token = null) => {
//   try {
//     const headers = {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }), 
//     };
//     const response = await fetch(`${API_URL}${endpoint}`, { 
//       method: "PUT",
//       headers,
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error("Error en la solicitud PUT");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error al actualizar los datos:", error);
//     return null;
//   }
// };

// //solicitudes DELETE
// export const deleteDataProduct = async (endpoint, token = null) => {
//   try {
//     const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Agrega token si existe
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       method: "DELETE",
//       headers,
//     });
//     if (!response.ok) {
//       throw new Error("Error en la solicitud DELETE");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error al eliminar los datos:", error);
//     return null;
//   }
// };


/*
import axios from "axios"
import { getAuth } from "firebase/auth";

const API_URL = "https://projectbreak-back-react.onrender.com/api"; // URL de tu backend en producción (define la URL base de tu backend)

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials)
    .then(response => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data; 
    })
    .catch(error => {
      throw error; 
    });
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data; 
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error.message);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/products/category/${category}`);
    return response.data; 

  } catch (error) {
    console.error("Error al obtener productos por categoría:", error.message);
    throw error; 
  }
};

export const createProduct = async (product) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuario no autenticado');
    }
    const token = await user.getIdToken();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, 
    };

    const response = await axios.post(`${API_URL}/products`, product, { headers });
    return response.data;

  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuario no autenticado');
    }

    const token = await user.getIdToken();
    const headers = {
      Authorization: `Bearer ${token}`, 
    };

    const response = await axios.delete(`${API_URL}/products/${id}`, { headers });
    return response.data;

  } catch (error) {
    console.error("Error al eliminar producto:", error.message);
    throw error;
  }
};

export const updateProduct = async (id, updatedProduct) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Usuario no autenticado");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, 
    };

    const response = await axios.put(`${API_URL}/products/${id}`, updatedProduct, { headers });
    return response.data;

  } catch (error) {
    console.error("Error al actualizar producto:", error.message);
    throw error;
  }
};
*/
