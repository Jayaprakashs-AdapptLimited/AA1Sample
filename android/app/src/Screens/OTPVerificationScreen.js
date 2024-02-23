import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import Button from './Button';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/HomeScreen';
import {NextStepButton} from './OTPdetails';
import {useNavigation} from '@react-navigation/native';

export default function OTPVerificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={{flex: 1}}>
        <Header title="Velkommen" />
        <View style={styles.contentContainer}>
          <Text style={styles.subContent}> We have sent you an OTP code.</Text>
          <Text style={styles.codeStyle}> XXX XXX XX </Text>
          <Text style={styles.subContent}>
            (This may take up to 2 mins to arrive.)
          </Text>
          <Text style={styles.subContent}> Please enter OTP below: </Text>
        </View>
        <View style={{marginTop: 70}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('verifyButton');
            }}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Verify My Device</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#FFF', textAlign: 'center', marginTop: 20}}>
          OR
        </Text>
        {/* <NextStepButton disabled={true} title="Resend" /> */}
        <TouchableOpacity style={styles.resendButton} underlayColor="#fff">
          <Text style={styles.resendButtonText}>Resend</Text>
        </TouchableOpacity>
        <Text style={{color: '#FFF', textAlign: 'center', marginTop: 20}}>
          OR
        </Text>
        <Text style={styles.ifText}>
          If you did not receive an OTP code within 2 minutes, you can verify
          later
        </Text>
        <NextStepButton title="Verify Later" />

        <TouchableOpacity style={styles.skipOverButton} underlayColor="#fff">
          <Text style={styles.skipOverText}>Edit Your Number</Text>
        </TouchableOpacity>

        <Text style={styles.ifText}> 02 : 00 mins</Text>

        {/* <Logo /> */}
        {/* <Button /> */}
        {/* <Text style={styles.textStyle}>
          Du kan registrere dig senere, hvis du ombestemmer dig
        </Text> */}
      </LinearGradient>
    </View>
  );
}

const styles = {
  subContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'medium',
    // marginTop: 10,
  },
  codeStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentContainer: {
    textAlign: 'center',
    marginTop: 20,
  },
  ifText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
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
    borderColor: '#B2B2B2',
  },
  skipOverText: {
    color: '#B2B2B2',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  resendButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 28,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    backgroundColor: '#CCC',
  },
  resendButtonText: {
    color: '#676767',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};
