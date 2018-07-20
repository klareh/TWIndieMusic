import 'whatwg-fetch';
import {
  GET_OPENDATA_INITIAL,
  GET_OPENDATA_SUCCESS,
  GET_OPENDATA_FAIL,
  SEARCH_INPUT_CHANGE,
  SEARCH_INPUT_ENTER,
  FILTER_DATA_SUCCESS,
  FILTER_DATA_INITIAL,
} from '../constants/action_types';

export const getOpendata = () => (
  (dispatch) => {
    dispatch({ type: GET_OPENDATA_INITIAL });
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=5')
      .then(response => (response.json()))
      .then((json) => {
        console.log(json);
        dispatch({
          type: GET_OPENDATA_SUCCESS,
          payload: { data: json },
        });
      })
      .catch((err) => {
        dispatch({ type: GET_OPENDATA_FAIL, payload: { errmsg: err } });
      });
  });

export const searchInputChange = text => ({
  type:  SEARCH_INPUT_CHANGE,
  payload: { query: text },
});

export const pressEnter = text => ({
  type:  SEARCH_INPUT_ENTER,
  payload: { query: text },
});

export const filterData = queries => ({
  type: FILTER_DATA_SUCCESS,
  payload: { queries: [ ...queries ] },
});
    
  