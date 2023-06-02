import { StyleSheet } from 'react-native';

import { black, red } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    button_row: {
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button_wrapper: {
        width: "47%"
    },
    padding: {
        paddingBottom: 15,
    },
    error_wrapper: {
        flexDirection: 'row',
        paddingTop: 30,
    },
    error_text: {
        color: black,
        fontSize: 14,
        lineHeight: -0.4
    },
    star_color: {
        color: red,
    }
});
