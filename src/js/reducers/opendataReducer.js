import {
  GET_OPENDATA_SUCCESS,
  GET_OPENDATA_FAIL,
  SEARCH_INPUT_CHANGE,
  SEARCH_INPUT_ENTER,
  FILTER_DATA_SUCCESS,
} from '../constants/action_types';


export default (state = [], action) => {
  console.log('reducer', action.type);
  switch (action.type) {
    case GET_OPENDATA_SUCCESS:
      return {
        data: [...action.payload.data],
        query: action.payload.query,
        chips: [...state.chips],
        show: [...state.show],
      };
    case GET_OPENDATA_FAIL:
      console.error('[GET_OPENDATA_FAIL ERROR MSG]:', action.payload.errmsg)
      return state;
    case SEARCH_INPUT_CHANGE:
      return {
        data: [...state.data],
        query: action.payload.query,
        chips: [...state.chips],
        show: [...state.show],
      };
    case SEARCH_INPUT_ENTER:
      return {
        data: [...state.data],
        query: '',
        chips: [...state.chips, action.payload.query],
        show: [...state.show],
      };
    case FILTER_DATA_SUCCESS:
      const queries = action.payload.queries;
      const filterDat = state.data.filter( e => {
        for(let i in queries)
        {
          if (e.showInfo != undefined && e.showInfo[0].location.lastIndexOf(queries[i]) != -1)
            return true
        }
        return false;
      });
      return {
        data: [...state.data],
        query: [...state.query],
        chips: [...state.chips],
        show: [...filterDat],
      };
    default:
      return state;
  }
};
