import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Category from '../pages/Category';
import Contact from '../pages/Contact';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;