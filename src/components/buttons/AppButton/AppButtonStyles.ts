import { StyleSheet } from 'react-native';

import {
    red,
    gray,
    black,
    white,
} from '../../../assets/styles/colors';
import { border_radius } from '../../../assets/styles/variables';

export default StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: 'center',
        borderRadius: border_radius,
        flexDirection: 'row',
        alignContent: 'center',
        maxHeight: 40,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    primary: {
        backgroundColor: black
    },
    secondary: {
        backgroundColor: red
    }, 
    tertiary: {
        borderWidth: 1,
        borderColor: black,
        backgroundColor: white
    },
    disabled: {
        backgroundColor: gray,
    },
    spacing:{
        width: 5,
    },
    text: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center'
    },
    white_text: {
        color: white
    },
    black_text: {
        color: black
    },
    bold_text: {
        fontFamily: 'Inter-Bold'
    },
    icon: {
        width: 5,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
});
