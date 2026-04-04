import api from './api';

// Sign up a new user
export const signUp = async (userData) => {
  try {
    const response = await api.post('/api/auth/signup', userData);
    
    // Store token in localStorage
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: 'Sign up failed' };
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    
    // Store token in localStorage
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: 'Login failed' };
  }
};

// Logout user
export const logout = async () => {
  try {
    // Call backend logout endpoint (optional, for logging/analytics)
    await api.post('/api/auth/logout');
  } catch (error) {
    // Even if backend call fails, still clear local storage
    console.error('Logout error:', error);
  } finally {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return null;
    }
    
    const response = await api.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.data.data;
  } catch (error) {
    // If token is invalid, clear localStorage
    logout();
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Get stored user data
export const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
