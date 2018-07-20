import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import OpendataState from '../constants/models';

export default createStore(
  rootReducer,
  { opendataReducer: { ...OpendataState } },
  applyMiddleware(reduxThunk),
);
