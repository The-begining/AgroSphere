import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Mock user data
  const mockUser = {
    uid: '1',
    email: 'test@example.com',
    name: 'Test User',
  };

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async (email, password, name) => {
    try {
      // Mock signup
      const user = {
        ...mockUser,
        email,
        name,
      };
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/dashboard');
      return { user };
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      // Mock signin
      if (email === 'test@example.com') {
        localStorage.setItem('user', JSON.stringify(mockUser));
        setCurrentUser(mockUser);
        navigate('/dashboard');
        return { user: mockUser };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Mock Google signin
      localStorage.setItem('user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      navigate('/dashboard');
      return { user: mockUser };
    } catch (error) {
      console.error('Google signin error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    navigate('/login');
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 