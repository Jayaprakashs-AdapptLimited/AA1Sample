import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {FETCH_QUESTION_DATA, POST_SAVE} from './actionTypes';

export default function QuestionScreen() {
  const dispatch = useDispatch();
  const postArray = useSelector(state => state.questionData);
  console.log(postArray.state, 'state');
  const versionCheck = useSelector(state => state.version);
  console.log(versionCheck.state, 'version');

  const versionUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/version';
  const stateUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/state';

  useEffect(() => {
    // const invokeApi = async () => {
    //   const response = await fetch(versionUrl);
    //   const versionData = await response.json();

    //   if (
    //     !versionCheck.version ||
    //     (versionCheck.version &&
    //       versionData.version &&
    //       versionCheck.version !== versionData.version)
    //   ) {
    //     const stateResponse = await fetch(stateUrl);
    //     const stateData = await stateResponse.json();
    //     dispatch({type: FETCH_QUESTION_DATA, payload: stateData}); // Dispatch the action using the new action type
    //     dispatch({type: POST_SAVE, payload: versionData}); // Dispatch the action using the new action type
    //   }
    // };
    // invokeApi();
    // const intervalId = setInterval(() => {
    //   invokeApi();
    // }, 5000);
    // return () => clearInterval(intervalId); // Clear the interval on component unmount

    // Dispatch POST_SAVE action to fetch version data
    // dispatch({type: POST_SAVE, payload: null});
    // Dispatch FETCH_QUESTION_DATA action to fetch question data
    dispatch({type: FETCH_QUESTION_DATA, payload: null});
  }, [dispatch, versionCheck.version]);

  return (
    <View style={styles.questionContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="Velkommen" />
        <Text style={styles.textStyle}>QUESTION</Text>
        <Text style={styles.contentTitle}>Data: {postArray.state}</Text>
        <Text style={styles.contentTitle}>Version: {versionCheck.version}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    margin: 25,
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
