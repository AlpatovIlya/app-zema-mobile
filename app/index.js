/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {configure} from 'mobx';

// configure({
//   enforceActions: 'always',
//   computedRequiresReaction: true,
//   reactionRequiresObservable: true,
//   observableRequiresReaction: true,
//   disableErrorBoundaries: true,
// });

AppRegistry.registerComponent(appName, () => App);
