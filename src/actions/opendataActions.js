import 'whatwg-fetch';
import {
  GET_OPENDATA_INITIAL,
  GET_OPENDATA_SUCCESS,
  GET_OPENDATA_FAIL,
} from '../constants/action_types';

export const getOpendata = () => (
  (dispatch) => {
    dispatch({ type: GET_OPENDATA_INITIAL });
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=5')
      .then(response => (response.json()))
      .then((json) => {
        dispatch({
          type: GET_OPENDATA_SUCCESS,
          payload: { data: json },
        });
      })
      .catch((err) => {
        dispatch({ type: GET_OPENDATA_FAIL, payload: { data: err } });
      });
  });

export const getOpendata2 = null;
