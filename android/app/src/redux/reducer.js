const initialState = {version: '', questionData: []};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_VERSION_SUCCESS':
      return {
        ...state,
        version: action.payload,
      };
    case 'FETCH_QUESTION_DATA_SUCCESS':
      return {
        ...state,
        questionData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
