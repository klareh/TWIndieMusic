import {
  GET_OPENDATA_SUCCESS,
  SEARCH_INPUT_CHANGE,
} from '../constants/action_types';


export default (state = [], action) => {
  switch (action.type) {
    case GET_OPENDATA_SUCCESS:
      return {
        payload: { ...action.payload },
      };
    case SEARCH_INPUT_CHANGE:
      return {

      };
    default:
      return state;
  }
};
