import React, { PropsWithChildren } from 'react';
import { View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppHeader } from '../../headers';

import styles from './ScreenWrapperStyle';

const ScreenWrapper = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <SafeAreaView style={styles.safe_area}>
            <StatusBar style='auto' />
            <AppHeader/>
            <View style={styles.screen_wrapper}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default ScreenWrapper;
