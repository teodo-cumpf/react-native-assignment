import { StyleSheet } from 'react-native';

import { black, light_gray, red } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    text_wrapper: {
        flexDirection: 'row',
        paddingBottom: 8,
    },
    current_step_text: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
        color: black,
    },
    number_of_steps_text: {
        color: light_gray,
        fontSize: 16
    },
    progress_bar_wrapper: {
        width: '100%',
    },
    current_step: {
        height: 2,
        backgroundColor: red,
    },
    progress_bar: {
        height: 1,
        backgroundColor: red,
        opacity: 0.2,
    }
});
