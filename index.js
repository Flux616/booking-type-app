/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from './src/config/navigation';
import i18n from './src/config/i18n';

AppRegistry.registerComponent(appName, () => AppNavigation);
