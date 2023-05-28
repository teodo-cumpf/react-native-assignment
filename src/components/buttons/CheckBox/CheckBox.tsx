import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import { AppText } from '../../typography';

import { checkmark } from '../../../utility/imageExporter';

import styles from './CheckBoxStyle';

interface CheckmarkButtonProps {
    text: string;
    disabled?: boolean;
    isSelected?: boolean;
    onPress: () => void;
}

const CheckBox = (props: CheckmarkButtonProps) => {
    const {
        text,
        onPress,
        disabled,
        isSelected,
    } = props;

    const formatCheckmarkStyle = () => {
        if (disabled) 
            return [styles.checkbox, styles.checkbox_disabled];
        
        if (isSelected)
            return [styles.checkbox, styles.checkbox_active];
            
        return styles.checkbox;
    }

    const formatText = () => {
        if (isSelected)
            return [styles.text, styles.text_active];

        if (disabled)
            return [styles.text, styles.text_disabled];

        return styles.text;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={styles.row}
        >
            <View style={formatCheckmarkStyle()}>
                {isSelected && <Image source={checkmark} style={styles.icon}/>}
            </View>
            <AppText style={formatText()}>{text}</AppText>
        </TouchableOpacity>
    );
}

export default CheckBox;
