import { PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import styles from './AppTextStyle';

interface AppTextProps extends PropsWithChildren {
    style?: StyleProp<TextStyle>;
    isHeader?: boolean;
}

const AppText = (props: AppTextProps) => {
    const { children, style , isHeader } = props;

    const formatStyle = () => {
        let baseStyle = [styles.text];

        if(isHeader) return [...baseStyle, styles.header_text, style];

        return [baseStyle, style];
    }
    return (
        <Text style={formatStyle()}>{children}</Text>
    );
}

export default AppText;
