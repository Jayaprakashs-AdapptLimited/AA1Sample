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
  // const [number, onChangeNumber] = useState('  XXX XXX XX');
  const [inputValue, setFirstName] = useState({
    firstName: 'Fornavn',
    lastName: 'Efternavn',
    postNumber: 'Postnummer',
    mobileNumber: '  XXX XXX XX',
  });
  const storeData = async () => {
    console.log(inputValue, 'First Name');
    console.log(JSON.stringify(inputValue), 'Stringiii');
    try {
      await AsyncStorage.setItem('FirstName', JSON.stringify(inputValue));
      // await AsyncStorage.setItem('LastName', lastName);
    } catch (e) {
      // saving error
    }
  };

  function inputHandle(field, text) {
    console.log(field, 'field');
    console.log(text, 'Text');
    setFirstName(previous => ({...previous, [field]: text}));
  }

  useEffect(() => {
    const getData = async () => {
      try {
        let firstNameValue = await AsyncStorage.getItem('FirstName');
        console.log(firstNameValue, 'Valueeee');
        if (firstNameValue !== null) {
          setFirstName(JSON.parse(firstNameValue));
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, [setFirstName]);

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
            onChangeText={text => inputHandle('firstName', text)}
            value={inputValue.firstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.firstInputStyle}
            onChangeText={text => inputHandle('lastName', text)}
            value={inputValue.lastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.firstInputStyle}
            onChangeText={text => inputHandle('postNumber', text)}
            value={inputValue.postNumber}
          />
        </View>

        <Input inputHandle={inputHandle} inputValue={inputValue} />

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
                // navigation.navigate('showEnd');

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

function Input({inputHandle, inputValue}) {
  const [text, onChangeText] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('+91');
  const [items, setItems] = useState([
    {label: '+91', value: '+91'},
    {label: '+45', value: '+45'},
  ]);
  return (
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
          />
        </View>

        <TextInput
          style={styles.input}
          onChangeText={text => inputHandle('mobileNumber', text)}
          value={inputValue.mobileNumber}
          // placeholder="  XXX XXX XX"
          keyboardType="numeric"
          placeholderTextColor={'#B1A9A9'}
          // editable={!!isEnabled}
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
    height: 48,
    // margin: 12,
    borderWidth: 1,
    // padding: 0,
    // paddingLeft: 140,
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
    // padding: 0,
    // paddingLeft: 140,
    // marginLeft: 10,
    color: '#FFF',
    borderColor: '#1E0F3E',
    width: 331,
    backgroundColor: '#301C59',
    fontSize: 16,
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
    // marginLeft: 25,
    // marginRight: 25,
    marginTop: 15,
  },
  pickerStyle: {
    borderRadius: 0,
    backgroundColor: '#301C59',
    borderColor: '#1E0F3E',
  },
});
