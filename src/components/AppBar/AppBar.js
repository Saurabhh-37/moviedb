import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TopAppBar = () => {
  const [value, setValue] = useState(0); // State to track selected tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#112247' }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            TMDB
          </Typography>

          {/* Buttons for Movies, TV Shows, People, and More */}
          <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
            <Button color="inherit">Movies</Button>
            <Button color="inherit">TV Shows</Button>
            <Button color="inherit">People</Button>
            <Button color="inherit">More</Button>
          </Box>

          {/* Login Button aligned to the right */}
          <Box>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth" // Makes tabs span the full width
        >
          <Tab label="Overview" />
          <Tab label="Media" />
          <Tab label="Fandom" />
          <Tab label="Share" />
        </Tabs>
      </AppBar>
    </>
  );
};

export default TopAppBar;
