import { StyleSheet } from 'react-native';

import { white } from '../../../assets/styles/colors';

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        paddingTop: 7,
        flexDirection: 'row',
        backgroundColor: white,
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
