const API_URL = "https://projectbreak-back-react.onrender.com"; 

export const fetchDataProduct = async (endpoint, token = null) => {
  try {
    
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, 
    }

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

export const postDataProduct = async (endpoint, data, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), 
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

export const deleteDataProduct = async (endpoint, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}; 
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