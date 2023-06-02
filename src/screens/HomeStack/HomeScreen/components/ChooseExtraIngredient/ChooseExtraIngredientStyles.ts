import { StyleSheet } from 'react-native';

import { black, red } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        color: black,
        paddingBottom: 20,
        letterSpacing: -1
    },
    description: {
        color: black,
        fontSize: 16,
        paddingBottom: 20,
        letterSpacing: -0.4
    },
    form_wrapper: {
        gap: 24,
    },
    price_wrapper: {
        paddingVertical: 15,
    },
    paddingBottom: {
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price_text: {
        fontSize: 16,
        letterSpacing: -0.4,
        color: black,
    },
    extra_ingredient_text: {
        fontSize: 16,
        letterSpacing: -0.4,
        color: red,
    },
    price_value: {
        fontSize: 20,
        letterSpacing: -1,
        color: black,
        fontFamily: 'Inter-Bold',
        textAlign:'center'
    },
    extra_ingredient_value: {
        fontSize: 20,
        letterSpacing: -1,
        color: red,
        fontFamily: 'Inter-Bold',
        textAlign:'center',
    },
    button_row: {
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button_wrapper: {
        width: "47%"
    },
});
