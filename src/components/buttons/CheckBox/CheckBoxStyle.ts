import { StyleSheet } from 'react-native';

import {
    red,
    gray,
    pink,
    black,
    light_red,
    light_gray,
} from '../../../assets/styles/colors';
import { border_radius_xs } from '../../../assets/styles/variables';

export default StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    checkbox: {
        borderWidth: 1,
        borderColor: light_red,
        borderRadius: border_radius_xs,
        backgroundColor: pink,
        width: 24,
        height: 24,
        marginRight: 8,
        padding: 5,
        justifyContent: 'center',
    },
    checkbox_active: {
        backgroundColor: red,
        borderColor: red,
    },
    checkbox_disabled: {
        backgroundColor: pink,
        borderColor: gray,
    },
    text: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: black,
    },
    text_active: {
        color: red
    },
    text_disabled: {
        color: light_gray
    },
    icon: {
        height: 6,
        width: 9,
        alignSelf: 'center',
    }
});
