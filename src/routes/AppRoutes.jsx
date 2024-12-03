import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;