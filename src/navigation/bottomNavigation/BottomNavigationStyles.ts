import { StyleSheet } from 'react-native';

import { black, red } from '../../assets/styles/colors';

export default StyleSheet.create({
    icon: {
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        paddingBottom: 4,
    },
    label: {
        fontSize: 10,
        lineHeight: 10,
        color: black,
    },
    label_active: {
        color: red,
    },
    amount_box: {
        position: 'absolute',
        top: -5,
        right: 30,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: black,
    },
    amount_text: {
        fontSize: 10,
        position: 'relative',
        top: -4,
        fontFamily: 'Inter-Bold',
        color: 'white',
        textAlign: 'center',
    },
    active: {
        backgroundColor: 'red',
    }
});
