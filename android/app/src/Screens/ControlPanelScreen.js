import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ControlPanelScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.controlPanelContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="RAPPORTER EN FEJL" />
        <View style={{marginTop: 30}}>
          <NameInput
            title="Device ID"
            placeholder="21ccc87f-091c-4072-ba8d-6abea47559e5"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.fixToText}>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('reportError');
              // }}
              style={styles.loginScreenButton}>
              <Text style={styles.loginText}>Gem</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} disabled={true}>
              <Text style={styles.resetButtonText}> Nulstil </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <NameInput title="Server Slug" placeholder="prod" />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.fixToText}>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('reportError');
              // }}
              style={styles.loginScreenButton}>
              <Text style={styles.loginText}>Gem</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} disabled={true}>
              <Text style={styles.resetButtonText}> Nulstil </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <NameInput title="APP UID" placeholder="allvonedk2023" />
        </View>

        <View style={styles.textButtonContainer}>
          <Text style={styles.textStyle}>Vis indisk kode i landelisten</Text>
          <View>
            <Switch
              trackColor={{false: '#1a0f39', true: '#FE8E2A'}}
              thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.toggleSwitchStyle}
            />
          </View>
        </View>

        <View style={styles.textButtonContainer}>
          <Text style={styles.textStyle}>Authentication Data</Text>
          <View>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('reportError');
              // }}
              style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Nulstil</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.devicebuttonContainer}>
          <Text style={styles.textStyle}>Device ID</Text>
          <View>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('reportError');
              // }}
              style={styles.sendButton}>
              <Text style={styles.loginText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export function Header({title}) {
  return (
    <View>
      <View style={styles.logoAlign}>
        <View style={{marginLeft: 15}}>
          <FontAwesome name="chevron-left" size={30} color="#FFF" />
        </View>
        <View style={{marginLeft: 120}}>
          <Image
            style={styles.navLogo}
            source={require('../assets/image/logo.png')}
            alt="dr Logo"
          />
        </View>
      </View>
    </View>
  );
}

export function NameInput({title, placeholder}) {
  const [firstName, setFirstName] = useState('');
  return (
    <>
      <View>
        <Text style={styles.inputName}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.firstInputStyle}
          // onChangeText={onChangeNumber}
          value={firstName}
          placeholder={placeholder}
          placeholderTextColor={'#f1f1f1'}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  controlPanelContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  navLogo: {
    width: 80,
    height: 24,
  },
  logoAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  firstInputStyle: {
    borderWidth: 1,
    color: '#000',
    borderRadius: 5,
    width: 360,
    backgroundColor: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginScreenButton: {
    marginRight: 10,
    marginLeft: 30,
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#FE8E2A',
  },
  loginText: {
    color: '#ffeec9',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  resetButton: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#FE8E2A',
  },
  resetButtonText: {
    color: '#ffeec9',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputName: {
    color: '#FFF',
    marginHorizontal: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 8,
    marginHorizontal: 18,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sendButton: {
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 10,
    paddingLeft: 24,
    backgroundColor: '#FE8E2A',
  },
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 14,
  },
  devicebuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 14,
    marginBottom: 110,
  },
  textStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
