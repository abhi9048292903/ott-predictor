import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const tabRoutes = ['/', '/ask-me', '/movies', '/platforms'];

const MainTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = tabRoutes.indexOf(location.pathname) !== -1 ? tabRoutes.indexOf(location.pathname) : 0;
  const [value, setValue] = useState(currentTab);

  useEffect(() => {
    setValue(currentTab);
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(tabRoutes[newValue]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
      <Tabs value={value} onChange={handleChange} aria-label="main tabs">
        <Tab label="Home" />
        <Tab label="Ask me" />
        <Tab label="Movies" />
        <Tab label="Platforms" />
      </Tabs>
    </Box>
  );
};

export default MainTabs;
