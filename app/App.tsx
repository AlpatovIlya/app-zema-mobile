import React, {useState} from 'react';
import {ThemeContext} from './src/context';
import {RootStackNavigator} from './src/navigators';
import {lightTheme} from './src/themes';

const App = () => {
  const [theme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <RootStackNavigator />
    </ThemeContext.Provider>
  );
};

export default App;
