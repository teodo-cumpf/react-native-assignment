import { StyleSheet } from 'react-native';

import { red } from '../../../../assets/styles/colors';

export default StyleSheet.create({
    wrapper: {
        gap: 10
    }, 
    flex_row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    red_text:{
        color: red
    }
});
