import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './android/app/src/Screens/HomeScreen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import RegistrationScreen from './android/app/src/Screens/RegistrationScreen';
import OTPdetails from './android/app/src/Screens/OTPdetails';
import OTPVerificationScreen from './android/app/src/Screens/OTPVerificationScreen';
import OTPVerifyButtonScreen from './android/app/src/Screens/OTPVerifyButtonScreen';
import RegisterSuccessScreen from './android/app/src/Screens/RegisterSuccessScreen';
import ProfileScreen from './android/app/src/Screens/ProfileScreen';
import ShowEnd from './android/app/src/Screens/ShowEnd';
import ReportErrorScreen from './android/app/src/Screens/ReportErrorScreen';
import ControlPanelScreen from './android/app/src/Screens/ControlPanelScreen';
import QuestionScreen from './android/app/src/Screens/QuestionScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="reportError" component={ReportErrorScreen} />
      <Stack.Screen name="controlPanel" component={ControlPanelScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="otp" component={OTPdetails} />
        <Stack.Screen name="otpVerify" component={OTPVerificationScreen} />
        <Stack.Screen name="verifyButton" component={OTPVerifyButtonScreen} />
        <Stack.Screen
          name="registerSuccess"
          component={RegisterSuccessScreen}
        />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="question" component={QuestionScreen} />
        <Stack.Screen name="showEnd" component={ShowEnd} />
        {/* <Stack.Screen name="reportError" component={ReportErrorScreen} />
        <Stack.Screen name="controlPanel" component={ControlPanelScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
