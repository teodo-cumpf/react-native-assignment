import 'react-native-gesture-handler';
import React from 'react';

import RootNavigator from './src/navigation/navigator';

import { useInitializeFonts } from './src/hooks';

export default function App() {
  const [fontsLoaded] = useInitializeFonts();

  if (!fontsLoaded) return null;

  return (
    <RootNavigator />
  );
}
