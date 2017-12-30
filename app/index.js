import React from 'react';
import { Tabs, Drawer } from './config/router.js';
import { Platform } from 'react-native';

const App = () => {
  if (Platform.OS == 'ios'){
    return <Tabs />
  }
    return <Drawer />;
};

export default App;