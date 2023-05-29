import { View } from 'react-native';
import { PropsWithChildren } from 'react';

import styles from './ContentWrapperStyles';

const ContentWrapper = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <View style={styles.content_wrapper}>
            {children}
        </View>
    );
}

export default ContentWrapper;
