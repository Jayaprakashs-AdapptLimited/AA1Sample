import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [isEnabled, setIsEnabled] = useState('false');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('Fornavn');
  const [lastName, setLastName] = useState('Efternavn');
  const [postNumber, setPostNumber] = useState('Postnummer');
  const [mobileNumber, setMobileNumber] = useState('Telefonnummer');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('+91');
  const [items, setItems] = useState([
    {label: '+91', value: '+91'},
    {label: '+45', value: '+45'},
  ]);

  const storeData = async () => {
    await AsyncStorage.setItem('firstName', firstName);
    await AsyncStorage.setItem('lastName', lastName);
    await AsyncStorage.setItem('postNumber', postNumber);
    await AsyncStorage.setItem('mobileNumber', mobileNumber);
    await AsyncStorage.setItem('value', value);
  };

  useEffect(() => {
    const getData = async () => {
      let firstNameValue = await AsyncStorage.getItem('firstName');
      let lastNameValue = await AsyncStorage.getItem('lastName');
      let postNumberValue = await AsyncStorage.getItem('postNumber');
      let mobileNumberValue = await AsyncStorage.getItem('mobileNumber');
      let mobilePinValue = await AsyncStorage.getItem('value');
      if (firstNameValue !== null) {
        setFirstName(firstNameValue);
      }
      if (lastNameValue !== null) {
        console.log(lastNameValue);
        setLastName(lastNameValue);
      }
      if (postNumberValue !== null) {
        console.log(postNumberValue, 'Post Number value');
        setPostNumber(postNumberValue);
      }
      if (mobileNumberValue !== null) {
        console.log(mobileNumberValue, 'Mobile Number value');
        setMobileNumber(mobileNumberValue);
      }
      if (mobilePinValue !== null) {
        setValue(mobilePinValue);
      }
    };
    getData();
  }, []);

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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.firstInputStyle}
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.firstInputStyle}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.firstInputStyle}
            onChangeText={text => setPostNumber(text)}
            value={postNumber}
          />
        </View>

        <View>
          <View style={styles.pickerInputContainer}>
            <View style={{flex: 1}}>
              <DropDownPicker
                // disabled={!isEnabled}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                disableBorderRadius={true}
                style={styles.pickerStyle}
                labelStyle={{color: '#fff'}}
                arrowSize={30}
                arrowIconStyle={{tintColor: '#FFF'}}
              />
            </View>

            <TextInput
              style={styles.input}
              onChangeText={text => setMobileNumber(text)}
              value={mobileNumber}
              keyboardType="numeric"
              placeholderTextColor={'#B1A9A9'}
            />
          </View>
        </View>

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
              onPress={() => {
                navigation.navigate('reportError');
              }}
              style={styles.loginScreenButton}>
              <Text style={styles.loginText}>spring over</Text>
            </TouchableOpacity>

            {isEnabled ? (
              <TouchableOpacity
                onPress={storeData}
                style={styles.submitScreenBtnActive}>
                <Text style={styles.submitScreenTextActive}> indsend </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.submitScreenButtonInactive}
                disabled={true}>
                <Text style={styles.submitScreenTextInactive}> indsend </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </LinearGradient>
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
    borderWidth: 1,
    width: 50,
    height: 40,
    borderColor: '#1E0F3E',
    color: '#000',
    backgroundColor: '#301C59',
  },
  input: {
    height: 48,
    borderWidth: 1,
    marginLeft: 10,
    color: '#FFF',
    borderColor: '#1E0F3E',
    width: 240,
    backgroundColor: '#301C59',
    fontSize: 16,
    fontWeight: 'bold',
  },
  firstInputStyle: {
    height: 48,
    borderWidth: 1,
    color: '#FFF',
    borderColor: '#1E0F3E',
    width: 331,
    backgroundColor: '#301C59',
    fontSize: 16,
  },
  confirmTextAlign: {
    color: '#FFF',
    fontSize: 14,
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
  },
  loginScreenButton: {
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
  submitScreenButtonInactive: {
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#CCC',
  },
  submitScreenBtnActive: {
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#FE8E2C',
  },
  submitScreenTextInactive: {
    color: '#676767',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  submitScreenTextActive: {
    color: '#FFF',
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
  pickerInputContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 15,
  },
  pickerStyle: {
    borderRadius: 0,
    backgroundColor: '#301C59',
    borderColor: '#1E0F3E',
  },
});
