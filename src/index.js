import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import AppBar from './components/AppBar';
import SearchBarContainer from './containers/SearchBoxContainer';
import FetchOpenDataContainer from './containers/FetchOpenDataContainer';
import ResultListContainer from './containers/ResultListContainer';
import ErrorHandeler from './components/ErrorHandeler';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ErrorHandeler>
        <AppBar />
        <SearchBarContainer />
        <FetchOpenDataContainer />
        <ResultListContainer />
      </ErrorHandeler>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
