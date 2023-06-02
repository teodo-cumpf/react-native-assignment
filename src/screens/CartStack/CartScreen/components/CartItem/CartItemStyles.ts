import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    action_row:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon_buttons:{
        flexDirection: 'row',
        gap: 15
    },
    favourite_button: {
        position: 'relative',
        zIndex: 2
    },
    button_wrapper:{
        position: 'relative'
    }
});
