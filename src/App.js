// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import DrawerAppBar from './DrawerAppBar';
import Dashboard from './Dashboard';
import CreateAds from './CreateAds';
import MainAd from './MainAd';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="xl">
        <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <DrawerAppBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createads" element={<CreateAds />} />
            <Route path="/createads/:adId" element={<MainAd />} />
          </Routes>
        </SnackbarProvider>
      </Container>
    </Router>
  );
}

export default App;
