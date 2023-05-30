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
    }
});
