import React from 'react';
import { Grid} from '@mui/material';
import {Build,About,Skills,Projects, Achievements, Communication, NavBar, Footer} from './components/index';



function App() {
  return (
    <Grid display='flex'minWidth='100vh' direction="column">
      <NavBar/>
      <Build/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Communication/>
      <Footer/>
     
    </Grid>
  );
}

export default App;
