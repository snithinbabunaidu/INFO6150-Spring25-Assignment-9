import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Find Your Dream Job Today
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Browse through hundreds of opportunities and find the perfect match for your skills and aspirations.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" size="large" component={RouterLink} to="/jobs">
            Browse Jobs
          </Button>
          <Button variant="outlined" size="large" component={RouterLink} to="/companies">
            Explore Companies
          </Button>
        </Stack>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Typography 
          component="h2" 
          variant="h4" 
          align="center" 
          color="text.primary" 
          gutterBottom
        >
          Why Choose Our Job Portal?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {/* Feature 1 */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <WorkIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h3">
                  Latest Job Listings
                </Typography>
                <Typography>
                  Access the most up-to-date job opportunities from top companies across various industries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Feature 2 */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <BusinessIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h3">
                  Company Profiles
                </Typography>
                <Typography>
                  Explore detailed profiles of leading companies to find the perfect workplace culture for you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Feature 3 */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <SearchIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h3">
                  Smart Job Search
                </Typography>
                <Typography>
                  Find relevant opportunities based on your skills, experience, and career aspirations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.paper', p: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Start Your Job Search?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Join thousands of job seekers who have found their dream jobs through our platform.
        </Typography>
        <Button variant="contained" size="large" component={RouterLink} to="/jobs">
          Search Jobs Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home;