import { 
    Image,
    TouchableOpacity, 
    ImageSourcePropType,
} from 'react-native';

import styles from './IconButtonStyle';

interface IconButtonProps {
    isSelected?: boolean;
    icon: ImageSourcePropType;
    onPress: () => void;
}

const IconButton = (props: IconButtonProps) => {
    const { icon, onPress, isSelected } = props;

    const formatButtonStyle = () => {
        if (isSelected) return [styles.button, styles.selected];

        return styles.button;
    }

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={formatButtonStyle()}
        >
            <Image source={icon} style={styles.icon}/>
        </TouchableOpacity>
    );
}

export default IconButton;
