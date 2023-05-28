import { PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import styles from './AppTextStyle';

interface AppTextProps extends PropsWithChildren {
    style?: StyleProp<TextStyle>;
}

const AppText = (props: AppTextProps) => {
    const { children, style } = props;

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

export default AppText;
