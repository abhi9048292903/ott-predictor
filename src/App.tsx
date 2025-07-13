import './App.css'
import AskMe from './screens/ask-me/AskMe'
import Home from './screens/Home'
import Movies from './screens/Movies'
import Platforms from './screens/Platforms'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { useState, useEffect } from 'react';

function TabNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const tabRoutes = ['/ask-me', '/movies', '/platforms'];
  const currentTab = tabRoutes.indexOf(location.pathname) !== -1 ? tabRoutes.indexOf(location.pathname) : 0;
  const [value, setValue] = useState(currentTab);

  useEffect(() => {
    setValue(currentTab);
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(tabRoutes[newValue]);
  };

  // Hide tabs on home route
  if (location.pathname === '/') return null;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
      <Tabs value={value} onChange={handleChange} aria-label="main tabs">
        <Tab label="Ask me" />
        <Tab label="Movies" />
        <Tab label="Platforms" />
      </Tabs>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <TabNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask-me" element={<AskMe />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer>
        <p>© 2025 OTT Predictor. All rights reserved.</p>
      </footer>
    </Router>
  )
}

export default App
