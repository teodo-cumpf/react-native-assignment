import { StyleSheet } from 'react-native';

import { black } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        color: black,
        paddingBottom: 10,
        letterSpacing: -1
    },
    description: {
        color: black,
        fontSize: 16,
        paddingBottom: 20,
        letterSpacing: -0.4
    },
    form_wrapper: {
        gap: 15,
    },
    button_wrapper: {
        paddingTop: 30
    },

    padding: {
        paddingBottom: 15,
    }
});
