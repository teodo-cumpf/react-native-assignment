import React from 'react';
import { Text } from 'react-native';

import { ScreenWrapper, ContentWrapper } from './src/components/templates'

import { useInitializeFonts } from './src/hooks';

export default function App() {
  const [fontsLoaded] = useInitializeFonts();

  if (!fontsLoaded) return null;

  return (
    <ScreenWrapper>
      <ContentWrapper>
      <Text>test</Text>
      </ContentWrapper>
    </ScreenWrapper>
  );
}
