import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

export default () => (
  <div>
    <AppBar color="primary" position="static">
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography
              className="AppBar--title"
              variant="title"
              color="inherit">
              INDIE LIVE 硬地人生
            </Typography>
          </Grid>
          <Grid item>
            <nav>
              <Button
                href='#test'
                color='inherit'>
                認識硬地
              </Button>
              <Button color='inherit'>
                <SearchIcon />
                最新LIVE!
              </Button>
              <Button color='inherit'>
                HOME
              </Button>
            </nav>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);
