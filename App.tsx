import 'react-native-gesture-handler';
import React from 'react';

import RootNavigator from './src/navigation/navigator';

import { GlobalContextProvider } from './src/context';

export default function App() {
  return (
    <GlobalContextProvider>
      <RootNavigator />
    </GlobalContextProvider>
  );
}
