import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = (user) => {
    const auth = false; // Replace with your authentication logic
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate('/login'); // Redirect to the login page if not authenticated
        }
    }, [auth, navigate]);

    return auth ? <Outlet /> : null;
}

export default PrivateRoute;
