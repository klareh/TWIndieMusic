import React from 'react';
import '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IntroBox from './IntroBox';

export default props => {
  return (
    <div>
      <Grid container 
        className="Intro-Boxs"
        alignItems="center"
        justify="center"
        spacing={8} >
        <Grid item md={3} sm={3} xs={3}>
          <IntroBox
            title="The Next Big Think 活屋十講 十場套票販售專區"
            image="https://cloud.culture.tw/e_new_upload/task/586b4e82-6c50-42fa-a64a-775171910794/2944/28002af3b42e5a657faf4d946e87ce3de20b1f45.jpg"
          />
        </Grid>
        <Grid item md={3} sm={3} xs={3}>
          <IntroBox
            title="The Next Big Think 活屋十講 十場套票販售專區"
            image="https://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D28/E122/F228/08495bbf-6861-4481-9f1b-c086bcd967f5.jpg"
          />
        </Grid>
        <Grid item md={3} sm={3} xs={3}>
          <IntroBox
            title="The Next Big Think 活屋十講 十場套票販售專區"
            image="https://cloud.culture.tw/e_new_upload/task/586b4e82-6c50-42fa-a64a-775171910794/2954/9e3a62ce83786fe96d01c17ad7a5f962a933c454.png"
          />
        </Grid>
        <Grid item md={3} sm={3} xs={3}>
          <IntroBox
            title="The Next Big Think 活屋十講 十場套票販售專區"
            image="https://cloud.culture.tw/e_new_upload/task/586b4e82-6c50-42fa-a64a-775171910794/2956/18cd5f4f9a1354449c24e7ea99f770d224ee818b.png"
          />
        </Grid>
      </Grid>
    </div>
  );
};