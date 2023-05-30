import React from 'react';
import { TextInput, View } from 'react-native';

import { AppText } from '../../typography';

import { light_gray } from '../../../assets/styles/colors';

import styles from './TextAreaStyle';

interface TextAreaProps {
    title: string,
    value?: string,
    placeholder: string,
    inputHandler: (value: string) => void;
}

const TextArea = (props: TextAreaProps) => {
    const {
        title,
        value,
        placeholder,
        inputHandler
    } = props

    return (
        <React.Fragment>
            <AppText style={styles.title}>
                {title}
            </AppText>
            <View style={styles.wrapper}>
                <TextInput
                    onChange={value => inputHandler(value.nativeEvent.text)}
                    value={value || ''}
                    placeholder={placeholder}
                    placeholderTextColor={light_gray}
                    multiline
                    numberOfLines={8}
                    maxLength={255}
                    style={styles.input}
                />
            </View>
        </React.Fragment>
    );
}

export default TextArea;
