import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Contexts
import { AuthProvider } from './contexts/AuthContext';

// Layout
import Layout from './components/Layout/Layout';

// Pages
import Home from './components/Home/Home';
import About from './components/About/About';
import JobList from './components/Jobs/JobList';
import CompanyList from './components/Companies/CompanyList';
import Contact from './components/Contact/Contact';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public route for login */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route 
                path="/"
                element={<Layout><Home /></Layout>}
              />
              <Route 
                path="/about"
                element={<Layout><About /></Layout>}
              />
              <Route 
                path="/jobs"
                element={<Layout><JobList /></Layout>}
              />
              <Route 
                path="/companies"
                element={<Layout><CompanyList /></Layout>}
              />
              <Route 
                path="/contact"
                element={<Layout><Contact /></Layout>}
              />
            </Route>
            
            {/* Redirect any other route to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;