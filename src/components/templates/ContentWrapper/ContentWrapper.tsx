import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import styles from './ContentWrapperStyles';

const ContentWrapper = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    );
}

export default ContentWrapper;
