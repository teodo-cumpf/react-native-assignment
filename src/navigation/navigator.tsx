import { NavigationContainer } from '@react-navigation/native';

import BottomNavigation from './bottomNavigation/BottomNavigation';

import { useAppInitialization } from '../hooks';

const RootNavigator = () => {
    const [isLoaded] = useAppInitialization();

    if (!isLoaded) return null;

    return (
        <NavigationContainer>
            <BottomNavigation/>
        </NavigationContainer>
    );
}

export default RootNavigator;
