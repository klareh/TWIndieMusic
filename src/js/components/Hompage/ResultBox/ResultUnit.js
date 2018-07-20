import React from 'react';
import '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export default props => {
  return (
    <div>
      <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item sm={1} xs={2}>
          <Chip
            label={props.city}
          />
        </Grid>

        <Grid item sm={7} xs={8}>
        <Button>
          <Typography>
            {props.title}
          </Typography>
        </Button>
        </Grid>

        <Grid item sm={2} xs={2}>
          <Typography>
            {props.price}
          </Typography>
        </Grid>

        <Hidden xsDown>
          <Grid item sm={2}>
            <Typography>
              {props.locationName}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};