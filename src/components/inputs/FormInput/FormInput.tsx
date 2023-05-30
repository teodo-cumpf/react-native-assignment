import React from 'react';
import { View, TextInput } from 'react-native';

import { AppText } from '../../typography';

import { light_gray } from '../../../assets/styles/colors';

import styles from './FormInputStyles';

interface FormInputProps {
    title: string;
    value?: string;
    placeholder: string;
    showError?: boolean;
    isRequired?: boolean;
    errorMessage?: string;
    
    inputHandler: (value: string) => void;
}

const FormInput = (props: FormInputProps) => {
    const {
        title,
        value,
        showError,
        isRequired,
        placeholder,
        inputHandler,
        errorMessage,
    } = props;

    const formatInputStyle = () => {
        if (errorMessage)
            return [styles.input_wrapper, styles.input_error];

        return styles.input_wrapper;
    }

    return (
        <React.Fragment>
            <AppText style={styles.input_title}>
                {title}{isRequired && <AppText style={styles.required}>*</AppText>}
            </AppText>
            <View style={formatInputStyle()}>
                <TextInput
                    onChange={value => inputHandler(value.nativeEvent.text)}
                    value={value || ''}
                    placeholder={placeholder}
                    style={styles.input_text}
                    placeholderTextColor={light_gray}
                />
            </View>

            {showError &&
                <View style={styles.error_wrapper}>
                    <AppText style={styles.required}>* {errorMessage}</AppText>
                </View>
            }
        </React.Fragment>
    );
}

export default FormInput;
