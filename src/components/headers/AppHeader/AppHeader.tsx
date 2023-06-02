import { View, Image, TouchableOpacity } from 'react-native';

import SideMenu from './SideMenu';

import { useToggle } from '../../../hooks';
import { menu, logo } from '../../../utility/imageExporter';

import styles from './AppHeaderStyles';

const AppHeader = () => {
    const [ isOpen, toggle] = useToggle();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={toggle}>
                <Image style={styles.menu} source={menu} />
            </TouchableOpacity>
            
            <Image style={styles.logo} source={logo} />
            
            <SideMenu isOpen={isOpen} onClose={toggle}/>
        </View>
    );
}

export default AppHeader;
