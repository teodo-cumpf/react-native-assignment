import { StyleSheet } from 'react-native';

import { black, white } from '../../../assets/styles/colors';
import { border_radius } from '../../../assets/styles/variables';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: white,
        borderWidth: 1,
        borderRadius: border_radius,
        borderColor: black,
        padding: 12,
        height: 150,
        width: '100%',
        marginTop: 8
    },
    title: {
        fontSize: 14,
        lineHeight: 14,
        color: black,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16
    }
});
