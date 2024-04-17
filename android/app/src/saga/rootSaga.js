import {put, takeLatest, call} from 'redux-saga/effects';
import {FETCH_QUESTION_DATA, POST_SAVE} from '../Screens/actionTypes';
import {useDispatch, useSelector} from 'react-redux';


// Define your API functions here
// const api = {
//   saveVersion: async payload => {
//     // Your saveVersion API call logic
//     // For example:
//     const response = await fetch(
//       'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/version',
//       {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     return await response.json();
//   },
//   fetchQuestionData: async () => {
//     // Your fetchQuestionData API call logic
//     // For example:
//     // const response = await fetch('your_fetch_question_data_endpoint');
//     // return await response.json();
//   },
// };

// function* saveVersion(action) {
//   console.log(action, 'actionnn');
//   try {
//     // Your API call
//     const response = yield call(api.saveVersion, action.payload);
//     console.log(response, 'response');
//     yield put({type: 'SAVE_VERSION_SUCCESS', payload: response.data});
//   } catch (error) {
//     yield put({type: 'SAVE_VERSION_ERROR', error});
//   }
// }

function* fetchVersion() {
  try {
    const versionUrl =
      'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/version';
    const response = yield call(fetch, versionUrl);
    const versionData = yield response.json();
    yield put({type: POST_SAVE, payload: versionData});
  } catch (error) {
    console.error('Error fetching version:', error);
  }
}

function* fetchQuestionData() {
  const stateUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/state';
  const versionUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/version';
    const versionCheck = useSelector(state => state.version);
  
  const invokeApi = async () => {
    const response = await fetch(versionUrl);
    const versionData = await response.json();

    if (
      !versionCheck.version ||
      (versionCheck.version &&
        versionData.version &&
        versionCheck.version !== versionData.version)
    ) {
      const stateResponse = await fetch(stateUrl);
      const stateData = await stateResponse.json();
      dispatch({type: FETCH_QUESTION_DATA, payload: stateData}); // Dispatch the action using the new action type
      dispatch({type: POST_SAVE, payload: versionData}); // Dispatch the action using the new action type
    }
  };
  invokeApi();
  const intervalId = setInterval(() => {
    invokeApi();
  }, 5000);
  console.log('R');
  // try {
  //   const stateUrl =
  //     'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/state';
  //   const response = yield call(fetch, stateUrl);
  //   const stateData = yield response.json();
  //   // console.log(stateData);
  //   yield put({type: FETCH_QUESTION_DATA, payload: stateData});
  // } catch (error) {
  //   console.error('Error fetching question data:', error);
  // }
}

export default function* rootSaga() {
  yield takeLatest(POST_SAVE, fetchVersion);
  yield takeLatest(FETCH_QUESTION_DATA, fetchQuestionData);
}
