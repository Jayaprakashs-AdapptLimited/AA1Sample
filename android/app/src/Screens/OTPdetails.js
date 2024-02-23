import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/HomeScreen';
import {useNavigation} from '@react-navigation/native';

export default function OTPdetails() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.otpDetailsView}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={{flex: 1}}>
        <Header title="Velkommen" />
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          efficitur erat, a ullamcorper risus. Vivamus varius arcu a magna.
        </Text>

        <View style={styles.detailsAlign}>
          <Text style={styles.pushTextAlign}>
            1.<Text style={{fontWeight: 'bold'}}> Push Notification: </Text>
            Use the tab to allow push notifications and press ok. We'll send you
            a code to verify on the next step.
          </Text>
          <Text style={styles.codeTextAlign}>
            2.<Text style={{fontWeight: 'bold'}}> SMS Code: </Text> If you to
            allow notification then press ok. We'll ask for your number number
            and send an SMS code.
          </Text>
        </View>

        <View
          style={{
            marginTop: 150,
            // flex: 1,
            // alignItems: 'center',
            marginLeft: 30,
            marginRight: 30,
          }}>
          <Text
            style={{
              color: '#FFF',
              //   marginLeft: 20,
              //   marginRight: 20,
              //   alignItems: 'center',
              textAlign: 'center',
              fontSize: 14,
            }}>
            If you don't want to do these steps now then just hit skip to start
            playing. You can verify anytime using the top left menu.
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <NextStepButton setModalVisible={setModalVisible} title="Next Step" />
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            // onRequestClose={() => {
            //   Alert.alert('Modal has been closed.');
            //   setModalVisible(!modalVisible);
            // }}
          >
            <ModalView
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>
        </View>
      </LinearGradient>
    </View>
  );
}

function ModalView() {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>
          <Text style={{fontWeight: 'bold'}}> “DR Alle Mod 1” </Text> would like
          to send you OTP. Do you like it to send via SMS or Push notification
        </Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            navigation.navigate('otpVerify');
          }}>
          <Text style={styles.hideTextStyle}>SMS</Text>
        </Pressable>
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
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 16,
    marginLeft: 25,
    marginRight: 25,
  },
  detailsAlign: {
    alignItems: 'center',
    marginTop: 55,
    marginLeft: 32,
    marginRight: 32,
  },
  pushTextAlign: {
    color: '#FFF',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 30,
    // alignItems: 'center',
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
    // borderRadius: 20,
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
});
