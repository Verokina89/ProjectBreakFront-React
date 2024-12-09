# React + Vite
Trabajaremos un Frontend con React. El frontend debe consumir estos endpoints correctamente usando las herramientas configuradas (fetch, axios). Aseguramos de manejar correctamente el token de Firebase para proteger las rutas privadas (Dashboard, EditProduct). 

Claves de Acceso: vero@gmail.com  Aa123456

# Acceso al Backend con los endpoints.
/auth/login: Inicia sesión.
/auth/logout: Cierra sesión.
/api/products: Obtiene productos.
/api/products/category/:category: Obtiene productos por categoría.
/api/products/:id: Obtiene un producto específico por ID.

# Archicos Importantes:
-src/services/API.jsx: Este archivo es clave para conectar el frontend con el backend

-src/pages/AddProduct.jsx: Manejar la creación de nuevos productos. Trabaja con postData (del archivo API.jsx)

-src/pages/EditProducts.jsx: Cumple con la funcinalidad de editar/actualizar productos, obtiene datos del producto existente (id) y usa putData para ctualizar.

-src/pages/Category.jsx: maneja una lista (tarjetas) de productos por categoría. Utilizamos fetchData para mostrar los resultados en el DOM.

-API.jsx: que maneja, que haceeee

(  Autenticación:

El token se incluye en los encabezados cuando está disponible. Esto permite proteger las rutas privadas como /dashboard o cualquier solicitud que requiera autenticación.
javascript
Copiar código
const token = localStorage.getItem("token"); // Recupera el token desde localStorage
fetchData("/api/products", token); // Solicitud GET con token
Endpoints específicos:

/auth/login: Usa postData para enviar el correo y contraseña al backend.
/auth/logout: Usa postData o fetchData dependiendo de cómo se implemente en el backend.
/api/products: Usa fetchData para obtener todos los productos.
/api/products/category/:category: Usa fetchData con el parámetro de categoría.
/api/products/:id: Usa fetchData con el ID del producto.
Ejemplo de uso con autenticación:

javascript
Copiar código
import { postData, fetchData } from "../services/API";

// Login
const loginUser = async (email, password) => {
  const response = await postData("/auth/login", { email, password });
  if (response && response.token) {
    localStorage.setItem("token", response.token); // Guarda el token
  } else {
    alert("Credenciales incorrectas");
  }
};

// Obtener productos
const getProducts = async () => {
  const token = localStorage.getItem("token");
  const products = await fetchData("/api/products", token);
  console.log(products);
};

Puntos clave a recordar
Token JWT: Asegúrate de guardar el token que devuelva /auth/login en localStorage o en un estado global.

Headers dinámicos: Todas las solicitudes a rutas protegidas deben incluir Authorization: Bearer <token>.

Estructura organizada: El archivo API.jsx centraliza las solicitudes al backend y reduce la duplicación de código en los componentes.


  )

Se integran las fnines de  API:JSX a los compbnentes o hooks (React) que manejan los callback al backend. Por ejemplo; en Login.jsx (utiliza postData para iniciar sesion en /auth/login, guarda el token devuelo en el loclStoage y actualiza), y  Dashboard.jsx que usa fetchData para obtener los productos y pasa el token en los headers.

Entonces debemos de sbr que el manejo de Autenticación (Token)
En cualquier solicitud que requiera autenticación, incluye el token en los headers. Esto se hace automáticamente en API.jsx cuando pasas el token como parámetro a las funciones fetchData, postData, etc. Luego, Guardar el Token devuelto por /auth/login en localStorage o en un contexto global (en este caso ya lo estás manejando con localStorage).
ejemplo: 
`
localStorage.setItem("token", response.token);
`
Pra recuperar el Token antes de hacer solicitudes protegidas:
`
const token = localStorage.getItem("token");
const response = await fetchData("/api/products", token);
`
Entonces acaramos que este archivo (API.JSX) contiene todas las funciones para interactuar con el backend, como fetchData, postData, etc.
src/pages/Login.jsx: Usa postData para enviar credenciales y guardar el token en localStorage.
src/pages/Dashboard.jsx: Usa fetchData con el token para obtener datos protegidos.
Autenticación con token: Asegúrate de incluir el token en los headers para proteger las rutas privadas.

-src/pages/Login.jsx:


-src/pages/Dashboard.jsx:

-src/pages/Category.jsx: Mostrara los productos por categorías. Dado que esta funcionalidad es pública y no requiere autenticación, usaremos fetchData sin necesidad de un token.

-src/utils/api.js: no es estrictamente necesario, po se pede utilizar pra manejar funciones adicionales o casos específicos si lo prefieres.
Dado que ya centralizamos las solicitudes al backend en src/services/API.jsx. Por ejemplo hemops manejar aqui una función específica para productos destacados.

