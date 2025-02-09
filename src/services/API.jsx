import axios from "axios";
const API_URL = "https://projectbreak-back-react.onrender.com";

//config axios
export const api = axios.create({
  baseURL: API_URL,
  headers: { 
    "Content-Type": "application/json",
  },
});

//maneja GET
export const fetchDataProduct = async (endpoint, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get(endpoint, { headers });
    return response.data;
  } catch (error) {
    console.error("Error en GET:", error.response?.data || error.message);
    return null;
  }
};

// // maneja POST
export const postDataProduct = async (endpoint, data, token) => {
  try {
    const headers = token
      ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      : { "Content-Type": "application/json" };

    const response = await api.post(endpoint, data, { headers });

    return response.data;
  } catch (error) {
    console.error("Error en POST:", error.response?.data || error.message);
    return null;
  }
};


//maneja PUT
export const putDataProduct = async (endpoint, data, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.put(endpoint, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error en PUT:", error.response?.data || error.message);
    return null;
  }
};

// Función DELETE
export const deleteDataProduct = async (endpoint, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.delete(endpoint, { headers });
    return response.data;
  } catch (error) {
    console.error("Error en DELETE:", error.response?.data || error.message);
    return null;
  }
};
