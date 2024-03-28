import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../Screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Input({inputHandle, inputNameError, inputValue, placeholderText}) {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#B1A9A9'}
          style={[
            styles.firstInputStyle,
            {borderColor: inputNameError ? 'red' : '#1E0F3E'},
          ]}
          onChangeText={text => inputHandle(text)}
          value={inputValue}
        />
      </View>
      <View>
        {inputNameError ? (
          <Text style={styles.errorText}>{inputNameError}</Text>
        ) : null}
      </View>
    </>
  );
}

export default function ProfileScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();

  const [value, setValue] = useState('+91');
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: '+91', value: '+91'},
    {label: '+45', value: '+45'},
  ]);

  const [firstName, setFirstName] = useState({value: '', error: ''});
  const [lastName, setLastName] = useState({value: '', error: ''});
  const [postNumber, setPostNumber] = useState({value: '', error: ''});
  const [mobileNumber, setMobileNumber] = useState({
    value: '',
    error: '',
  });

  function onChangeFirstName(text) {
    setFirstName({value: text, error: ''});
  }
  function onChangeLastName(text) {
    setLastName({value: text, error: ''});
  }

  function onChangePostNumber(text) {
    setPostNumber({value: text, error: ''});
  }

  function onChangeMobileNumber(text) {
    setMobileNumber({value: text, error: ''});
  }

  const storeData = async () => {
    const textValidation = /^[A-Za-z\s\-]+$/;
    const numberValidation = /^[0-9]+$/;
    if (!textValidation.test(firstName.value)) {
      setFirstName({value: firstName.value, error: 'Invalid first Name'});
    }
    if (!textValidation.test(lastName.value)) {
      setLastName({value: lastName.value, error: 'Invalid Last Name'});
    }

    if (!numberValidation.test(postNumber.value)) {
      setPostNumber({value: postNumber.value, error: 'Invalid post number'});
    }

    if (!numberValidation.test(mobileNumber.value)) {
      setMobileNumber({
        value: mobileNumber.value,
        error: 'Invalid Mobile number',
      });
    }
    navigation.navigate('showEnd');

    const finalResult = {
      firstName: firstName.value,
      lastName: lastName.value,
      postNumber: postNumber.value,
      mobileNumber: mobileNumber.value,
    };

    await AsyncStorage.setItem('finalResult', JSON.stringify(finalResult));
  };

  useEffect(() => {
    const getData = async () => {
      let finalData = await AsyncStorage.getItem('finalResult');
      let storedValues = JSON.parse(finalData);
      setFirstName({value: storedValues['firstName']});
      setLastName({value: storedValues['lastName']});
      setPostNumber({value: storedValues['postNumber']});
      setMobileNumber({value: storedValues['mobileNumber']});
    };
    getData();
  }, []);

  return (
    <LinearGradient
      colors={['#830E76', '#371D76', '#2F2075']}
      style={styles.gradientStyle}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <ScrollView>
          <Header title="Dine informationer" />
          <View style={styles.subContentContainer}>
            <Text style={styles.subContent}>
              Skriv dine oplysninger, så vi kan kontakte dig under udsendelsen,
              hvis du vinder praemien.
            </Text>
          </View>

          <View>
            <Text style={styles.profileText}>
              1/5 PROFILER OPRETTER PA LOGIN
            </Text>
          </View>

          <View style={styles.logoViewAlign}>
            <Image
              style={styles.logo}
              source={require('../assets/image/profileIcon.png')}
              alt="aa1 Logo"
            />
          </View>

          <Input
            inputHandle={onChangeFirstName}
            inputNameError={firstName.error}
            inputValue={firstName.value}
            placeholderText="Fornavn"
          />

          <Input
            inputHandle={onChangeLastName}
            inputNameError={lastName.error}
            inputValue={lastName.value}
            placeholderText="Efternavn"
          />

          <Input
            inputHandle={onChangePostNumber}
            inputNameError={postNumber.error}
            inputValue={postNumber.value}
            placeholderText="Postnummer"
          />

          <View>
            <View style={styles.pickerInputContainer}>
              <View style={{flex: 1}}>
                <DropDownPicker
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
                style={[
                  styles.input,
                  {borderColor: mobileNumber.error ? 'red' : '#1E0F3E'},
                ]}
                onChangeText={text => onChangeMobileNumber(text)}
                value={mobileNumber.value}
                inputValue={mobileNumber.value}
                keyboardType="numeric"
                placeholderTextColor={'#B1A9A9'}
                placeholder="XXX XXX XX"
              />
            </View>
          </View>
          <View>
            {mobileNumber.error ? (
              <Text style={{color: 'red', marginHorizontal: 30}}>
                {mobileNumber.error}
              </Text>
            ) : null}
          </View>

          <View style={styles.toggleContainer}>
            <Text style={styles.confirmTextAlign}>
              Jeg accepterer
              <Text style={styles.underlineTextStyle}>
                Vilkår og Betingelser
              </Text>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
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
    marginTop: 20,
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
  errorText: {color: 'red', marginHorizontal: 30},
});
