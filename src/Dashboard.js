// src/Dashboard.js
import React from 'react';
import { Paper, Typography, Toolbar, Card, Grid } from '@mui/material';
import AdInsightsTable from './AdInsightsTable';
import Dashgraph from './Dashgraph';

const Dashboard = () => (
  <Paper>
    <Card
      sx={{
        p: 2,
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Card sx={{ flexGrow: 1 }}>
            <AdInsightsTable />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <Dashgraph />
        </Grid>
      </Grid>
    </Card>
  </Paper>
);

export default Dashboard;
