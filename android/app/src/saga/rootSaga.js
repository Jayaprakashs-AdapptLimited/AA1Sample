import {put, takeLatest, call, select, delay} from 'redux-saga/effects';
import {
  FETCH_QUESTION_DATA,
  POST_SAVE,
  FETCH_REQUEST,
} from '../Screens/actionTypes';

function* fetchQuestionData() {
  const stateUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/state';
  const versionUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/version';
  const versionCheck = yield select(state => state.version);

  function* invokeApi() {
    try {
      while (true) {
        const versionResponse = yield call(fetch, versionUrl);
        const versionData = yield versionResponse.json();

        if (
          !versionCheck.version ||
          (versionCheck.version &&
            versionData.version &&
            versionCheck.version !== versionData.version)
        ) {
          const stateResponse = yield call(fetch, stateUrl);
          const stateData = yield stateResponse.json();
          yield put({type: FETCH_QUESTION_DATA, payload: stateData});
          yield put({type: POST_SAVE, payload: versionData});
        }

        yield delay(5000);
      }
    } catch (error) {
      throw error;
    }
  }

  try {
    const {stateData, versionData} = yield call(invokeApi);
    yield put({type: FETCH_QUESTION_DATA, payload: stateData});
    yield put({type: POST_SAVE, payload: versionData});
  } catch (error) {
    console.error('Error fetching question data:', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_REQUEST, fetchQuestionData);
}
