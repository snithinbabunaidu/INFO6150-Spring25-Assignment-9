import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

const CompanyCard = ({ company }) => {
  const { name, description, image } = company;

  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="160"
        image={image || "https://via.placeholder.com/300x160?text=Company+Image"}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <BusinessIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          size="small"
          fullWidth
        >
          View Profile
        </Button>
      </Box>
    </Card>
  );
};

export default CompanyCard;