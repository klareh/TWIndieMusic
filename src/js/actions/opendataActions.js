import 'whatwg-fetch';
import {
  GET_OPENDATA_INITIAL,
  GET_OPENDATA_SUCCESS,
  GET_OPENDATA_FAIL,
  SEARCH_INPUT_CHANGE,
  SEARCH_INPUT_ENTER,
  FILTER_DATA_SUCCESS,
  SHOW_FRONT_PAGE,
  SHOW_NEXT_PAGE,
  DEL_SEARCH_CHIP,
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
    
export const frontPage = () => ({
  type: SHOW_FRONT_PAGE,
  payload: {},
});

export const nextPage = () => ({
  type: SHOW_NEXT_PAGE,
  payload: {},
});

export const deleteChips = chip => ({
  type: DEL_SEARCH_CHIP,
  payload: {chip: chip},
})