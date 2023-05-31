import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomNavigation from './bottomNavigation/BottomNavigation';

import useAppInitialization from '../hooks/useAppInitialization';

const RootNavigator = () => {
    const [isLoaded] = useAppInitialization();

    if (!isLoaded) return null;

    return (
        <NavigationContainer>
            <BottomNavigation />
        </NavigationContainer>
    );
}

export default RootNavigator;
