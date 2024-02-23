/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import RegistrationScreen from './android/app/src/Screens/RegistrationScreen';
import HomeScreen from './android/app/src/components/HomeScreen';

AppRegistry.registerComponent(appName, () => App);
