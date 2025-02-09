import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import CreateNew from '../pages/CreateNew';
import Category from '../pages/Category';
import Contact from '../pages/Contact';
import EditProduct from '../pages/EditProduct';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute><CreateNew/>Crear Producto</PrivateRoute>} />
            <Route path="/category" element={<Category />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/:productId/edit" element={<PrivateRoute><EditProduct /></PrivateRoute>} />

        </Routes>
    );
}

export default AppRoutes;