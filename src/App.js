import React from 'react';
import { CssBaseline, Box, Toolbar} from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ContentPage from './components/ContentPage/ContentPage';


const App = () => {
  return (
    <>
     <Box>
    <Box >
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 30 }}>
        <Toolbar />
        <ContentPage />
      </Box>
    </Box>
    <Footer />
   </Box>
    </>
  );
};

export default App;
