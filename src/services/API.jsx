
//Archivo clave para conecta con el back
const API_URL = "https://projectbreak-back-react.onrender.com/api"; // URL de tu backend en producción (define la URL base de tu backend)

//manejo de solicitudes GET(obtener productos )
export const fetchDataProduct = async (endpoint, token = null) => {
  try {
    
    const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Agrega token si existe
    const response = await fetch(`${API_URL}${endpoint}`, { headers });
    if (!response.ok) {
      throw new Error("Error en la solicitud GET");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};

//manejo de POST
export const postDataProduct = async (endpoint, data, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), //añade token si existe
    };
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error en la solicitud POST");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    return null;
  }
};

//solicitudes PUT
export const putDataProduct = async (endpoint, data, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), 
    };
    const response = await fetch(`${API_URL}${endpoint}`, { 
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error en la solicitud PUT");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
    return null;
  }
};

//solicitudes DELETE
export const deleteDataProduct = async (endpoint, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}; // Agrega token si existe
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      headers,
    });
    if (!response.ok) {
      throw new Error("Error en la solicitud DELETE");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al eliminar los datos:", error);
    return null;
  }
};