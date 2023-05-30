import React, { useState } from 'react';

import { ScreenWrapper, ContentWrapper } from './src/components/templates'
import { FormInput, TextArea, Select } from './src/components/inputs'

import { useInitializeFonts, useToggle } from './src/hooks';

interface ValueInputType {
  text: string
}

export default function App() {
  const [fontsLoaded] = useInitializeFonts();
  const [valueInput, setValueInput] = useState<ValueInputType>({
    text: ""
  });
  const [isSelectOpen, onToggleSelect] = useToggle();

  if (!fontsLoaded) return null;

  const selectValue = ['Cash', 'Card'];
  const formHandler = (fieldName: string, value: string) => {
    setValueInput({
      ...valueInput,
      [fieldName]: value,
    })
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <Select
          value={valueInput.text}
          placeholder={'Choose a payment method'}
          title={'Cash or card'}
          isRequired
          options={selectValue}
          onToggle={onToggleSelect}
          isOpen={isSelectOpen}
          // showError
          // errorMessage={'test poruka'}
          onSelect={(value) => formHandler('text', value)}
        />
        {/* <Text>test</Text> */}
        {/* <FormInput
        value={valueInput.text}
        placeholder={'eg. Full Name'}
        title={'Full name'}
        showError
        errorMessage={'test poruka'}
        isRequired
        inputHandler={value => formHandler('text', value)}
      /> */}
        {/* <TextArea
          value={valueInput.text}
          placeholder={'Notes hereee'}
          title={'Note'}
          inputHandler={value => formHandler('text', value)}
        /> */}
      </ContentWrapper>
    </ScreenWrapper>
  );
}
