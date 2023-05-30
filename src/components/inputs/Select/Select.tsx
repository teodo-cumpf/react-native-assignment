import React from 'react';
import { View, Image, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';

import { AppText } from '../../typography';
import SelectOption from './SelectOption';

import { arrow_down } from '../../../utility/imageExporter';

import styles from './SelectStyles';
import inputStyles from '../FormInput/FormInputStyles';

interface SelectProps {
    value?: string;
    title: string;
    isOpen: boolean;
    options: string[];
    placeholder: string;
    showError?: boolean;
    isRequired?: boolean;
    errorMessage?: string;

    onToggle: () => void;
    onSelect: (value: string) => void;
}

const Select = (props: SelectProps) => {
    const {
        title,
        value,
        isOpen,
        options,
        onToggle,
        onSelect,
        showError,
        isRequired,
        placeholder,
        errorMessage,
    } = props;

    const handleSelect = (option: string) => {
        onSelect(option);
        onToggle();
    }

    const formatInputStyle = () => {
        const baseStyle: StyleProp<ViewStyle> = [styles.select_wrapper, inputStyles.input_wrapper];
        
        if (errorMessage)
            return baseStyle.concat(inputStyles.input_error);

        return baseStyle;
    }

    return (
        <React.Fragment>
            <AppText style={inputStyles.input_title}>
                {title}{isRequired && <AppText style={inputStyles.required}>*</AppText>}
            </AppText>
            
            <View style={formatInputStyle()}>
                <TouchableOpacity style={styles.select_container} onPress={onToggle}>
                    <AppText style={inputStyles.input_text}>{value || placeholder}</AppText>
                    <Image
                        style={styles.icon}
                        source={arrow_down}
                    />
                </TouchableOpacity>

                {isOpen &&
                    <View style={styles.option_wrapper}>
                        {options.map((option, index) => (
                            <SelectOption
                                key={index}
                                option={option}
                                onSelect={handleSelect}
                            />
                        ))}
                    </View>
                }
            </View>
            {showError &&
                <View style={inputStyles.error_wrapper}>
                    <AppText style={inputStyles.required}>* {errorMessage}</AppText>
                </View>
            }
        </React.Fragment>
    );
}

export default Select;
