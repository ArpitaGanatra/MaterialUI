import React from 'react';
import {Grid} from '@material-ui/core'
import Header from './header'
import Content from './content'
import './App.css';

const App = () =>{
  return(
      <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container>
      <Grid item xs={2} sm={2}/>
      <Grid item xs={8} sm={8}>
        <Content />
      </Grid>
      <Grid item xs={2} sm={2}/>
    </Grid>
  </Grid>
    
    
  )
}

export default App;
