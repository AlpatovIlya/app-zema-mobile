import {observer} from 'mobx-react';
import React from 'react';
import {RootStackNavigator} from './src/navigators';

const App = observer(() => {
  return <RootStackNavigator />;
});

export default App;
