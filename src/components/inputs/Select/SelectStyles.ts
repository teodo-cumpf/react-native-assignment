import { StyleSheet } from 'react-native';

import { dark_gray, white, gray } from '../../../assets/styles/colors';
import { border_radius } from '../../../assets/styles/variables';

export default StyleSheet.create({
    select_wrapper: {
        position: 'relative',
        zIndex: 1,
    },
    select_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: 24,
        height: 24
    },
    option_wrapper: {
        position: 'absolute',
        zIndex: 1000,
        left: 0,
        right: 0,
        top: 50,
        borderWidth: 2,
        borderColor: gray,
        backgroundColor: white,
        borderRadius: border_radius,
        padding: 10,
        gap: 10,

        shadowColor: dark_gray,
        shadowOffset: { width: -2, height: 10 },
        shadowOpacity: 0.01,
        shadowRadius: 5,

        elevation: 10,
    }
});
