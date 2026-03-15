import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const MOCK_USERS = [
    { email: 'admin@company.com', password: '123', role: 'admin', username: 'Admin User' },
    { email: 'employee@company.com', password: '123', role: 'employee', username: 'Employee User' },
    { email: 'manager@company.com', password: '123', role: 'manager', username: 'Manager User' },
    { email: 'hr@company.com', password: '123', role: 'hr', username: 'HR User' },
  ];

  const login = async (email, password) => {
    try {
      // 1. Try Mock Login First (Simulating a quick local check or for Vercel demo)
      const mockUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      if (mockUser) {
        return mockLogin(mockUser.role.charAt(0).toUpperCase() + mockUser.role.slice(1));
      }

      // 2. Try Backend Login (Fallback to real API if no mock match)
      const response = await fetch('http://127.0.0.1:8000/accounts/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify({ username: email, password }), // Sending email as username to backend
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const userData = await response.json();
      const role = userData.role.toLowerCase();
      
      const sessionData = {
        ...userData,
        role: role,
        avatar: `https://ui-avatars.com/api/?name=${userData.username}&background=random`
      };

      setUser(sessionData);
      localStorage.setItem('user', JSON.stringify(sessionData));
      return sessionData;
    } catch (error) {
      console.error('Login error:', error);
      // Final fallback: if fetch fails (e.g. on Vercel), re-check mock users again just in case
      // but we already did it first. So we just re-throw if it wasn't a mock user.
      throw error;
    }
  };

  const mockLogin = async (role) => {
    // Artificial delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const sessionData = {
      username: `demo_${role}`,
      email: `${role}@company.com`,
      role: role.toLowerCase(),
      avatar: `https://ui-avatars.com/api/?name=${role}&background=0ea5e9&color=fff`
    };

    setUser(sessionData);
    localStorage.setItem('user', JSON.stringify(sessionData));
    return sessionData;
  };

  // Helper to get CSRF token if needed
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, mockLogin, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
