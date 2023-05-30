import { StyleSheet } from 'react-native';

import { border_radius } from '../../../assets/styles/variables';
import { black, pink, red, white } from '../../../assets/styles/colors';

export default StyleSheet.create({
    input_wrapper: {
        width: '100%',
        borderWidth: 1,
        borderColor: black,
        borderRadius: border_radius,
        backgroundColor: white,
        padding: 12,
    },
    input_error: {
        backgroundColor: pink,
        borderColor: red,
    },
    input_title: {
        fontSize: 14,
        lineHeight: 14,
        color: black,
        paddingBottom: 8,
    },
    error_wrapper: {
        paddingTop: 5,
    },
    required: {
        color: red,
        fontSize: 12,
        fontFamily: 'Inter-Bold'
    },
    input_text: {
        fontSize: 16,
        color: black,
    }
});
