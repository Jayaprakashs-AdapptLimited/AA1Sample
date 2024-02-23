import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {NavBar} from '../components/HomeScreen';
import {Header} from '../components/HomeScreen';
import {useNavigation} from '@react-navigation/native';

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={{flex: 1}}>
        <Header title="Velkommen" />
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          efficitur erat, a ullamcorper risus. Vivamus varius arcu a magna.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 35,
            marginRight: 35,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.confirmTextAlign}>
            Please confirm that you are over 18 years.
          </Text>
          <View style={styles.container}>
            <Switch
              trackColor={{false: '#767577', true: '#FE8E2A'}}
              thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{
                transform: [{scaleX: 1.3}, {scaleY: 1.3}],
                // justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        </View>
        <Input />
        <View style={{marginTop: 230}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('otp');
            }}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

function Input() {
  const [text, onChangeText] = useState('+91');
  const [number, onChangeNumber] = useState();
  return (
    <View>
      <Text
        style={{
          marginTop: 60,
          marginLeft: 34,
          color: '#FFF',
          fontFamily: 'Inter-Bold',
        }}>
        Enter your mobile number
      </Text>
      <View
        style={{
          // backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 35,
          marginRight: 35,
          marginTop: 5,
        }}>
        <TextInput
          style={styles.codeInput}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          // placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    // justifyContent: 'center',
    // marginTop: 28,
    margin: 25,
    // fontFamily: 'Inter-Black',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    // fontWeight: 'medium',
  },
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: '',
  },
  confirmTextAlign: {
    color: '#FFF',
    fontSize: 12,
    // marginLeft: 35,
  },
  codeInput: {
    // margin: 3,
    borderWidth: 1,
    // padding: 5,
    // paddingLeft: 5,
    width: 50,
    height: 40,
    borderColor: 'white',
    color: '#000',
    backgroundColor: '#FFF',
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    // padding: 0,
    // paddingLeft: 140,
    marginLeft: 10,
    color: '#000',
    // borderColor: 'white',
    width: 270,
    backgroundColor: 'white',
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
});
