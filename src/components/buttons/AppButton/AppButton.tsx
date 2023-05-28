import {
    View,
    Image,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

import { AppText } from '../../typography';

import { formatButtonStyle, formatTextStyle } from './helper';

import { APP_BUTTON_TYPE } from './types';

import styles from './AppButtonStyles';

interface AppButtonProps {
    text: string;
    isBold?: boolean;
    disabled?: boolean;
    type?: APP_BUTTON_TYPE;
    icon?: ImageSourcePropType;
    onPress: () => void;
}

const AppButton = (props: AppButtonProps) => {
    const {
        text,
        icon,
        isBold,
        onPress,
        disabled,
        type = APP_BUTTON_TYPE.PRIMARY
    } = props;

    const formatTextWeight = () => {
        if(isBold) return [formatTextStyle(type), styles.bold_text];

        return formatTextStyle(type);
    }

    const formatWithDisable = () => {
        if(disabled) return [styles.button, styles.disabled];

        return formatButtonStyle(type);
    }

    return (
        <TouchableOpacity 
            onPress={onPress} 
            disabled={disabled}
            style={formatWithDisable()} 
        >
            {icon && <View style={styles.spacing}/>}
            <AppText style={formatTextWeight()}>{text}</AppText>
            {icon && <Image source={icon} style={styles.icon}/>}
        </TouchableOpacity>
    );
}

export default AppButton;
