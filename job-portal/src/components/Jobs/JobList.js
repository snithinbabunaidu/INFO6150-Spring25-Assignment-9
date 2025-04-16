import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import JobCard from './JobCard';
import jobPosts from '../../data/jobPosts';

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [page, setPage] = useState(1);
  const jobsPerPage = 6;

  // Filter jobs based on search term
  const filteredJobs = jobPosts.filter((job) => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (job.skills && job.skills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  // Sort jobs based on sorting option
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'latest') {
      // Convert lastUpdated strings to sortable values
      const getUpdateValue = (str) => {
        if (str.includes('hours')) return 3;
        if (str.includes('day')) return 2;
        if (str.includes('week')) return 1;
        return 0;
      };
      return getUpdateValue(b.lastUpdated) - getUpdateValue(a.lastUpdated);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Paginate jobs
  const indexOfLastJob = page * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          Job Listings
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Explore our latest job opportunities and find your perfect match
        </Typography>

        {/* Search and Filter */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by job title, description, or skills"
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
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                  labelId="sort-label"
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort By"
                >
                  <MenuItem value="latest">Latest First</MenuItem>
                  <MenuItem value="title">Job Title (A-Z)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Job Cards */}
        {currentJobs.length > 0 ? (
          <>
            <Grid container spacing={3}>
              {currentJobs.map((job) => (
                <Grid item key={job.id} xs={12} sm={6} md={4}>
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              No jobs found matching your search criteria.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Try adjusting your search terms or browse all available positions.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default JobList;