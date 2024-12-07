import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Category from '../pages/Category';
import Contact from '../pages/Contact';
import EditProduct from '../pages/EditProduct';
import CreateNew from '../pages/CreateNew';
// import Favorites from '../pages/Favorites'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/category" element={<Category />} />

            <Route path="/products/create" element={<PrivateRoute><CreateNew/>Crear Nuevo Producto</PrivateRoute>} />

            <Route path="/edit-product/:productId" element={<PrivateRoute><EditProduct /></PrivateRoute>} />

            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;

/*

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/category" element={<Category />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

            <Route path="/edit-product/:productId" element={<PrivateRoute><EditProduct /></PrivateRoute>} />

            <Route path="/products/create" element={<PrivateRoute><CreateNew/>Crear Nuevo Producto</PrivateRoute>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

*/