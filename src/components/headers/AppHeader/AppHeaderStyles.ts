import { StyleSheet } from 'react-native';

import { dark_gray, white } from '../../../assets/styles/colors';

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        paddingTop: 7,
        flexDirection: 'row',
        backgroundColor: white,

        shadowColor: dark_gray,
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.01,
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
    }
});
