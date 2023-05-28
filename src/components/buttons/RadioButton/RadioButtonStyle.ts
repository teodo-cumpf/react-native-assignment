import { StyleSheet } from "react-native";

import { black, red } from "../../../assets/styles/colors";

export default StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    outer_circle: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active_cicrle: {
        borderColor: red,
    },
    inner_circle: {
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: red
    },
    primary_text: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 5,
    },
    secondary_text: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
    },
    active_text: {
        color: red
    }
});
