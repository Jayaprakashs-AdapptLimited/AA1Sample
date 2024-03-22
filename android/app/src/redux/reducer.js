const initialState = {version: '', questionData: []};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'postSave':
      return {
        ...state,
        version: action.payload,
      };
    case 'questionData':
      return {
        ...state,
        questionData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
