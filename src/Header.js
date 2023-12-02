// src/Header.js
import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <Grid container spacing={3} style={{ backgroundColor: '#ffffff' }}>
    {/* Left Side - App Logo */}
    <Grid item xs={6}>
      <Link to="/">
        <Button style={{ color: 'black' }}>
          <Typography variant="button" style={{ color: 'black' }}>
            App Logo
          </Typography>
        </Button>
      </Link>
    </Grid>

    {/* Right Side - Buttons */}
    <Grid item xs={6}>
      <Link to="/dashboard">
        <Button style={{ color: 'black' }}>
          <Typography variant="button" style={{ color: 'black' }}>
            Dashboard
          </Typography>
        </Button>
      </Link>
      <Link to="/createads">
        <Button style={{ color: 'black' }}>
          <Typography variant="button" style={{ color: 'black' }}>
            Create Ads
          </Typography>
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default Header;
