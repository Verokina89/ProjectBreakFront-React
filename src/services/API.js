// src/utils/API.js
const API_URL = "https://projectbreak-back-react.onrender.com"; // URL de tu backend en producción

// Función para realizar solicitudes GET
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};

// Función para realizar solicitudes POST
export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    return null;
  }
};
