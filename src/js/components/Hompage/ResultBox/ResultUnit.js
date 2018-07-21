import React from 'react';
import '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export default props => {
  return (
    <div>
        <ListItem button>
      <Grid container spacing={16} justify="center" alignItems="flex-start">
          <Grid item md={1} sm={2} xs={3}>
            <Chip
              label={props.city}
            />
          </Grid>

          <Grid item md={7} sm={6} xs={8}>
            <Typography>
              {props.title}
            </Typography>
          </Grid>

          <Hidden xsDown>
          <Grid item sm={2} >
            <Typography>
              {props.price}
            </Typography>
          </Grid>

            <Grid item sm={2}>
              <Typography>
                {props.locationName}
              </Typography>
            </Grid>
          </Hidden>
      </Grid>
        </ListItem>
    </div>
  );
};