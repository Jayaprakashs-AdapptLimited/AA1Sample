import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Button() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonAlign}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={styles.loginScreenButton}
        underlayColor="#fff">
        <Text style={styles.loginText}>Log ind / registrer</Text>
      </TouchableOpacity>

      <View style={styles.orText}>
        <View style={styles.lineAlign} />
        <Text style={styles.orTextAlign}>eller</Text>
        <View style={styles.lineAlign} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('question');
        }}
        style={styles.skipOverButton}
        underlayColor="#fff">
        <Text style={styles.skipOverText}>spring over</Text>
      </TouchableOpacity>
    </View>
  );
}

// 10px, 24px, 12px, 24px
const styles = StyleSheet.create({
  buttonAlign: {
    marginTop: 30,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#FE8E2A',
  },
  loginText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  skipOverButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 28,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    borderWidth: 1,
    borderColor: '#FE8E2A',
  },
  skipOverText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  orText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 78,
    marginTop: 28,
  },
  lineAlign: {
    flex: 1,
    height: 1,
    borderColor: '#FFF',
    borderWidth: 0.5,
  },
  orTextAlign: {
    width: 50,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
