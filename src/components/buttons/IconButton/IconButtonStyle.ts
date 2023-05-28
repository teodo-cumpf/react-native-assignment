import { StyleSheet } from 'react-native';

import { white, black } from '../../../assets/styles/colors';
import { border_radius } from '../../../assets/styles/variables';

export default StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        backgroundColor: white,
        borderRadius: border_radius,
        borderColor: black,
        borderWidth: 1,
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: black,
    },
    icon: {

        height: 24,
        alignSelf: 'center',
        resizeMode: 'contain',
    }
});
