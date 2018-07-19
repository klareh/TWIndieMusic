import React from 'react';
import '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const IntroBox = props => {
  return (
    <div className="IntroBox">
      <Grid container alignItems="center" >
        <Grid item md={12}>
          <CardMedia
            className="IntroBox-CardMedia"
            image={props.image}>
          </CardMedia>
        </Grid>
      </Grid>
    </div>
  );
};

export default IntroBox;
