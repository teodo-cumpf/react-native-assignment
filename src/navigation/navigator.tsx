import { NavigationContainer } from '@react-navigation/native';

import BottomNavigation from './bottomNavigation/BottomNavigation';

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <BottomNavigation />
        </NavigationContainer>
    );
}

export default RootNavigator;
