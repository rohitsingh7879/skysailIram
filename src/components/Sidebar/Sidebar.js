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
    <nav 
      // sx={{
      //   width: drawerWidth,
      //   flexShrink: 0,
      //   '& .MuiDrawer-paper': {
      //     width: drawerWidth,
      //     boxSizing: 'border-box',
      //     backgroundColor: '#E0DFFE',
      //   },
      // }}
      className='sidebar'
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button key="Home">
            <ListItemButton>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Home">
            <ListItemButton>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Gallery">
            <ListItemButton>
              <ListItemIcon><PhotoLibrary /></ListItemIcon>
              <ListItemText primary="Gallery" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Enquiry">
            <ListItemButton>
              <ListItemIcon><Event /></ListItemIcon>
              <ListItemText primary="Enquiry" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Weddings">
            <ListItemButton>
              <ListItemIcon><SpaceDashboardIcon /></ListItemIcon>
              <ListItemText primary="Weddings" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Workshops">
            <ListItemButton>
              <ListItemIcon><ShoppingBagIcon /></ListItemIcon>
              <ListItemText primary="Workshops" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Users">
            <ListItemButton>
              <ListItemIcon><Groups2Icon /></ListItemIcon>
              <ListItemText primary="Users" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Settings">
            <ListItemButton>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Settings" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
          <ListItem button key="Tools">
            <ListItemButton>
              <ListItemIcon><Build /></ListItemIcon>
              <ListItemText primary="Tools" className="list-item-text"/>
            </ListItemButton>
          </ListItem>
        </List>

      </Box>
    </nav>
  );
};

export default Sidebar;
