import { StyleSheet } from 'react-native';

import { gray, red } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    wrapper: {
        gap: 10,
    },
    flex_row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%"
    },
    ingredient_wrapper: {
        paddingHorizontal: 18
    },
    buttons_wrapper: {
        paddingTop: 30,
    },
    top_buttons_wrapper: {
        flexDirection: 'row', 
        paddingBottom: 15, 
        justifyContent: 'space-between',
    },
    cart_button_wrapper: {
        width: '82%'
    },
    red_text: {
        color: red  
    },
    divider: {
        width: "100%",
        borderTopWidth: 1,
        borderColor: gray,
        marginVertical: 10
    }
});
