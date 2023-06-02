import { StyleSheet } from 'react-native';

import { dark_gray, pop_up_background, white } from '../../../assets/styles/colors';

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        paddingTop: 7,
        flexDirection: 'row',
        backgroundColor: white,

        shadowColor: dark_gray,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 10,
    },
    menu: {
        height: 36,
        width: 36,
    },
    logo: {
        height: 25,
        resizeMode: 'contain',
    },
    side_menu: {
        flex: 1,
        backgroundColor: pop_up_background,
    },
    content: {
        width: '70%',
        height: '100%',
        alignSelf: 'flex-end',
        backgroundColor: white,
        paddingTop: 16,
        paddingRight: 16
    },
    close_icon_wrapper: {
        position: 'absolute',
        top: 10,
        left: -30,
    },
    close_icon: {
        height: 34,
        marginTop: 37,
        resizeMode: 'contain',
    },
    flex_row: {
        marginTop: 120,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    pin_icon: {
        height: 22,
        resizeMode: 'contain'
    }
});
