import React from 'react';
import {
  CardText, CardHeader,
} from 'material-ui/Card';
import InfoBox from './InfoBox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default props => (
  <div>
    <Grid container justify="center" alignItems="center" spacing={80}>
      <Grid item lg={8} md={9} sm={10} xs={12}>
        <Grid container justify="center" alignItems="center" spacing={24}>
        {props.data ? props.data.map(ele => (
          <Grid item key={ele.UID} md={6} sm={6} xs={12}>
            <InfoBox data={ele} />
          </Grid>
          
        )) : (
          <CircularProgress/>
        )}
        </Grid>
      </Grid>
    </Grid>
    <div id="test"> </div>
  </div>
);
