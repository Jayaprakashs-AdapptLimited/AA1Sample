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
import {Header} from '../Screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function RegistrationScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.registrationContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="Velkommen" />
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          efficitur erat, a ullamcorper risus. Vivamus varius arcu a magna.
        </Text>
        <View style={styles.confirmTextContainer}>
          <Text style={styles.confirmTextAlign}>
            Please confirm that you are over 18 years.
          </Text>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#FE8E2A'}}
              thumbColor={isEnabled ? '#FFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.toggleSwitchStyle}
            />
          </View>
        </View>
        <Input isEnabled={isEnabled} />
      </LinearGradient>
    </View>
  );
}

function Input({isEnabled}) {
  const navigation = useNavigation();

  const [number, onChangeNumber] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('+91');
  const [items, setItems] = useState([
    {label: '+91', value: '+91'},
    {label: '+45', value: '+45'},
  ]);
  return (
    <View>
      <Text style={styles.enterText}>Enter your mobile number</Text>
      <View style={styles.pickerInputContainer}>
        <View style={styles.codeInput}>
          <DropDownPicker
            disabled={!isEnabled}
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
          onChangeText={onChangeNumber}
          value={number}
          placeholder="  XXX XXX XX"
          keyboardType="numeric"
          placeholderTextColor={isEnabled ? '#000' : '#B1A9A9'}
          editable={!!isEnabled}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('otp');
          }}
          style={styles.loginScreenButton}
          underlayColor="#fff">
          <Text style={styles.loginText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registrationContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  confirmTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  confirmTextAlign: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: 'Inter-Bold',
  },
  toggleSwitchStyle: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
    alignItems: 'center',
  },
  pickerInputContainer: {
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
  },
  codeInput: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    marginLeft: 10,
    width: 240,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 230,
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
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  enterText: {
    marginTop: 60,
    marginLeft: 25,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  pickerStyle: {
    borderRadius: 0,
  },
});
