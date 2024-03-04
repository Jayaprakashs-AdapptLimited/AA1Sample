import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';

export default function OTPdetails() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.otpDetailsView}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="Velkommen" />

        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          efficitur erat, a ullamcorper risus. Vivamus varius arcu a magna.
        </Text>

        <View style={styles.detailsAlign}>
          <View style={styles.listContainer}>
            <Text style={styles.pushTextAlign}>1. </Text>
            <Text style={styles.pushTextAlign}>
              <Text style={styles.subtitle}>Push Notification: </Text> Use the
              tab to allow push notifications and press ok. We'll send you a
              code to code to verify on the next step.
            </Text>
          </View>
          <View style={styles.smsCodeContainer}>
            <View style={styles.listContainer}>
              <Text style={styles.pushTextAlign}>2. </Text>
              <Text style={styles.pushTextAlign}>
                <Text style={styles.subtitle}>SMS Code: </Text> If you don't
                want to allow notification then press ok. We'll ask for your
                number and send an SMS code.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.lastContentcontainer}>
          <Text style={styles.ifText}>
            If you don't want to do these steps now then just hit skip to start
            playing. You can verify anytime using the top left menu.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <NextStepButton setModalVisible={setModalVisible} title="Next Step" />
        </View>

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
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Text style={styles.modalText}>
            <Text style={{fontWeight: 'bold'}}> “DR Alle Mod 1” </Text> would
            like to send you OTP. Do you like it to send via SMS or Push
            notification
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={[styles.button, styles.smsButton]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('otpVerify');
              }}>
              <Text style={styles.smsTextStyle}>SMS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={[styles.button, styles.notifyButton]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.notifyTextStyle}>NOTIFICATION</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export function NextStepButton({title, setModalVisible}) {
  return (
    <View style={{marginTop: 30}}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.loginScreenButton}
        underlayColor="#fff">
        <Text style={styles.loginText}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  otpDetailsView: {
    flex: 1,
  },
  gradientContainer: {flex: 1},
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 16,
    marginLeft: 25,
    marginRight: 25,
    lineHeight: 25,
  },
  detailsAlign: {
    marginTop: 55,
    paddingLeft: 40,
    paddingRight: 40,
  },
  subtitle: {fontWeight: 'bold'},
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pushTextAlign: {
    color: '#FFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  smsCodeContainer: {marginTop: 40},
  codeTextAlign: {
    color: '#FFF',
    marginTop: 40,
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
  notificationButton: {
    backgroundColor: 'red',
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
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    paddingTop: 30,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  smsButton: {
    backgroundColor: '#FE8E2A',
  },
  notifyButton: {
    marginLeft: 3,
    backgroundColor: '#CCCCCC',
  },
  smsTextStyle: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  notifyTextStyle: {
    color: '#676767',
    fontWeight: 'bold',
  },
  modalText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonStyle: {
    flex: 1,
  },
  lastContentcontainer: {
    marginTop: 120,
    marginLeft: 30,
    marginRight: 30,
  },
  ifText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 25,
  },
  buttonContainer: {
    marginTop: 15,
  },
});
