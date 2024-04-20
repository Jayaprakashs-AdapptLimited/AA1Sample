import {POST_SAVE, FETCH_QUESTION_DATA} from '../Screens/actionTypes';

const initialState = {version: '', questionData: []};

function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_SAVE:
      return {
        ...state,
        version: action.payload,
      };
    case FETCH_QUESTION_DATA:
      return {
        ...state,
        questionData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
