const API_URL = "https://projectbreak-back-react.onrender.com"; // URL de tu backend en producción (define la URL base de tu backend)

//Function para manejar solicitudes GET

export const fetchData = async (endpoint) => {    //realiza solicitudes GET a los endpoints del backend y devuelve los datos en formato JSON
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

//Maneja solicitudes POST
export const postData = async (endpoint, data) => {   //realiza solicitudes POST, enviando un cuerpo de datos en formato JSON al backend.
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
