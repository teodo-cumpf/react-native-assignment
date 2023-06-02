import { StyleSheet } from 'react-native';

import { gray, red } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    wrapper: {
        gap: 20,
    },
    flex_row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    red_text:{
        color: red
    },
    divider: {
        width: "100%",
        borderTopWidth: 1,
        borderColor: gray,
        marginVertical: 10
    }
});
