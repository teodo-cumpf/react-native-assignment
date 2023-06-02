import { StyleSheet } from 'react-native';

import { gray } from '../../../../../assets/styles/colors';

export default StyleSheet.create({
    wrapper:{
        flexDirection: "row"
    },
    button_box:{
        width: 40,
        height: 40,
        backgroundColor: gray,
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 16,
        height: 16,
        alignSelf: "center"
    },
    count_button: {
        width: 40, 
        height: 40, 
        alignContent: 'center',
        justifyContent: 'center',    
    },
    count_text: {
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
    }
});
