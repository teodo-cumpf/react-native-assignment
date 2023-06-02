import {
    Modal,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppText } from '../../typography';

import { STACK_NAMES } from '../../../navigation/types';
import { SCREEN_NAMES } from '../../../navigation/constants';
import { close, pin } from '../../../utility/imageExporter';

import styles from './AppHeaderStyles';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void
}

const SideMenu = (props: SideMenuProps) => {
    const { isOpen, onClose } = props
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const navigateToLocation = () => {
        onClose();
        navigation.navigate(STACK_NAMES.HOME_STACK, {
            screen: SCREEN_NAMES.HOME_STACK.LOCATION
        });
    }

    return (
        <Modal visible={isOpen} transparent>
            <View style={styles.side_menu}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={onClose} style={styles.close_icon_wrapper}>
                        <Image source={close} style={styles.close_icon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigateToLocation()}
                        style={styles.flex_row}
                    >
                        <Image source={pin} style={styles.pin_icon} />
                        <AppText>Our locations</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default SideMenu;
