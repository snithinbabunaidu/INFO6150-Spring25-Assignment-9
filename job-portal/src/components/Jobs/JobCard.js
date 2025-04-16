import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  Divider,
  Stack,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UpdateIcon from '@mui/icons-material/Update';

const JobCard = ({ job }) => {
  const { title, description, skills, salary, lastUpdated, applyLink } = job;

  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <WorkIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AttachMoneyIcon color="success" sx={{ mr: 1 }} />
          <Typography variant="body1" color="text.primary">
            {salary}
          </Typography>
        </Box>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>Required Skills:</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
          {skills && skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />
          ))}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
          <UpdateIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary">
            {lastUpdated}
          </Typography>
        </Box>
      </CardContent>
      
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          variant="contained" 
          href={applyLink} 
          target="_blank"
          fullWidth
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;