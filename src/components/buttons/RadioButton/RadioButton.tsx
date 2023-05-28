import { TouchableOpacity, View } from 'react-native';

import { AppText } from '../../typography';

import styles from './RadioButtonStyle';

interface RadioButtonProps {
    primaryText: string;
    isSelected?: boolean;
    secondaryText?: string;

    onPress: () => void;
}

const RadioButton = (props: RadioButtonProps) => {
    const {
        onPress,
        isSelected,
        primaryText,
        secondaryText,
    } = props;

    const formatRadioStyle = () => {
        if (isSelected)
            return [styles.outer_circle, styles.active_cicrle];

        return styles.outer_circle;
    }

    const formatTextStyle = () => {
        if (isSelected)
            return [styles.primary_text, styles.active_text];

        return styles.primary_text;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.row}
        >
            <View style={formatRadioStyle()}>
                {isSelected && <View style={styles.inner_circle} />}
            </View>

            <View style={styles.row}>
                <AppText style={formatTextStyle()}>{primaryText}</AppText>
                <AppText style={styles.secondary_text}>{secondaryText}</AppText>
            </View>
        </TouchableOpacity>
    );
}

export default RadioButton;
