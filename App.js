import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './android/app/src/Screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from './android/app/src/Screens/RegistrationScreen';
import OTPdetails from './android/app/src/Screens/OTPdetails';
import OTPVerificationScreen from './android/app/src/Screens/OTPVerificationScreen';
import OTPVerifyButtonScreen from './android/app/src/Screens/OTPVerifyButtonScreen';
import RegisterSuccessScreen from './android/app/src/Screens/RegisterSuccessScreen';
import ProfileScreen from './android/app/src/Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="otp" component={OTPdetails} />
        <Stack.Screen name="otpVerify" component={OTPVerificationScreen} />
        <Stack.Screen name="verifyButton" component={OTPVerifyButtonScreen} />
        <Stack.Screen
          name="registerSuccess"
          component={RegisterSuccessScreen}
        />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
