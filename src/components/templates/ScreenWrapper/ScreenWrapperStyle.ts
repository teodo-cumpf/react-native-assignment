import { StyleSheet } from 'react-native';

import { light_blue, white } from '../../../assets/styles/colors';

export default StyleSheet.create({
    safe_area: {
        flex: 1,
        backgroundColor: white,
    },
    screen_wrapper: {
        backgroundColor: light_blue,
        paddingHorizontal: 15,
        flex: 1,
        width: '100%',
        paddingTop: 30,
    }
});
