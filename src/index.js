import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiThemeProvider2 from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import AppBar from './components/AppBar';
import SearchBarContainer from './containers/SearchBoxContainer';
import FetchOpenDataContainer from './containers/FetchOpenDataContainer';
import ResultListContainer from './containers/ResultListContainer';
import ErrorHandeler from './components/ErrorHandeler';

render(
  <Provider store={store}>
    <div>
      <AppBar />
      <SearchBarContainer />
      <FetchOpenDataContainer />

    <MuiThemeProvider2>
      <ErrorHandeler>
        <ResultListContainer />
      </ErrorHandeler>
    </MuiThemeProvider2>
    </div>
  </Provider>,
  document.getElementById('app'),
);
