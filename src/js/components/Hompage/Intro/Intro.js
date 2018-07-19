import React from 'react';
import '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import Event from './Event';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;

export default props => {
  return (
    <div>
      <section 
        className="section section--dark"
        onWheel={e => {
        e.stopPropagation();
        if(e.deltaY > 0) {
          Scroll.scroller.scrollTo('Search', {
            delay: 50,
            smooth: true,
            });
          }
        }}>
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

          <Hidden smDown>
            <Grid item md={1} >
            <ScrollLink 
              to="Search" 
              spy={true} 
              smooth={true} 
              duration={500} >
              <IconButton
                style={{ marign:"auto 0" }}>
                <ArrowDropDownIcon color="primary" />
                <ArrowDropDownIcon color="primary" />
                <ArrowDropDownIcon color="primary" />
              </IconButton>
              </ScrollLink>
            </Grid>
          </Hidden>

        </Grid>
      </section>
    </div>
  );
};