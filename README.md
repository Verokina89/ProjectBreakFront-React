# React + Vite
Trabajaremos un Frontend con React. El frontend debe consumir estos endpoints correctamente usando las herramientas configuradas (fetch, axios). Aseguramos de manejar correctamente el token de Firebase para proteger las rutas privadas (Dashboard, EditProduct, Favorites)

# Acceso al Backend con los endpoints.
/auth/login: Inicia sesión.
/auth/logout: Cierra sesión.
/api/products: Obtiene productos.
/api/products/category/:category: Obtiene productos por categoría.
/api/products/:id: Obtiene un producto específico por ID.

# Archicos mportantes:
-src/services/API.jsx: Este archivo es clave para conectar el frontend con el backend

-src/pages/AddProduct.jsx: Manejar la creación de nuevos productos. Trabaja con postData (del archivo API.jsx)

-src/pages/EditProducts.jsx: Cumple con la funcinalidad de editar/actualizar productos, obtiene datos del producto existente (id) y usa putData para ctualizar.

-src/pages/Category.jsx: maneja una lista (tarjetas) de productos por categoría. Utilizamos fetchData para mostrar los resultados en el DOM.

-API.jsx: 

