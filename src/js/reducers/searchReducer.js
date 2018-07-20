import {
  SEARCH_INPUT_CHANGE,
} from '../constants/action_types';


export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE:
      return {
        payload: { ...action.payload },
      };
    default:
      return state;
  }
};
