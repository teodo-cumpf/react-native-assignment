import { StyleSheet } from 'react-native';

import { gray, white } from '../../../assets/styles/colors';
import { border_radius } from '../../../assets/styles/variables';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: gray,
        borderRadius: border_radius,
        padding: 15,
        width: '100%',
    }
});
