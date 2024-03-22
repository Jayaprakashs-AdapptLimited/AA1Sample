import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';

export default function QuestionScreen() {
  const dispatch = useDispatch();
  const postArray = useSelector(state => state.questionData);
  const versionCheck = useSelector(state => state.version);

  const versionUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/version';
  const stateUrl =
    'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/versus/versusdk2024-uat/dev/state';

  useEffect(() => {
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
        dispatch({type: 'questionData', payload: stateData});
        dispatch({type: 'postSave', payload: versionData});
      }
    };
    invokeApi();
    setInterval(() => {
      invokeApi();
    }, 5000);
  });

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
