import React from 'react';
import '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import Event from './Event';

export default props => {
  return (
    <div>
      <section className="section section--dark">
          <Grid container 
            className="to-bottom"
            alignItems="center" 
            justify="center" 
            spacing={32}>

            <Grid item md={4}>
              <Title />
            </Grid>
            
            <Grid item md={8}>
              <Event />
            </Grid>
            
          </Grid>
      </section>
    </div>
  );
};