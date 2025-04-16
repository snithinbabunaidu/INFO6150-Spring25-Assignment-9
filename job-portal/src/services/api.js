import axios from 'axios';

// Create an axios instance with default configuration
const api = axios.create({
  baseURL: 'http://localhost:3000', // Your Node.js backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  login: async (username, password) => {
    try {
      // Use email for login as per your backend
      const response = await api.post('/api/auth/login', { 
        email: username, 
        password: password 
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

// Company services
export const companyService = {
  getCompanies: async () => {
    try {
      const response = await api.get('/api/companies/getAll');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;