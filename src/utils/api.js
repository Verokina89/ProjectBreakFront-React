const BASE_URL = 'https://proyectofinal-fullstackdev.onrender.com'; // Tu backend

export const fetchDataProduct = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};





// import { fetchData } from "../services/API";

// // Obtener productos destacados (por ejemplo, los más baratos)
// export const getFeaturedProducts = async () => {
//   try {
//     const products = await fetchData("/api/products");
//     // Filtrar productos para mostrar los destacados (ejemplo: los más baratos)
//     return products.sort((a, b) => a.price - b.price).slice(0, 5);
//   } catch (error) {
//     console.error("Error al obtener productos destacados:", error);
//     return null;
//   }
// };
