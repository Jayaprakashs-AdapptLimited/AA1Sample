import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';

export default function ProfileScreen() {
  const [isEnabled, setIsEnabled] = useState('false');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientStyle}>
        <Header title="Dine informationer" />
        <View style={styles.subContentContainer}>
          <Text style={styles.subContent}>
            Skriv dine oplysninger, så vi kan kontakte dig under udsendelsen,
            hvis du vinder praemien.
          </Text>
        </View>

        <View>
          <Text style={styles.profileText}>1/5 PROFILER OPRETTER PA LOGIN</Text>
        </View>

        <View style={styles.logoViewAlign}>
          <Image
            style={styles.logo}
            source={require('../assets/image/profileIcon.png')}
            alt="aa1 Logo"
          />
        </View>

        <NameInput placeholder="Fornavn" />
        <NameInput placeholder="Efternavn" />
        <NameInput placeholder="Postnummer" />

        <Input />

        <View style={styles.toggleContainer}>
          <Text style={styles.confirmTextAlign}>
            Jeg accepterer
            <Text style={styles.underlineTextStyle}>Vilkår og Betingelser</Text>
            <Text> + </Text>
            <Text style={styles.underlineTextStyle}>
              DR's Privatlivspolitik
            </Text>
          </Text>

          <View style={styles.container}>
            <Switch
              trackColor={{false: '#767577', true: '#FE8E2A'}}
              thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.toggleStyle}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.fixToText}>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('profile');
              // }}
              style={styles.loginScreenButton}>
              <Text style={styles.loginText}>spring over</Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('profile');
              // }}
              style={styles.submitScreenButton}>
              <Text style={styles.submitScreenText}>indsend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

function NameInput({placeholder}) {
  const [firstName, setFirstName] = useState('');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.firstInputStyle}
        // onChangeText={onChangeNumber}
        value={firstName}
        placeholder={placeholder}
        placeholderTextColor={'#FFF'}
        keyboardType="numeric"
      />
    </View>
  );
}

function Input() {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState();
  return (
    <View>
      <View style={styles.innerInput}>
        <TextInput
          style={styles.codeInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="+91"
          placeholderTextColor={'#FFF'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Telefonnummer"
          placeholderTextColor={'#FFF'}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientStyle: {flex: 1},
  subContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    // fontFamily: 'Inter-Thin',
    fontWeight: 'medium',
    lineHeight: 25,
  },
  profileText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    marginTop: 20,
  },
  logoViewAlign: {
    alignItems: 'center',
    marginTop: 15,
  },
  logo: {
    width: 83,
    height: 87,
  },
  codeInput: {
    // margin: 3,
    borderWidth: 1,
    // padding: 5,
    // paddingLeft: 5,
    width: 50,
    height: 40,
    borderColor: '#1E0F3E',
    color: '#000',
    backgroundColor: '#301C59',
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    // padding: 0,
    // paddingLeft: 140,
    marginLeft: 10,
    color: '#000',
    borderColor: '#1E0F3E',
    width: 270,
    backgroundColor: '#301C59',
  },
  firstInputStyle: {
    height: 40,
    borderWidth: 1,
    // padding: 0,
    // paddingLeft: 140,
    // marginLeft: 10,
    color: '#000',
    borderColor: '#1E0F3E',
    width: 331,
    backgroundColor: '#301C59',
  },
  confirmTextAlign: {
    color: '#FFF',
    fontSize: 14,
    // marginLeft: 35,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  underlineTextStyle: {
    color: '#FE8E2A',
    textDecorationLine: 'underline',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    width: '100%',
    // justifyContent: 'space-between',
  },
  loginScreenButton: {
    // marginRight: 40,
    // marginLeft: 40,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FE8E2C',
  },
  loginText: {
    color: '#FE8E2C',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitScreenButton: {
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#CCC',
  },
  submitScreenText: {
    color: '#676767',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subContentContainer: {marginLeft: 36, marginRight: 36, marginTop: 20},
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 35,
    marginRight: 35,
    alignItems: 'center',
    marginTop: 15,
  },
  toggleStyle: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
    alignItems: 'center',
  },
  inputContainer: {alignItems: 'center', marginTop: 15},
  innerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});
