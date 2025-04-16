import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Divider,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const About = () => {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography
          component="h1"
          variant="h2"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          About Us
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          We're on a mission to connect talented individuals with their dream careers 
          and help companies find the perfect team members.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At Job Portal, we believe that finding the right job should be simple, intuitive, and even enjoyable. 
          Our platform is designed to streamline the job search process, making it easier for job seekers to 
          discover opportunities that align with their skills, experience, and career goals.
        </Typography>
        <Typography variant="body1" paragraph>
          For employers, we provide a powerful platform to showcase their company culture and connect with 
          talented professionals who can help drive their business forward. We're committed to creating 
          meaningful connections that benefit both job seekers and employers.
        </Typography>
      </Paper>

      {/* Stats Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <WorkIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h3" fontWeight="bold">5K+</Typography>
            <Typography variant="h6">Job Listings</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <BusinessCenterIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h3" fontWeight="bold">200+</Typography>
            <Typography variant="h6">Companies</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <GroupIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h3" fontWeight="bold">10K+</Typography>
            <Typography variant="h6">Job Seekers</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <TrendingUpIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h3" fontWeight="bold">70%</Typography>
            <Typography variant="h6">Success Rate</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 4 }}>
          Our Leadership Team
        </Typography>
        <Grid container spacing={4}>
          {/* Team Member 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                alt="CEO"
                src="https://via.placeholder.com/150"
              />
              <Typography variant="h5" gutterBottom>Jane Doe</Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>CEO & Founder</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                With over 15 years of experience in HR and recruitment, Jane founded Job Portal 
                to revolutionize how people find jobs.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Team Member 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                alt="CTO"
                src="https://via.placeholder.com/150"
              />
              <Typography variant="h5" gutterBottom>John Smith</Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>CTO</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                John brings his technical expertise to ensure our platform is innovative, 
                user-friendly, and equipped with the latest technology.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Team Member 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                alt="COO"
                src="https://via.placeholder.com/150"
              />
              <Typography variant="h5" gutterBottom>Sarah Johnson</Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>COO</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                Sarah oversees our day-to-day operations, ensuring we deliver 
                an exceptional experience to both job seekers and employers.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;