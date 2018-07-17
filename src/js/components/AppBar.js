import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from'@material-ui/icons/Search';
export default () => (
  <div>
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          INDIE LIVE 硬地人生
        </Typography>
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
      </Toolbar>
    </AppBar>
  </div>
);
