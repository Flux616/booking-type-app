/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from './src/config/navigation';

AppRegistry.registerComponent(appName, () => AppNavigation);
