import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Tạo context để lưu trạng thái xác thực
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const user = localStorage.getItem('token');
        setUser(user);

        if (!user && location.pathname === '/register') {
            navigate('/register');
        }

        if (!user && location.pathname !== '/register' && location.pathname !== '/') {
            navigate('/login');
        }
    }, [navigate, user, location.pathname]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
