import React from 'react';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ContentPage from './components/ContentPage/ContentPage';


const App = () => {
  return (
    <>
      {/* <Box>
        <Box >
          <CssBaseline />
          <Header />
          <Sidebar />
          <Box >
            <Toolbar />
            <ContentPage />
          </Box>
        </Box>
      </Box>
      <Footer /> */}
      <div>
        <Header />
        <div style={{display:"flex"}}>
          <Sidebar />
          <ContentPage />
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default App;
