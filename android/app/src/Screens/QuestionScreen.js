import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {FETCH_REQUEST} from './actionTypes';

export default function QuestionScreen() {
  const dispatch = useDispatch();
  const postArray = useSelector(state => state.questionData);
  const versionCheck = useSelector(state => state.version);

  useEffect(() => {
    dispatch({type: FETCH_REQUEST});
  }, [dispatch]);

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
