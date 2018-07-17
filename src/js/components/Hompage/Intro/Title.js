import React from 'react';
import '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default props => {
  return (
    <Grid 
      className="Intro-title"
      container 
      justify="flex-end" >
      <Grid item md={9}>
        <Typography
          variant="headline" 
          align="right" 
          color="inherit">
          硬地
        </Typography>
        <Typography
          variant="headline" 
          align="right" 
          color="inherit">
          音樂
        </Typography>
        <Typography variant="subheading" align="right" color="textSecondary">
          Independent Music，或稱獨立音樂。
          用來描述有別於主流商業唱片廠牌所製作的音樂。
          -- 維基百科
        </Typography>
      </Grid>
    </Grid>
  );
};