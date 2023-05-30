import { Image } from 'react-native';

import { STACK_NAMES } from '../types';
import { renderBottomNavigationIcon } from '../helper';

import styles from './BottomNavigationStyles';

interface NavigationIconProps {
    isFocused: boolean;
    screen: STACK_NAMES;
}

const NavigationIcon = (props: NavigationIconProps) => {
    const { isFocused, screen } = props;
    
    return (
        <Image
            style={styles.icon}
            source={renderBottomNavigationIcon(screen, isFocused)} 
        />
    );
}

export default NavigationIcon;
