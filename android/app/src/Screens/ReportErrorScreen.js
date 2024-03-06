import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function ReportErrorScreen() {
  const [value, onChangeText] = React.useState('Beskriv problemet');
  const navigation = useNavigation();
  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="RAPPORTER EN FEJL" />
        <NameInput placeholder="Navn" />
        <NameInput placeholder="E-mail" />
        <NameInput placeholder="Telefonnummer" />

        <View style={styles.multiLineInputContainer}>
          <TextInput
            style={styles.multiLineInputStyle}
            editable
            multiline
            placeholder="Beskriv problemet"
            placeholderTextColor={'#7f7f8a'}
            numberOfLines={4}
            maxLength={200}
            // onChangeText={text => onChangeText(text)}
            // value={value}
            // style={{padding: 10}}
          />
        </View>
        <Text style={styles.oopsText}>Ups!</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('controlPanel');
            }}
            style={styles.loginScreenButton}
            underlayColor="#fff">
            <Text style={styles.loginText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export function Header({title}) {
  return (
    <View>
      <View style={styles.logoAlign}>
        <Image
          style={styles.navLogo}
          source={require('../assets/image/logo.png')}
          alt="dr Logo"
        />
      </View>
      <Text style={styles.screenTitle}> {title} </Text>
    </View>
  );
}

export function NameInput({placeholder}) {
  const [firstName, setFirstName] = useState('');
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.firstInputStyle}
          // onChangeText={onChangeNumber}
          value={firstName}
          placeholder={placeholder}
          placeholderTextColor={'#7f7f8a'}
        />
      </View>

      <Text style={styles.oopsText}>Ups!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  navLogo: {
    width: 80,
    height: 24,
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 28,
    fontFamily: 'Inter-Bold',
    fontSize: 13,
  },
  logoAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
  },
  screenTitle: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    marginTop: 70,
    fontFamily: 'Inter-ExtraBold',
    fontWeight: 'bold',
  },
  inputContainer: {alignItems: 'center', marginTop: 20},
  firstInputStyle: {
    height: 40,
    borderWidth: 1,
    color: '#000',
    borderColor: '#841228',
    width: 331,
    backgroundColor: '#000',
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
  },
  multiLineInputContainer: {
    backgroundColor: '#000',
    borderColor: '#841228',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 30,
  },
  multiLineInputStyle: {
    // height: 40,
    borderWidth: 1,
    color: '#000',
    borderColor: '#841228',
    // width: 331,
    backgroundColor: '#000',
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
  },
  oopsText: {
    color: '#b2172e',
    marginHorizontal: 30,
    fontSize: 16,
    fontWeight: 'normal',
  },
  buttonContainer: {
    marginTop: 160,
  },
  loginScreenButton: {
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#FE8E2A',
  },
  loginText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
