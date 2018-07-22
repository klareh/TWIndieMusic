import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppBar from './components/AppBar';
import FetchOpenDataContainer from './containers/FetchOpenDataContainer';
import HomePage from './components/Hompage/HomePage';
import '../css/test.sass';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#00c853',
    },
  },
});


render(
  <Provider store={store}>
    <div>
    <FetchOpenDataContainer />
    <MuiThemeProvider theme={theme}>
      <AppBar />
      <HomePage/>
    </MuiThemeProvider>
    </div>
  </Provider>,
  document.getElementById('app'),
);

