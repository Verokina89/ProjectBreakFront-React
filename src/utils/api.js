import { fetchDataProduct } from "../services/API";

// Obtener productos destacados (por ejemplo, los más baratos)
export const getFeaturedProducts = async () => {
  try {
    const products = await fetchDataProduct("/api/products");
    // Filtrar productos para mostrar los destacados (ejemplo: los más baratos)
    return products.sort((a, b) => a.price - b.price).slice(0, 5);
  } catch (error) {
    console.error("Error al obtener productos destacados:", error);
    return null;
  }
};
