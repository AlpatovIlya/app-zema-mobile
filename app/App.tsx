import {configure} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react';
import {RootStackNavigator} from './src/navigators';

configure({enforceActions: 'observed'});

const App = observer(() => {
  return <RootStackNavigator />;
});

export default App;
