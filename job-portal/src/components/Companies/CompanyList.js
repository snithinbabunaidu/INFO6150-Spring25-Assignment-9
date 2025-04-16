import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CompanyCard from './CompanyCard';
import { companyService } from '../../services/api';
import companies from '../../data/companies'; // Using dummy data for development

const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [companyData, setCompanyData] = useState(companies);

  // In a real application, we would fetch company images from the backend
  // This is just a placeholder to show how you would structure the API call
  useEffect(() => {
    const fetchCompanyImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use the companyService instead of imageService
        const response = await companyService.getCompanies();
        setCompanyData(response);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching company data:', err);
        setError('Failed to load company data. Please try again later.');
        setLoading(false);
        
        // Fallback to dummy data if API fails
        setCompanyData(companies);
      }
    };
  
    fetchCompanyImages();
  }, []);

  // Filter companies based on search term
  const filteredCompanies = companyData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography
          component="h1"
          variant="h3"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          Company Showcase
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Discover top companies that are hiring now
        </Typography>

        {/* Search */}
        <Box sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search companies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Loading and Error States */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {/* Company Cards */}
        {!loading && !error && filteredCompanies.length > 0 ? (
          <Grid container spacing={3}>
            {filteredCompanies.map((company) => (
              <Grid item key={company.id} xs={12} sm={6} md={4}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
        ) : !loading && !error ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No companies found matching your search criteria.
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
};

export default CompanyList;