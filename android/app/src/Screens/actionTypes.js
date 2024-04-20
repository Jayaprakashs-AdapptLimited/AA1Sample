// Action types
export const POST_SAVE = 'POST_SAVE';
export const FETCH_QUESTION_DATA = 'FETCH_QUESTION_DATA';
export const FETCH_REQUEST = 'FETCH_REQUEST';

export const saveData = () => {
  type: FETCH_REQUEST;
}
export const saveVersion = versionData => {
  type: POST_SAVE;
  payload: versionData;
}
export const saveRequest = questionData => {
  type: FETCH_QUESTION_DATA;
  payload: questionData;
}
