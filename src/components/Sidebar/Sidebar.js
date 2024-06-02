import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Home, PhotoLibrary, Event, Settings, Build } from '@mui/icons-material';
import Groups2Icon from '@mui/icons-material/Groups2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import './Sidebar.css';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#E0DFFE',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button key="Home">
            <ListItemButton>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Home">
            <ListItemButton>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Gallery">
            <ListItemButton>
              <ListItemIcon><PhotoLibrary /></ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Enquiry">
            <ListItemButton>
              <ListItemIcon><Event /></ListItemIcon>
              <ListItemText primary="Enquiry" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Weddings">
            <ListItemButton>
              <ListItemIcon><SpaceDashboardIcon /></ListItemIcon>
              <ListItemText primary="Weddings" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Workshops">
            <ListItemButton>
              <ListItemIcon><ShoppingBagIcon /></ListItemIcon>
              <ListItemText primary="Workshops" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Users">
            <ListItemButton>
              <ListItemIcon><Groups2Icon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Settings">
            <ListItemButton>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem button key="Tools">
            <ListItemButton>
              <ListItemIcon><Build /></ListItemIcon>
              <ListItemText primary="Tools" />
            </ListItemButton>
          </ListItem>
        </List>

      </Box>
    </Drawer>
  );
};

export default Sidebar;
