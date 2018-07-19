import React from 'react';
import '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ResultUnit from './ResultUnit';

export default props => {
  return (
    <div>
      <section className="section ResultBox">
      
        <Paper>
          <Grid container spacing={24} justify="flex-start" style={{ padding: 20 }}>

            <Grid item sm={3} xs={12} >
              <Button variant="contained" color="primary">
                2018/08/18
              </Button>
            </Grid>

            <Grid item sm={9} xs={12} >
              <ResultUnit
                city="台北"
                title="理想混蛋【威爾剛剛好：Well, it’s good】"
                price="NT$400"
                locationName="河岸留言-音樂藝文咖啡"
              />
              <ResultUnit
                city="台北"
                title="理想混蛋【威爾剛剛好：Well, it’s good】"
                price="NT$400"
                locationName="河岸留言-音樂藝文咖啡"
              />

            </Grid>
          </Grid>
        </Paper>

        <Paper>
          <Grid container spacing={8} justify="flex-end" style={{ padding: 20 }}>

            <Grid item md={1} sm={2} xs={4} >
              <Button>
                Next
              </Button>
            </Grid>
            <Grid item lg={1} sm={2} xs={4} >
              <Button>
                Front
              </Button>
            </Grid>

          </Grid>
        </Paper>

      </section>
    </div>
  );
};