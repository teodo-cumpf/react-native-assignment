import { View, Image, TouchableOpacity } from 'react-native';

import { menu, logo } from '../../../utility/imageExporter';

import styles from './AppHeaderStyles';

const AppHeader = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.menu} source={menu}/>
            </TouchableOpacity>
            <Image style={styles.logo} source={logo}/>
        </View>
    );
}

export default AppHeader;
