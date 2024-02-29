import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';

export default function OTPVerificationScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
        <View style={styles.otpContainer}>
          <OTPTextInput
            handleTextChange={text => console.log(text)}
            inputCount={8}
            // containerStyle={{justifyContent: 'space-evenly'}}
            textInputStyle={styles.otpInputStyle}
            secureTextEntry
          />
        </View>

        <View style={styles.verifyButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('registerSuccess');
            }}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Verify My Device</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.resendButton} underlayColor="#fff">
          <Text style={styles.resendButtonText}>Resend</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <Text style={styles.ifText}>
          If you did not receive an OTP code within 2 minutes, you can verify
          later
        </Text>
        <View style={styles.verifyButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('profile');
            }}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Verify Later</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.editNumberButton}
          underlayColor="#fff"
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={styles.editNumberText}>Edit Your Number</Text>
        </TouchableOpacity>

        <Text style={styles.ifText}> 02 : 00 mins</Text>

        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ModalView
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </Modal>
      </LinearGradient>
    </View>
  );
}

function ModalView({modalVisible, setModalVisible}) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>
          We have sent you a code via notification. Please check
        </Text>
        <View>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.hideTextStyle}>OKAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'medium',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#FE8E2A',
  },
  hideTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  modalText: {
    paddingBottom: 40,
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    color: '#000',
  },
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  otpInputStyle: {
    borderColor: '#B1A9A9',
    margin: 3,
    borderRadius: 5,
    borderBottomWidth: 0,
    backgroundColor: '#FFF',
    width: 35,
    height: 35,
  },
  verifyButtonContainer: {
    marginTop: 30,
  },
  orText: {color: '#FFF', textAlign: 'center', marginTop: 20},
  editNumberButton: {
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
  editNumberText: {
    color: '#FE8E2A',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
