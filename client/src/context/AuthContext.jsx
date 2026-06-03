import { createContext, useContext, useEffect, useState } from 'react';
import { setAuthToken } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('leadflow_token') || '');
  const [username, setUsername] = useState(localStorage.getItem('leadflow_user') || '');

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      localStorage.setItem('leadflow_token', token);
      localStorage.setItem('leadflow_user', username);
    } else {
      localStorage.removeItem('leadflow_token');
      localStorage.removeItem('leadflow_user');
      setAuthToken(null);
    }
  }, [token, username]);

  const login = (authToken, user) => {
    setToken(authToken);
    setUsername(user);
  };

  const logout = () => {
    setToken('');
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useAuthContext = useAuth;
