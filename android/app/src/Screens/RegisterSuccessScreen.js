import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/HomeScreen';
import {NextStepButton} from './OTPdetails';
import {useNavigation} from '@react-navigation/native';

export default function RegisterSuccessScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={{flex: 1}}>
        <Header title="Velkommen" />
        <View style={styles.logoViewAlign}>
          <Image
            style={styles.logo}
            source={require('../assets/image/Success.png')}
            alt="aa1 Logo"
          />
        </View>
        <Text style={styles.successText}> OTP Verified Successfully </Text>
        <View style={{marginTop: 120}}>
          <View style={{marginTop: 80}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('profile');
              }}
              style={styles.loginScreenButton}
              underlayColor="#fff">
              <Text style={styles.loginText}>Proceed with People</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = {
  logoViewAlign: {
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 138,
    height: 138,
  },
  successText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
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
